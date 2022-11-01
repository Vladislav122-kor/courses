import Component from '../../utils/component';
import Trainings from '../../assets/files/trainings';
import FormBlock from '../main-container/form-block/form-block';

import './price-container.scss';

class PriceContainer extends Component {
  private container: Component;

  private line: Component;

  private content: Component;

  private formBlock: FormBlock;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['price-container']);

    this.container = new Component(this.element, 'div', ['price-container__container']);

    this.line = new Component(this.container.element, 'div', ['price-container__line']);

    this.content = new Component(this.container.element, 'div', ['price-container__content']);
    this.createCards();

    this.formBlock = new FormBlock(this.element);
  }

  private createCards() {
    for (let elem of Trainings) {
        const card = new Component(this.content.element, 'a', ['price-container__content__card']);
        card.element.setAttribute('href', `#/trainings/${elem.link}`);

        const img = new Component(card.element, 'div', ['price-container__content__card__img']);
        img.element.style.backgroundImage = `linear-gradient( rgba(25, 25, 26, 0.6), rgba(25, 25, 26, 0.6) ), url('./assets/img/${elem.photo}')`;
        const name = new Component(img.element, 'p', ['price-container__content__card__img__name'], `${elem.name}`);
        const button = new Component(img.element, 'p', ['price-container__content__card__img__button'], 'ПОДРОБНЕЕ');

        const priceBlock = new Component(card.element, 'div', ['price-container__content__card__price-block']);
        const description = new Component(priceBlock.element, 'p', ['price-container__content__card__price-block__description']);
        description.element.innerHTML = `<b>Длительность:</b><br>${elem.days}`;
        const price = new Component(priceBlock.element, 'div', ['price-container__content__card__price-block__price']);
        const priceText = new Component(price.element, 'p', ['price-container__content__card__price-block__price-text']);
        priceText.element.innerHTML = `${elem.price} BYN`;
    }
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default PriceContainer;