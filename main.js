const menuLinks = document.querySelectorAll('.headerMenuLink');

menuLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    })
}))

const heroDots = document.querySelectorAll('.heroDot');
const heroImage = document.querySelector('.heroImage');
const heroTitle = document.querySelector('.heroTitle');
const heroSubtitle = document.querySelector('.heroSubtitle');

const heroTitles = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
]

const heroSubtitles = [
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
]

heroDots.forEach((dot, index) => dot.addEventListener('click', event => {
    heroDots.forEach(el => {
        el.classList.remove('active');
    })

    dot.classList.add('active');

    heroImage.src = `assets/Img${index + 1}.jpg`;
    heroTitle.textContent = heroTitles[index];
    heroSubtitle.textContent = heroSubtitles[index];
}))

const featureItemTitles = document.querySelectorAll('.featureItemTitle');
const featureItemCaption = document.querySelector('.featureItemCaption');

const featureItemCaptions = [
    'Создаем кастомизированные программы и сервисы для развития управленческих команд в российских и международных компаниях',
    'Помогаем руководителям и командам колл-центров создать полный цикл по поддержке клиентов и организовать контроль качества',
    'Разрабатываем локальные защищенные корпоративные хранилища, а также осуществляем поддержку на протяжении всего времени пользования'
]

featureItemTitles.forEach((title, index) => title.addEventListener('click', event => {
    featureItemTitles.forEach(el => {
        el.classList.remove('active');
    })

    title.classList.add('active');

    featureItemCaption.textContent = featureItemCaptions[index];
}))

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#headerMenuList').cloneNode(1);
const body = document.body;

hamb.addEventListener('click', event => {
    event.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
})

function renderPopup() {
    popup.appendChild(headerMenuList);
}