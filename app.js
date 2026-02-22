(function(){
    // Highlight active nav item based on current page
    const path = window.location.pathname.toLowerCase();
    const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  
    const links = document.querySelectorAll('[data-page]');
    links.forEach(a => {
      if ((a.getAttribute('data-page') || '').toLowerCase() === file) {
        a.classList.add('active');
      }
    });
  
    // Dropdown open/close
    const ddBtn = document.getElementById('ddBtn');
    const ddMenu = document.getElementById('ddMenu');
  
    if (ddBtn && ddMenu) {
      const toggle = () => ddMenu.classList.toggle('open');
  
      ddBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle();
      });
  
      document.addEventListener('click', () => {
        ddMenu.classList.remove('open');
      });
  
      ddMenu.addEventListener('click', (e) => {
        e.stopPropagation(); // allow clicks inside menu
      });
  
      // Keyboard accessibility: Esc closes
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') ddMenu.classList.remove('open');
      });
    }
  })();