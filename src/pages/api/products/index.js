import connectMongo from "../../../../utils/mongo";
import Product from '../../../../models/Product'

export default async function handler(req, res) {
    const { method, cookies } = req;

    const token = cookies.token;

    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    if (method === "GET") {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }

    if (method === "POST") {
        try {
            if (!token || token !== process.env.token) {
                return res.status(401).json("Not authenticated")
            }
            console.log('CREATING Product DOCUMENT');
            const test = await Product.create(req.body);
            console.log('CREATED Product DOCUMENT');

            res.status(200).json({ test });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
}