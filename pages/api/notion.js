export default async function handler(req, res) {
    const notionResponse = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
        // 필요한 기타 헤더 추가
      },
      //body: JSON.stringify(req.body)
      body: JSON.stringify({
        sorts: [
          {
            "property": "상태",
            "direction": "ascending"
          },
          {
            "property": "등록일",
            "direction": "descending"
          }
          
        ],
        page_size: 100
      })

    });
  
    const data = await notionResponse.json();

    const results = data.results.map((adata) =>(
        adata
        //adata.properties.연락처.rich_text[0].text.content//연락처
    ))

    res.status(200).json(results);
  }

