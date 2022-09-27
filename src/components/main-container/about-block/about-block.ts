import Component from '../../../utils/component';

import './about-block.scss';

class AboutBlock extends Component {
  private container: Component;

  private title: Component;

  private content: Component;

  private description: Component;

  private img: Component;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['about-block']);
    this.element.style.backgroundImage = 'linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) ), url("./assets/img/location.jpg")';

    // add id for about-block in order to have opportunity for scrolling to this block by clicking on th link "about us"
    this.element.setAttribute('id', 'about');

    this.container = new Component(this.element, 'div', ['about-block__container']);

    this.title = new Component(this.container.element, 'h2', ['about-block__title'], 'О нас');

    //create flex block width description and img
    this.content = new Component(this.container.element, 'div', ['about-block__content']);
    this.description = new Component(this.content.element, 'p', ['about-block__content__description'], 'Учебно-консультационный центр «Магнат» более 10 лет специализируется на обучении и подготовке кадров в сфере обслуживания и ремонта автомобилей. Одним из главных преимуществ нашего учебного центра является нахождение его на территории реального сервисного центра — “Bosch Service”, оснащённого современным диагностическим оборудованием и собственным учебным классом.');
    
    this.description.element.innerHTML += '<br><br>Наши тренинги и учебные программы разработаны с учётом специфики и текущих тенденций развития автомобильного рынка. Своим слушателям мы предлагаем как технические тренинги, связанные непосредственно с обслуживанием, диагностикой и ремонтом автомобиля, так и ряд бизнес-тренингов, предназначенных для повышения эффективности работы автомобильного сервиса, направленных на работу с клиентом и непосредственно персоналом сервиса.';
    this.description.element.innerHTML += '<br><br>Собственный штат высоко квалифицированных тренеров с огромным практическим опытом работы в автомобильном бизнесе, использующих собственные учебные методики, позволили сделать наши тренинги уникальными по содержанию и интересными для слушателя.';
    this.img = new Component(this.content.element, 'img', ['about-block__content__img']);
    this.img.element.style.backgroundImage = 'url("./assets/img/img-about.jpg")';
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default AboutBlock;