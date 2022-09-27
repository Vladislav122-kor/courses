import Component from '../../utils/component';
import FormBlock from '../main-container/form-block/form-block';

import './index.scss';

class TrainersContainer extends Component {
  private container: Component;

  private line: Component;

  private navigation: Component;

  private mainLink: Component;

  private arrow: Component;

  private trainers: Component;

  private formBlock: FormBlock;

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

    this.formBlock = new FormBlock(this.element);
  }

  private clear() {
    //this.content.element.innerHTML = '';
  }
}

export default TrainersContainer;