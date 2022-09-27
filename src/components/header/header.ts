import Component from '../../utils/component';

import './header.scss';

class Header extends Component {
  private logo: Component;

  private nav: Component;

  private burger: Component;

  private middleBurgerLine: Component;

  private dark: Component;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['header', 'container']);

    // create logo
    this.logo = new Component(this.element, 'a', ['header__logo'], 'УКЦ "МАГНАТ"');
    this.logo.element.setAttribute('href', '#/');

    // create navigation list
    this.nav = new Component(this.element, 'div', ['header__nav']);
    this.addNavLinks();

    // create burger menu
    this.burger = new Component(this.element, 'div', ['header__burger']);
    // the middle line for burger menu created without using ::after/::before
    this.middleBurgerLine = new Component(this.burger.element, 'div', ['header__burger__middle-burger-line']);

    // create dark background for opened burger menu
    this.dark = new Component(document.body, 'div', ['header__dark']);

    // open and close burger menu
    this.burger.element.addEventListener('click', this.closeOpenBurgerMenu);
    this.dark.element.addEventListener('click', this.closeOpenBurgerMenu);
    document.querySelectorAll('.header__nav-element').forEach((item) => {
      item.addEventListener('click', () => {
        if (item.classList.contains('clicked')) {
          this.closeOpenBurgerMenu()
        }
      })
    });
  }

  private addNavLinks() {
    const linkNames = ['Главная', 'Тренинги', 'Тренеры', 'О нас', 'Расписание', 'Запись', 'Цены', 'Контакты'];
    const linkHrefs = ['#/', '#/trainings', '#/trainers', '#about', '#/schedule', '#/registration', '#/price', '#footer'];
    const linkClasses = ['main', 'trainings', 'trainers', 'about', 'schedule', 'registration', 'price', 'contacts'];

    for (let i = 0; i < linkNames.length; i += 1) {
      const link = new Component(this.nav.element, 'a', ['header__nav-element', `header__link-${linkClasses[i]}`], `${linkNames[i]}`);
      link.element.setAttribute('href', `${linkHrefs[i]}`);
    }
  }

  private closeOpenBurgerMenu() {
    if ((document.querySelector('.header__burger') as HTMLElement).classList.contains('active')) {
      (document.querySelector('.header__burger') as HTMLElement).classList.remove('active');
      (document.querySelector('.header__nav') as HTMLElement).classList.remove('active');
      (document.querySelector('.header__dark') as HTMLElement).classList.remove('active');
      document.body.classList.remove('active');
      document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('clicked'));
    } else {
      (document.querySelector('.header__burger') as HTMLElement).classList.add('active');
      (document.querySelector('.header__nav') as HTMLElement).classList.add('active');
      (document.querySelector('.header__dark') as HTMLElement).classList.add('active');
      document.body.classList.add('active');
      document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.add('clicked'));
    }
  }
}

export default Header;
