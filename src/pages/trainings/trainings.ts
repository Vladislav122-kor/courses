import TrainingsContainer from '../../components/trainings-container/trainings-container';
import Component from '../../utils/component';

class Trainings extends Component {
  private trainingsContainer: TrainingsContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainings']);

    this.trainingsContainer = new TrainingsContainer(this.element);
  }
}

export default Trainings;