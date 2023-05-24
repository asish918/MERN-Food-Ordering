import connectMongo from "../../../../utils/mongo";
import Product from '../../../../models/Product'

export default async function handler(req, res) {
    const {
        method,
        query: { id },
        cookies
    } = req;

    const token = cookies.token;

    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    if (method === "GET") {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            console.log(error);
            res.statue(500).json({ error });
        }
    }

    if (method === "PUT") {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json("Not authenticated!")
        }

        try {
            console.log('UPDATING DOCUMENT');
            const test = await Product.findByIdAndUpdate(id, req.body, { new: true });
            console.log('UPDDATED DOCUMENT');
            res.status(200).json(test)
        } catch (error) {
            console.log(error);
            res.statue(500).json({ error });
        }
    }

    if (method === "DELETE") {
        if (!token || token !== process.env.TOKEN) {
            console.log(token);
            return res.status(401).json("Not authenticated!")
        }
        try {
            console.log('DELETING DOCUMENT');
            await Product.findByIdAndDelete(id);
            console.log('DELETED DOCUMENT');
            res.status(200).json({ message: "Product Deleted..." })
        } catch (error) {
            console.log(error);
            res.statue(500).json({ error });
        }
    }
}