# Things to be explained

- [ ] Impure and pure components are good for starting off development where requirements are not clearly set
- [ ] Impure and pure components fully embrace Storybook (i.e. CDD)
- [ ] Separating Pure components from the style
  - [ ] Styles block you from reusing components
- [ ] Split components down to an extreme end.
- [ ] Rethinking reusability: a step forward from Atomic React
  - [ ] The power of localFragments
- [ ] Use of HOCs, auto optimization and auto fallbacks
- [ ] Using verbose names
  - [ ] Caring others, thinking from others' perspectives
  - [ ] The only option you have in the end is to search for the word.
- [ ] Global states
  - [ ] 'Logics too big' to even be in impure components should be moved to another place (i.e. somewhere like Redux middleware). Your component cannot and should not contain all logics for your app.
  - [ ] Ephemeral and persistent states
  - [ ] Selecting and composing
  - [ ] Storing all network requests' information in the global state
  - [ ] Almost no UI components need to handle network request
  - [ ] Introduction to the concept of buckets
- [ ] Handling errors
  - [ ] All software goes wrong.
  - [ ] Tuning components and states for errors
  - [ ] Error-first design
- [ ] Typing
  - [ ] A project cannot succeed almost always without a rigorous typing system
- [ ] One thing should do only one thing well
- [ ] After all, frontend is nothing but a state management game

## React specific questions and tips

- [ ] Is impure component different from Redux container component?
- [ ] Separating components to an extreme end will potentially maintain performance
- [ ] Avoiding useContext
- [ ] Do not ever start writing a plain variable inside a component without `useCallback` or `useMemo`
  - [ ] Thinking about others again (especially new developers)
