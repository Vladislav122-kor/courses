import Component from '../../../utils/component';

import './index.scss';

class FormBlock extends Component {
  private container: Component;
  private form: Component;
  private title: Component;
  private line: Component;
  private description: Component;
  private data: Component;
  private inputName: Component;
  private checkboxBlock: Component;
  private checkbox: Component;
  private checkboxDescription: Component;
  private button: Component;
  private inputPhoneBlock: Component;
  private startPhoneNumber: Component;
  private codeNumber: Component;
  private phoneNumber: Component;
  private waitingButton: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form-block']);
    
    this.element.style.backgroundImage = 'linear-gradient( rgba(25, 25, 26, 0.5), rgba(25, 25, 26, 0.5) ), url("./assets/img/form.jpg")';

    this.container = new Component(this.element, 'div', ['form-block__container']);
    this.form = new Component(this.container.element, 'div', ['form-block__form']);
    this.title = new Component(this.form.element, 'h2', ['form-block__form__title'], 'Остались вопросы?');
    this.line = new Component(this.form.element, 'div', ['form-block__form__line']);
    this.description = new Component(this.form.element, 'p', ['form-block__form__description']);
    this.description.element.innerHTML = 'Будем рады помочь! Оставьте запрос, и наш специалист свяжется с Вами по указанному номеру в ближайшее время!';

    this.data = new Component(this.form.element, 'div', ['form-block__form__data']);
    this.inputName = new Component(this.data.element, 'input', ['form-block__form__data__input']);
    (this.inputName.element as HTMLInputElement).setAttribute('type', 'text');
    (this.inputName.element as HTMLInputElement).setAttribute('placeholder', 'Ваше имя');

    this.inputPhoneBlock = new Component(this.data.element, 'div', ['form-block__form__data__input-phone-block']);
    this.startPhoneNumber = new Component(this.inputPhoneBlock.element, 'p', ['form-block__form__data__input-phone-block__start-phone-number'], '+375');
    this.codeNumber = new Component(this.inputPhoneBlock.element, 'input', ['form-block__form__data__input-phone-block__code-number']);
    (this.codeNumber.element as HTMLInputElement).addEventListener('input', this.makeCodeValidation.bind(this));
    (this.codeNumber.element as HTMLInputElement).setAttribute('placeholder', 'Код');
    this.phoneNumber = new Component(this.inputPhoneBlock.element, 'input', ['form-block__form__data__input-phone-block__phone-number']);
    (this.phoneNumber.element as HTMLInputElement).addEventListener('input', this.makePhoneValidation.bind(this));
    (this.phoneNumber.element as HTMLInputElement).setAttribute('placeholder', 'Номер телефона');

    this.checkboxBlock = new Component(this.data.element, 'div', ['form-block__form__data__checkbox-block']);
    this.checkbox = new Component(this.checkboxBlock.element, 'input', ['form-block__form__data__checkbox-block__checkbox']);
    (this.checkbox.element as HTMLInputElement).setAttribute('type', 'checkbox');
    this.checkboxDescription = new Component(this.checkboxBlock.element, 'p', ['form-block__form__data__checkbox-block__checkbox-description']);
    this.checkboxDescription.element.innerHTML = `Нажимая на кнопку, вы соглашаетесь с <a href="https://pravo.by/upload/docs/op/H12100099_1620939600.pdf" target="_blank">условиями обработки персональных данных</a>`;

    this.button = new Component(this.form.element, 'div', ['form-block__form__button'], 'ЗАКАЗАТЬ ЗВОНОК');
    this.button.element.addEventListener('click', this.makeValidation.bind(this));

    this.waitingButton = new Component(this.form.element, 'div', ['form-block__form__waiting-button'], 'ПОДОЖДИТЕ...');
  }
  
  private makeValidation() {
    const name = (this.inputName.element as HTMLInputElement).value;
    const phoneCode = (this.codeNumber.element as HTMLInputElement).value;
    const phoneNumber = (this.phoneNumber.element as HTMLInputElement).value;

    const mistakenElements = document.querySelectorAll('.mistake');
    for (let i = 0; i < mistakenElements.length; i++) {
      mistakenElements[i].classList.remove('mistake');
    }

    if (this.makeNameValidation(name)) {
      this.inputName.element.classList.add('mistake');
      alert('Введите имя');
      return;
    }

    const codes = ['25', '29', '33', '44'];
    if (phoneCode.length !== 2 || !codes.includes(phoneCode)) {
      this.codeNumber.element.classList.add('mistake');
      alert('Неверный код оператора');
      return;
    }

    if (phoneNumber.length !== 7) {
      this.phoneNumber.element.classList.add('mistake');
      alert('Некорректный номер телефона');
      return;
    }

    if (!((this.checkbox.element as HTMLInputElement).checked)) {
      this.checkboxBlock.element.classList.add('mistake');
      alert('Вы не согласились с условиями обработки персональных данных');
      return;
    }

    this.button.element.style.display = 'none';
    this.waitingButton.element.style.display = 'flex';

    this.sendRequest(name, phoneCode, phoneNumber);
  }

  private makeNameValidation(name: string) {
    if (name.trim().length === 0) {
      return 'Введите имя';
    }

    return false;
  }

  private makeCodeValidation() {
    let number = (this.codeNumber.element as HTMLInputElement).value;

    number = number.replace(/\D/gi, '');
    (this.codeNumber.element as HTMLInputElement).value = number;

    if (number.length > 2) {
      (this.codeNumber.element as HTMLInputElement).value = number.slice(0, 2);
    }
  }

  private makePhoneValidation() {
    let number = (this.phoneNumber.element as HTMLInputElement).value;

    number = number.replace(/\D/gi, '');
    (this.phoneNumber.element as HTMLInputElement).value = number;

    if (number.length > 7) {
      (this.phoneNumber.element as HTMLInputElement).value = number.slice(0, 7);
    }
  }

  private async sendRequest(name: string, phoneCode: string, phoneNumber: string) {
    try {
      const response = await fetch('http://localhost:5000/api/recall', {
        method: 'POST',
        body: JSON.stringify({
          name,
          phoneCode,
          phoneNumber
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      (this.inputName.element as HTMLInputElement).value = '';
      (this.codeNumber.element as HTMLInputElement).value = '';
      (this.phoneNumber.element as HTMLInputElement).value = '';
      (this.checkbox.element as HTMLInputElement).checked = false;

      this.waitingButton.element.style.display = 'none';
      this.button.element.style.display = 'flex';
      
      if (response.status === 400) { 
        alert(data.message);
        return; 
      }
      else if(response.status === 500) {
        alert('Запрос отклонен. Пожалуйста, попробуйте еще раз');
        return;
      }

      alert(data);
    } catch {
      this.waitingButton.element.style.display = 'none';
      this.button.element.style.display = 'flex';

      alert('Запрос отклонен. Пожалуйста, попробуйте еще раз');
    }
  }
}

export default FormBlock;