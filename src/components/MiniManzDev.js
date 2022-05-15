import { blink } from "../modules/blinkAnimation.js";
import { yes } from "../modules/yesAnimation.js";
import { no } from "../modules/noAnimation.js";

const ANIMATIONS = [
  { name: "blink", animation: blink },
  { name: "yes", animation: yes },
  { name: "no", animation: no }
];

document.head.insertAdjacentHTML("afterend", "<link rel=\"preload\" href=\"minimanzdev/blink.png\" as=\"image\">");
document.head.insertAdjacentHTML("afterend", "<link rel=\"preload\" href=\"minimanzdev/yes.png\" as=\"image\">");
document.head.insertAdjacentHTML("afterend", "<link rel=\"preload\" href=\"minimanzdev/no.png\" as=\"image\">");

class MiniManzDev extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 18px;
        color: white
      }

      .sprite {
        width: var(--size);
        height: var(--size);
        transform-origin: 50% 100%;
        transform: scale(12);
        image-rendering: pixelated;
        background: url(minimanzdev/blink.png);
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.play("blink");

    setTimeout(() => this.play("no"), 5000);
  }

  play(name) {
    const animejsAnimation = ANIMATIONS.find(animation => animation.name === name).animation;
    const sprite = this.shadowRoot.querySelector(".sprite");
    const animation = animejsAnimation(sprite, () => this.play("blink"));
    this.setImage(name + ".png");
    animation.play();
  }

  setImage(image) {
    const sprite = this.shadowRoot.querySelector(".sprite");
    sprite.style.backgroundImage = `url("minimanzdev/${image}")`;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MiniManzDev.styles}</style>
    <div class="sprite"></div>`;
  }
}

customElements.define("mini-manz-dev", MiniManzDev);
