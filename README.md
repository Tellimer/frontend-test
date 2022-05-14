# Frontend test

This test contains a simple NextJS site with some hardcoded data for both users and articles. It has a bunch of premade screens done with Typescript, React and some very minial css with Tailwind.

**Anything can be changed** You don't like Tailwind? Remove it. Typescript? Sure. YOu want to me it a PWA? Sure. This is just an example as a baseline to build things but we are more than happy for candidates to choose whatever they want and we can discuss the reasoning behind it on the follow up talk.

Having said that and since this is a test exercise we ideally avoid using too many third party packages. Using some low level library may be fine but start adding prebuild React components from `npm` feels like it defeats the purpose of the test.

We have some specific tasks that are pointed out in this file but that doesn't mean that all need to be done or only those are the things that need to be done. This site is pretty barebones and there are a huge amount of things that can be done to it to improve it from very different points of view, from performance to design, testing, etc. The expectation is that candidates can focus on areas that are more interesting to them instead of focusing on completing everything on the list. As mention that can include things that are not on this list or maybe picking up things on the list and develop them further.

In general we will value any improvements that can be done including design, SEO and performance even if we don't set specific targets for those. They will all have a positive effect if done as part of the exercise but won't have any negative if the candidates focus on other areas instead.

## Tasks

Now for the tasks we have split them in areas of the app.

### Login

Right now we have a `api/login` endpoint that accepts post requests and can be used to authenticate users (let's ignore the fact that is a plain file :D).

The idea is to add a login link to the top header that goes to a login screen. There we have a login form with validation and does the logic process. This should create a proper session and allow user to be identified on the pages and show the avatar.

If a user is not logged in it shouldn't be able to read our articles, instead we should just show the summary field for them with a message asking them to login.

The at last the logged in users that lickc on their avatar should be logged off.

- [ ] Add a login option to the header
- [ ] Add a login screen with a login form that creates a user session
- [ ] Show the user avatar instead of the login option when they are logged in
- [ ] Clicking the avatar should log off the user
- [ ] Hide the article content from non logged in users
- [ ] Show the summary field to non logged in users


### Homescreen

The homescren currently have a list of articles that are not in any specific order and clicking on them will bring us to the article page.

We want to have the ability to filter those users by analyst and channel by adding some UI components to do so, some kind of input, dropdown, etc. that updates the list

Also we want to add some images on that list since some articles have those defined plus the avatar from the analyst.

- [ ] Add a filter option on homescreen to filter by analyst or channel
- [ ] Add images when available to the article list on homescreen
- [ ] Add the analyst with avatar to the list

### Analytics

Since this is a news site we want to do some analytics so we want to track any click on absolutely any link of the site and every time we load a page.

- [ ] Make sure that **any** click of a link is tracked by calling `window.analytics.link`
- [ ] Make sure that every time we load a page is tracked by calling `window.analytics.page`

### Article

Right now articles are missing some nice details like the image, the analyst avatar and the published darte, we want to show them.

- [ ] Add image to article detail
- [ ] Add analyst avatar
- [ ] Add published date
- [ ] Link the analyst to its page

### Analyst

We currently have an empty analyst page that doesn't do much. We want to wire it up as much as possible and show all the information we have available from the analyst.

Is important to note that we do not currently have an endpoint for this so one will need to be added and the information should be extracted from the article list.

- [ ] Add all the information we have form analyst to its page
- [ ] Add links to it from the article page
- [ ] Add links to it from the homepage article list
