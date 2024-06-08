import { getDatabaseConnection } from "@/components/database"; // 데이터베이스 연결 함수
export default async function handler(req, res) {
  const db = await getDatabaseConnection();

  if (req.method === 'POST') {
    // 요소를 데이터베이스에 저장
    const { user, index } = req.body;
    await db.collection('selectedElements').insertOne({ user, index });
    console.log(`index ${index} data insert SUCCESS`)
    console.log('POST METHOD SUCCESS');
    res.status(200).json({ message: `POST METHOD SUCCESS INDEX:${index}` });
  }
  else if (req.method === 'DELETE') {
    const { user, index } = req.body;
    const filter = { user:user, index: index };
    // 데이터 삭제
    const result = await db.collection('selectedElements').deleteMany(filter);

    console.log(`User ${user} deleted element with index ${index}`);
    console.log('DELETE METHOD SUCCESS')
    res.status(200).json({ success: true, message: `DELETE METHOD SUCCESS INDEX:${index}` });
  }
  else if (req.method === 'GET') {  
    // 데이터베이스에서 요소를 불러오기
    const elements = await db.collection('selectedElements').find({}).toArray();
    console.log('GET METHOD SUCCESS')
    res.status(200).json(elements);
  }
  else {
    res.status(405).json({ message: 'NOT ALLOWED METHOD' });
  }
}


