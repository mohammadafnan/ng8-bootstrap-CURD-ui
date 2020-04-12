// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, state } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);

export const EnterLeaveAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax

    trigger('EnterLeave', [
        // state('flyIn', style({ transform: 'translateX(0)' })),
        // transition(':enter', [
        //     style({ transform: 'translateX(-100%)' }),
        //     animate('0.5s 300ms ease-in')
        // ]),
        transition(':leave', [
            animate('0.7s ease-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);