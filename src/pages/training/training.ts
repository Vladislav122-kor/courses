import TrainingContainer from '../../components/training-container/training-container';
import Component from '../../utils/component';

class Training extends Component {
  private trainingContainer: TrainingContainer;
  private trainingName: string;

  constructor(parentNode: HTMLElement, trainingName: string) {
    super(parentNode, 'div', ['training']);

    this.trainingName = trainingName;

    this.trainingContainer = new TrainingContainer(this.element, this.trainingName);
  }
}

export default Training;