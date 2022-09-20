import Component from '../../utils/component';
import StartBlock from './start-block/start-block';
import AboutBlock from './about-block/about-block';
import TrainingsBlock from './trainings-block/trainings-block';
import TrainersBlock from './trainers-block/trainers-block';

class MainContainer extends Component {
  private startBlock: StartBlock;

  private aboutBlock: AboutBlock;

  private trainingsBlock: TrainingsBlock;

  private trainersBlock: TrainersBlock;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-container']);

    this.startBlock = new StartBlock(this.element);
    this.aboutBlock = new AboutBlock(this.element);
    this.trainingsBlock = new TrainingsBlock(this.element);
    this.trainersBlock = new TrainersBlock(this.element);
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default MainContainer;
