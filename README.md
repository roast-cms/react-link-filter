# react-link-filter
![NPM version](https://badge.fury.io/gh/roast-cms%2Freact-link-filter.svg)
> ⚗️ Treat your `<NavLink />` components for better SEO and UX.

- Opens **all external links** in a new tab/window with `rel="nofollow noopener noreferrer"` (thus giving your users more browsing security and stopping you from loosing your SEO juice).
- **Adds `title` attribute** to all external links and anchor links to help your users understand what they're getting into, without cluttering your internal links.
- Converts all of your internal links as **relative URLs** (for better canonical structure).
- **Fixes invalid links**, such as `google.com` => `http://google.com`
- Provides `makeRelative` utility function that can help you turn all of your absolute links within your domain to relative ones.

## Installation:

```
yarn add @roast-cms/react-link-filter
```

Then, in your project:
```
<Link to="https://www.analog.cafe" domain="localhost:3002">External website</Link>

```
For more detailed examples see `/examples` folder. There you will find a method on how to avoid having to add `domain` prop every time.

## Contributions welcome!
To get started with the code: clone the repo, run `yarn install` then `yarn start` and open up `http://localhost:3002` in your browser.
