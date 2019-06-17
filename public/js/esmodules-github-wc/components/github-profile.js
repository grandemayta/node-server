import http from '../services/http-wrapper.js';

export class GithubProfile extends HTMLElement {
  static get observedAttributes() {
    return ['nickname'];
  }

  get nickname() {
    return this.getAttribute('nickname');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = document.querySelector('#github-profile-template');
    this.shadowRoot.appendChild(this.template.content);
    this.nameEl = this.shadowRoot.querySelector('h1');
    this.imageEl = this.shadowRoot.querySelector('img');
  }

  async attributeChangedCallback() {
    const profile = await http.getProfile(this.nickname);
    this.render(profile);
  }

  render(profile) {
    const { login, name, avatar_url: avatar } = profile;

    this.nameEl.innerText = name || login;
    this.imageEl.setAttribute('src', avatar);
  }
}

customElements.define('github-profile', GithubProfile);