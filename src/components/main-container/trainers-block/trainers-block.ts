import Component from '../../../utils/component';
import Trainers from '../../../assets/files/trainers';

import './trainers-block.scss';

class TrainersBlock extends Component {
  private container: Component;

  private title: Component;

  private content: Component;

  private cards: Component;

  private button: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainers-block']);

    this.container = new Component(this.element, 'div', ['trainers-block__container']);

    this.title = new Component(this.container.element, 'h2', ['trainers-block__title'], 'Наши тренеры');

    this.content = new Component(this.container.element, 'div', ['trainers-block__content']);

    this.cards = new Component(this.content.element, 'div', ['trainers-block__content__cards']);
    this.createCards();

    this.button = new Component(this.content.element, 'a', ['trainers-block__content__button'], 'СМОТРЕТЬ ВСЕХ');
    this.button.element.setAttribute('href', '#/trainers');
  }

  private createCards() {
    Trainers.forEach((item) => {
        const card = new Component(this.cards.element, 'div', ['trainers-block__content__cards__card']);

        const cardPhoto = new Component(card.element, 'div', ['trainers-block__content__cards__card__photo']);
        cardPhoto.element.style.backgroundImage = `url('./assets/img/${item.photo}')`;

        const cardTitle = new Component(card.element, 'p', ['trainers-block__content__cards__card__title'], `${item.name}`);

        const cardDescription = new Component(card.element, 'p', ['trainers-block__content__cards__card__description'], `${item.description}`);
    });
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default TrainersBlock;