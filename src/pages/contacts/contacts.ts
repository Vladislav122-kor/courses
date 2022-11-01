import ContactsContainer from '../../components/contacts-container/contacts-container';
import Component from '../../utils/component';

class Contacts extends Component {
  private contactsContainer: ContactsContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['contacts']);

    this.contactsContainer = new ContactsContainer(this.element);
  }
}

export default Contacts;
