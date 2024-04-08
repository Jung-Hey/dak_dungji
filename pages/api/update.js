export default async function handler(req, res) {
    const { pageId, newStatus } = req.body; 
    console.log("pageId : "+pageId)
    //노션 DB 가맹문의 리스트 데이터 
    try {
      const updateUrl = `https://api.notion.com/v1/pages/${pageId}`;
      const notionResponse = await fetch(updateUrl, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',//버전
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          properties: {
            '상태': {
              rich_text: [{ text: { content: newStatus } }]
            }
          }
        })
      });
      if (!notionResponse.ok) {
        throw new Error(`Error: ${notionResponse.statusText}`);
      }
      const updatedData = await notionResponse.json();
      res.status(200).json(updatedData);
      console.log(updatedData)
    } catch (error) {
      console.error('Update failed', error);
      res.status(500).json({ message: 'Update failed', error: error.message });
    }
  }