import Component from '../../../utils/component';

import './suggestion-block.scss';

class SuggestionsBlock extends Component {
  private container: Component;

  private content: Component;

  private title: Component;

  private cards: Component;

  private boardImg: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['suggestion-block']);

    // create background image for this block
    this.element.style.backgroundImage = 'linear-gradient( rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) ), url("./assets/img/suggestion.jpg")';

    this.container = new Component(this.element, 'div', ['suggestion-block__container']);

    this.content = new Component(this.container.element, 'div', ['suggestion-block__content']);

    this.title = new Component(this.content.element, 'h2', ['suggestion-block__content__title'], 'Что мы предлагаем');

    this.cards = new Component(this.content.element, 'h2', ['suggestion-block__content__cards']);
    this.createCards();

    // create side image in absolute position
    this.boardImg = new Component(this.element, 'div', ['suggestion-block__board-img']);
    this.boardImg.element.style.backgroundImage = 'url("../../../assets/img/board.jpg")';
  }

  private createCards() {
    const imgLinks = ['format-logo', 'quantity-logo', 'materials-logo', 'meal-logo', 'building-logo'];
    const titles = ['Формат тренинга', 'Численность группы', 'Учебные материалы и сертификат ', 'Питание', 'Помещение'];
    const descriptions = ['- очный формат с теорией и практикой на базе УКЦ “Магнат”<br>- выздной тренинг на территории заказчика', 'от 10 до 15 человек', 'предоставляются', '2 кофе-паузы и обед в каждый день обучения (с учетом проведения обучения в УКЦ “Магнат”)', 'оборудованный учебный класс для теоретических занятий и бокс в автомастерской для практических занятий.'];

    for (let i = 0; i < 5; i++) {
      const card = new Component(this.cards.element, 'div', ['suggestion-block__content__cards__card']);

      //the second and the fourth cards are shifted to the right
      if (i % 2 !== 0) {
        card.element.style.alignSelf = 'flex-end';
        card.element.style.width = '100%';
        card.element.style.maxWidth = '450px';
      }
      
      const img = new Component(card.element, 'div', ['suggestion-block__content__cards__card__img']);
      img.element.style.backgroundImage = `url("./assets/svg/${imgLinks[i]}.svg")`;
      
      const textBlock = new Component(card.element, 'div', ['suggestion-block__content__cards__card__text-block']);
      const title = new Component(textBlock.element, 'p', ['suggestion-block__content__cards__card__text-block__title'], `${titles[i]}`);
      const description = new Component(textBlock.element, 'p', ['suggestion-block__content__cards__card__text-block__description']);
      description.element.innerHTML = `${descriptions[i]}`;
    }
    
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default SuggestionsBlock;