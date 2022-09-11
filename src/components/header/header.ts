import Component from '../../utils/component';

import './header.scss';

class Header extends Component {
  private logoContainer: Component;

  private logo: Component;

  private nav: Component;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['header', 'container']);

    // create logo
    this.logoContainer = new Component(this.element, 'div', ['header__logo']);
    this.logo = new Component(this.logoContainer.element, 'a', ['header__logo-link'], 'МАГНАТ');
    this.logo.element.setAttribute('href', '#/');

    // create nav list
    this.nav = new Component(this.element, 'div', ['header__nav']);
    this.addNavLinks();
  }

  addNavLinks() {
    const linkNames = ['Главная', 'Тренинги', 'Тренеры', 'О нас', 'Расписание', 'Запись', 'Цены', 'Контакты'];
    const linkHrefs = ['#/', '#/trainings', '#/trainers', '#/about', '#/schedule', '#/registration', '#/prices', '#/contacts'];
    const linkClasses = ['main', 'trainings', 'trainers', 'about', 'schedule', 'registration', 'prices', 'contacts'];

    for (let i = 0; i < linkNames.length; i += 1) {
      const linkContainer = new Component(this.nav.element, 'div', ['header__nav-element']);
      const link = new Component(linkContainer.element, 'a', ['header__nav-element-link', `header__link-${linkClasses[i]}`], `${linkNames[i]}`);
      link.element.setAttribute('href', `${linkHrefs[i]}`);
    }
  }
}

export default Header;
