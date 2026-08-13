/**
 * giselelarose.com v4 — shared UI and project rendering
 */

const SITE = {
  name: 'Gisele LaRose',
  title: 'Web Developer & Full-Stack Builder',
  headline: 'Full-stack web development you can ship — websites and software end to end; business tools as an add-on when needed.',
  email: 'hello@giselelarose.com',
  github: 'https://github.com/Gisele66',
  linkedin: '',
  resumePdf: 'assets/resume.pdf'
};

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'work.html', label: 'Work' },
  { href: 'about.html', label: 'About' },
  { href: 'contact.html', label: 'Contact' },
  { href: 'resume.html', label: 'Resume' }
];

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path === '' ? 'index.html' : path;
}

function renderHeader() {
  const current = getCurrentPage();
  const navItems = NAV_LINKS.map(
    (link) =>
      `<li><a href="${link.href}" class="nav-link${current === link.href ? ' is-active' : ''}">${link.label}</a></li>`
  ).join('');

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo" aria-label="${SITE.name} home">
          <img src="assets/brand/GL-Logo-Luxury-Green-Emblem.png" alt="GL Solutions — Gisele LaRose">
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="sr-only">Menu</span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </button>
        <nav id="site-nav" class="site-nav" aria-label="Main">
          <ul class="nav-list">
            ${navItems}
            <li><a class="btn btn-secondary" href="contact.html" data-magnetic>Let's talk</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const linkedin = SITE.linkedin
    ? `<a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`
    : '';

  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p><strong>${SITE.name}</strong> — ${SITE.title}</p>
        <a href="mailto:${SITE.email}" class="footer-link">${SITE.email}</a>
        <p class="footer-copy">&copy; ${year} ${SITE.name}. giselelarose.ca redirects here.</p>
        <p class="disclaimer">${typeof CONCEPT_DISCLAIMER !== 'undefined' ? CONCEPT_DISCLAIMER : ''}</p>
        <nav class="footer-links" aria-label="Footer">
          <a href="${SITE.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
          ${linkedin}
        </nav>
      </div>
    </footer>
  `;
}

function labelClass(label) {
  if (label === 'live') return 'badge badge-live';
  if (label === 'demo-systems') return 'badge badge-systems';
  return 'badge badge-demo';
}

function renderGallery(project) {
  if (!project.gallery?.length) return '';
  const shots = project.gallery
    .map(
      (shot, index) => `
        <button class="gallery-shot${index === 0 ? ' is-active' : ''}" type="button" data-gallery-src="${shot.src}" aria-label="${shot.alt}">
          <img src="${shot.src}" alt="" loading="lazy">
        </button>`
    )
    .join('');
  return `<div class="gallery-row" data-gallery-for="${project.id}">${shots}</div>`;
}

function renderClaim(claim) {
  const parts = Array.isArray(claim) ? claim : [claim];
  return parts.map((text) => `<p class="project-card-claim">${text}</p>`).join('');
}

function renderProjectCard(project) {
  const tags = (project.tags ?? []).map((tag) => `<span class="tag">${tag}</span>`).join('');
  const featured = project.featured ? ' project-card--featured' : '';

  const lockHero = project.lockHero ? ' data-lock-hero' : '';
  const copy = `
        <span class="${labelClass(project.label)}">${project.labelText}</span>
        <h3 class="project-card-title">${project.name}</h3>
        ${renderClaim(project.claim)}
        <div class="tag-list">${tags}</div>
        <span class="btn btn-ghost">View details</span>`;

  /* LOCKED: Bathroom Busters featured card — see scope_context.md */
  if (project.featured && project.gallery?.length) {
    return `
    <article class="project-card${featured}" id="${project.id}" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View details for ${project.name}">
      <div class="project-card-media">
        <img src="${project.image}" alt="${project.name}" data-hero-image${lockHero} loading="lazy">
      </div>
      <div class="project-cycle-frame">
        <img class="project-cycle" src="${project.gallery[0].src}" alt="${project.name} mobile screenshot" data-cycle-image>
      </div>
      <div class="project-card-aside">
        <div class="project-card-copy">${copy}</div>
        ${renderGallery(project)}
      </div>
    </article>
  `;
  }

  return `
    <article class="project-card${featured}" id="${project.id}" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View details for ${project.name}">
      <div class="project-card-media">
        <img src="${project.image}" alt="${project.name}" data-hero-image${lockHero} loading="lazy">
      </div>
      <div class="project-card-copy">${copy}</div>
    </article>
  `;
}

function renderProjectLink(link, buttonClass) {
  return `<a href="${link.url}" class="${buttonClass}" target="_blank" rel="noopener noreferrer">${link.text} ↗</a>`;
}

function renderSystemsColumn(title, content, items) {
  if (items?.length) {
    const listItems = items.map((item) => `<li>${item}</li>`).join('');
    return `<div class="modal-systems-col"><h4>${title}</h4><ul class="modal-systems-list">${listItems}</ul></div>`;
  }
  if (!content) return '';
  return `<div class="modal-systems-col"><h4>${title}</h4><p>${content}</p></div>`;
}

function renderModal(project) {
  const primaryLinks = project.links
    .filter((l) => l.primary)
    .map((l) => renderProjectLink(l, 'btn btn-primary'))
    .join('');
  const secondaryLinks = project.links
    .filter((l) => !l.primary)
    .map((l) => renderProjectLink(l, 'btn btn-ghost'))
    .join('');
  const visitorsCol = renderSystemsColumn(
    project.visitorsTitle ?? 'What visitors see',
    project.visitors,
    project.visitorsItems
  );
  const ownerCol = renderSystemsColumn(
    project.ownerTitle ?? 'What the owner runs',
    project.owner,
    project.ownerItems
  );
  const systemsBlock =
    visitorsCol || ownerCol
      ? `<div class="modal-systems">${visitorsCol}${ownerCol}</div>`
      : '';
  const tags = (project.tags ?? []).map((tag) => `<span class="tag">${tag}</span>`).join('');

  return `
    <div class="modal-overlay" id="project-modal" role="dialog" aria-modal="true" aria-label="${project.name} details">
      <div class="modal-box" data-modal-project="${project.id}">
        <button class="modal-close" aria-label="Close">×</button>
        <div class="modal-media">
          <img src="${project.image}" alt="${project.name} screenshot">
        </div>
        <div class="modal-content">
          <span class="${labelClass(project.label)}">${project.labelText}</span>
          <h2>${project.name}</h2>
          <p>${project.pitch}</p>
          ${systemsBlock}
          <div class="tag-list">${tags}</div>
          <div class="modal-actions">${primaryLinks}${secondaryLinks}</div>
        </div>
      </div>
    </div>
  `;
}

function closeModal() {
  const existing = document.getElementById('project-modal');
  if (existing) existing.remove();
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleModalKey);
}

function handleModalKey(e) {
  if (e.key === 'Escape') closeModal();
}

function openModal(projectId) {
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === projectId);
  if (!project) return;
  closeModal();
  document.body.insertAdjacentHTML('beforeend', renderModal(project));
  document.body.classList.add('modal-open');
  const overlay = document.getElementById('project-modal');
  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', handleModalKey);
}

function swipeProjectCycle(cycle, nextSrc) {
  if (!cycle || !nextSrc) return;
  const currentSrc = cycle.getAttribute('src');
  if (currentSrc === nextSrc) return;

  const frame = cycle.closest('.project-cycle-frame');
  if (
    !frame ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    cycle.src = nextSrc;
    return;
  }
  if (frame.classList.contains('is-swiping')) return;

  frame.classList.add('is-swiping');
  const incoming = document.createElement('img');
  incoming.className = 'project-cycle is-enter';
  incoming.src = nextSrc;
  incoming.alt = cycle.alt;
  frame.appendChild(incoming);
  cycle.classList.add('is-exit');

  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    cycle.remove();
    incoming.classList.remove('is-enter');
    incoming.setAttribute('data-cycle-image', '');
    frame.classList.remove('is-swiping');
  }

  incoming.addEventListener('animationend', finish);
  window.setTimeout(finish, 650);
}

function initProjectCards() {
  document.addEventListener('click', (e) => {
    const shot = e.target.closest('.gallery-shot');
    if (shot) {
      e.stopPropagation();
      const card = shot.closest('.project-card');
      const cycle = card?.querySelector('[data-cycle-image]');
      const hero = card?.querySelector('[data-hero-image]');
      if (cycle) swipeProjectCycle(cycle, shot.dataset.gallerySrc);
      else if (hero && !hero.hasAttribute('data-lock-hero')) hero.src = shot.dataset.gallerySrc;
      card?.querySelectorAll('.gallery-shot').forEach((el) => el.classList.remove('is-active'));
      shot.classList.add('is-active');
      return;
    }
    const card = e.target.closest('[data-project-id].project-card');
    if (card) openModal(card.dataset.projectId);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('[data-project-id].project-card');
    if (card) {
      e.preventDefault();
      openModal(card.dataset.projectId);
    }
  });
}

function renderProjects(containerSelector, options = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const all = options.all
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.home !== false);
  container.innerHTML = all.map(renderProjectCard).join('');
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

function initSiteChrome() {
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();
  initMobileNav();
}

document.addEventListener('DOMContentLoaded', () => {
  initSiteChrome();
  initProjectCards();
  if (document.querySelector('[data-projects="featured"]')) {
    renderProjects('[data-projects="featured"]');
  }
  if (document.querySelector('[data-projects="all"]')) {
    renderProjects('[data-projects="all"]', { all: true });
  }
});
