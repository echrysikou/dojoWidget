# tt-widget



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `language` | `language` |             | `string` | `'en'`      |
| `wId`      | `w-id`     |             | `string` | `undefined` |


## Dependencies

### Depends on

- [full-widget](../full-widget)
- [button-widget](../button-widget)
- [qr-code-widget](../qr-code-widget)

### Graph
```mermaid
graph TD;
  tt-widget --> full-widget
  tt-widget --> button-widget
  tt-widget --> qr-code-widget
  full-widget --> app-typography
  full-widget --> select-amount
  full-widget --> collaborators-list
  select-amount --> amount-buttons
  select-amount --> amount-input
  amount-buttons --> app-typography
  amount-input --> app-typography
  collaborators-list --> app-typography
  style tt-widget fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
