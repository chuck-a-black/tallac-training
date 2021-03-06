/*
  (c) Copyright 2012 Hewlett-Packard Development Company, L.P.
  Autogenerated
 */

// JSLint directive...
/*global $: false, SKI: false */

(function (api) {
    'use strict';

    var f = api.fn,          // general functions API
        nav = api.nav;       // navigation model API

    f.trace('including cb-nav.js');

    // Add a new category and new item
    nav.insertCategoryAfter('c-tasks', 'c-cb', [
        nav.item('n-cb', 'cb', 'square')
    ]);

    // Add a new item to an existing category
    nav.insertItemsBefore('n-exportLogs', [
        nav.item('n-cb-task', 'cbTask', 'square')
    ]);

}(SKI));
