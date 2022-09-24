import ScheduleContainer from '../../components/schedule-container/schedule-container';
import Component from '../../utils/component';

class Schedule extends Component {
  private scheduleContainer: ScheduleContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['schedule']);

    this.scheduleContainer = new ScheduleContainer(this.element);
  }
}

export default Schedule;