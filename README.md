# Frontend test

This test contains a simple SvelteKit site with some hardcoded data for both users and articles. It is a bare-bones installation of SvelteKit with Tailwind 4 installed.

Ideally, we would avoid using too many third party packages. Using some low level library may be fine but start adding prebuild Svelte components from `npm` feels like it defeats the purpose of the test.

We have some specific tasks that are pointed out in this file but that doesn't mean that all need to be done or only those are the things that need to be done. There are a huge amount of things that can be done to it to improve it from very different points of view, from performance to design, testing, etc. The expectation is that candidates can focus on areas that are more interesting to them instead of focusing on completing everything on the list. As mention that can include things that are not on this list or maybe picking up things on the list and develop them further.

In general we will value any improvements that can be done including design, SEO and performance even if we don't set specific targets for those. They will all have a positive effect if done as part of the exercise but won't have any negative if the candidates focus on other areas instead.

## Tasks

Now for the tasks we have split them in areas of the app.

### Login

Right now we have a `api/login` endpoint that accepts post requests and can be used to authenticate users (let's ignore the fact that is a plain file :D).

The idea is to add a login link to the top header that goes to a login screen. There we have a login form with validation and does the logic process. This should create a proper session and allow user to be identified on the pages and show the avatar.

- [ ] Add a login option to the header
- [ ] Add a login screen with a login form that creates a user session
- [ ] Show the user avatar instead of the login option when they are logged in
- [ ] Clicking the avatar should log off the user


### Articles page

Create a list of articles that, when clicking on them, will bring us to the article page.

We want to have the ability to filter those users by analyst and channel by adding some UI components to do so, some kind of input, dropdown, etc. that updates the list

Also we want to add some images on that list since some articles have those defined plus the avatar from the analyst.

- [ ] Add a filter option on homescreen to filter by analyst or channel
- [ ] Add images when available to the article list on homescreen
- [ ] Add the analyst with avatar to the list

### Analytics

Create an analytics up to the point where it send the reqeust out to the server. For example:
```js
trackEvent('The Button Clicked', {...params})
```
- [ ] Make sure that **any** click of a link is tracked
- [ ] Make sure that every time we load a page is tracked

### Article page

The page should show some nice details like the image, the analyst avatar and the published date.

If a user is not logged in it shouldn't be able to read our articles, we should just show the summary field for them with a message asking them to login. Otherwise, we should show all of the content.

- [ ] Hide the article content from non logged in users
- [ ] Show the summary field to non logged in users
- [ ] Add image to article detail
- [ ] Add analyst avatar
- [ ] Add published date
- [ ] Link the analyst to its page

### Analyst page

We want to wire it up as much as possible and show all the information we have available from the analyst.

Is important to note that we do not currently have an endpoint for this so one will need to be added and the information should be extracted from the article list.

- [ ] Add all the information we have form analyst to its page
- [ ] Add links to it from the article page
- [ ] Add links to it from the homepage article list

## Developing

```bash
yarn run dev
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

To create a production version of your showcase app:

```bash
yarn run build
```

You can preview the production build with `npm run preview`.
