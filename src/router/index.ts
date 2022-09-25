import { IRoute } from '../interfaces';
import Component from '../utils/component';
import Main from '../pages/main/main';
import Trainings from '../pages/trainings/trainings';
import Training from '../pages/training/training';
import Schedule from '../pages/schedule/schedule';
import Price from '../pages/price/price';

class Router {
  private readonly routes: Array<IRoute>;

  private defaultRoute: IRoute;

  private trainingLink: string;

  // Pages
  private mainPage: Main | undefined;

  private trainingsPage: Trainings | undefined;

  private trainingPage: Training | undefined;

  private schedulePage: Schedule | undefined;

  private pricePage: Price | undefined;

  constructor(private rootElement: HTMLElement) {
    this.trainingLink = '';
    
    this.routes = [
      {
        name: '/',
        component: () => {
          document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
          document.querySelector('.header__link-main')?.classList.add('active');
          this.mainPage = new Main(this.rootElement);
          this.rootElement.append(this.mainPage.element);
        },
      },

      {
        name: '/trainings',
        component: () => {
          document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
          document.querySelector('.header__link-trainings')?.classList.add('active');
          this.trainingsPage = new Trainings(this.rootElement);
          this.trainingsPage.updatePage();
          this.rootElement.append(this.trainingsPage.element);
          document.querySelectorAll('.trainings-container__categories__category').forEach((item) => {
            item.classList.remove('active');
            if (item.innerHTML === sessionStorage.getItem('category') || item.innerHTML.split(' ')[0].includes(sessionStorage.getItem('category') as string)) {
              item.classList.add('active');
            }
          });
        },
      },

      {
        name: '/training',
        component: () => {
          document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
          document.querySelector('.header__link-trainings')?.classList.add('active');
          this.trainingPage = new Training(this.rootElement, this.trainingLink);
          this.rootElement.append(this.trainingPage.element);
        },
      },

      {
        name: '/schedule',
        component: () => {
          document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
          document.querySelector('.header__link-schedule')?.classList.add('active');
          this.schedulePage = new Schedule(this.rootElement);
          this.rootElement.append(this.schedulePage.element);
        },
      },

      {
        name: '/price',
        component: () => {
          document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
          document.querySelector('.header__link-price')?.classList.add('active');
          this.pricePage = new Price(this.rootElement);
          this.rootElement.append(this.pricePage.element);
        },
      },
    ];

    this.defaultRoute = {
      name: 'Default router',
      component: () => {
        document.querySelectorAll('.header__nav-element').forEach((item) => item.classList.remove('active'));
        this.rootElement.innerHTML = '404. Page not found.';
      },
    };
  }

  updateRouter(): void {
    window.scrollTo(0, 0);
    const currentRouteName = window.location.hash.slice(1);
    if (currentRouteName === 'footer') {
      return;
    } else if (currentRouteName === 'trainers' || currentRouteName === 'about') {
      window.location.hash = '#/';
      return;
    }

    this.rootElement.innerHTML = '';
    if (currentRouteName.split('/').length === 3) {
      this.trainingLink = currentRouteName.split('/')[2];
      const currentRoute = this.routes.find(
        (page) => page.name === '/training',
      );
      (currentRoute || this.defaultRoute).component();
    } else {
      const currentRoute = this.routes.find(
        (page) => page.name === currentRouteName,
      );
      (currentRoute || this.defaultRoute).component();
    }
  }

  initRouter(): void {
    if (window.location.hash === '') {
      window.location.hash = '#/';
    }
    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}

export default Router;
