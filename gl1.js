const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.menu-content');

let hideTimeout;

dropdown.addEventListener('mouseover', () => {
  clearTimeout(hideTimeout);
  dropdownContent.style.display = 'block';
  dropdownContent.style.opacity = '1';
  dropdownContent.style.transform = 'translateY(0)';
});

dropdown.addEventListener('mouseout', () => {
  hideTimeout = setTimeout(() => {
    dropdownContent.style.opacity = '0';
    dropdownContent.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      dropdownContent.style.display = 'none';
    }, 300); 
  }, 500); 
});
