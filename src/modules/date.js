const showFullDate = () => {
const footer = document.querySelector('.footer');
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let fullYear = date.getFullYear();
let fullDate = `${day} ${month} ${fullYear}`;
let divDate = document.createElement('div');
divDate.className = 'footer__date';
divDate.innerHTML = `date: ${fullDate}`;
footer.appendChild(divDate);
};

export default showFullDate;