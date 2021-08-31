// Store the theme
let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');

const enableDark = () => {
  document.body.classList.add('darktheme');
  localStorage.setItem('darkTheme', 'enabled');
  themeToggle.innerHTML = `<i id="bicon" data-feather="moon"></i>`;
  feather.replace();
};

const disableDark = () => {
  document.body.classList.remove('darktheme');
  localStorage.setItem('darkTheme', null);
  themeToggle.innerHTML = `<i id="bicon" data-feather="sun"></i>`;
  feather.replace();
};

if (darkTheme === 'enabled') {
  enableDark();
} else {
  enableDark();

  // disableDark();
}

themeToggle.addEventListener('click', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enableDark();
  } else {
    enableDark();
    //disabled now
    // disableDark();
  }
});

// Change the theme with the time
/*
if (today === undefined) {
    const today = new Date();
}

if (today === undefined) {
    const hour = today.getHours();
}

if (hour >= 19 || hour < 5) {
    enableDark();
} else {
    disableDark();
}
*/
