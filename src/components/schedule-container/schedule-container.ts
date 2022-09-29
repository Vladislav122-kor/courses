import Component from '../../utils/component';
import Schedule from '../../assets/files/schedule';
import FormBlock from '../main-container/form-block/form-block';

import './schedule-container.scss';

class ScheduleContainer extends Component {
  private container: Component;

  private formBlock: FormBlock;

  private line: Component;

  private content: Component;

  private months: string[];
  
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['schedule-container']);

    this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', ' Октябрь', 'Ноябрь', 'Декабрь'];

    this.container = new Component(this.element, 'div', ['schedule-container__container']);

    this.line = new Component(this.container.element, 'div', ['schedule-container__line']);

    this.createMonthsButton();

    this.content = new Component(this.container.element, 'div', ['schedule-container__content']);
    this.createSchedule();

    this.formBlock = new FormBlock(this.element);
  }

  private createSchedule() {
    //the first day of the month
    const date = new Date(2022, +(sessionStorage.getItem('month') as string), 1);

    const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    let count = 0;

    // add zero before month (if month includes only one number)
    let monthNumber;
    if ((sessionStorage.getItem('month') as string).length === 1) {
        monthNumber = `0${sessionStorage.getItem('month')}`;
    } else {
        monthNumber = `${sessionStorage.getItem('month')}`;
    }

    // create names of the days of week
    for (let i = 0; i < days.length; i++) {
        const block = new Component(this.content.element, 'div', ['schedule-container__content__day', 'day-week']);
        block.element.innerHTML = `<b>${days[i]}</b>`;
        block.element.style.fontSize = `2.5rem`;
        block.element.style.height = `75px`;
        block.element.style.padding = `25px`;
        block.element.style.color = `white`;
        block.element.style.background = `#222736`;
        count++;
    }

    // create empty slots before starting the first day of the month (empty slots of the previous month)
    for (let i = 0; i < date.getDay() - 1; i++) {
        const block = new Component(this.content.element, 'div', ['schedule-container__content__day', 'day-empty']);
        block.element.style.background = `rgba(223, 169, 116, 0.5)`;
        count++;
    }

    //create slots with dates
    while(date.getMonth() === +(sessionStorage.getItem('month') as string)) {

        // add zero before date (if the date includes only one number)
        let dateNumber;
        if (date.getDate().toString().length === 1) {
            dateNumber = `0${date.getDate()}`;
        } else {
            dateNumber = `${date.getDate()}`;
        }

        const block = new Component(this.content.element, 'div', ['schedule-container__content__day', 'day-full']);
        block.element.style.background = `rgba(223, 169, 116, 1)`;
        block.element.innerHTML = `<b>${dateNumber}.${monthNumber}</b>`;

        // add training that is planning to be hold on this date
        Schedule.forEach((elem) => {
            if (elem.month - 1 === +(sessionStorage.getItem('month') as string)) {
                elem.trainings.forEach((element) => {
                    if (+(element[1]) === date.getDate()) {
                        block.element.innerHTML += '<br>' + element[0];
                        block.element.innerHTML += '<br>' + '<b>Город:</b> ' + element[2];
                        block.element.classList.add('training-day');
                    }
                });
            }
        })

        // increase the date
        date.setDate(date.getDate() + 1);
        count++;
    }

    // create empty slots after ending the last day of the month (empty slots of the future month)
    for (let i = 0; i < (date.getDay() - 8) * -1; i++) {
        const block = new Component(this.content.element, 'div', ['schedule-container__content__day', 'day-empty']);
        block.element.style.background = `rgba(223, 169, 116, 0.5)`;
        count++;
    }
  }

  private createMonthsButton() {
    const button = new Component(this.container.element, 'div', ['schedule-container__button']);
    const name = new Component(button.element, 'p', ['schedule-container__button__name'], `${this.months[+(sessionStorage.getItem('month') as string)]}`);
    const arrow = new Component(button.element, 'div', ['schedule-container__button__arrow']);
    arrow.element.style.backgroundImage = 'url("./assets/svg/arrow-down.svg")';

    const optionsBlock = new Component(button.element, 'div', ['schedule-container__button__options-block']);
    Schedule.forEach((item) => {
        const option = new Component(optionsBlock.element, 'p', ['schedule-container__button__options-block__option'], `${this.months[item.month - 1]}`);
        option.element.setAttribute('data-month', `${item.month - 1}`);
    })

    button.element.addEventListener('click', (e) => {
        if (!(e.target as HTMLElement).className.includes('option')) {
            if (!button.element.classList.contains('active')) {
                button.element.classList.add('active');
                optionsBlock.element.style.display = 'flex';
            } else {
                button.element.classList.remove('active');
                optionsBlock.element.style.display = 'none';
            }
        }
    });

    optionsBlock.element.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).className === 'schedule-container__button__options-block__option') {
            button.element.classList.remove('active');
            name.element.innerHTML = (e.target as HTMLElement).innerHTML;
            optionsBlock.element.style.display = 'none';
            sessionStorage.setItem('month', `${(e.target as HTMLElement).getAttribute('data-month')}`);
            this.content.element.innerHTML = '';
            this.createSchedule();
        }
    })
  }

  private clear() {
    //this.container.element.innerHTML = '';
  }
}

export default ScheduleContainer;