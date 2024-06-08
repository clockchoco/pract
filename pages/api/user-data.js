import { getDatabaseConnection } from "@/components/database";
export default async function handler(req, res) {
    const db = await getDatabaseConnection();
    if (req.method === 'GET') {
        const { username, index, text} = req.body;

const user = await db.collection('AUTH').find({ username: username }).toArray();
    if (user.length === 0) {
      return res.status(401).json({ ERROR: 'INVALID USERNAME OR PASSWORD' });
    }

        await db.collection(`selectedElements${law_page_id}`).insertOne({ username: username, index: index, text: text });

        const filter = { username: username, index: index };
        const result = await db.collection(`selectedElements${law_page_id}`).deleteMany(filter);
    }

}