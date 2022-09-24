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
  
  private categories: Component;

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

    this.categories = new Component(this.container.element, 'div', ['trainings-container__categories']);
    this.createCategories();

    this.cards = new Component(this.container.element, 'div', ['trainings-container__cards']);
    this.createCards();

    this.formBlock = new FormBlock(this.element);
  }

  private createCategories() {
    const categoryLinks: string[] = [];
    trainings.forEach((item) => {
      if (!categoryLinks.includes(`${item.category}`)) {
        categoryLinks.push(`${item.category}`);
      }
    });

    let count = 0;
    for (let elem of categoryLinks) {
        const category = new Component(this.categories.element, 'p', ['trainings-container__categories__category'], `${elem} тренинги`);
        category.element.addEventListener('click', (e) => {
          (e.target as HTMLElement).classList.add('active');
          sessionStorage.setItem('category', (e.target as HTMLElement).innerHTML.split(' ')[0]);
          this.createCards();
        });
        count++;
    }

    const categoryAll = new Component(this.categories.element, 'p', ['trainings-container__categories__category', 'active'], `Все тренинги`);
    categoryAll.element.addEventListener('click', (e) => {
      (e.target as HTMLElement).classList.add('active');
      sessionStorage.setItem('category', 'Все тренинги');
      this.createCards();
    });
  }

  createCards() {
    this.cards.element.innerHTML = '';

    const category = sessionStorage.getItem('category');
    let trainingsSorted;

    console.log(sessionStorage.getItem('category'));
    document.querySelectorAll('.trainings-container__categories__category').forEach((item) => {
      item.classList.remove('active');
      if (item.innerHTML === category || item.innerHTML.split(' ')[0].includes(category as string)) {
        item.classList.add('active');
      }
    });

    if (category !== 'Все тренинги') {
      trainingsSorted = trainings.filter((item) => item.category === category);
    } else {
      trainingsSorted = trainings;
    }
    
    for (let elem of trainingsSorted) {
        const card = new Component(this.cards.element, 'a', ['trainings-container__cards__card']);
        card.element.setAttribute('href', `#/trainings/${elem.link}`);
        card.element.style.backgroundImage = `linear-gradient( rgba(25, 25, 26, 0.4), rgba(25, 25, 26, 0.4) ), url('./assets/img/${elem.photo}')`;
        const cardTitle = new Component(card.element, 'p', ['trainings-container__cards__card-title'], `${elem.name}`);
        const button = new Component(card.element, 'p', ['trainings-container__cards__card-button'], `ПОДРОБНЕЕ`);
    }
  }

  private clear() {
    this.cards.element.innerHTML = '';
  }
}

export default TrainingsContainer;