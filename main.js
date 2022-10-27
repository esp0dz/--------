const menuLink = document.querySelectorAll('.nav-el-link');

menuLink.forEach((link) => link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
    });
}));

const heroDots = document.querySelectorAll('.hero-dot');
const heroImage = document.querySelector('.hero-img');
const heroTitle = document.querySelector('.hero-title');
const heroSubTitle = document.querySelector('.hero-subtitle');

const titles = ['Разработано 2000+ приложений', 'Бесплатные приложения', 'Тысячи довольных клиентов'];
const subtitles = ['Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток', 
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно', 
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов']

heroDots.forEach((dot, index) => dot.addEventListener('click', () => {
    heroDots.forEach(item=> {
        item.classList.remove('active-dot');
    });
    dot.classList.add('active-dot');
    heroImage.src = 'img/hero' + (index+1) + '.jpg';
    heroTitle.textContent = titles[index];
    heroSubTitle.textContent = subtitles[index];
}))

const featuresHeaders = document.querySelectorAll('.feature-header');
const featureAbout = document.querySelector('.feature-about');

const featuresAbout = ['Создаем кастомизированные программы и сервисы для развития управленческих команд в российских и международных компаниях', 
    'Помогаем руководителям и командам колл-центров создать полный цикл по поддержке клиентов и организовать контроль качества', 
    'Разрабатываем локальные защищенные корпоративные хранилища, а также осуществляем поддержку на протяжении всего времени пользования'];

featuresHeaders.forEach((header, index) => header.addEventListener('click', () => {
    featuresHeaders.forEach(item=> {
        item.classList.remove('feature-header-active');
    });
    header.classList.add('feature-header-active');
    featureAbout.textContent = featuresAbout[index];
}));
