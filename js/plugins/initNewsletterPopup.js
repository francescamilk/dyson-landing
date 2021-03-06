const newsletterPopup = () => {
  const newsletter = document.getElementById('newsletterPopup');
  const submit = document.getElementById('popSubmit');
  const close = document.getElementById('newsletterClose');
  const closeSmall = document.getElementById('nCloseSmall');

  window.onload = function() {
    setTimeout(function() {
      newsletter.classList.add('show');    
    }, 
    10000 
    );
  };

  close.onclick = function() {
    newsletter.classList.remove('show');
  };

  closeSmall.onclick = function() {
    newsletter.classList.remove('show');
  }

  submit.onclick = function() {
    newsletter.classList.remove('show');
  };
}

export {newsletterPopup};
