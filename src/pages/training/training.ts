import TrainingContainer from '../../components/training-container/training-container';
import Component from '../../utils/component';

class Training extends Component {
  private trainingContainer: TrainingContainer;
  private trainingLink: string;

  constructor(parentNode: HTMLElement, trainingLink: string) {
    super(parentNode, 'div', ['training']);

    this.trainingLink = trainingLink;

    this.trainingContainer = new TrainingContainer(this.element, this.trainingLink);
  }
}

export default Training;