import Component from '../../../utils/component';

import './index.scss';

class FormBlock extends Component {
  private container: Component;

  private title: Component;

  private name: Component;

  private phone: Component;

  private checkboxContainer: Component;

  private checkbox: Component;

  private label: Component;

  private button: Component;

  private line: Component;

  private description: Component;
    
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form-block']);
    this.element.style.backgroundImage = 'linear-gradient( rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2) ), url("./assets/img/form.jpg")';

    this.formSend = this.formSend.bind(this);

    // common container for two blocks
    this.container = new Component(this.element, 'div', ['form-block__container']);
    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.classList.add('form-block__content');
    this.container.element.appendChild(form);
    this.title = new Component(form, 'h2', ['form-block__content__title'], 'Остались вопросы?');
    this.line = new Component(form, 'div', ['form-block__content__line']);
    this.description = new Component(form, 'p', ['form-block__content__description'], 'Будем рады помочь! Оставьте запрос, и наш специалист свяжется с Вами по указанному номеру в ближайшее время!');
    this.name = new Component(form, 'input', ['form-block__content__input-name', '_req']);
    this.name.element.setAttribute('placeholder', 'Ваше имя*');
    this.name.element.setAttribute('type', 'text');
    this.name.element.setAttribute('name', 'name');
    this.phone = new Component(form, 'input', ['form-block__content__input-phone', '_req']);
    this.phone.element.setAttribute('placeholder', 'Ваш телефон*');
    this.phone.element.setAttribute('type', 'number');
    this.phone.element.setAttribute('name', 'phone');
    this.checkboxContainer = new Component(form, 'div', ['form-block__content__checkbox']);
    this.checkbox = new Component(this.checkboxContainer.element, 'input', ['form-block__content__checkbox-input', '_req']);
    this.checkbox.element.setAttribute('type', 'checkbox');
    this.checkbox.element.setAttribute('name', 'consent');
    this.checkbox.element.setAttribute('id', 'formConsent');
    this.checkbox.element.setAttribute('checked', 'true');
    this.label = new Component(this.checkboxContainer.element, 'label', ['form-block__content__checkbox-label'], 'Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных');
    this.label.element.setAttribute('for', 'formConsent');
    this.button = new Component(form, 'button', ['form-block__content__button'], 'ЗАКАЗАТЬ ЗВОНОК');
    this.button.element.setAttribute('type', 'submit');
    form.addEventListener('submit', this.formSend);
  }

  private async formSend(e: { preventDefault: () => void; }) {
    e.preventDefault();

    const form = document.querySelector('.form-block__content') as HTMLFormElement;

    const error = this.formValidate(form);

    const formData = new FormData(form);

    if (error === 0) {
      /*if (formData.get('name') !== null) {
        sendMail(formData.get('name') as string);
      }*/
        /*const response = await fetch('../../../assets/files/sendmail.php', {
            method: 'POST',
            body: formData.get('name')
        });
        //console.log(formData.get('name'));
        if (response.ok) {
            const result = await response.json();
            alert(result.message);
        } else {
            alert('Ошибка соединения. Попробуйте еще раз');
        }*/
    } else {
        alert('Заполните обязательные поля.');
    }
  }

  private formValidate(form: HTMLFormElement) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        this.formRemoveError(input as HTMLInputElement);

        if (input.getAttribute('type') === 'checkbox' && (input as HTMLInputElement).checked === false) {
            console.log(true);
            this.formAddError(input as HTMLInputElement);
            error++;
        } else {
            if ((input as HTMLInputElement).value === '') {
                this.formAddError(input as HTMLInputElement);
                error++;
            }
        }
    }

    return error;
  }

  private formAddError(input: HTMLInputElement) {
    input.classList.add('_error');
  }

  private formRemoveError(input: HTMLInputElement) {
    input.classList.remove('_error');
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default FormBlock;