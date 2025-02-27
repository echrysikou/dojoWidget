import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-amount',
  styleUrl: 'select-amount.css',
  shadow: false,
})
export class AmountButtons {
  render() {
    return (
      <div class="amount-container">
        <amount-buttons></amount-buttons>
        <amount-input></amount-input>
      </div>
    );
  }
}
