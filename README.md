# react-link-filter
> ▼ Filter and process your `<NavLink />` components and `<a />` tags for better user experience, security, and SEO.

### What does this React component do?
- Opens all external links in a new tab/window with `rel="nofollow noopener noreferrer"` (thus giving your users more browsing security and stopping you from loosing your SEO juice automatically).
- Adds `title` attribute to all external links and anchor links to help your users what they're getting into, without cluttering your internal links.
- Treats all of your internal links as relative URLs (for better canonical structure).
- Fixes invalid links, such as `google.com` => `http://google.com`
- Provides `makeRelative` utility function that can help you turn all of your absolute links within your domain to relative ones.

### What you will need.

```
# first you'll need the package:
yarn add @roast-cms/react-link-filter
```

This component assumes that you are using React.js v16+, with `react-dom` and `react-router-dom` (from ReactRouter v4).

### How to use.
```
<Link to="https://www.analog.cafe" domain="localhost:3002">External website</Link>

```
For more detailed examples see `/examples` folder. In that folder there's a method on how to avoid having to add `domain` prop every time.


### Contributing
PRs and issue reports are welcome. Please submit all PRs to `develop` branch. To test, run `yarn start`
