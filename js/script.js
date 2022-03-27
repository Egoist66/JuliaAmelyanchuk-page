
document.addEventListener('DOMContentLoaded', function () {

    let navigation = document.querySelector('.navigation');
    let focused_li = document.querySelector('.sub_li');
    let elem = `
    <div class="menu-burger">
    
        <span></span>
        <span></span>
        <span></span>
    
    </div>`

    navigation.insertAdjacentHTML('beforeend', elem);
    let burger = document.querySelector('.menu-burger');


    // mobile popup 









    function activeBurger() {

        let mobile_popup = document.querySelector('.mobile-popup');

        this.classList.toggle('active');
        mobile_popup.classList.toggle('active');


    }

    function activeContact(event) {

        let subnav_list = document.querySelector('.subnaviation-list');

        console.log(event.target);

        if (event.target.classList.contains('sub_link')) {
            subnav_list.classList.toggle('active');
        } else {
            subnav_list.classList.remove('active');
        }
    }

    function stickyHeader() {

        let head = document.querySelector('.head');
        let nav_links = document.querySelectorAll('.navigation-list__links ');

        if (window.scrollY > 0) {
            head.classList.add('sticky')
            nav_links.forEach(link => {
                link.classList.add('active');
            })
        } else {
            head.classList.remove('sticky');
            nav_links.forEach(link => {
                link.classList.remove('active');
            })
        }


        if (window.outerWidth <= 1017) {

            head.classList.remove('sticky');
        }
    }



    let sub_link = document.querySelector('.sub_link');
    sub_link.addEventListener('click', function (event) {
        event.preventDefault();
    });


    burger.addEventListener('click', activeBurger);
    document.addEventListener('click', activeContact);
    window.addEventListener('scroll', stickyHeader);


    window.addEventListener('resize', function () {

        let mobile_popup = document.querySelector('.mobile-popup');
        if (this.outerWidth >= 400) {
            mobile_popup.classList.remove('active');
        }
    })









});

