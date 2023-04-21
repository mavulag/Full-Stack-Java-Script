'use strict';

(function initLoop() {
    function doLoop(x) {
        console.log('loop: ', x);
    }

    // block level scoping
    for (let i = 0; i < 10; i++) {
        doLoop(i + 1);
    }
})();