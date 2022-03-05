const pageScroll = (e) => {
  if (e.target.classList.contains('nav-link')) {
    setTimeout(() => {
      if (e.target.innerText === 'Home') {
        window.location.href = '#home';
      } else {
        window.location.href = '#about';
      }
    }, 500);
    document.querySelector('.black-screen').classList.add('show');
    setTimeout(() => {
      document.querySelector('.black-screen').classList.remove('show');
    }, 1000);
  }
};

document.querySelector('.navbar').addEventListener('click', pageScroll);
