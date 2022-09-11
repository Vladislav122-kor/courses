import Component from '../../utils/component';

import './index.scss';

class MainContainer extends Component {
  private empty: Component;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-container']);

    this.empty = new Component(this.element, 'h2', ['h2'], 'Пусто');
  }

  private clear() {
    // this.content.element.innerHTML = '';
  }
}

export default MainContainer;
