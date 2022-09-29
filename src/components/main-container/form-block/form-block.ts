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
    this.element.style.backgroundImage = 'linear-gradient( rgba(25, 25, 26, 0.5), rgba(25, 25, 26, 0.5) ), url("./assets/img/form.jpg")';

    this.formSend = this.formSend.bind(this);

    // common container for two blocks
    this.container = new Component(this.element, 'div', ['form-block__container']);
    const form = document.createElement('form');
    form.setAttribute('id', 'tg');
    form.classList.add('form-block__content');
    this.container.element.appendChild(form);
    this.title = new Component(form, 'h2', ['form-block__content__title'], 'Остались вопросы?');
    this.line = new Component(form, 'div', ['form-block__content__line']);
    this.description = new Component(form, 'p', ['form-block__content__description'], 'Вы можете задать свой вопрос по e-mail: study@mail.ru, или оставьте Ваши контактные данные и мы свяжемся с Вами!');
    this.name = new Component(form, 'input', ['form-block__content__input-name', '_req']);
    this.name.element.setAttribute('placeholder', 'Ваше имя*');
    this.name.element.setAttribute('type', 'text');
    this.name.element.setAttribute('name', 'name');
    this.name.element.setAttribute('autocomplete', 'off');
    this.phone = new Component(form, 'input', ['form-block__content__input-phone', '_req']);
    this.phone.element.setAttribute('placeholder', 'пример: +375291234567');
    this.phone.element.setAttribute('type', 'number');
    this.phone.element.setAttribute('name', 'phone');
    this.phone.element.setAttribute('autocomplete', 'off');
    this.checkboxContainer = new Component(form, 'div', ['form-block__content__checkbox']);
    this.checkbox = new Component(this.checkboxContainer.element, 'input', ['form-block__content__checkbox-input', '_req']);
    this.checkbox.element.setAttribute('type', 'checkbox');
    this.checkbox.element.setAttribute('name', 'consent');
    this.checkbox.element.setAttribute('id', 'formConsent');
    this.checkbox.element.setAttribute('checked', 'true');
    this.label = new Component(this.checkboxContainer.element, 'label', ['form-block__content__checkbox-label'], 'Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных (в соответствии с Законом Республики Беларусь "О защите персональных данных" № 99-3 от 07.05.2021)');
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
        const response = await fetch('./assets/sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            form.reset();
        } else {
            alert('Ошибка соединения. Попробуйте еще раз');
        }
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
        document.querySelector('.form-block__content__checkbox')?.classList.remove('_error');

        if (input.getAttribute('type') === 'checkbox' && (input as HTMLInputElement).checked === false) {
            document.querySelector('.form-block__content__checkbox')?.classList.add('_error');
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