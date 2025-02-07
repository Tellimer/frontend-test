import { articles } from '$lib/data/articles.js';
import { json } from '@sveltejs/kit';

export async function GET() {
  return json(articles);
}
