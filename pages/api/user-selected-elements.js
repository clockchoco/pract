// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {


  if (req.method === 'POST') {
    const index = req.body.index;
    const user = req.body.user;
    console.log(index)
    res.status(200).json({data:index});
  }
  if (req.method === 'DELETE') {
    const index = req.body.index;
    const user = req.body.user;
    console.log(index)
    res.status(200).json({data:index});
  }
  
}
