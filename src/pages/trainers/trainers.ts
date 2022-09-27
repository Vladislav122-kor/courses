import TrainersContainer from '../../components/trainers-container/trainers-container';
import Component from '../../utils/component';

class Trainers extends Component {
  private trainersContainer: TrainersContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['trainers']);

    this.trainersContainer = new TrainersContainer(this.element);
  }
}

export default Trainers;