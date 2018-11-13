let footer = document.querySelector('.footer');
let divResize = document.createElement('div');
divResize.className = 'footer__resize';
divResize.textContent = `window size: ${window.innerWidth}`;
footer.appendChild(divResize);

 const showResize = () => {
     setTimeout(function(){
         divResize.textContent = `window size: ${window.innerWidth}`;
     }, 2000);
};

window.onresize = showResize;

export default showResize;