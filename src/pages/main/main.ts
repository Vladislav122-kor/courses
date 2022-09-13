import MainContainer from '../../components/main-container/main-container';
import Component from '../../utils/component';

class Main extends Component {
  private mainContainer: MainContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main']);

    this.mainContainer = new MainContainer(this.element);
  }
}

export default Main;
