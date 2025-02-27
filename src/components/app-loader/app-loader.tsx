import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-loader',
  styleUrl: 'app-loader.css',
  shadow: true,
})
export class AppLoader {
  @Prop() height: number = 60;
  @Prop() color: string = 'var(--primary)';

  render() {
    return (
      <div class="loader-root">
        <div
          class="circular-progress"
          style={{
            width: `${this.height}px`,
            height: `${this.height}px`,
            borderColor: `${this.color} ${this.color} ${this.color} transparent`,
          }}
        ></div>
      </div>
    );
  }
}
