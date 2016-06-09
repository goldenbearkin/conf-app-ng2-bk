// import {
//   beforeEach,
//   beforeEachProviders,
//   describe,
//   expect,
//   it,
//   inject,
// } from '@angular/core/testing';
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { TalkComponent } from './talk.component';

// describe('Component: Talk', () => {
//   let builder: TestComponentBuilder;

//   beforeEachProviders(() => [TalkComponent]);
//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));

//   it('should inject the component', inject([TalkComponent],
//       (component: TalkComponent) => {
//     expect(component).toBeTruthy();
//   }));

//   it('should create the component', inject([], () => {
//     return builder.createAsync(TalkComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(TalkComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });

// @Component({
//   selector: 'test',
//   template: `
//     <app-talk></app-talk>
//   `,
//   directives: [TalkComponent]
// })
// class TalkComponentTestController {
// }

