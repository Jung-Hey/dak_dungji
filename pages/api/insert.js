import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  // POST 요청만 허용
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { name, phone, wishLocation, ownMoney, registrationDate, status } = req.body;
  try {
    // Notion 클라이언트 초기화
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    // Notion API를 사용하여 새 페이지 생성
    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        '이름': { 
          title: [{ text: { content: name } }]
        },
        '연락처': { 
          rich_text: [{ text: { content: phone } }] 
        },
        '희망지역': { 
          rich_text: [{ text: { content: wishLocation } }] 
        },
        '보유자금': { 
          rich_text: [{ text: { content: ownMoney } }] 
        },
        '등록일': { 
          date: { start: registrationDate } 
        },
        '상태': { 
          rich_text: [{ text: { content: status } }] 
        }
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.error('Insert failed', error);
    res.status(500).json({ message: 'Insert failed', error: error.message });
  }
}