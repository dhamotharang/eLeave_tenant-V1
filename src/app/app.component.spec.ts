import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

describe('AppComponent', () => {

  // let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
      imports: [ RouterTestingModule.withRoutes([]), IonicStorageModule.forRoot()],
    }).compileComponents();
  }));

  // this.createApp();
  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // this.initApp();
  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  // this.createMenuLabels();
  it('should have menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(5);
    expect(menuItems[0].textContent).toContain('Dashboard');
    expect(menuItems[1].textContent).toContain('Customers');
    expect(menuItems[2].textContent).toContain('Subscriptions');
    expect(menuItems[3].textContent).toContain('Support');
    expect(menuItems[4].textContent).toContain('Settings');
  });

  it('should have urls', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(5);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/main/dashboard');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/main/customers');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/main/subscriptions');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/main/support');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('/main/settings');
  });

});


function createApp() {
  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
}

function initApp() {
  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });
}

function createMenuLabels() {
  it('should have menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(6);
    // expect(menuItems[0].textContent).toContain('Home');
    expect(menuItems[0].textContent).toContain('Dashboard');
    expect(menuItems[1].textContent).toContain('Customers');
    expect(menuItems[2].textContent).toContain('Subscriptions');
    expect(menuItems[3].textContent).toContain('Support');
    expect(menuItems[4].textContent).toContain('Settings');
  });

  it('should have urls', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(6);
    // expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/main/dashboard');
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/main/dashboard');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/main/customers');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/main/subscriptions');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/main/support');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('/main/settings');
  });
}

