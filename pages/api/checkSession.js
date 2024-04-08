// 로그인 쿠키 체크
export default function handler(req, res) {
    if (req.cookies.auth) {
      res.status(200).json({ loggedIn: true });
    } else {
      res.status(401).json({ loggedIn: false });
    }
  }