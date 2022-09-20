import Component from '../../../utils/component';
import trainers from '../../../assets/files/trainers';
import Tsigler from '../../../assets/img/Tsigler.png';

import './index.scss';

class TrainersBlock extends Component {
  private container: Component;

  private title: Component;

  private content: Component;

  private arrowLeft: Component;

  private cards: Component;

  private arrowRight: Component;

  private margin: number;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainers-block']);

    // common container for two blocks
    this.container = new Component(this.element, 'div', ['trainers-block__container']);

    // create title
    this.title = new Component(this.container.element, 'h2', ['trainers-block__title'], 'Наши тренеры');

    this.content = new Component(this.container.element, 'div', ['trainers-block__content']);
    this.arrowLeft = new Component(this.content.element, 'div', ['trainers-block__content__arrow-left']);
    this.cards = new Component(this.content.element, 'div', ['trainers-block__content__cards']);
    this.arrowRight = new Component(this.content.element, 'div', ['trainers-block__content__arrow-right']);

    this.margin = 0;

    this.arrowLeft.element.addEventListener('click', () => {
        if (window.screen.width > 1199) {
            if (this.margin === 0) {
                this.margin = 35;
            } else {
                this.margin -= 35;
            }
        } else if (window.screen.width > 874) {
            if (this.margin === 0) {
                this.margin = 100;
            } else {
                this.margin -= 50;
            }
        } else {
            if (this.margin === 0) {
                this.margin = 300;
            } else {
                this.margin -= 100;
            }
        }
        (document.querySelector('.trainers-block__content__cards__card') as HTMLDivElement).style.marginLeft = `-${this.margin}%`;
    });

    this.arrowRight.element.addEventListener('click', () => {
        if (window.screen.width > 1199) {
            if (this.margin === 35) {
                this.margin = 0;
            } else {
                this.margin += 35;
            }
        } else if (window.screen.width > 874) {
            if (this.margin === 100) {
                this.margin = 0;
            } else {
                this.margin += 50;
            }
        } else {
            if (this.margin === 300) {
                this.margin = 0;
            } else {
                this.margin += 100;
            }
        }

        (document.querySelector('.trainers-block__content__cards__card') as HTMLDivElement).style.marginLeft = `-${this.margin}%`;
    });

    this.createCards();
  }

  private createCards() {
    trainers.forEach((item) => {
        const tsigler = Tsigler;
        const card = new Component(this.cards.element, 'div', ['trainers-block__content__cards__card']);
        const cardPhoto = new Component(card.element, 'div', ['trainers-block__content__cards__card__photo']);
        cardPhoto.element.style.backgroundImage = `url('${eval(item.photo as string)}')`;
        const cardTitle = new Component(card.element, 'p', ['trainers-block__content__cards__card__title'], `${item.name}`);
        const cardDescription = new Component(card.element, 'p', ['trainers-block__content__cards__card__description'], `${item.description}`);
    });
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default TrainersBlock;