## How do routes work (before React)?

```html
<a href="[destination]" />
```

- the destination is an endpoint - path to ANOTHER html page

- the browesr would load the HTML page and build the DOM based on the html file

## How do routes work in React?

- SINGLE page application
- there is only index.html
- "pages" are React components, there's nothing different about them

- React can render selected page based on the URL
- there are libraries to do this

- react-router-dom
  https://reactrouter.com/en/main/

npm install react-router-dom
