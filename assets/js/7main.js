/**
* Template Name: Laura
* Template URL: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


  /**
   * Portfolio category home -> project grid
   */
  const portfolioProjects = {
    design: [
      {
        meta: 'GRAPHIC · DETAIL PAGE',
        title: 'MAGIC SHOP',
        description: '그래픽 디자인과 비주얼 편집을 중심으로 구성한 디자인 프로젝트입니다.',
        image: 'assets/img/portfolio/매직샵메.png',
        link: 'portfolio-details-d1.html'
      },
      {
        meta: 'GRAPHIC · POSTER',
        title: 'POSTER DESIGN',
        description: '포스터 레이아웃과 타이포그래피를 활용해 메시지를 시각적으로 정리한 그래픽 작업입니다.',
        image: 'assets/img/portfolio/포스터메인.png',
        link: 'portfolio-details-d2.html'
      },
      {
        meta: 'CHARACTER · GRAPHIC',
        title: 'YEONDONGI',
        description: '캐릭터 콘셉트와 비주얼 아이덴티티를 중심으로 전개한 디자인 프로젝트입니다.',
        image: 'assets/img/portfolio/연동이메인.png',
        link: 'portfolio-details-d3.html'
      },
      {
        meta: 'DETAIL PAGE',
        title: 'BE GLOW',
        description: '제품의 특징과 구매 포인트가 자연스럽게 전달되도록 구성한 상세페이지 디자인입니다.',
        image: 'assets/img/portfolio/비글로우메.png',
        link: 'portfolio-details-s1.html'
      },
      {
        meta: 'DETAIL PAGE',
        title: 'CK DETAIL PAGE',
        description: '상품 이미지와 정보 구조를 정리해 시각적 흐름을 강화한 상세페이지 작업입니다.',
        image: 'assets/img/portfolio/ck메인.JPG',
        link: 'portfolio-details-s2.html'
      },
      {
        meta: 'BRANDING',
        title: 'REBRANDING',
        description: '브랜드의 방향성과 비주얼 요소를 재정리한 리브랜딩 프로젝트입니다.',
        image: 'assets/img/portfolio/리브랜딩메인.png',
        link: 'portfolio-details-r1.html'
      }
    ],

    video: [
      {
        meta: 'AI VIDEO · BRAND',
        title: 'DENY VIDEO',
        description: '브랜드 캐릭터와 스토리를 활용해 제작한 AI 기반 브랜드 영상 프로젝트입니다.',
        image: 'assets/img/portfolio/데니영상메인.png',
        link: 'portfolio-details-m1.html'
      },
      {
        meta: 'MOTION GRAPHIC · PRODUCT',
        title: 'STANLEY',
        description: '제품 컬러와 기능을 리드미컬하게 보여주는 모션그래픽 광고 프로젝트입니다.',
        image: 'assets/img/portfolio/스탠리메인.png',
        link: 'portfolio-details-m2.html'
      }
    ],

    web: []
  };

  const portfolioCategoryInfo = {
    design: {
      kicker: 'GRAPHIC · DETAIL PAGE · BRANDING',
      title: 'DESIGN',
      description: '상세페이지 · 브랜딩 · 그래픽 작업'
    },
    video: {
      kicker: 'VIDEO · MOTION',
      title: 'VIDEO',
      description: '모션그래픽 · 브랜드 · 홍보영상'
    },
    web: {
      kicker: 'WEB · PUBLISHING',
      title: 'WEB',
      description: 'Web Design · HTML · CSS · JavaScript'
    }
  };

  const portfolioCategoryHome = document.querySelector('#portfolio-category-home');
  const portfolioProjectView = document.querySelector('#portfolio-project-view');
  const portfolioProjectGrid = document.querySelector('#portfolio-project-grid');
  const portfolioProjectBack = document.querySelector('#portfolio-project-back');
  const portfolioProjectTitle = document.querySelector('#portfolio-project-view-title');
  const portfolioProjectKicker = document.querySelector('#portfolio-project-view-kicker');
  const portfolioProjectDesc = document.querySelector('#portfolio-project-view-desc');
  const portfolioCategoryEnterButtons = document.querySelectorAll('.portfolio-category-enter');

  function createPortfolioProjectCard(project) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';

    const card = document.createElement('a');
    card.className = 'portfolio-project-card';
    card.href = project.link;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    card.innerHTML = `
      <div class="portfolio-project-thumb">
        <img src="${project.image}" alt="${project.title} 프로젝트 대표 이미지">
      </div>
      <div class="portfolio-project-copy">
        <span class="portfolio-project-meta">${project.meta}</span>
        <h4 class="portfolio-project-name">${project.title}</h4>
        <p class="portfolio-project-description">${project.description}</p>
      </div>
    `;

    col.appendChild(card);
    return col;
  }

  function openPortfolioCategory(category) {
    if (!portfolioCategoryHome || !portfolioProjectView || !portfolioProjectGrid) return;

    const projects = portfolioProjects[category] || [];
    const info = portfolioCategoryInfo[category] || {};

    if (portfolioProjectKicker) portfolioProjectKicker.textContent = info.kicker || '';
    if (portfolioProjectTitle) portfolioProjectTitle.textContent = info.title || '';
    if (portfolioProjectDesc) portfolioProjectDesc.textContent = info.description || '';

    portfolioProjectGrid.innerHTML = '';

    if (projects.length) {
      projects.forEach(project => {
        portfolioProjectGrid.appendChild(createPortfolioProjectCard(project));
      });
    } else {
      const empty = document.createElement('div');
      empty.className = 'col-12 portfolio-project-empty';
      empty.textContent = '등록된 웹 프로젝트를 준비 중입니다.';
      portfolioProjectGrid.appendChild(empty);
    }

    portfolioCategoryHome.hidden = true;
    portfolioProjectView.hidden = false;

    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fixed-header-height')) || 78;
      const targetTop = portfolioSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  }

  function closePortfolioCategory() {
    if (!portfolioCategoryHome || !portfolioProjectView) return;

    portfolioProjectView.hidden = true;
    portfolioCategoryHome.hidden = false;

    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fixed-header-height')) || 78;
      const targetTop = portfolioSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  }

  portfolioCategoryEnterButtons.forEach(button => {
    button.addEventListener('click', () => {
      openPortfolioCategory(button.getAttribute('data-portfolio-category'));
    });
  });

  if (portfolioProjectBack) {
    portfolioProjectBack.addEventListener('click', closePortfolioCategory);
  }


})();