import Component from '../../utils/component';
import Trainers from '../../assets/files/trainers';
import FormBlock from '../main-container/form-block/form-block';

import './trainers-container.scss';

class TrainersContainer extends Component {
  private container: Component;

  private line: Component;

  private navigation: Component;

  private mainLink: Component;

  private arrow: Component;

  private trainers: Component;

  private formBlock: FormBlock;

  private content: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainers-container']);

    this.container = new Component(this.element, 'div', ['trainers-container__container']);

    this.line = new Component(this.container.element, 'div', ['trainers-container__line']);

    this.navigation = new Component(this.container.element, 'div', ['trainers-container__navigation']);
    this.mainLink = new Component(this.navigation.element, 'a', ['trainers-container__navigation__main-link'], 'Главная');
    this.mainLink.element.setAttribute('href', '#/');
    this.arrow = new Component(this.navigation.element, 'div', ['trainers-container__navigation__arrow']);
    this.arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.trainers = new Component(this.navigation.element, 'p', ['trainers-container__navigation__trainers'], 'Тренеры');

    this.content = new Component(this.container.element, 'div', ['trainers-container__content']);
    this.createCards();

    this.formBlock = new FormBlock(this.element);
  }

  private createCards() {
    Trainers.forEach((item) => {
      const card = new Component(this.content.element, 'div', ['trainers-container__content__card']);

      const cardPhoto = new Component(card.element, 'div', ['trainers-container__content__card__photo']);
      cardPhoto.element.style.backgroundImage = `url('./assets/img/${item.photo}')`;

      const cardTitle = new Component(card.element, 'p', ['trainers-container__content__card__title'], `${item.name}`);

      const cardDescription = new Component(card.element, 'p', ['trainers-container__content__card__description'], `${item.description}`);
    });
  }

  private clear() {
    //this.content.element.innerHTML = '';
  }
}

export default TrainersContainer;