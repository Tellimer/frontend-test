import { users } from '$lib/data/users.js';
import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
  let foundUser: (typeof users)[number] | undefined;
  try {
    const { user, password } = await request.json();

    console.log('User', user, password);
    foundUser = users.find((details) => {
      return details.user === user && details.password === password;
    });
  } catch (e) {
    console.error(e);
    throw error(
      400,
      JSON.stringify({
        message: 'Please supply a user & password as a JSON object in the request body',
      }),
    );
  }

  if (!foundUser) {
    throw error(403);
  }

  return json(foundUser);
}
