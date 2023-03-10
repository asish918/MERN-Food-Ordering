import connectMongo from "../../../../utils/mongo";
import Product from '../../../../models/Product'

export default async function handler(req, res) {
    const { method, cookies } = req;

    const token = cookies.token;

    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        if(method === "GET"){
            const products = await Product.find()
            res.status(200).json(products)
        }

        if(method === "POST"){
            if(!token || token !== process.env.token){
                return res.status(401).json("Not authenticated")
            }
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