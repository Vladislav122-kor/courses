import Component from '../../utils/component';
import FormBlock from '../main-container/form-block/form-block';

import './contacts-container.scss';

class ContactsContainer extends Component {
  private container: Component;
  private line: Component;
  private content: Component;
  private information: Component;
  private map: Component;
  private formBlock: FormBlock;
  private email: Component;
  private phone: Component;
  private location: Component;
  //private instagram: Component;
  private telegram: Component;

  private wechat: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['contacts-container']);

    this.container = new Component(this.element, 'div', ['contacts-container__container']);

    this.line = new Component(this.container.element, 'div', ['contacts-container__line']);

    this.content = new Component(this.container.element, 'div', ['contacts-container__content']);

    this.information = new Component(this.content.element, 'div', ['contacts-container__content__information']);

    this.email = new Component(this.information.element, 'p', ['contacts-container__content__information__email']);
    this.email.element.innerHTML = '<b>Электронный адрес</b>: <a href="mailto:training.center.magnat@gmail.com">training.center.magnat@gmail.com</a>';

    this.phone = new Component(this.information.element, 'p', ['contacts-container__content__information__phone']);
    this.phone.element.innerHTML = '<b>Телефон</b>: <a href="tel:+375292927035">+375 29 292 70 35</a>';

    this.location = new Component(this.information.element, 'p', ['contacts-container__content__information__location']);
    this.location.element.innerHTML = '<b>Адрес</b>: Учебный центр «Магнат», 223021, Минский р-н, пос. Озерцо, ул. Менковский тракт д.5';

    //this.instagram = new Component(this.information.element, 'p', ['contacts-container__content__information__instagram']);
    //this.instagram.element.innerHTML = '<b>Инстаграм</b>:';

    this.telegram = new Component(this.information.element, 'p', ['contacts-container__content__information__telegram']);
    this.telegram.element.innerHTML = '<b>Телеграм</b>: <a href="https://t.me/cartrainingcenter" target="_blank">https://t.me/cartrainingcenter</a>';

    this.wechat = new Component(this.information.element, 'p', ['contacts-container__content__information__wechat']);
    this.wechat.element.innerHTML = '<b>WeChat</b>: cartrainingcenter';
    
    this.map = new Component(this.content.element, 'img', ['contacts-container__content__map']);
    this.map.element.setAttribute('src', '../../assets/img/map.jpg');

    this.formBlock = new FormBlock(this.element);
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default ContactsContainer;