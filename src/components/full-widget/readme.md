# full-widget



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [tt-widget](../widget-selector)

### Depends on

- [app-typography](../app-typography)
- [select-amount](select-amount)
- [collaborators-list](collaborators-list)

### Graph
```mermaid
graph TD;
  full-widget --> app-typography
  full-widget --> select-amount
  full-widget --> collaborators-list
  select-amount --> amount-buttons
  select-amount --> amount-input
  amount-buttons --> app-typography
  amount-input --> app-typography
  collaborators-list --> app-typography
  tt-widget --> full-widget
  style full-widget fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
