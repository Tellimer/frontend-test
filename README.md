# Frontend test

This test contains a simple SvelteKit site with some hardcoded data for you to work with. It is a bare-bones installation of SvelteKit with Tailwind 4 installed.

Ideally, we would avoid using too many third party packages. Using some low level library may be fine but start adding prebuild Svelte components from `npm` feels like it defeats the purpose of the test.

### Components

[Figma reference](https://www.figma.com/design/5a0QotFrGIVCyVjt4QbnVj/Tellimer-frontend-test?node-id=2004-57902&t=NU61aaTYiXcfC2KT-11 )

- [x] Install Storybook
- [ ] Add and create the Button component to Storybook
  ![chart](/button.png)
- [ ] Create the "maximised" Yield curve chart using your favorite charting library or roll your own canvas in its own component
  ![chart](/chart.png)
- [ ] Add the tooltip popover
  ![chart](/tooltip.png)
- [ ] Add the legend
- [ ] Try and make the chart act like the maximised reponsive component
  ![chart](/responsive.png)

## Developing

```bash
yarn run dev
```

### Storybook
```bash
yarn run storybook
```

### Build
```bash
yarn run build
```

You can preview the production build with `npm run preview`.
