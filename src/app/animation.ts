import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from '@angular/animations';

// Routable animations
export const slideInAnimation = trigger('routeAnimation', [
  transition('home <=> detail', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0
      })
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
    ]),
    query(':enter', animateChild())
  ])
]);

export const transformAnimation = trigger('routeAnimation', [
  transition('all <=> category', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: 'calc(100% - 2rem)',
        height: '100%'
      })
    ]),
    query(':enter', [style({ opacity: '0' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ opacity: '0' }))]),
      query(':enter', [animate('300ms ease-out', style({ opacity: '1' }))])
    ]),
    query(':enter', animateChild())
  ])
]);
