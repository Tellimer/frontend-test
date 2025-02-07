import { error, json } from '@sveltejs/kit';
import { articles } from '$lib/data/articles.js';

export async function GET({ params }) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    throw error(404);
  }

  return json(article);
}
