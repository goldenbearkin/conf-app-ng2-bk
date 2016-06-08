import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ConfAppAppComponent } from '../app/conf-app.component';

beforeEachProviders(() => [ConfAppAppComponent]);

describe('App: ConfApp', () => {
  it('should create the app',
      inject([ConfAppAppComponent], (app: ConfAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'conf-app works!\'',
      inject([ConfAppAppComponent], (app: ConfAppAppComponent) => {
    expect(app.title).toEqual('conf-app works!');
  }));
});
