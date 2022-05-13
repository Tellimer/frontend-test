import articles from '../../data/articles.js'

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(404);
        return;
    }
    res.status(200).json(articles);
}