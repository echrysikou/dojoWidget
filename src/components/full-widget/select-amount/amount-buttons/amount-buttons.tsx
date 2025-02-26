import { Component, h, State } from '@stencil/core';
import i18n from '@src/utils/i18n';
import { state } from '@src/store/store';
import { getContrastColor, getWidgetButtonAndBorderColors } from '@src/utils/utils';

@Component({
  tag: 'amount-buttons',
  styleUrl: 'amount-buttons.css',
  shadow: true,
})
export class AmountButtons {
  @State() hoveredButton: number | null = null; // Track which button is hovered

  render() {
    const { font, themeColor: primaryColor, borderColor: secondaryColor } = state.widgetDetails;
    const btnAmounts = [3, 10, 15];
    const buttonBgColor = getWidgetButtonAndBorderColors(primaryColor, secondaryColor).buttonBgColor;
    const elemBorderColor = getWidgetButtonAndBorderColors(primaryColor, secondaryColor).elemBorderColor;

    const updateAmount = (amount: number) => {
      state.stripe = { paymentElementIntentAmount: amount * 100, amountIsValid: true }; //in cents
    };

    return (
      <div class="select-amount-container">
        <app-typography
          variant="secondaryP"
          fontFamily={font}
          styleProps={{
            fontWeight: '700',
          }}
        >
          {i18n.t('selectAmount')}
        </app-typography>
        <div class="amount-btns-container">
          {btnAmounts.map(amount => {
            const isHovered = this.hoveredButton === amount;
            const currentBg = isHovered ? secondaryColor : buttonBgColor;
            const currentBorder = isHovered ? secondaryColor : elemBorderColor;
            const contrastColor = getContrastColor(currentBg).blackOrWhite;
            return (
              <button
                key={`amount_${amount}_btn`}
                class="widgetButton"
                onClick={() => updateAmount(amount)}
                style={{
                  fontFamily: font,
                  border: `0.5px solid ${currentBorder}`,
                  backgroundColor: currentBg,
                  color: contrastColor,
                }}
                onMouseOver={() => (this.hoveredButton = amount)}
                onMouseOut={() => (this.hoveredButton = null)}
              >
                {amount}€
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
