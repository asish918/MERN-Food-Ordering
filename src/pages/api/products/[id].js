import connectMongo from "../../../../utils/mongo";
import Product from '../../../../models/Product'

export default async function handler(req, res) {
    const { 
        method, 
        query: { id }, 
    } = req;

    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        if (method === "GET") {
            const product = await Product.findById(id)
            res.status(200).json(product)
        }

        if (method === "PUT") {

            console.log('CREATING DOCUMENT');
            const test = await Product.create(req.body);
            console.log('CREATED DOCUMENT');

            res.json({ test });
        }

        if (method === "DELETE") {

            console.log('CREATING DOCUMENT');
            const test = await Product.create(req.body);
            console.log('CREATED DOCUMENT');

            res.json({ test });
        }
    } catch (error) {
        console.log(error);
        res.statue(500).json({ error });
    }
}