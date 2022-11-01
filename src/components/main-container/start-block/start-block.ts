import Component from '../../../utils/component';

import './start-block.scss';

class StartBlock extends Component {
  private container: Component;

  private textBlock: Component;

  private text: Component;

  private title: Component;

  private description: Component;

  private button: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['start-block']);

    // create background image for this block
    this.element.style.backgroundImage = 'linear-gradient( rgba(25, 25, 26, 0.5), rgba(25, 25, 26, 0.5) ), url("./assets/img/start-image.jpg")';

    this.container = new Component(this.element, 'div', ['start-block__container']);

    // create container with all information
    this.textBlock = new Component(this.container.element, 'div', ['start-block__text-block']);

    // create text part
    this.text = new Component(this.textBlock.element, 'div', ['start-block__text-block__text']);
    this.title = new Component(this.text.element, 'h1', ['start-block__text-block__text__title']);
    this.title.element.innerHTML = 'Тренинги<br>автосервисных направлений'
    this.description = new Component(this.text.element, 'p', ['start-block__text-block__text__description'], 'Учебно-консультационный центр «Магнат» более 10-и лет предоставляет обучающие услуги в сфере обслуживания, ремонта автомобилей и управления автосервисным предприятием. В разделе “Тренинги” Вы можете ознакомиться с перечнем и содержанием проводимых тренингов, а также записаться на обучение.');
    this.description.element.innerHTML += '<br>Обучаемся Вместе с удовольствием!';

    // create button with link to all trainings page
    this.button = new Component(this.textBlock.element, 'a', ['start-block__text-block__button'], 'ВЫБРАТЬ ТРЕНИНГ');
    this.button.element.setAttribute('href', '#/trainings');
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default StartBlock;