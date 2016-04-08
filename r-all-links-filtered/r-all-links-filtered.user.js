// ==UserScript==
// @name         r-all-links-filtered
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  All /r/All links point to filtered /r/All
// @author       /u/SpaceNacho
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName("a");
    for (var i = 0, l = links.length; i < l; i++) {
        // the only /r/All link apperas to be (i == 104)
        // leaving loop in case that changes
        var link = links[i];
        if (link.href === 'https://www.reddit.com/r/all') {
            console.log(i);
            link.innerHTML = "All (Filtered)";
            link.href = "https://www.reddit.com/me/f/all/";
        }
    }
})();