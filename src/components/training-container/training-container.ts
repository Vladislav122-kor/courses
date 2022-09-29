import Component from '../../utils/component';
import Trainings from '../../assets/files/trainings';
import { Training } from '../../../src/interfaces/index';
import Schedule from '../../assets/files/schedule';
import FormBlock from '../main-container/form-block/form-block';

import './training-container.scss';

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
  boardImg: Component;
  titleInformationBlock: Component;
  informationBlock: Component;
  scheduleButton: Component;
  priceButton: Component;
  
  constructor(parentNode: HTMLElement, trainingLink: string) {
    super(parentNode, 'div', ['training-container']);
    this.trainingLink = trainingLink;
    this.training = {} as Training;

    // search for training clicked which was clicked (with the help of trainingLink)
    Trainings.forEach((item) => {
      if (item.link === this.trainingLink) { this.training = item }
    });

    this.container = new Component(this.element, 'div', ['training-container__container']);

    this.line = new Component(this.container.element, 'div', ['training-container__line']);
    
    //create navigation
    this.navigation = new Component(this.container.element, 'div', ['training-container__navigation']);

    this.mainLink = new Component(this.navigation.element, 'a', ['training-container__navigation__main-link'], 'Главная');
    this.mainLink.element.setAttribute('href', '#/');

    this.arrow = new Component(this.navigation.element, 'div', ['training-container__navigation__arrow']);
    this.arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';

    this.trainingsLink = new Component(this.navigation.element, 'a', ['training-container__navigation__trainings-link'], 'Тренинги');
    this.trainingsLink.element.setAttribute('href', '#/trainings');

    this.arrow2 = new Component(this.navigation.element, 'div', ['training-container__navigation__arrow2']);
    this.arrow2.element.style.backgroundImage = 'url("./assets/svg/arrow-link.svg")';

    this.trainingLinkTo = new Component(this.navigation.element, 'div', ['training-container__navigation__training-link'], `${this.training.name}`);

    //crete main content
    this.content = new Component(this.container.element, 'div', ['training-container__content']);

    //block with title and image
    this.startBlock = new Component(this.content.element, 'div', ['training-container__content__start-block']);

    this.titleInformationBlock = new Component(this.startBlock.element, 'div', ['training-container__content__start-block__title-information-block']);
    this.title = new Component(this.titleInformationBlock.element, 'h2', ['training-container__content__start-block__title-information-block__title'], `${this.training.name}`);
    this.informationBlock = new Component(this.titleInformationBlock.element, 'div', ['training-container__content__start-block__title-information-block__information-block'],);
    this.scheduleButton = new Component(this.informationBlock.element, 'a', ['training-container__content__start-block__title-information-block__information-block-button'], 'Посмотреть расписание');
    this.scheduleButton.element.setAttribute('href', '#/schedule');
    this.priceButton = new Component(this.informationBlock.element, 'a', ['training-container__content__start-block__title-information-block__information-block-button'], 'Узнать стоимость');
    this.priceButton.element.setAttribute('href', '#/price');


    this.img = new Component(this.startBlock.element, 'div', ['training-container__content__start-block__img']);
    this.img.element.style.backgroundImage = `url('./assets/img/${this.training.photo}')`;

    // block with description
    this.mainBlock = new Component(this.content.element, 'div', ['training-container__content__main-block']);
    this.createDescription();

    // create side image in absolute position
    this.boardImg = new Component(this.element, 'div', ['training-container__board-img']);
    this.boardImg.element.style.backgroundImage = 'url("./assets/img/board.jpg")';

    this.formBlock = new FormBlock(this.element);
  }

  private createDescription() {
    // points that main block includes
    const titles = ['', '', '', 'Участники', 'Учебная цель', 'Содержание курса', 'Дополнительно', 'По прохождению обучения участник', 'Длительность курса', 'Численность группы', 'Место проведения', 'В период обучения мы предоставляем'];

    // for each point create block and fill it with point title and description
    for (let i = 3; i < Object.values(this.training).length - 3; i++) {
      const context = new Component(this.mainBlock.element, 'div', ['training-container__content__main-block__context']);
      const title = new Component(context.element, 'p', ['training-container__content__main-block__context-title']);
      title.element.innerHTML = `<b>${titles[i]}:</b>`
      
      const description = new Component(context.element, 'p', ['training-container__content__main-block__context-description']);

      // both cases for description as massive or as string
      if (Array.isArray(Object.values(this.training)[i])) {
        for (let y = 0; y < Object.values(this.training)[i].length; y++) {
          if (y === 0) {
            description.element.innerHTML = `- ${Object.values(this.training)[i][y]}`;
          } else {
            description.element.innerHTML += `<br>- ${Object.values(this.training)[i][y]}`;
          }
        }
      } else {
        description.element.innerHTML = `${Object.values(this.training)[i]}`;
      }
    }
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default TrainingContainer;