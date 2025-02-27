import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchWidgetDetails } from '@src/services/services';
import { IWidgetDetails, SupportedLanguages } from '@src/interfaces/interfaces';
import { state } from '@src/store/store';
import { setLanguage } from '@src/utils/i18n';
import i18n from '@src/utils/i18n';
@Component({
  tag: 'tt-widget',
  styleUrl: './widget-selector.css',
  shadow: false,
})
export class WidgetSelector {
  @Prop({ reflect: true, mutable: true }) wId: string;
  @Prop() language: string = 'en'; // Default to English

  @State() error: string;
  @State() loading = false;
  @State() data: IWidgetDetails;
  @State() currentLanguage: string = 'en';

  async getWidgetDetails() {
    // fetch widget details from the server and set the widget properties in the store state object
    this.loading = true;
    this.error = null;
    try {
      this.data = await fetchWidgetDetails(this.wId);
      state.widgetDetails = this.data;
    } catch (error) {
      console.error('Failed to fetch widget details:', error);
      this.error = error instanceof Error ? error.message : 'An unknown error occurred';
      state.widgetDetails = null;
    } finally {
      this.loading = false;
    }
  }

  componentWillLoad() {
    if (this.wId) {
      this.getWidgetDetails();
      this.error = null;
    } else {
      this.error = 'Widget ID missing';
    }
    if (this.language) {
      setLanguage(this.language as SupportedLanguages); // Store the language in the global store
    }
  }

  @Watch('lang') // Watch for language changes
  setLanguage(newLang: string) {
    const supportedLanguages = ['en', 'fr'];
    if (!supportedLanguages.includes(newLang)) {
      newLang = 'en'; // Fallback
    }

    i18n.changeLanguage(newLang);
    this.currentLanguage = newLang;
  }

  private renderWidget() {
    if (this.data?.type) {
      switch (this.data.type) {
        case 'WG':
          return <full-widget />;
        case 'BT':
          return <button-widget />;
        case 'QR':
          return <qr-code-widget wId={this.wId} />;
        default:
          return null; // handle unknown type
      }
    }
  }

  render() {
    return (
      <Host>
        {this.renderWidget()}
      </Host>
    );
  }
}
