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

    this.startBlockContainer = new Component(this.element, 'div', ['start-block__container']);
    this.textBlock = new Component(this.startBlockContainer.element, 'div', ['start-block__text']);
    this.title = new Component(this.textBlock.element, 'h1', ['start-block__title'], 'Тренинги Различных Направлений');
    this.description = new Component(this.textBlock.element, 'p', ['start-block__description'], 'Учебно-консультационный центр «Магнат» предоставляет обучающие услуги в сфере обслуживания автомобилей по различным направлениям. В разделе “Тренинги” Вы можете выбрать из перечня возможных тренингов и записаться на любое удобное для Вас время. Обучайтесь с удовольствием! ');
    this.button = new Component(this.textBlock.element, 'p', ['start-block__button'], 'ВЫБРАТЬ ТРЕНИНГ');
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default StartBlock;