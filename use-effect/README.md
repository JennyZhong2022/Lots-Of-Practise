# Use Effect

- useEffect is a hook for performing **side effects** based on changes to state/props in our components
- useEffect is one of the most misunderstood hooks, and is often used poorly
  - Some people insist we should **never** use useEffect
- Some of the things I'll show you are **Not** best practice
  - Particularly fetching data
- React 19 will be introducing lots of new hooks, and new ways to fetch data
  - React 19 is currently in Beta. You can read lots about it and try it out. It's not quite ready

## What is a side effect?

- Anything outside of React's control/area of responsibility
- Any actions or behaviours that are not directly related to rendering components
  - Fetching data from APIs
  - Tidying up data
  - Any asycronous loading of data
  - Updating the title of the document
  - Subscribing/unsubscribing from websockets

## Component Lifecycle

- This is a model for how components are rendered in React
- It is mostly based on **class** components
- It is much better/more closely aligned with hooks to think about effects running based on a **change in state**

1. Load - Stuff that happens before the component renders for the first time
2. Mount - The **first** time a component appears on the dom (since it has been removed)
3. Update - When a component re-renders based on a change in state or props
4. Unmount - When a component is completely removed from the dom

## Dev mode

- When React.StrictMode is on in react v 18, components will mount, unmount and mount again.
  - This does not happen in production
- It's part of an unfinished bigger feature, which will maintain state across screen changes
- Don't worry too much about it, if you see stuff running twice it's okay
- You can turn off strict mode
- Or google other solutions
