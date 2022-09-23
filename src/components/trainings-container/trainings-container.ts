import Component from '../../utils/component';
import trainings from '../../assets/files/trainings';
import FormBlock from '../main-container/form-block/form-block';
import Training from '../../components/training-container/training-container';

import './index.scss';

class TrainingsContainer extends Component {
  private container: Component;

  private line: Component;

  private navigation: Component;

  private mainLink: Component;

  private arrow: Component;

  private trainingsLink: Component;

  private cards: Component;

  private formBlock: FormBlock;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainings-container']);

    this.container = new Component(this.element, 'div', ['trainings-container__container']);

    this.line = new Component(this.container.element, 'div', ['trainings-container__line']);

    this.navigation = new Component(this.container.element, 'div', ['trainings-container__navigation']);
    this.mainLink = new Component(this.navigation.element, 'a', ['trainings-container__navigation__main-link'], 'Главная');
    this.mainLink.element.setAttribute('href', '#/');
    this.arrow = new Component(this.navigation.element, 'div', ['trainings-container__navigation__arrow']);
    this.arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.trainingsLink = new Component(this.navigation.element, 'a', ['trainings-container__navigation__trainings-link'], 'Тренинги');
    this.trainingsLink.element.setAttribute('href', '#/trainings');

    this.cards = new Component(this.container.element, 'div', ['trainings-container__cards']);
    this.createCards();

    this.formBlock = new FormBlock(this.element);
  }

  private createCards() {
    for (let elem of trainings) {
        const card = new Component(this.cards.element, 'a', ['trainings-container__cards__card']);
        card.element.setAttribute('href', `#/trainings/${elem.link}`);
        card.element.style.backgroundImage = `linear-gradient( rgba(25, 25, 26, 0.4), rgba(25, 25, 26, 0.4) ), url('./assets/img/${elem.photo}')`;
        const cardTitle = new Component(card.element, 'p', ['trainings-container__cards__card-title'], `${elem.name}`);
        const button = new Component(card.element, 'p', ['trainings-container__cards__card-button'], `ПОДРОБНЕЕ`);
    }
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default TrainingsContainer;