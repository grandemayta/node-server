import http from '../services/http-wrapper.js';

export class GithubFollowers extends HTMLElement {
  static get observedAttributes() {
    return ['nickname'];
  }

  get nickname() {
    return this.getAttribute('nickname');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = document.querySelector('#github-followers-template');
    this.shadowRoot.appendChild(this.template.content);
    this.listEl = this.shadowRoot.querySelector('span');
  }

  followersTpl(followers = []) {
    return followers.reduce(
      (acc, follower) => `${acc} ${this.followerTpl(follower)}`,
      ''
    );
  }

  followerTpl(follower) {
    const { login, html_url: url } = follower;
    return `
      <a href="${url}" target="_blank">${login}</a>
    `;
  }

  async attributeChangedCallback() {
    const followers = await http.getFollowers(this.nickname);
    this.render(followers);
  }

  render(userfollowers) {
    this.listEl.innerHTML = this.followersTpl(userfollowers);
  }
}

customElements.define('github-followers', GithubFollowers);