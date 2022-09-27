import Component from '../../utils/component';
import StartBlock from './start-block/start-block';
import AboutBlock from './about-block/about-block';
import TrainingsBlock from './trainings-block/trainings-block';
import SuggestionBlock from './suggestion-block/suggestion-block';
import TrainersBlock from './trainers-block/trainers-block';
import FormBlock from './form-block/form-block';

class MainContainer extends Component {
  private startBlock: StartBlock;

  private aboutBlock: AboutBlock;

  private trainingsBlock: TrainingsBlock;

  private suggestionBlock: SuggestionBlock;

  private trainersBlock: TrainersBlock;

  private formBlock: FormBlock;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-container']);

    this.startBlock = new StartBlock(this.element);
    this.aboutBlock = new AboutBlock(this.element);
    this.trainingsBlock = new TrainingsBlock(this.element);
    this.suggestionBlock = new SuggestionBlock(this.element);
    this.trainersBlock = new TrainersBlock(this.element);
    this.formBlock = new FormBlock(this.element);
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default MainContainer;
