import Component from '../../utils/component';
import './footer.scss';

class Footer extends Component {

  private footerContainer: Component;

  private logo: Component;

  private contactsContainer: Component;

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

  private media: Component;

  private instagram: Component;

  private facebook: Component;

  private twitter: Component;
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['footer']);

    this.footerContainer = new Component(this.element, 'div', ['footer-container']);

    // create logo
    this.logo = new Component(this.footerContainer.element, 'a', ['footer__logo'], 'МАГНАТ');
    this.logo.element.setAttribute('href', '#/');

    // create contacts container
    this.contactsContainer = new Component(this.footerContainer.element, 'div', ['footer__contacts']);

    // create phone and mail
    this.phoneMail = new Component(this.contactsContainer.element, 'div', ['footer__phone-mail']);
    this.phoneMailTitle = new Component(this.phoneMail.element, 'h2', ['footer__phone-mail-title'], "Контакты");
    this.mailContainer = new Component(this.phoneMail.element, 'a', ['footer__mail']);
    this.mailContainer.element.setAttribute('href', 'mailto:study@center.by');
    this.mailLogo = new Component(this.mailContainer.element, 'div', ['footer__mail-logo']);
    this.mailText = new Component(this.mailContainer.element, 'p', ['footer__mail-text'], 'study@center.by');
    this.phoneContainer = new Component(this.phoneMail.element, 'a', ['footer__phone']);
    this.phoneContainer.element.setAttribute('href', 'tel:+375291234567');
    this.phoneLogo = new Component(this.phoneContainer.element, 'div', ['footer__phone-logo']);
    this.phoneText = new Component(this.phoneContainer.element, 'p', ['footer__phone-text'], '+375 17 123 45 67');

    // create location
    this.location = new Component(this.contactsContainer.element, 'div', ['footer__location']);
    this.locationTitle = new Component(this.location.element, 'h2', ['footer__location-title'], "Расположение");
    this.locationContainer = new Component(this.location.element, 'a', ['footer__location-container']);
    this.locationContainer.element.setAttribute('href', 'https://www.google.by/maps/place/%D0%A1%D0%A2%D0%9E+%22%D0%9C%D0%B0%D0%B3%D0%BD%D0%B0%D1%82+%D0%A1%D0%B8%D1%82%D0%B8%22/@53.8515028,27.4270573,299m/data=!3m1!1e3!4m5!3m4!1s0x46dbda3fdb39aef9:0xe5827269c40859ea!8m2!3d53.8518116!4d27.4272683?hl=ru%22%20target=%22_blank%22%3E%3Cdiv%20class=%22svg-1-location');
    this.locationContainer.element.setAttribute('target', '_blank');
    this.locationLogo = new Component(this.locationContainer.element, 'div', ['footer__location-container-logo']);
    this.locationText = new Component(this.locationContainer.element, 'p', ['footer__location-container-text'], 'Учебный центр «Магнат», 223021, Минский р-н, пос. Озерцо, ул. Менковский тракт д.5');

    // create social-media links
    this.media = new Component(this.footerContainer.element, 'div', ['footer__media']);
    this.instagram = new Component(this.media.element, 'div', ['footer__media-instagram']);
    this.facebook = new Component(this.media.element, 'div', ['footer__media-facebook']);
    this.twitter = new Component(this.media.element, 'div', ['footer__media-twitter']);
  }
}

export default Footer;
