import Component from '../../utils/component';

import './header.scss';

class Header extends Component {
  private logo: Component;

  private nav: Component;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['header', 'container']);

    // create logo
    this.logo = new Component(this.element, 'a', ['header__logo'], 'УКЦ "МАГНАТ"');
    this.logo.element.setAttribute('href', '#/');

    // create nav list
    this.nav = new Component(this.element, 'div', ['header__nav']);
    this.addNavLinks();
  }

  addNavLinks() {
    const linkNames = ['Главная', 'Тренинги', 'Тренеры', 'О нас', 'Расписание', 'Запись', 'Цены', 'Контакты'];
    const linkHrefs = ['#/', '#/trainings', '#trainers', '#about', '#/schedule', '#/registration', '#/prices', '#footer'];
    const linkClasses = ['main', 'trainings', 'trainers', 'about', 'schedule', 'registration', 'prices', 'contacts'];

    for (let i = 0; i < linkNames.length; i += 1) {
      const link = new Component(this.nav.element, 'a', ['header__nav-element', `header__link-${linkClasses[i]}`], `${linkNames[i]}`);
      link.element.setAttribute('href', `${linkHrefs[i]}`);
    }
  }
}

export default Header;
