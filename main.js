(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/setup/setup.component.ts");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
/* harmony import */ var _qna_qna_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qna/qna.component */ "./src/app/qna/qna.component.ts");
/* harmony import */ var _weatherapp_weatherapp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weatherapp/weatherapp.component */ "./src/app/weatherapp/weatherapp.component.ts");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interview/interview.component */ "./src/app/interview/interview.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'overview', component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
    { path: 'setup', component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_4__["SetupComponent"] },
    { path: 'topics', component: _topics_topics_component__WEBPACK_IMPORTED_MODULE_5__["TopicsComponent"] },
    { path: 'qna', component: _qna_qna_component__WEBPACK_IMPORTED_MODULE_6__["QnaComponent"] },
    { path: 'weatherapp', component: _weatherapp_weatherapp_component__WEBPACK_IMPORTED_MODULE_7__["WeatherappComponent"] },
    { path: 'interview', component: _interview_interview_component__WEBPACK_IMPORTED_MODULE_8__["InterviewComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\r\n    width: 250px;\r\n    padding: 10px;\r\n    background: #f44336 !important;\r\n    color: #fff !important;\r\n}\r\nmat-list a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\r\n    color: #fff;\r\n}\r\n.mat-list-item .ng-fa-icon {\r\n    padding-right:10px;\r\n    min-width: 20px;\r\n}\r\n.header-fill-remaining-space {\r\n    flex: 1 1 auto;\r\n  }\r\n.topmenu {\r\n    margin-right: 20px;\r\n}\r\n.dateandtime {\r\n    color: #fab1a0;\r\n    margin-left: 15px;\r\n}\r\n.header-icon {\r\n    padding: 0 14px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n  <mat-sidenav #drawer mode=\"push\" color=\"warn\">\n    <h3 class=\"dateandtime\">{{currentDate | date:'dd MMMM yyyy'}}</h3>\n    <mat-list>\n      <a routerLink=\"\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faHome\"></fa-icon> Home\n        </mat-list-item>\n      </a>\n      <a routerLink=\"/overview\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faBookOpen\"></fa-icon> Overview\n        </mat-list-item>\n      </a>\n      <a routerLink=\"/setup\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faCog\"></fa-icon> Setup Guide\n        </mat-list-item>\n      </a>\n      <a routerLink=\"/topics\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faClipboardList\"></fa-icon> Angular Topics\n        </mat-list-item>\n      </a>\n      <mat-divider></mat-divider>\n      <br />\n      <a routerLink=\"/weatherapp\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faCode\"></fa-icon> Quick Tutorial on Weather App\n        </mat-list-item>\n      </a>\n      <a routerLink=\"/qna\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faQuestion\"></fa-icon> Learn from Q&A\n        </mat-list-item>\n      </a>\n      <a routerLink=\"/interview\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faFile\"></fa-icon> Interview Questions\n        </mat-list-item>\n      </a>\n      <mat-divider></mat-divider>\n      <br />\n      <a routerLink=\"/about\" (click)=\"drawer.toggle()\">\n        <mat-list-item>\n          <fa-icon [icon]=\"faUser\"></fa-icon> About the Author\n        </mat-list-item>\n      </a>\n    </mat-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <fa-icon class=\"topmenu\" mat-button (click)=\"drawer.toggle()\" [icon]=\"faBars\"></fa-icon>\n        <span>{{title}}</span>\n        <span class=\"header-fill-remaining-space\"></span>\n        <span><fa-icon (tap)=\"navigateBack()\" [icon]=\"faArrowCircleLeft\" class=\"header-icon\"></fa-icon></span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_location) {
        this._location = _location;
        this.title = 'Angular Tutorial';
        this.currentDate = new Date();
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.faBookOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBookOpen"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.faQuestion = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faQuestion"];
        this.faFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFile"];
        this.faCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCode"];
        this.faClipboardList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClipboardList"];
        this.faArrowCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowCircleLeft"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleLeft"];
    }
    /**
     * method will take user to back screen
     * It is applied on global app toolbar
    */
    AppComponent.prototype.navigateBack = function () {
        this._location.back();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/setup/setup.component.ts");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
/* harmony import */ var _weatherapp_weatherapp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./weatherapp/weatherapp.component */ "./src/app/weatherapp/weatherapp.component.ts");
/* harmony import */ var _qna_qna_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./qna/qna.component */ "./src/app/qna/qna.component.ts");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./interview/interview.component */ "./src/app/interview/interview.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_14__["OverviewComponent"],
                _setup_setup_component__WEBPACK_IMPORTED_MODULE_15__["SetupComponent"],
                _topics_topics_component__WEBPACK_IMPORTED_MODULE_16__["TopicsComponent"],
                _weatherapp_weatherapp_component__WEBPACK_IMPORTED_MODULE_17__["WeatherappComponent"],
                _qna_qna_component__WEBPACK_IMPORTED_MODULE_18__["QnaComponent"],
                _interview_interview_component__WEBPACK_IMPORTED_MODULE_19__["InterviewComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-title {\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n}\r\n\r\n.mat-card {\r\n    margin: 20px;\r\n    background-color: #27ae60;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-card-content {\r\n    color: #fff;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/overview\">\n  <mat-card>\n    <img mat-card-image src=\"./assets/overview.png\" alt=\"Angular Overview\">\n    <mat-card-content>\n        Angular Overview, version and technology\n    </mat-card-content>\n  </mat-card>\n</a>\n\n<a routerLink=\"/setup\">\n    <mat-card style=\"background-color: #7f8c8d\">\n      <img mat-card-image src=\"./assets/setup.PNG\" alt=\"Angular Setup\">\n      <mat-card-content>\n          Setup and create an Angular app\n      </mat-card-content>\n    </mat-card>\n</a>\n\n<a routerLink=\"/topics\">\n    <mat-card style=\"background-color:#0c2461\">\n      <img mat-card-image src=\"./assets/topics.PNG\" alt=\"Angular Topics\">\n      <mat-card-content>\n          Topics of Angular\n      </mat-card-content>\n    </mat-card>\n</a>\n\n<a routerLink=\"/weatherapp\">\n    <mat-card style=\"background-color:#82ccdd\">\n      <img mat-card-image src=\"./assets/weatherapp.PNG\" alt=\"Angular Topics\">\n      <mat-card-content>\n          Quick Tutorial on a Weather App development\n      </mat-card-content>\n    </mat-card>\n</a>\n\n<a routerLink=\"/qna\">\n    <mat-card style=\"background-color:#82589F\">\n      <img mat-card-image src=\"./assets/qna.PNG\" alt=\"Angular Topics\">\n      <mat-card-content>\n          Learn Angular from Questions and Answers\n      </mat-card-content>\n    </mat-card>\n</a>\n\n<a routerLink=\"/interview\">\n    <mat-card style=\"background-color:#EAB543\">\n      <img mat-card-image src=\"./assets/interview.PNG\" alt=\"Angular Topics\">\n      <mat-card-content>\n          Angular interview questions and there answers\n      </mat-card-content>\n    </mat-card>\n</a>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interview/interview.component.css":
/*!***************************************************!*\
  !*** ./src/app/interview/interview.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interview/interview.component.html":
/*!****************************************************!*\
  !*** ./src/app/interview/interview.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  interview works!\n</p>\n"

/***/ }),

/***/ "./src/app/interview/interview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interview/interview.component.ts ***!
  \**************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterviewComponent = /** @class */ (function () {
    function InterviewComponent() {
    }
    InterviewComponent.prototype.ngOnInit = function () {
    };
    InterviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interview',
            template: __webpack_require__(/*! ./interview.component.html */ "./src/app/interview/interview.component.html"),
            styles: [__webpack_require__(/*! ./interview.component.css */ "./src/app/interview/interview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InterviewComponent);
    return InterviewComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.css":
/*!*************************************************!*\
  !*** ./src/app/overview/overview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header {\r\n  font-size: 18px;\r\n  padding: 10px 24px;\r\n}\r\n\r\n.header-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.header-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\n    <mat-toolbar-row>\n      <span>Overview</span>\n      <span class=\"header-spacer\"></span>\n      <fa-icon [icon]=\"faBookOpen\" class=\"header-icon\"></fa-icon>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        About Angular\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    When people talk about Angular, they talk about it as a JavaScript framework. It is used to build so-called Single Page Applications (SPA).\n    <p>The Angular framework enables us to write these single page applications with ease. It comes with features like data-binding, change-detection, forms, routing & navigation and an HTTP-implementation right out of the box. </p>\n    <p>Angular is primarily sustained by Google together with an extended community of people and companies.</p>\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Version\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <strong>AngularJS</strong> and <strong>Angular</strong> are different frameworks.\n    <p>When it all started, this framework was called AngularJS, and alludes to what we now know as Angular 1.x. Then, Angular 2 arrived as a complete rewrite of the framework, improving from lessons learned and promising performance improvements, and a more scalable and more modern framework.</p>\n    <p>AngularJS<br>All versions (current and future ones) of AngularJS are versioned as 1.x.</p>\n    <p>Angular<br>Angular versions start at 2.0.0 which follows semantic versioning. Below are the list of available known Angular versions till December 2018.</p>\n    <table>\n      <thead>\n        <tr>\n          <th>Version</th>\n          <th>Release Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>^2.0.0</td>\n          <td>October 22-23, 2014</td>\n        </tr>\n        <tr>\n          <td>^4.0.0</td>\n          <td>March 23, 2017</td>\n        </tr>\n        <tr>\n          <td>^5.0.0</td>\n          <td>November 1, 2017</td>\n        </tr>\n        <tr>\n          <td>^6.0.0</td>\n          <td>May 3, 2018</td>\n        </tr>\n        <tr>\n          <td>7.0.0 </td>\n          <td>September/October 2018</td>\n        </tr>\n        <tr>\n          <td>8.0.0 </td>\n          <td>March/April 2019</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Things to know before starting Angular\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    Basic understanding of below list are recommanded:\n    <ul>\n      <li>HTML (<a href=\"https://www.w3schools.com/html/\">w3schools HTML Tutorial</a>)</li>\n      <li>CSS (<a href=\"https://www.w3schools.com/css/\">w3schools CSS Tutorial</a>)</li>\n      <li>JavaScript (<a href=\"https://www.w3schools.com/js/default.asp\">w3schools Javascript Tutorial</a>)</li>\n      <li>TypeScript</li>\n    </ul>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
        this.faBookOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBookOpen"];
        this.step = null;
    }
    OverviewComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    OverviewComponent.prototype.nextStep = function () {
        this.step++;
    };
    OverviewComponent.prototype.prevStep = function () {
        this.step--;
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/overview/overview.component.css")]
        })
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/qna/qna.component.css":
/*!***************************************!*\
  !*** ./src/app/qna/qna.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qna/qna.component.html":
/*!****************************************!*\
  !*** ./src/app/qna/qna.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  qna works!\n</p>\n"

/***/ }),

/***/ "./src/app/qna/qna.component.ts":
/*!**************************************!*\
  !*** ./src/app/qna/qna.component.ts ***!
  \**************************************/
/*! exports provided: QnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaComponent", function() { return QnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QnaComponent = /** @class */ (function () {
    function QnaComponent() {
    }
    QnaComponent.prototype.ngOnInit = function () {
    };
    QnaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna',
            template: __webpack_require__(/*! ./qna.component.html */ "./src/app/qna/qna.component.html"),
            styles: [__webpack_require__(/*! ./qna.component.css */ "./src/app/qna/qna.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QnaComponent);
    return QnaComponent;
}());



/***/ }),

/***/ "./src/app/setup/setup.component.css":
/*!*******************************************!*\
  !*** ./src/app/setup/setup.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header {\r\n    font-size: 18px;\r\n    padding: 10px 24px;\r\n}\r\n.header-icon {\r\n    padding: 0 14px;\r\n}\r\n.header-spacer {\r\nflex: 1 1 auto;\r\n}"

/***/ }),

/***/ "./src/app/setup/setup.component.html":
/*!********************************************!*\
  !*** ./src/app/setup/setup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\n    <mat-toolbar-row>\n      <span>Setup Guide</span>\n      <span class=\"header-spacer\"></span>\n      <fa-icon [icon]=\"faCog\" class=\"header-icon\"></fa-icon>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Setup a Node development environment\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    You need Node.js, since the libraries required for Angular are downloaded using node package manager (npm) . \n     Node.js powers client development and build tools. \n    The npm package manager, which is itself a Node.js application, installs JavaScript libraries.\n    <p><strong>Visit below url and install node js</strong><br><a href=\"https://nodejs.org/en/\">https://nodejs.org/en/</a></p>\n    <p><img src=\"./assets/node.png\" /></p>\n    <p>Verify that you are running Node.js v8.x or higher and npm 5.x or higher by running the commands \n      node -v and npm -v in a terminal/console window. Older versions produce errors.\n    </p>\n    <p><code>node -v</code></p>\n    <p><img src=\"./assets/command_prompt_node.jpg\" style=\"width:100%\" /></p>\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Setup the Angular CLI\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <strong>What is Angular CLI</strong>\n    <p>Angular CLI stands for Angular Command Line Interface. As the name implies, it is a command line tool for creating angular apps.</p>\n    <p><strong>Using and Installing Angular CLI</strong></p>\n    <p>Angular CLI is a command line interface for Angular, and is very useful in quickly creating an Angular 6 project template. \n      Install the Angular CLI npm package globally using the following command:</p>\n    <p><code>npm install -g @angular/cli</code></p>\n    <p>npm Package manager will install Angular CLI for you.</p>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Create an Angular application\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    The CLI creates a standard structure for project, and setup a working build. \n    The build needs dependencies, that will be downloaded by default using the npm package manager.\n\n    <p><strong>Create an Angular application</strong>\n        <code>ng new my-app-name</code>\n      </p>\n      <em>*my-app-name is the name of app which you want to create.</em>\n\n      <p>This is going to take a while, but it will create a new project structure and it will install all the needed dependencies in one go. \n        You now have a ready to use project!</p>\n      \n        <p>Now to run application, go inside the app folder<br>\n      <code>cd my-app-name</code></p>\n\n      <p>Now run the serve command which will build the application\n        <code>ng serve</code>\n      </p>\n      <p>The ng serve command should start a development server on your locahost port 4200, so if you go to your browser and enter the following url:</p>\n      <p><code>http://localhost:4200</code></p>\n      <p><img src=\"./assets/angular_app.png\" style=\"width:100%\" /></p>\n      <p>That's it, you have your first angular application ready.</p>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Understand Angular app structure\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      When you create the project, you’ll notice that it creates a bunch of files. \n      Here is the list of the important files and folders that you should be aware of:\n      <p>In Visual Studio code, app folder structure will look like below -</p>\n      <p><img src=\"./assets/angular_folder.png\" /></p>\n      <ul>\n\n     <li><strong>package.json</strong>: This file has the list of node dependencies which are needed.</li>\n     <br /><li><strong>src/styles.css</strong>: This file has the global CSS available throughout the application.</li>\n     <br /><li><strong>src/main.</strong>: This is the main file which starts the Angular Application (AppModule is bootstrapped here as seen in the code ). Here the Extension .ts stands for TypeScript.</li>\n     <br /><li><strong>src/index.html</strong>: This the first file which executes alongside main.ts when the page loads.</li>\n     <br /><li><strong>src/app/app.module.ts</strong>: This is the file where all the components, providers, and modules are defined. Without defining them here, they can’t be used elsewhere in the code.</li>\n     <br /><li><strong>src/app/app.component.html</strong>: This is the main component of an angular app, and all other components are usually present within this component. src/app/app.component.ts is the logic for this component, and src/app/app.component.css is the CSS for this component. This component itself does not do any important logic, but acts as a container for other components.</li>\n     <br /><li><strong>dist</strong>: This folder is where the built files are present. TypeScript is basically converted to JavaScript and the resulting files are stored here after bundling and minification. (This Folder appears only if the application is built. A simple “npm start” will not create this folder. ) Since web browsers understand only JavaScript (at least for now), it is therefore necessary to convert TypeScript to JavaScript before deploying the code. To see this folder, you can type the following in the command prompt:\n      <code>npm run build</code>\n      </li>\n\n      <p>There are several other files as well, but knowing these basic ones is good for a start.</p>\n</ul>\n  \n      <mat-action-row>\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Useful Angular CLI command\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    You need a new component, module, service or any other angular construct. \n    Angular-cli can create these files for you.\n\n    <p><strong>ng generate</strong></p>\n    <p>if you need a new component, you could open a terminal at the desired location and use the below\n        command to generate all the files you need to create a new component. \n    </p>\n    <p><code>ng generate component [name]</code></p>\n    <p>The CLI will generate a new folder for you. \n      If you don't want that extra folder, you can use the --flat option:\n    <code>ng generate component [name] --flat</code>\n    </p>\n    <p>This does not only work for components. \n      You can create a whole bunch of different angular-blueprints by replacing component by one of the following.</p>\n      <ul>\n        <li>class\n        <li>directive</li>\n        <li>enum</li>\n        <li>guard</li>\n        <li>interface</li>\n        <li>module</li>\n        <li>pipe</li>\n        <li>service</li>\n      </ul>\n\n      <p><strong>Running your App</strong></p>\n      <p>Once you are done creating and developing angular application, you also want to test and run it.</p>\n      <p><code>ng serve</code></p>\n      <p>It will start application in development mode. It will also watch the directory of your application for changes. \n        So if it detects a change, it will recompile the application (partly) and automatically update the application in the browser.        </p>\n\n      <p><strong>Building</strong></p>\n      <p>When you are happy with your angular app, it is time to deploy it to a web-server.\n        To get the files, that are required for that, you can use the below command</p>\n        <p><code>ng build</code></p>\n        <p>This command will cause the CLI to build your application and places the output in a directory called \"dist\" (by default).</p>\n        <p>Using this command, the app is still in an development state. </p>\n\n        <p>This means, that certain optimizations where not performed and the app is still using the development environment variables.</p>\n            \n        <p>To change that, use the --prod flag like this:</p>\n        <p><code>ng build --prod</code></p>\n\n        <p><strong>Disable the CLI for your project</strong></p>\n        <p><code>ng eject</code></p>\n        <p>It will disable the CLI for your project and create you a webpack configuration file.</p>\n        <p>While the CLI was using webpack under the hood anyway, you now have full control over webpack.</p>\n        <p>Keep in mind, that this command is a one way ticket. There is no command that coverts the project pack to angular-cli-mode.</p>\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/setup/setup.component.ts":
/*!******************************************!*\
  !*** ./src/app/setup/setup.component.ts ***!
  \******************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SetupComponent = /** @class */ (function () {
    function SetupComponent() {
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.step = null;
    }
    SetupComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    SetupComponent.prototype.nextStep = function () {
        this.step++;
    };
    SetupComponent.prototype.prevStep = function () {
        this.step--;
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.css */ "./src/app/setup/setup.component.css")]
        })
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/topics/topics.component.css":
/*!*********************************************!*\
  !*** ./src/app/topics/topics.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topics/topics.component.html":
/*!**********************************************!*\
  !*** ./src/app/topics/topics.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  topics works!\n</p>\n"

/***/ }),

/***/ "./src/app/topics/topics.component.ts":
/*!********************************************!*\
  !*** ./src/app/topics/topics.component.ts ***!
  \********************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopicsComponent = /** @class */ (function () {
    function TopicsComponent() {
    }
    TopicsComponent.prototype.ngOnInit = function () {
    };
    TopicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__(/*! ./topics.component.html */ "./src/app/topics/topics.component.html"),
            styles: [__webpack_require__(/*! ./topics.component.css */ "./src/app/topics/topics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicsComponent);
    return TopicsComponent;
}());



/***/ }),

/***/ "./src/app/weatherapp/weatherapp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/weatherapp/weatherapp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/weatherapp/weatherapp.component.html":
/*!******************************************************!*\
  !*** ./src/app/weatherapp/weatherapp.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  weatherapp works!\n</p>\n"

/***/ }),

/***/ "./src/app/weatherapp/weatherapp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/weatherapp/weatherapp.component.ts ***!
  \****************************************************/
/*! exports provided: WeatherappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherappComponent", function() { return WeatherappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherappComponent = /** @class */ (function () {
    function WeatherappComponent() {
    }
    WeatherappComponent.prototype.ngOnInit = function () {
    };
    WeatherappComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weatherapp',
            template: __webpack_require__(/*! ./weatherapp.component.html */ "./src/app/weatherapp/weatherapp.component.html"),
            styles: [__webpack_require__(/*! ./weatherapp.component.css */ "./src/app/weatherapp/weatherapp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherappComponent);
    return WeatherappComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NirajJha\Documents\GitHub\js\angularlearningapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map