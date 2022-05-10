// ==UserScript==
// @name         buildkite
// @version      0.0.1
// @author       xiaket/kaix-canva
// @description  hide successful jobs in buildkite
// @match        *://buildkite.com/*/*/builds/*
// @icon         https://buildkiteassets.com/assets/favicon-failed-71ec5cf972dfd55cee429a0d7d06c95dca900b4206220dadbae823b5005b6193.png
// @grant        none
// @license      GPL-3.0 License
// @run-at       document-end
// @namespace    https://github.com/xiaket/userscripts
// @supportURL   https://github.com/xiaket/userscripts
// @homepageURL  https://github.com/xiaket/userscripts
// ==/UserScript==


(function() {
  'use strict';

  document.getElementsByClassName('build-duration')[0].oncontextmenu = function(event){
    let buttons = document.getElementsByClassName("build-pipeline-state-passed");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons.item(i).style.display === ""){
        buttons.item(i).style.display = "none";
      }else{
        buttons.item(i).style.display = "";
      }
    };
      
    let blocks = document.getElementsByClassName("build-details-pipeline-job-state-passed");
    for (var i = 0; i < blocks.length; i++) {
      let block = blocks.item(i);
      if (block.classList.contains("job-retry-group-first") || block.classList.contains("job-retry-group-last")){
        continue
      }
      if (block.style.display === ""){
        block.style.display = "none";
      }else{
        block.style.display = "";
      }
    };
  }
})();
