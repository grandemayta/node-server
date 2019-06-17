import http from '../services/http-wrapper.js';

export class GithubRepositories extends HTMLElement {
  static get observedAttributes() {
    return ['nickname'];
  }

  get nickname() {
    return this.getAttribute('nickname');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = document.querySelector('#github-repositories-template');
    this.shadowRoot.appendChild(this.template.content);
    this.listEl = this.shadowRoot.querySelector('span');
  }

  repositoriesTpl(repos = []) {
    return repos.reduce((acc, repo) => `${acc} ${this.repositoryTpl(repo)}`, '');
  }

  repositoryTpl(repo) {
    const { name, html_url: url } = repo;
    return `
      <a href="${url}" target="_blank">${name}</a>
    `;
  }

  async attributeChangedCallback() {
    const repositories = await http.getRepositories(this.nickname);
    this.render(repositories);
  }

  render(repositories) {
    this.listEl.innerHTML = this.repositoriesTpl(repositories);
  }
}

customElements.define('github-repositories', GithubRepositories);