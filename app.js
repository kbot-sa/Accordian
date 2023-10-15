const accordian = document.getElementsByClassName('content-container');


for( i = 0; i < accordian.length; i++) {

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

};