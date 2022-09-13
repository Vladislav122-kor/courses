import Component from '../../utils/component';
import StartBlock from './start-block/start-block';

import './index.scss';

class MainContainer extends Component {
  private startBlock: StartBlock;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-container']);

    this.startBlock = new StartBlock(this.element);


  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default MainContainer;
