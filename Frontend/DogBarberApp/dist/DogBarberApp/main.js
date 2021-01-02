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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_AuthGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/AuthGuard */ "./src/app/helpers/AuthGuard.ts");
/* harmony import */ var _home_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/appointments/appointments.component */ "./src/app/home/appointments/appointments.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_newappointment_newappointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/newappointment/newappointment.component */ "./src/app/home/newappointment/newappointment.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");










var routes = [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        children: [
            { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
        ]
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_helpers_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], children: [
            { path: 'newappointment', component: _home_newappointment_newappointment_component__WEBPACK_IMPORTED_MODULE_6__["NewappointmentComponent"] },
            { path: 'appointments', component: _home_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentsComponent"] },
            //   { path: 'newproject', component: AddprojectComponent },
            //   { path: 'myprojects', component: MyprojectsComponent },
            //   { path: 'forbidden', component: ForbiddenComponent }
            // ] },
            // {path: '404', component: NotfoundComponent},
            { path: '**', redirectTo: '/home' }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DogBarberApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/user-service.service */ "./src/app/shared/user-service.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_newappointment_newappointment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/newappointment/newappointment.component */ "./src/app/home/newappointment/newappointment.component.ts");
/* harmony import */ var _shared_appointment_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/appointment-service.service */ "./src/app/shared/appointment-service.service.ts");
/* harmony import */ var _home_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/appointments/appointments.component */ "./src/app/home/appointments/appointments.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers_AuthInterceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/AuthInterceptor */ "./src/app/helpers/AuthInterceptor.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");




















// import {TableModule} from 'primeng/table';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _home_newappointment_newappointment_component__WEBPACK_IMPORTED_MODULE_14__["NewappointmentComponent"],
                _home_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_16__["AppointmentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                    progressBar: true
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [
                _shared_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
                _shared_appointment_service_service__WEBPACK_IMPORTED_MODULE_15__["AppointmentService"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
                _shared_appointment_service_service__WEBPACK_IMPORTED_MODULE_15__["AppointmentService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _helpers_AuthInterceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/helpers/AuthGuard.ts":
/*!**************************************!*\
  !*** ./src/app/helpers/AuthGuard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user-service.service */ "./src/app/shared/user-service.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/AuthInterceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/AuthInterceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (success) { }, function (err) {
                if (err.status === 401) {
                    localStorage.removeItem('token');
                    _this.router.navigateByUrl('/user/login');
                }
                else if (err.status === 403) {
                    _this.router.navigateByUrl('/forbidden');
                }
            }));
        }
        else {
            return next.handle(req.clone());
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/home/appointments/appointments.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/appointments/appointments.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/appointments/appointments.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/appointments/appointments.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/appointments/appointments.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/appointments/appointments.component.ts ***!
  \*************************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_appointment_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/appointment-service.service */ "./src/app/shared/appointment-service.service.ts");
/* harmony import */ var src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user-service.service */ "./src/app/shared/user-service.service.ts");






var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(toastr, userService, calendar, appointmentService, config) {
        this.toastr = toastr;
        this.userService = userService;
        this.calendar = calendar;
        this.appointmentService = appointmentService;
        this.config = config;
        var current = new Date();
        config.minDate = { year: current.getFullYear(), month: current.getMonth() + 1, day: current.getDate() };
        //config.maxDate = { year: 2099, month: 12, day: 31 };
        config.outsideDays = 'hidden';
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointmentService.getAllAppointments().subscribe(function (res) {
            if (res) {
                _this.appointmentList = [];
                _this.stringFormatDate(res);
            }
        });
    };
    AppointmentsComponent.prototype.stringFormatDate = function (list) {
        for (var i = 0; i < list.length; i++) {
            list[i].AppointmentDate = new Date(list[i].AppointmentDate).toLocaleDateString();
            this.appointmentList.push(list[i]);
        }
    };
    AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointments',
            template: __webpack_require__(/*! ./appointments.component.html */ "./src/app/home/appointments/appointments.component.html"),
            styles: [__webpack_require__(/*! ./appointments.component.css */ "./src/app/home/appointments/appointments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"],
            src_app_shared_appointment_service_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark sticky-top\">\n  <a class=\"navbar-brand text-white\" routerLink=\"/home\">Dog Barber App</a>\n  <ul class=\"nav justify-content-center mr-auto\"> \n    <li class=\"nav-item\"> \n      <a class=\"nav-link\" routerLink=\"/home/newappointment\">Add Appointment</a>\n    </li>\n    <li class=\"nav-item\"> \n    <a class=\"nav-link\" routerLink=\"/home/appointments\">Appointments</a>\n  </li>\n  </ul>\n  <!-- <a class=\"navbar-brand text-white\"  *ngIf=\"!verified\">Email Not Confirmed</a> -->\n  <a class=\"navbar-brand text-white\"  *ngIf=\"this.currentUser\">Welcome {{ this.currentUser.UserName }}  </a>\n  <button class=\"btn btn-danger my-2 my-sm-0\" (click)=\"onLogout()\">Log out</button>\n</nav>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user-service.service */ "./src/app/shared/user-service.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.currentUser = this.userService.getCurrentUser();
        console.log(this.currentUser);
    };
    HomeComponent.prototype.onLogout = function () {
        this.currentUser = null;
        this.userService.removeCurrentUser();
        this.router.navigate(['/user/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/newappointment/newappointment.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/newappointment/newappointment.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.h2, h2 {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    font-style: oblique;\r\n    text-decoration: underline;\r\n}\r\n.btn-block { \r\n    width: auto!important;\r\n}\r\nbutton[type=submit].btn {\r\n    margin: 0px 155px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uZXdhcHBvaW50bWVudC9uZXdhcHBvaW50bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9uZXdhcHBvaW50bWVudC9uZXdhcHBvaW50bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaDIsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5idG4tYmxvY2sgeyBcclxuICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9c3VibWl0XS5idG4ge1xyXG4gICAgbWFyZ2luOiAwcHggMTU1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/newappointment/newappointment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/newappointment/newappointment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\" style=\"justify-content: center;\">\n    <h2>Set new Appointment:</h2>  \n  </div>\n  <hr>\n    <div class=\"row\" style=\"justify-content: center\">\n    <label style=\"color: black; font-weight: bold; text-align: center;\">First Name: {{this.userDetails.FirstName}}</label><br>\n  </div>\n  <form [formGroup]=\"appointmentService.formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\n      <div style=\"text-align: center\" class=\"form-group\">  \n        <div class=\"row\" style=\"justify-content: center\">\n          <label style=\" color: black; text-align: center;\">Appointment Date:</label> \n        </div>   \n        <ngb-datepicker #dp formControlName=\"AppointmentDate\" #date=\"ngbDatepicker\" required \n        (ngModelChange)=\"onDateSelect(date)\" style=\"margin: 0px 20px 0px 25px;\"></ngb-datepicker>\n<!-- <button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button> -->\n      </div>\n\n      <div class=\"form-row\" style=\"justify-content: center\">\n        <div  style=\"text-align: center\" class=\"form-group\">  \n          <select class=\"custom-select\" formControlName=\"AppointmentHour\">\n            <option value=\"\" disabled>Choose your hour</option>\n            <option *ngFor=\"let hour of this.hourList\" [ngValue]=\"hour\">{{hour}}</option>\n         </select>\n        </div>\n      </div>\n      <hr/>\n          <div class=\"form-row\" style=\"justify-content: center\">\n            <div class=\"form-group col-md-8 offset-md-2\"> \n              <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"!appointmentService.formModel.valid\">Add new Appointment</button>\n            </div>\n          </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/home/newappointment/newappointment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/newappointment/newappointment.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewappointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewappointmentComponent", function() { return NewappointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_appointment_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/appointment-service.service */ "./src/app/shared/appointment-service.service.ts");
/* harmony import */ var src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/user-service.service */ "./src/app/shared/user-service.service.ts");






var NewappointmentComponent = /** @class */ (function () {
    function NewappointmentComponent(toastr, userService, calendar, appointmentService, config) {
        this.toastr = toastr;
        this.userService = userService;
        this.calendar = calendar;
        this.appointmentService = appointmentService;
        this.config = config;
        var current = new Date();
        config.minDate = { year: current.getFullYear(), month: current.getMonth() + 1, day: current.getDate() };
        //config.maxDate = { year: 2099, month: 12, day: 31 };
        config.outsideDays = 'hidden';
    }
    NewappointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointmentService.formModel.reset();
        this.userDetails = this.userService.getCurrentUser();
        this.hourList = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
        this.appointmentService.getAllAppointments().subscribe(function (res) {
            if (res) {
                console.log(res);
                _this.appointmentList = res;
                console.log(_this.appointmentList);
            }
        });
    };
    NewappointmentComponent.prototype.onDateSelect = function (date) {
        debugger;
        this.hourList = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
        var appDate = new Date(this.appointmentService.formModel.value.AppointmentDate.year, this.appointmentService.formModel.value.AppointmentDate.month - 1, this.appointmentService.formModel.value.AppointmentDate.day);
        var dateString = appDate.toLocaleDateString();
        if (this.appointmentList.length > 0) {
            // let thisDateList = this.appointmentList.filter(x => new Date(x.appointmentDate).toLocaleDateString() == dateString);
            var thisDateList = [];
            for (var i = 0; i < this.appointmentList.length; i++) {
                if (new Date(this.appointmentList[i].AppointmentDate).toLocaleDateString() == dateString) {
                    thisDateList.push(this.appointmentList[i]);
                }
            }
            for (var i = 0; i < thisDateList.length; i++) {
                var index = this.hourList.indexOf(thisDateList[i].appointmentHour);
                this.hourList.splice(index, 1);
            }
        }
    };
    NewappointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        for (var i = 0; i < this.appointmentList.length; i++) {
            var appDate = new Date(this.appointmentService.formModel.value.AppointmentDate.year, this.appointmentService.formModel.value.AppointmentDate.month - 1, this.appointmentService.formModel.value.AppointmentDate.day);
            if (this.appointmentList[i].AppointmentDate == appDate &&
                this.appointmentList[i].AppointmentHour == this.appointmentService.formModel.value.AppointmentHour) {
                this.toastr.error('Another appointment already exists in this hour, please choose another hour', 'Date Error');
                return;
            }
        }
        this.appointmentService.registerAppointment().subscribe(function (result) {
            if (result) {
                _this.toastr.success('New Appointment created at !' + (new Date(result.AppointmentDate).toLocaleDateString()) +
                    ' ' + result.AppointmentHour, 'Appointment Creation Process Successful');
                _this.appointmentService.formModel.reset();
            }
            else {
                _this.appointmentService.formModel.reset();
                _this.toastr.error('Appointment Creation Process failed!', 'Validation Error');
            }
        }, function (err) {
            _this.toastr.error(err.message, 'Server Error');
            _this.appointmentService.formModel.reset();
            console.log(err);
        });
    };
    NewappointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newappointment',
            template: __webpack_require__(/*! ./newappointment.component.html */ "./src/app/home/newappointment/newappointment.component.html"),
            styles: [__webpack_require__(/*! ./newappointment.component.css */ "./src/app/home/newappointment/newappointment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"],
            src_app_shared_appointment_service_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"]])
    ], NewappointmentComponent);
    return NewappointmentComponent;
}());



/***/ }),

/***/ "./src/app/shared/appointment-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/appointment-service.service.ts ***!
  \*******************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-service.service */ "./src/app/shared/user-service.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AppointmentService = /** @class */ (function () {
    function AppointmentService(fb, http, userService) {
        this.fb = fb;
        this.http = http;
        this.userService = userService;
        this.BaseURI = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiEndpoint;
        this.formModel = this.fb.group({
            AppointmentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            AppointmentHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AppointmentService.prototype.registerAppointment = function () {
        var appDate = new Date(this.formModel.value.AppointmentDate.year, this.formModel.value.AppointmentDate.month, this.formModel.value.AppointmentDate.day);
        var body = {
            AppointmentDate: appDate,
            AppointmentHour: this.formModel.value.AppointmentHour,
            UserName: this.userService.getCurrentUser().UserName
        };
        console.log(body);
        return this.http.post(this.BaseURI + '/Appointment/CreateAppointment', body);
    };
    AppointmentService.prototype.removeAppointment = function (appointmentId) {
        var body = {
            Id: appointmentId
        };
        return this.http.post(this.BaseURI + '/Appointment/RemoveAppointment', body);
    };
    AppointmentService.prototype.getAllAppointments = function () {
        return this.http.get(this.BaseURI + '/Appointment/GetAppointments');
    };
    AppointmentService.prototype.getUserAppointments = function (userName) {
        var headersParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        ;
        var paramsValues = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("UserName", userName);
        return this.http.get(this.BaseURI + '/Appointment/GetAppointmentsForUser', { headers: headersParams, params: paramsValues });
    };
    AppointmentService.prototype.getDateAppointments = function (date) {
        var headersParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        ;
        var paramsValues = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("Date", date.toLocaleDateString());
        return this.http.get(this.BaseURI + '/Appointment/GetAppointmentsByDay', { headers: headersParams, params: paramsValues });
    };
    AppointmentService.prototype.changeDone = function (appointmentId) {
        var body = {
            Id: appointmentId
        };
        return this.http.post(this.BaseURI + '/Project/ChangeDone', body);
    };
    AppointmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "./src/app/shared/user-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/user-service.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var UserService = /** @class */ (function () {
    function UserService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.loggedUser = null;
        this.BaseURI = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint;
        this.formModel = this.fb.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }, { validator: this.comparePasswords })
        });
        this.formPasswordModel = this.fb.group({
            CurrentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }, { validator: this.comparePasswords }),
        });
    }
    UserService.prototype.comparePasswords = function (fb) {
        var confirmPasswordsCtrl = fb.get('ConfirmPassword');
        if (confirmPasswordsCtrl.errors == null || 'passwordMismatch' in confirmPasswordsCtrl.errors) {
            if (fb.get('Password').value !== confirmPasswordsCtrl.value) {
                confirmPasswordsCtrl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPasswordsCtrl.setErrors(null);
            }
        }
    };
    UserService.prototype.changePassword = function () {
        var body = {
            CurrentPassword: this.formPasswordModel.value.CurrentPassword,
            Password: this.formPasswordModel.value.Passwords.Password,
            ConfirmPassword: this.formPasswordModel.value.Passwords.ConfirmPassword
        };
        return this.http.post(this.BaseURI + '/AppUser/ChangePassword', body);
    };
    UserService.prototype.register = function () {
        var body = {
            UserName: this.formModel.value.UserName,
            FirstName: this.formModel.value.FirstName,
            Password: this.formModel.value.Passwords.Password
        };
        return this.http.post(this.BaseURI + '/User/Register', body);
    };
    UserService.prototype.login = function (formData) {
        return this.http.post(this.BaseURI + '/User/Login', formData);
    };
    UserService.prototype.setCurrentUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('token', user.Token);
    };
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    UserService.prototype.getUserToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.removeCurrentUser = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/img/add_user.png\" class=\"mx-auto d-block\" style=\"height: 150px;\">\n<form #form='ngForm' class=\"mb-4\" autocomplete=\"off\" (submit)=\"onSubmit(form, UserName.value)\">\n<div class=\"form-group\">  \n  <label>User name:</label>\n  <input class=\"form-control\" #UserName=\"ngModel\" name=\"UserName\" [(ngModel)]=\"formModel.UserName\" required> \n</div>\n<div class=\"form-group\">  \n  <label>Password:</label>\n  <input type=\"password\" class=\"form-control\" #Password=\"ngModel\" name=\"Password\" [(ngModel)]=\"formModel.Password\" required> \n</div>\n<div class=\"form-row\">\n  <div class=\"form-group col-md-8 offset-md-2\"> \n    <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"!form.valid\">Sign In</button>\n  </div>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user-service.service */ "./src/app/shared/user-service.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this.router.navigateByUrl('/home');
        }
    };
    LoginComponent.prototype.onSubmit = function (form, userName) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/home');
            _this.userService.setCurrentUser(res);
            _this.router.navigateByUrl('/home');
            _this.toastr.success('Welcome ' + userName + '!', 'Authentication granted');
        }, function (err) {
            if (err.status === 400) {
                _this.toastr.error('Incorrect User name of Password!', 'Authentication failed');
                form.reset();
            }
            else {
                _this.toastr.error('Our servers is down at the moment', 'Try again later');
                form.reset();
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <form [formGroup]=\"service.formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\n    <div class=\"form-group required\" >  \n      <label>User Name:</label>\n      <input class=\"form-control\" formControlName=\"UserName\">\n      <label class=\"text-danger\" *ngIf=\"service.formModel.get('UserName').touched &&\n      service.formModel.get('UserName').errors?.required\">This field is required!</label>\n    </div>\n    <div class=\"form-group required\" >  \n      <label>First Name:</label>\n      <input class=\"form-control\" formControlName=\"FirstName\">\n      <label class=\"text-danger\" *ngIf=\"service.formModel.get('FirstName').touched &&\n      service.formModel.get('FirstName').errors?.required\">This field is required!</label>\n    </div>\n        <div formGroupName=\"Passwords\">\n    <div class=\"form-group required\" >  \n            <label>Password:</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"Password\">\n            <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.Password').touched &&\n      service.formModel.get('Passwords.Password').errors?.required\">This field is required!</label>\n      <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.Password').touched &&\n      service.formModel.get('Passwords.Password').errors?.minLength\">Minimum 4 character required!</label>\n          </div>\n          <div class=\"form-group required\" >  \n              <label>Confirm Password:</label>\n              <input type=\"password\" class=\"form-control\" formControlName=\"ConfirmPassword\">\n              <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.ConfirmPassword').touched &&\n              service.formModel.get('Passwords.ConfirmPassword').errors?.required\">This field is required!</label>\n              <label class=\"text-danger\" *ngIf=\"service.formModel.get('Passwords.ConfirmPassword').touched &&\n              service.formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch\">Passwords does not match!</label>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-8 offset-md-2\"> \n              <button type=\"submit\" class=\"btn btn-lg btn-block\" [disabled]=\"!service.formModel.valid\">Register</button>\n            </div>\n          </div>\n  </form>"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user-service.service */ "./src/app/shared/user-service.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, toastr, router) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.service.formModel.reset();
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        try {
            this.service.register().subscribe(function (result) {
                if (result.UserName) {
                    _this.service.formModel.reset();
                    _this.toastr.success('New user created! you can now log in', 'Register Process Successful');
                    _this.router.navigateByUrl('/user/login');
                }
                else {
                    _this.toastr.error('User Name is already taken!', 'Register Process failed');
                }
            }, function (err) {
                _this.toastr.error(err.Description, 'Register failed, Server is down at the moment');
            });
        }
        catch (e) {
            this.toastr.error(e, 'Register failed, Server is down at the moment');
            console.log(e);
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"wrapped-div\"> \n    <div class=\"tab-header\">  \n      <h2  routerLink='/user/login' routerLinkActive='active'>Sign In</h2>\n      <h2  routerLink='/user/register' routerLinkActive='active'>Sign Up</h2>\n    </div>\n    <div class=\"row\"> \n      <div class=\"col-md-10 offset-md-1\"> \n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiEndpoint: 'https://localhost:44354/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\osher\OneDrive\Desktop\DogBarberApp\DogBarberApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map