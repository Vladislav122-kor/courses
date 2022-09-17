import Component from '../../../utils/component';
import image from '../../../assets/img/img-about.jpg';

import './index.scss';

class AboutBlock extends Component {
  private container: Component;

  private text: Component;

  private title: Component;

  private description: Component;

  private img: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['about-block']);

    // common container for two blocks
    this.container = new Component(this.element, 'div', ['about-block__container']);

    //create text block
    this.text = new Component(this.container.element, 'div', ['about-block__text']);
    this.title = new Component(this.text.element, 'h2', ['about-block__text-title'], 'О нас');
    this.description = new Component(this.text.element, 'p', ['about-block__text-description'], 'Учебно-консультационный центр «Магнат» более 10 лет специализируется на обучении и подготовке кадров в сфере обслуживания и ремонта автомобилей. Одним из главных преимуществ нашего учебного центра является нахождение его на территории реального сервисного центра — “Bosch Service”, оснащённого современным диагностическим оборудованием и собственным учебным классом. Наши тренинги и учебные программы разработаны с учётом специфики и текущих тенденций развития автомобильного рынка. Своим слушателям мы предлагаем как технические тренинги, связанные непосредственно с обслуживанием, диагностикой и ремонтом автомобиля, так и ряд бизнес-тренингов, предназначенных для повышения эффективности работы автомобильного сервиса, направленных на работу с клиентом и непосредственно персоналом сервиса. Собственный штат высоко квалифицированных тренеров с огромным практическим опытом работы в автомобильном бизнесе, использующих собственные учебные методики, позволили сделать наши тренинги уникальными по содержанию и интересными для слушателя.');

    // create img
    this.img = new Component(this.container.element, 'img', ['about-block__img']);
    this.img.element.setAttribute('src', image);
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default AboutBlock;