import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-typography',
  styleUrl: 'app-typography.css',
  shadow: true,
})
export class Typography {
  @Prop() variant: 'h1' | 'h2' | 'h3' | 'secondaryP' | 'secondaryCaption' | 'secondaryMessage' | 'body1';
  @Prop() fontFamily = 'inherit';
  @Prop() styleProps = {};

  render() {
    const Tag = this.variant.startsWith('h') ? this.variant : 'p';
    const font = this.fontFamily === 'Baloo Bhaijaan 2, sans serif' ? 'var(--font-primary)' : this.fontFamily;

    return (
      <Tag class={`typography ${this.variant}`} style={{ fontFamily: font, ...this.styleProps }}>
        <slot />
      </Tag>
    );
  }
}
