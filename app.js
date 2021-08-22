const portfolio = document.getElementById('projects');
const portImage = document.getElementById('port');


window.onload = () => {
    let orignalLoad = (portImage.clientHeight * 4);
    portfolio.style.height = `${orignalLoad}px`;
}

window.addEventListener('resize', () => {
    let port = portImage.clientHeight;
     portfolio.style.height = (port * 4) + "px";
})
