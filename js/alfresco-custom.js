/**
 *
 *
 */
function closeBtnCustomeFunction() {
  const x = document.getElementById('sidebarContent');
  const y = document.getElementById('clsBtn');
  if (x.style.display === 'none' && y.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'block';
  } else {
    x.style.display = 'none';
    y.style.display = 'none';
  }
}

/**
 * 
 * 
 */
function closeSideBar() {
  const x = document.getElementById('sidebarContent');
  if (x.style.display === 'none' ) {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
