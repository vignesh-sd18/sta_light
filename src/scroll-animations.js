
// Initialize scroll animations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initScrollProgress();
  initParallaxScrolling();
  initScrollZoom();
  initStickyScrollAnimation();
  initScrollSpeedVariance();
  initScrollTriggeredTransformations();
  initWavyBackground();
  setupReadMoreButtons();
});

// Initialize scroll reveal animation
function initScrollReveal() {
  const revealItems = document.querySelectorAll('.scroll-reveal-item');
  
  if (revealItems.length === 0) return;
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to observe anymore
        observer.unobserve(entry.target);
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  revealItems.forEach(item => {
    revealObserver.observe(item);
  });
}

// Initialize scroll progress indicator
function initScrollProgress() {
  const progressIndicator = document.querySelector('.scroll-progress-indicator');
  const progressCircle = document.querySelector('.scroll-progress-circle-bar');
  const progressText = document.querySelector('.scroll-progress-percentage');
  
  if (!progressIndicator || !progressCircle || !progressText) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    
    // Show the progress indicator once scrolling starts
    if (scrollTop > 100) {
      progressIndicator.style.opacity = 1;
    } else {
      progressIndicator.style.opacity = 0;
    }
    
    // Update the circle progress and text
    const dashoffset = 113 - (scrollPercent * 113);
    progressCircle.style.strokeDashoffset = dashoffset;
    progressText.textContent = `${scrollPercentRounded}%`;
  });
}

// Initialize parallax scrolling effect
function initParallaxScrolling() {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  if (parallaxElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrollTop * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
}

// Initialize scale on scroll effect
function initScrollZoom() {
  const zoomElements = document.querySelectorAll('.scroll-zoom');
  
  if (zoomElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    
    zoomElements.forEach(element => {
      const elementPos = element.getBoundingClientRect().top + scrollTop;
      const distanceFromTop = scrollTop - elementPos;
      const baseScale = 1;
      const scaleRate = element.dataset.scaleRate || 0.001;
      const maxScale = element.dataset.maxScale || 1.5;
      
      if (scrollTop + windowHeight > elementPos && scrollTop < elementPos + element.offsetHeight) {
        const scale = Math.min(baseScale + Math.abs(distanceFromTop) * scaleRate, maxScale);
        element.style.transform = `scale(${scale})`;
      }
    });
  });
}

// Initialize sticky scroll animation
function initStickyScrollAnimation() {
  const stickyContainers = document.querySelectorAll('.sticky-container');
  
  if (stickyContainers.length === 0) return;
  
  window.addEventListener('scroll', () => {
    stickyContainers.forEach(container => {
      const stickyElement = container.querySelector('.sticky-element');
      const stickyContent = container.querySelectorAll('.sticky-content');
      
      if (!stickyElement || stickyContent.length === 0) return;
      
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const elementHeight = stickyElement.offsetHeight;
      
      // Calculate which content to show based on scroll position
      const scrollProgress = Math.abs(containerTop) / (containerHeight - elementHeight);
      const contentIndex = Math.min(
        Math.floor(scrollProgress * stickyContent.length),
        stickyContent.length - 1
      );
      
      // Hide all content and show the current one
      stickyContent.forEach((content, index) => {
        if (index === contentIndex) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

// Initialize scroll speed variance for layers
function initScrollSpeedVariance() {
  const layeredElements = document.querySelectorAll('.scroll-layer');
  
  if (layeredElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    layeredElements.forEach(element => {
      const speed = element.dataset.speed || 1;
      const direction = element.dataset.direction || 'vertical';
      
      if (direction === 'vertical') {
        const yPos = scrollTop * speed;
        element.style.transform = `translateY(${yPos}px)`;
      } else if (direction === 'horizontal') {
        const xPos = scrollTop * speed;
        element.style.transform = `translateX(${xPos}px)`;
      }
    });
  });
}

// Initialize scroll-triggered transformations
function initScrollTriggeredTransformations() {
  const transformElements = document.querySelectorAll('.scroll-transform');
  
  if (transformElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    
    transformElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const elementHeight = element.offsetHeight;
      const transformType = element.dataset.transform || 'rotate';
      const speed = parseFloat(element.dataset.speed) || 0.1;
      const maxValue = parseFloat(element.dataset.maxValue) || 30;
      
      // Calculate scroll progress for this element
      const scrollProgress = Math.max(0, Math.min(1, 
        (scrollTop - (elementTop - windowHeight)) / (elementHeight + windowHeight)
      ));
      
      // Apply transformation based on type
      switch (transformType) {
        case 'rotate':
          const rotation = scrollProgress * maxValue;
          element.style.transform = `rotate(${rotation}deg)`;
          break;
        case 'skew':
          const skew = scrollProgress * maxValue;
          element.style.transform = `skewY(${skew}deg)`;
          break;
        case 'scale':
          const scale = 1 + (scrollProgress * (maxValue/100));
          element.style.transform = `scale(${scale})`;
          break;
        case 'move':
          const move = scrollProgress * maxValue;
          element.style.transform = `translateY(${move}px)`;
          break;
      }
    });
  });
}

// Initialize wavy background animation
function initWavyBackground() {
  const wavyBackgrounds = document.querySelectorAll('.wavy-background');
  
  if (wavyBackgrounds.length === 0) return;
  
  // Add initial wave elements
  wavyBackgrounds.forEach(container => {
    // Ensure the container has position relative or absolute
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
    
    // Create waves
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.classList.add('wave-line');
      wave.style.animationDelay = `${i * 0.5}s`;
      wave.style.opacity = `${0.3 - (i * 0.1)}`;
      container.appendChild(wave);
    }
  });
  
  // Animate based on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    wavyBackgrounds.forEach(container => {
      const waves = container.querySelectorAll('.wave-line');
      const containerTop = container.getBoundingClientRect().top + scrollTop;
      const scrollDiff = scrollTop - containerTop;
      
      waves.forEach((wave, index) => {
        const speed = 0.1 + (index * 0.05);
        const translateY = scrollDiff * speed;
        wave.style.transform = `translateY(${translateY}px)`;
      });
    });
  });
}

// Setup "Read More" button functionality
function setupReadMoreButtons() {
  const readMoreButtons = document.querySelectorAll('.read-more-button');
  
  if (readMoreButtons.length === 0) return;
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const contentId = button.getAttribute('data-content-id');
      if (!contentId) return;
      
      const expandableContent = document.getElementById(contentId);
      if (!expandableContent) return;
      
      // Toggle content visibility
      if (expandableContent.classList.contains('expanded')) {
        expandableContent.classList.remove('expanded');
        button.textContent = 'Read more';
      } else {
        expandableContent.classList.add('expanded');
        button.textContent = 'Read less';
      }
    });
  });
  
  // Fix for "View All Articles" button
  const viewAllButton = document.querySelector('.view-all-button');
  if (viewAllButton) {
    viewAllButton.addEventListener('click', () => {
      console.log('View All Articles clicked');
      // In a real app, this would navigate to a blog listing page
      // For now, just scroll to the blog section
      document.getElementById('blog')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

// Add a global function to handle smooth scrolling
window.scrollToSection = function(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
};
