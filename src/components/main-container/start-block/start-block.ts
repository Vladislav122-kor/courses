import Component from '../../../utils/component';

import './index.scss';

class StartBlock extends Component {
    private startBlockContainer: Component;

    private textBlock: Component;

    private title: Component;

    private description: Component;

    private button: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['start-block']);
    this.element.style.backgroundImage = 'linear-gradient( rgba(25, 25, 26, 0.5), rgba(25, 25, 26, 0.5) ), url("./assets/img/start-image.jpg")';

    this.startBlockContainer = new Component(this.element, 'div', ['start-block__container']);
    this.textBlock = new Component(this.startBlockContainer.element, 'div', ['start-block__text']);
    this.title = new Component(this.textBlock.element, 'h1', ['start-block__text-title'], 'Тренинги Различных Направлений');
    this.description = new Component(this.textBlock.element, 'p', ['start-block__text-description'], 'Учебно-консультационный центр «Магнат» более 10-и лет предоставляет обучающие услуги в сфере обслуживания, ремонта автомобилей и управления автосервисным предприятием. В разделе “Тренинги” Вы можете выбрать познакомиться с перечнем и содержанием проводимых тренингов, а также записаться на обучение. Обучаемся Вместе с удовольствием!');
    this.button = new Component(this.textBlock.element, 'a', ['start-block__text-button'], 'ВЫБРАТЬ ТРЕНИНГ');
    this.button.element.setAttribute('href', '#/trainings');
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default StartBlock;