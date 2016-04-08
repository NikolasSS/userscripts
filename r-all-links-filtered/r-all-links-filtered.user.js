// ==UserScript==
// @name         r-all-links-filtered
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  All /r/All links point to filtered /r/All
// @author       /u/SpaceNacho (NikolasSS)
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName("a");
    for (var i = 0, l = links.length; i < l; i++) {
        var link = links[i];
        if (link.href === 'https://www.reddit.com/r/all') {
            link.innerHTML = "All (Filtered)";
            link.href = "https://www.reddit.com/me/f/all/";
        }
    }
})();