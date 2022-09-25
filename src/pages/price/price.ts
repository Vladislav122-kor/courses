import PriceContainer from '../../components/price-container/price-container';
import Component from '../../utils/component';

class Price extends Component {
  private priceContainer: PriceContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['price']);

    this.priceContainer = new PriceContainer(this.element);
  }
}

export default Price;