'use strict';

let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

// Store 1st 3 widgets in the variables a, b, c respectively and the rest in variable d 
let [a, b, c, ...d] = widgets;