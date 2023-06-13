"use strict";

document.addEventListener('DOMContentLoaded', function () {

    const $div = document.querySelector('footer div');
    const del = document.createElement('div');

    const div1 = ' This website use cookies, click OK to accept it. <a href="#">OK</a>';

    document.querySelector('footer').appendChild(del);
    document.querySelector('footer div:last-child').style.display = 'none';
    del.setAttribute('id', 'del');
    del.innerHTML = '<button>Delete cookie</button>';

    let acceptsCookies = getCookie('acceptsCookies') === 'true';

    if (acceptsCookies) {
        document.querySelector('footer #del').style.display = 'block';
        document.querySelector('footer a').style.display = 'none';
        document.querySelector('footer div').innerHTML = '';
    }

    document.querySelector('footer a').addEventListener('click', event => {
        event.preventDefault();

        setCookie('acceptsCookies', 'true', 1);

        document.querySelector('footer #del').style.display = 'block';
        document.querySelector('footer a').style.display = 'none';
        document.querySelector('footer div').innerHTML = '';
    });

    document.querySelector('#del button').addEventListener('click', () => {
        setCookie('acceptsCookies', '', -1);

        document.querySelector('#del').style.display = 'none';
        document.querySelector('footer div').innerHTML = div1;
        document.querySelector('footer a').style.display = 'inline';
    document.querySelector('footer a').addEventListener('click', event => {
        event.preventDefault();

        setCookie('acceptsCookies', 'true', 1);

        document.querySelector('footer #del').style.display = 'block';
        document.querySelector('footer a').style.display = 'none';
        document.querySelector('footer div').innerHTML = '';
    });
    });

    function getCookie(name) {
        let value = `; ${document.cookie}`;
        let parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }

    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
})