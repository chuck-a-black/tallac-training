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

    f.trace('including blacklist-nav.js');

    // Add a new category and new item
    nav.insertCategoryAfter('c-tasks', 'c-blacklist', [
        nav.item('n-blacklist', 'blacklist', 'square')
    ]);

    // Add a new item to an existing category
    nav.insertItemsBefore('n-exportLogs', [
        nav.item('n-blacklist-task', 'blacklistTask', 'square')
    ]);

}(SKI));