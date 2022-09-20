import Component from '../../../utils/component';
import trainings from '../../../assets/files/trainings';
import экономические from '../../../assets/img/Автомобильная_механика.png';
import технические from '../../../assets/img/Тормозные_системы.jpg';
import организационные from '../../../assets/img/Организация_работ.jpg';

import './index.scss';

class TrainingsBlock extends Component {
  private container: Component;

  private title: Component;

  private cardsContainer: Component;
    
  private cards: Component;
  
  private arrowLeft: Component;

  private arrowRight: Component;

  private margin50: number;

  private margin100: number;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainings-block']);

    // common container for two blocks
    this.container = new Component(this.element, 'div', ['trainings-block__container']);

    // create title
    this.title = new Component(this.container.element, 'h2', ['trainings-block__title'], 'Наши тренинги');

    //create trainings cards container
    this.cardsContainer = new Component(this.container.element, 'div', ['trainings-block__cards-container']);
    this.arrowLeft = new Component(this.cardsContainer.element, 'div', ['trainings-block__cards-arrowLeft']);
    this.cards = new Component(this.cardsContainer.element, 'div', ['trainings-block__cards']);
    this.arrowRight = new Component(this.cardsContainer.element, 'div', ['trainings-block__cards-arrowRight']);

    this.margin50 = 0;
    this.margin100 = 0;

    this.arrowLeft.element.addEventListener('click', () => {
      if((document.querySelector('.trainings-block__cards-container') as HTMLDivElement).offsetWidth > 939) {
        if (this.margin50 === 0) {
          this.margin50 = 50;
        } else {
          this.margin50 -= 50;
        }
        (document.querySelector('.trainings-block__cards-card-container') as HTMLDivElement).style.marginLeft = `-${this.margin50}%`;
      } else {
        if (this.margin100 === 0) {
          this.margin100 = 200;
        } else {
          this.margin100 -= 100;
        }
        (document.querySelector('.trainings-block__cards-card-container') as HTMLDivElement).style.marginLeft = `-${this.margin100}%`;
      }
    });

    this.arrowRight.element.addEventListener('click', () => {
      if((document.querySelector('.trainings-block__cards-container') as HTMLDivElement).offsetWidth > 939) {
        if (this.margin50 === 50) {
          this.margin50 = 0;
        } else {
          this.margin50 += 50;
        }
        (document.querySelector('.trainings-block__cards-card-container') as HTMLDivElement).style.marginLeft = `-${this.margin50}%`;
      } else {
        if (this.margin100 === 200) {
          this.margin100 = 0;
        } else {
          this.margin100 += 100;
        }
        (document.querySelector('.trainings-block__cards-card-container') as HTMLDivElement).style.marginLeft = `-${this.margin100}%`;
      }
    });

    // create cards
    this.createCards();
  }

  private createCards() {
    const categories = new Set();
    trainings.forEach((item) => categories.add(item.category));

    for (let elem of categories.keys()) {
        const Экономические = экономические;
        const Технические = технические;
        const Организационные = организационные;
        const cardContainer = new Component(this.cards.element, 'div', ['trainings-block__cards-card-container']);
        const card = new Component(cardContainer.element, 'div', ['trainings-block__cards-card']);
        card.element.style.backgroundImage = `linear-gradient( rgba(25, 25, 26, 0.4), rgba(25, 25, 26, 0.4) ), url('${eval(elem as string)}')`;
        const cardTitle = new Component(card.element, 'p', ['trainings-block__cards-card-title'], `${elem} тренинги`);
        const button = new Component(card.element, 'p', ['trainings-block__cards-card-button'], `ПОДРОБНЕЕ`);
    }
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default TrainingsBlock;