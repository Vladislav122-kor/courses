import Component from '../../utils/component';
import StartBlock from './start-block/start-block';
import AboutBlock from './about-block/about-block';

import './index.scss';

class MainContainer extends Component {
  private startBlock: StartBlock;

  private aboutBlock: AboutBlock;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-container']);

    this.startBlock = new StartBlock(this.element);
    this.aboutBlock = new AboutBlock(this.element);
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default MainContainer;
