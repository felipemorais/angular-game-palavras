"use strict";angular.module("writewordsApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/config",{templateUrl:"views/config.html",controller:"ConfigCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("writewordsApp").controller("MainCtrl",["$scope",function(a){function b(a,b){return Math.random()*(b-a)+a}var c,d=[],e=["Agulha","Anel","Anzol"],f=e.length;a.wordName="",a.wordNameNormalized="",a.response=[],a.responseOne="",a.win=!1,a.endGame=!1,a.score=0,a.checkLetter=function(b){var c=a.wordName.split("");console.log(a.response[b.$index].letter,c[b.$index]),a.response[b.$index].letter.toLowerCase()!==c[b.$index].toLowerCase()&&(a.response[b.$index].letter=""),a.checkWord()},a.changeWord=function(){a.wordName=e[c],a.win=!1,a.responseOne="",a.response=[];for(var b=0,d=a.wordName.length;d>b;b++)a.response.push({letter:""});a.wordNameNormalized=a.wordName.toLowerCase()},a.checkWord=function(){var b="";if(a.responseOne)b=a.responseOne;else for(var c=0,d=a.wordName.length;d>c;c++)b+=a.response[c].letter;a.win=a.wordName.toLowerCase()===b.toLowerCase(),a.win&&a.nextWord()},a.nextWord=function(e){var g,h=[];if(!e&&!a.win)return!1;for(d.indexOf(c)<0&&d.push(c);d.indexOf(g)>=0&&h.length<=f;)h.push(g),g=Math.floor(b(0,f));c=g,a.score=d.length-1,h.length>f?a.endGame=!0:a.changeWord()},a.nextWord(!0)}]),angular.module("writewordsApp").controller("ConfigCtrl",["$scope",function(){}]);