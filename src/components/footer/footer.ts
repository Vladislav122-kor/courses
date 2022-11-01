import Component from '../../utils/component';
import './footer.scss';

class Footer extends Component {

  private footerContainer: Component;

  private logoContainer: Component;

  private logo: Component;

  private media: Component;

  private instagram: Component;

  private telegram: Component;

  private wechat: Component;

  private phoneMail: Component;

  private phoneMailTitle: Component;

  private mailContainer: Component;
  
  private mailLogo: Component;

  private mailText: Component;

  private phoneContainer: Component;

  private phoneLogo: Component;

  private phoneText: Component;

  private location: Component;

  private locationTitle: Component;

  private locationContainer: Component;

  private locationLogo: Component;

  private locationText: Component;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['footer']);
    this.element.setAttribute('id', 'footer');

    this.footerContainer = new Component(this.element, 'div', ['footer-container']);

    // create logo container with links to social-media
    this.logoContainer = new Component(this.footerContainer.element, 'div', ['footer-container__logo-container']);

    this.logo = new Component(this.logoContainer.element, 'a', ['footer-container__logo-container__logo'], 'УКЦ "МАГНАТ"');
    this.logo.element.setAttribute('href', '#/');

    this.media = new Component(this.logoContainer.element, 'div', ['footer-container__logo-container__media']);

    this.instagram = new Component(this.media.element, 'div', ['footer-container__logo-container__media-instagram']);
    this.instagram.element.style.backgroundImage = 'url("./assets/svg/instagram-logo.svg")';

    this.telegram = new Component(this.media.element, 'a', ['footer-container__logo-container__media-telegram']);
    this.telegram.element.style.backgroundImage = 'url("./assets/svg/telegram-logo.svg")';
    this.telegram.element.setAttribute('href', 'https://t.me/cartrainingcenter');
    this.telegram.element.setAttribute('target', '_blank');

    this.wechat = new Component(this.media.element, 'div', ['footer-container__logo-container__media-wechat']);
    this.wechat.element.style.backgroundImage = 'url("./assets/svg/wechat-logo.svg")';

    // create phone and mail
    this.phoneMail = new Component(this.footerContainer.element, 'div', ['footer-container__phone-mail']);
    this.phoneMailTitle = new Component(this.phoneMail.element, 'h2', ['footer-container__phone-mail__title'], "Контакты");

    this.mailContainer = new Component(this.phoneMail.element, 'a', ['footer-container__phone-mail__mail']);
    this.mailContainer.element.setAttribute('href', 'mailto:training.center.magnat@gmail.com');
    this.mailLogo = new Component(this.mailContainer.element, 'div', ['footer-container__phone-mail__mail-logo']);
    this.mailLogo.element.style.backgroundImage = 'url("./assets/svg/mail-logo.svg")';
    this.mailText = new Component(this.mailContainer.element, 'p', ['footer-container__phone-mail__mail-text']);
    this.mailText.element.innerHTML = `training.center.magnat<br>@gmail.com`

    this.phoneContainer = new Component(this.phoneMail.element, 'a', ['footer-container__phone-mail__phone']);
    this.phoneContainer.element.setAttribute('href', 'tel:+375292927035');
    this.phoneLogo = new Component(this.phoneContainer.element, 'div', ['footer-container__phone-mail__phone-logo']);
    this.phoneLogo.element.style.backgroundImage = 'url("./assets/svg/phone-logo.svg")';
    this.phoneText = new Component(this.phoneContainer.element, 'p', ['footer-container__phone-mail__phone-text'], '+375 29 292 70 35');

    // create location
    this.location = new Component(this.footerContainer.element, 'div', ['footer-container__location']);
    this.locationTitle = new Component(this.location.element, 'h2', ['footer-container__location__title'], "Расположение");

    this.locationContainer = new Component(this.location.element, 'a', ['footer-container__location__location']);
    this.locationContainer.element.setAttribute('href', 'https://www.google.by/maps/place/%D0%A1%D0%A2%D0%9E+%22%D0%9C%D0%B0%D0%B3%D0%BD%D0%B0%D1%82+%D0%A1%D0%B8%D1%82%D0%B8%22/@53.8515028,27.4270573,299m/data=!3m1!1e3!4m5!3m4!1s0x46dbda3fdb39aef9:0xe5827269c40859ea!8m2!3d53.8518116!4d27.4272683?hl=ru%22%20target=%22_blank%22%3E%3Cdiv%20class=%22svg-1-location');
    this.locationContainer.element.setAttribute('target', '_blank');
    this.locationLogo = new Component(this.locationContainer.element, 'div', ['footer-container__location__location-logo']);
    this.locationLogo.element.style.backgroundImage = 'url("./assets/svg/location-logo.svg")';
    this.locationText = new Component(this.locationContainer.element, 'p', ['footer-container__location__location-text'], 'Учебный центр «Магнат», 223021, Минский р-н, пос. Озерцо, ул. Менковский тракт д.5');
  }
}

export default Footer;
