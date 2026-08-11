/* 
   Premium Portfolio Script
   Author: Chinnaobaiahgari Bhavana Reddy
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC RENDERING OF PORTFOLIO DATA
  renderPortfolio();

  // 2. STICKY HEADER SCROLL EVENT
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. MOBILE NAVIGATION DRAWER
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking on nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // 4. SPACE CANVAS BACKGROUND EFFECT
  initSpaceCanvas();

  // 5. CONTACT FORM HANDLER
  handleContactForm();
});

// Dynamic Content Rendering function
function renderPortfolio() {
  if (typeof portfolioData === 'undefined') {
    console.error("portfolioData is not defined. Ensure portfolio-data.js is loaded first.");
    return;
  }

  const { personal, about, skills, goals, strengths, projects } = portfolioData;

  // Render Page Title
  document.title = `${personal.name} | Developer Portfolio`;

  // Render Personal Info (Hero Section)
  document.getElementById('personal-eyebrow').textContent = personal.eyebrow;
  document.getElementById('personal-name').textContent = personal.name;
  document.getElementById('personal-subtitle').textContent = personal.subtitle;
  document.getElementById('personal-description').textContent = personal.description;
  
  const profileImg = document.getElementById('personal-image');
  if (profileImg) {
    profileImg.src = personal.profileImage;
    profileImg.alt = personal.name;
  }

  const resumeBtn = document.getElementById('personal-resume');
  if (resumeBtn) {
    resumeBtn.href = personal.resumeLink;
    if (personal.resumeLink === "#") {
      resumeBtn.style.display = 'none'; // Hide if not set
    }
  }

  // Render Social Links
  const githubLinks = document.querySelectorAll('.github-link-url');
  githubLinks.forEach(el => el.href = personal.github);

  const linkedinLinks = document.querySelectorAll('.linkedin-link-url');
  linkedinLinks.forEach(el => el.href = personal.linkedin);

  const emailLinks = document.querySelectorAll('.email-link-url');
  emailLinks.forEach(el => el.href = `mailto:${personal.email}`);

  // Render About Section
  document.getElementById('about-tagline').textContent = about.tagline;
  document.getElementById('about-bio-p1').textContent = about.bioParagraph1;
  document.getElementById('about-bio-p2').textContent = about.bioParagraph2;

  // Render Skills
  const skillsContainer = document.getElementById('skills-grid');
  if (skillsContainer) {
    skillsContainer.innerHTML = '';
    skills.forEach(skillGroup => {
      const col = document.createElement('div');
      col.className = 'skill-category glass-card';
      
      const title = document.createElement('h3');
      title.textContent = skillGroup.category;
      col.appendChild(title);
      
      const list = document.createElement('div');
      list.className = 'skills-list';
      
      skillGroup.items.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.innerHTML = `<i class="fa-solid fa-code-commit"></i> ${skill}`;
        list.appendChild(span);
      });
      
      col.appendChild(list);
      skillsContainer.appendChild(col);
    });
  }

  // Render Goals
  const goalsContainer = document.getElementById('goals-list');
  if (goalsContainer) {
    goalsContainer.innerHTML = '';
    goals.forEach(goal => {
      const item = document.createElement('div');
      item.className = 'goal-item';
      item.textContent = goal;
      goalsContainer.appendChild(item);
    });
  }

  // Render Strengths
  const strengthsContainer = document.getElementById('strengths-list');
  if (strengthsContainer) {
    strengthsContainer.innerHTML = '';
    strengths.forEach(strength => {
      const item = document.createElement('div');
      item.className = 'strength-item';
      item.textContent = strength;
      strengthsContainer.appendChild(item);
    });
  }

  // Render Projects
  const projectsContainer = document.getElementById('projects-grid');
  if (projectsContainer) {
    projectsContainer.innerHTML = '';
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card glass-card';
      
      let techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
      let liveBtn = project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : '';
      let codeBtn = project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener" class="project-link"><i class="fa-brands fa-github"></i> Source</a>` : '';

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${techTags}
        </div>
        <div class="project-links">
          ${codeBtn}
          ${liveBtn}
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  }

  // Contact Info Render
  document.getElementById('contact-email-text').textContent = personal.email;
}

// Canvas Particles (Drifting Stars) function
function initSpaceCanvas() {
  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  const starCount = 80;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  }

  class Star {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height; // Scatter initially
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 10;
      this.size = Math.random() * 1.8 + 0.5;
      this.speed = Math.random() * 0.4 + 0.1;
      this.opacity = Math.random() * 0.7 + 0.2;
      this.fadeDir = Math.random() > 0.5 ? 0.01 : -0.01;
    }

    update() {
      this.y -= this.speed;
      
      // Twinkle effect
      this.opacity += this.fadeDir;
      if (this.opacity > 0.95 || this.opacity < 0.15) {
        this.fadeDir = -this.fadeDir;
      }
      
      // Reset if moves off screen
      if (this.y < -10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.update();
      star.draw();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animate();
}

// Contact form handling with FormSubmit AJAX
function handleContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      status.innerHTML = '<span style="color: var(--accent-pink); font-weight: 500;">⚠️ Please fill in all fields.</span>';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.innerHTML = '<span style="color: var(--accent-pink); font-weight: 500;">⚠️ Please enter a valid email address.</span>';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Loading State
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-circle-notch fa-spin"></i>';
    status.innerHTML = '<span style="color: var(--accent-cyan);">⏳ Sending your message...</span>';

    try {
      const emailEndpoint = `https://formsubmit.co/ajax/${portfolioData.personal.email}`;
      const response = await fetch(emailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        status.innerHTML = '<span style="color: #4ade80; font-weight: 500;">✨ Message sent successfully! I will get back to you soon.</span>';
        form.reset();
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch (err) {
      console.error(err);
      status.innerHTML = `<span style="color: var(--accent-pink); font-weight: 500;">❌ Error: ${err.message || 'Could not send message. Please try again.'}</span>`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}
