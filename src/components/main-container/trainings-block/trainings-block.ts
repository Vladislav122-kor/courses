import Component from '../../../utils/component';
import Trainings from '../../../assets/files/trainings';

import './trainings-block.scss';

class TrainingsBlock extends Component {
  private container: Component;

  private title: Component;
    
  private cards: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainings-block']);

    this.container = new Component(this.element, 'div', ['trainings-block__container']);

    this.title = new Component(this.container.element, 'h2', ['trainings-block__title'], 'Наши тренинги');

    this.cards = new Component(this.container.element, 'div', ['trainings-block__cards']);

    this.createCards();
  }

  private createCards() {
    const categories: (string | string[])[] = [];

    // sort training by categories and add unique category to the "categories" massive with the relevant photo
    Trainings.forEach((item) => {
      if (!categories.flat().includes(`${item.category}`)) {
        categories.push([`${item.category}`, `${item.photo}`]);
      }
    });

    // create cards in the amount of unique categories
    let count = 0;
    for (let elem of categories) {
        const card = new Component(this.cards.element, 'a', ['trainings-block__cards-card']);
        card.element.style.backgroundImage = `linear-gradient( rgba(25, 25, 26, 0.6), rgba(25, 25, 26, 0.3) ), url('./assets/img/${elem[1]}')`;
        card.element.setAttribute('href', '#/trainings');
        card.element.setAttribute('data-category', `${elem[0]}`);

        const cardTitle = new Component(card.element, 'p', ['trainings-block__cards-card-title'], `${elem[0]} тренинги`);
        cardTitle.element.setAttribute('data-category', `${elem[0]}`);

        const button = new Component(card.element, 'p', ['trainings-block__cards-card-button'], `ПОДРОБНЕЕ`);
        button.element.setAttribute('data-category', `${elem[0]}`);
        
        card.element.addEventListener('click', (e) => {
          sessionStorage.setItem('category', `${(e.target as HTMLElement).getAttribute('data-category')}`);
        })
        count++;
    }
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default TrainingsBlock;