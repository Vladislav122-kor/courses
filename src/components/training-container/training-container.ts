import Component from '../../utils/component';
import trainings from '../../assets/files/trainings';
import FormBlock from '../main-container/form-block/form-block';

import './index.scss';

class TrainingContainer extends Component {
  private container: Component;

  private trainingName: string;

  private name: Component;

  private formBlock: FormBlock;
  
  constructor(parentNode: HTMLElement, trainingName: string) {
    super(parentNode, 'div', ['training-container']);
    this.trainingName = trainingName;

    this.container = new Component(this.element, 'div', ['training-container__container']);
    this.name = new Component(this.container.element, 'h2', ['h2'], this.trainingName);

    this.formBlock = new FormBlock(this.element);
  }

  private createContent() {

  }

  private clear() {
    this.container.element.innerHTML = '';
    this.createContent();
  }
}

export default TrainingContainer;