import Component from '../../utils/component';
import './footer.scss';

class Footer extends Component {

  private footerContainer: Component;

  private logoContainer: Component;

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
    this.logoContainer = new Component(this.footerContainer.element, 'div', ['footer__logo']);
    this.logo = new Component(this.logoContainer.element, 'a', ['footer__logo-link'], 'МАГНАТ');
    this.logo.element.setAttribute('href', '#/');

    // create contacts container
    this.contactsContainer = new Component(this.footerContainer.element, 'div', ['footer__contacts']);

    // create phone and mail
    this.phoneMail = new Component(this.contactsContainer.element, 'div', ['footer__phone-mail']);
    this.phoneMailTitle = new Component(this.phoneMail.element, 'h2', ['footer__phone-mail-title'], "Контакты");
    this.mailContainer = new Component(this.phoneMail.element, 'div', ['footer__mail']);
    this.mailLogo = new Component(this.mailContainer.element, 'div', ['footer__mail-logo']);
    this.mailText = new Component(this.mailContainer.element, 'p', ['footer__mail-text'], 'study@center.by');
    this.phoneContainer = new Component(this.phoneMail.element, 'div', ['footer__phone']);
    this.phoneLogo = new Component(this.phoneContainer.element, 'div', ['footer__phone-logo']);
    this.phoneText = new Component(this.phoneContainer.element, 'p', ['footer__phone-text'], '+375 17 123 45 67');

    // create location
    this.location = new Component(this.contactsContainer.element, 'div', ['footer__location']);
    this.locationTitle = new Component(this.location.element, 'h2', ['footer__location-title'], "Расположение");
    this.locationContainer = new Component(this.location.element, 'div', ['footer__location-container']);
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
