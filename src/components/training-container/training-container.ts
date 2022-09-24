import Component from '../../utils/component';
import trainings from '../../assets/files/trainings';
import { Training } from '../../../src/interfaces/index';
import FormBlock from '../main-container/form-block/form-block';

import './index.scss';

class TrainingContainer extends Component {
  private container: Component;

  private trainingLink: string;

  private training: Training;

  private line: Component;

  private navigation: Component;

  private mainLink: Component;

  private arrow: Component;

  private arrow2: Component;

  private trainingsLink: Component;

  private trainingLinkTo: Component;

  private formBlock: FormBlock;

  private content: Component;

  private startBlock: Component;

  private title: Component;

  private img: Component;

  private mainBlock: Component;

  private trainer: Component;
  
  constructor(parentNode: HTMLElement, trainingLink: string) {
    super(parentNode, 'div', ['training-container']);
    this.trainingLink = trainingLink;
    this.training = {} as Training;
    trainings.forEach((item) => {
      if (item.link === this.trainingLink) { this.training = item }
    });

    this.container = new Component(this.element, 'div', ['training-container__container']);

    this.line = new Component(this.container.element, 'div', ['training-container__line']);
    
    this.navigation = new Component(this.container.element, 'div', ['training-container__navigation']);
    this.mainLink = new Component(this.navigation.element, 'a', ['training-container__navigation__main-link'], 'Главная');
    this.mainLink.element.setAttribute('href', '#/');
    this.arrow = new Component(this.navigation.element, 'div', ['training-container__navigation__arrow']);
    this.arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.trainingsLink = new Component(this.navigation.element, 'a', ['training-container__navigation__trainings-link'], 'Тренинги');
    this.trainingsLink.element.setAttribute('href', '#/trainings');
    this.arrow2 = new Component(this.navigation.element, 'div', ['training-container__navigation__arrow2']);
    this.arrow2.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';
    this.trainingLinkTo = new Component(this.navigation.element, 'a', ['training-container__navigation__training-link'], `${this.training.name}`);
    this.trainingLinkTo.element.setAttribute('href', `#/trainings/${this.trainingLink}`);

    this.content = new Component(this.container.element, 'div', ['training-container__content']);

    this.startBlock = new Component(this.content.element, 'div', ['training-container__content__start-block']);
    this.title = new Component(this.startBlock.element, 'h2', ['training-container__content__start-block__title'], `${this.training.name}`);
    this.img = new Component(this.startBlock.element, 'div', ['training-container__content__start-block__img']);
    this.img.element.style.backgroundImage = `url('./assets/img/${this.training.photo}')`;

    this.mainBlock = new Component(this.content.element, 'div', ['training-container__content__main-block']);
    this.trainer = new Component(this.mainBlock.element, 'p', ['training-container__content__main-block__trainer']);
    this.trainer.element.innerHTML += `<b>Тренер:</b><br>${this.training.trainer}`;

    this.formBlock = new FormBlock(this.element);
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default TrainingContainer;