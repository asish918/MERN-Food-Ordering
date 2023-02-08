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
            
            console.log('UPDATING DOCUMENT');
            const test = await Product.findByIdAndUpdate(id, req.body, {new: true});
            console.log('UPDDATED DOCUMENT');
            
            res.status(200).json(test)
        }
        
        if (method === "DELETE") {
            
            console.log('DELETING DOCUMENT');
            await Product.findByIdAndDelete(id);
            console.log('DELETED DOCUMENT');
            res.status(200).json({"message": "Product Deleted..."})
        }
    } catch (error) {
        console.log(error);
        res.statue(500).json({ error });
    }
}