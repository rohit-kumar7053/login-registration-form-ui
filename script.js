// Select the `wrapper` element
const wrapper = document.querySelector('.wrapper');

// Select the `registerLink` element
const registerLink = document.querySelector('.register-link');

// Select the `loginLink` element
const loginLink = document.querySelector('.login-link');

// Add event listener to `registerLink` for clicks
registerLink.addEventListener('click', () => {
    // Add 'active' class to `wrapper` on click
    wrapper.classList.add('active');
});

// Add event listener to `loginLink` for clicks
loginLink.addEventListener('click', () => {
    // Remove 'active' class from `wrapper` on click
    wrapper.classList.remove('active');
});
