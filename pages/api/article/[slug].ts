import articles from '../../../data/articles.js'

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(404);
        return;
    }

    try {
      const {slug} = req.query
      if (!slug) {
          res.status(400)
          return
      }

      const article = articles.find((article) => article.slug === slug)

      if (!article) {
        res.status(404)
        return
    }

      res.status(200).json(article)

  } catch (e) {
      console.error(e)
      res.status(400)
  }
}
