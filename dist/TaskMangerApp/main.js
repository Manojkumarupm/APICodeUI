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

/***/ "./src/app/Dashboard/add-project/add-project.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Dashboard/add-project/add-project.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3 class=\"text-warning\">Add Project</h3>\n<hr>\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n  <ul class=\"nav nav-pills \">\n      <li class=\"nav-item\">\n            <h4><a routerLink=\"/add-users\" routerLinkActive=\"active\"  class=\"text-secondary\" >Add User</a></h4>\n          </li>\n          <li class=\"nav-item\" style=\"padding-left:21px\">\n              <h5><a routerLink=\"/add-projects\" routerLinkActive=\"active\"  >Add Project</a></h5>\n            </li>\n    <li class=\"nav-item\" style=\"padding-left:21px\">\n      <h5><a routerLink=\"/add-task\" class=\"text-secondary\"  >Add Task</a></h5>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:21px\">\n      <h5><a routerLink=\"/view-task\" class=\"text-secondary\"  >View Task</a></h5>\n    </li>\n    </ul>\n  </div>\n  </div>\n  <h6 class=\"alert alert-danger\" *ngIf=\"!IsformValid\">All the below fields are mandatory..!</h6>\n  <h6 class=\"alert alert-danger\" *ngIf=\"!IsStartDateGreater\">Start date should not be greaterthan End date..!</h6>\n  <h6 class=\"alert alert-success\" *ngIf=\"IsAddedSuccessFully\">Project added successfully...</h6>\n  <h6 class=\"alert alert-success\" *ngIf=\"IsUpdatedSuccessFully\">Project updated successfully...</h6>\n  <h6 class=\"alert alert-warning\" *ngIf=\"IsDeletedSuccessFully\">Project suspended successfully...</h6>\n  <form  #myForm=\"ngForm\"  class=\"well form-horizontal\"  >\n      <table class=\"table table-striped\">\n          <tbody>\n             <tr>\n                <td colspan=\"1\">\n                      <fieldset>\n                          <div class=\"form-group\" *ngIf=\"IsEdit\">\n                              <label class=\"col-md-4 control-label\">Project Id:</label>\n                              <div class=\"col-md-8 inputGroupContainer\">\n                                 <div class=\"input-group\"><input id=\"ProjectId\" [(ngModel)]=\"ProjectId\"  name=\"ProjectId\"  class=\"form-control\" readonly type=\"number\"></div>\n                              </div>\n                           </div>\n\n                           <div class=\"form-group\">\n                                 <label class=\"col-md-4 control-label\">Project:</label>\n                                 <div class=\"col-md-8 inputGroupContainer\">\n                                    <div class=\"input-group\"><input id=\"ProjectDesc\" [(ngModel)]=\"ProjectDesc\"  name=\"ProjectDesc\"  class=\"form-control\" placeholder=\"Project Desc\"  type=\"text\"></div>\n                                 </div>\n                              </div>\n                              <div class=\"form-group\" >\n\n                                  <div class=\"col-md-4 inputGroupContainer\">\n                                     <div class=\"input-group\">\n                                       <input id=\"StartEndDateChk\" name=\"StartEndDateChk\" class=\"form-control\" (change)=\"changeCheck($event)\"   type=\"checkbox\">\n                                       <label class=\"control-label\"> Set Start and End Date</label></div>\n                                  </div>\n\n                               </div>\n                              <div class=\"form-group\"  >\n                                  <label class=\"col-md-4 control-label\">Start Date:</label>\n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                     <div class=\"input-group\">\n                                       <input id=\"StartDate\" [disabled]=\"!Ischecked\"  name=\"StartDate\" [ngModel]=\"StartDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"StartDate=$event\" class=\"form-control\" required=\"true\" value=\"\" type=\"date\"></div>\n                                  </div>\n                               </div>\n                               <div class=\"form-group\" >\n                                  <label class=\"col-md-4 control-label\">End Date:</label>\n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                     <div class=\"input-group\"><input id=\"EndDate\" [disabled]=\"!Ischecked\" name=\"EndDate\" [ngModel]=\"EndDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"EndDate=$event\"   class=\"form-control\" required=\"true\" value=\"\" type=\"date\"></div>\n                                  </div>\n                               </div>\n                               <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Priority:</label>\n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                     <div class=\"input-group\">\n                                        <label for=\"rangeval\">{{ rangeval.value }}</label>\n                                       <input id=\"Priority\" #rangeval [(ngModel)]=\"Priority\"   name=\"Priority\"  class=\"form-control-range\" required=\"true\"  type=\"range\" min=\"0\" max=\"30\" ></div>\n\n                                  </div>\n                               </div>\n                               <div class=\"form-group\">\n                                  <label class=\"col-md-4 control-label\">Manager UserId:</label>\n                                  <div class=\"col-md-8 inputGroupContainer\">\n                                      <div class=\"input-group\">\n                               <input id=\"ManagerUserId\" [(ngModel)]=\"ManagerUserId\"   name=\"ManagerUserId\"  class=\"form-control\" required=\"true\"  disabled type=\"number\" > <button style=\"float:right; padding:3px;\" class=\"btn btn-secondary\"  type=\"button\" (click)=\"openModal(tmpManager)\" >search</button>    </div>\n                               </div>\n                              </div>\n                    <div style=\"padding:20px\" *ngIf=\"!IsEdit\" > <button class=\"btn btn-primary\" (click)=\"AddNewProject(myForm) \" (blur)=\"LoadProjectGrid()\"  type=\"submit\">Add project</button> &nbsp; &nbsp;<button class=\"btn btn-info\"  (click)=\"ResetProjectForm(myForm)\"  type=\"button\">Reset</button> </div>\n                    <div style=\"padding:20px\" *ngIf=\"IsEdit\"> <button class=\"btn btn-primary\" (click)=\"UpdateProject() \" (blur)=\"LoadProjectGrid()\" type=\"submit\">Update Project</button> &nbsp; &nbsp;<button class=\"btn btn-info\" (click)=\"ResetProjectForm(myForm)\" type=\"button\">Reset</button> </div>\n                      </fieldset>\n\n                </td>\n\n             </tr>\n          </tbody>\n       </table>\n       <hr>\n       <div class=\"row\">\n          <div class=\"col-md-6\">\n             <div class=\"input-group\"><input id=\"txtSearchProject\" name=\"txtSearchProject\" #txtSearchProject (keyup)=\"ProjectSearchFilter(txtSearchProject.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\n         </div>\n         <div class=\"col-md-2\">\n             <label class=\"control-label\" style=\"padding-right:10px;\">Sort By: </label>\n             <button class=\"btn btn-secondary\"  (click)=\"StartDateSort()\"  >Start Date</button>\n          </div>\n          <div class=\"col-md-2\">\n             <button class=\"btn btn-secondary\"  (click)=\"EndDateSort()\" >End Date</button>\n          </div>\n          <div class=\"col-md-2\" >\n             <button class=\"btn btn-secondary\" (click)=\"PrioritySort()\" >Priority</button>\n          </div>\n         </div>\n       <br>\n\n  <table class=\"table\" >\n      <thead>\n          <tr>\n            <th scope=\"col\">Project Id</th>\n            <th scope=\"col\">Project Desc</th>\n            <th scope=\"col\">Priority</th>\n            <th scope=\"col\">Start Date</th>\n            <th scope=\"col\">End Date</th>\n            <th scope=\"col\">Manager UserId</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor =\"let item of listProjects ; trackBy: trackProject\" >\n              <td>{{item.ProjectId}}</td>\n              <td>{{item.ProjectDesc}}</td>\n              <td>{{item.Priority}}</td>\n              <td>{{item.StartDate |date:'MM-dd-yyyy'}}</td>\n              <td>{{item.EndDate | date:'MM-dd-yyyy' }}</td>\n              <td>{{item.ManagerUserId }}</td>\n              <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button class=\"btn btn-secondary\" (click)=\"EditProjectBind(item)\"  >Update</button></td>\n              <td style=\"padding-left:0;padding-right:0;margin: 0%\"><button class=\"btn btn-danger\" (click)=\"DeleteProject(item.ProjectId)\" (blur)=\"LoadProjectGrid()\" >Suspend</button></td>\n            </tr>\n          </tbody>\n        </table>\n      </form>\n      <ng-template #tmpManager>\n       <div class=\"modal-header\">\n <h4 class=\"modal-title pull-left text-warning\">Manager list</h4>\n <button class=\"btn btn-secondary close pull-right\" type=\"button\" (click)=\"modalRef.hide()\" aria-label=\"close\"></button>\n  <span aria-hidden=\"true\">&times;</span>\n       </div>\n       <div class=\"modal-body\">\n          <h6 class=\"text text-success\" *ngIf=\"IsManagerSelected\">Manager userId is selected successfully...</h6>\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                 <div class=\"input-group\"><input id=\"txtSearch\" name=\"txtSearch\" #txtSearch (keyup)=\"SearchFilter(txtSearch.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\n             </div>\n             </div>\n             <br>\n          <table class=\"table\" >\n              <thead>\n                  <tr>\n                    <th scope=\"col\">User Id</th>\n                    <th scope=\"col\">First Name</th>\n                    <th scope=\"col\">Last Name</th>\n                    <th scope=\"col\">Employee Id</th>\n                    <th></th>\n\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor =\"let item of listManager ; trackBy: trackUser\" >\n                      <td>{{item.UserId}}</td>\n                      <td>{{item.FirstName}}</td>\n                      <td>{{item.LastName}}</td>\n                      <td>{{item.EmpId}}</td>\n                      <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button style=\"padding:0px;\" class=\"btn btn-success\" (click)=\"SelectManger(item.UserId)\"  >Select</button></td>\n                    </tr>\n                  </tbody>\n                </table>\n\n       </div>\n      </ng-template>\n"

/***/ }),

/***/ "./src/app/Dashboard/add-project/add-project.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Dashboard/add-project/add-project.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Dashboard/add-project/add-project.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Dashboard/add-project/add-project.component.ts ***!
  \****************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/shared.service */ "./src/app/Services/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(modalServ, _service, datepipe) {
        var _this = this;
        this.modalServ = modalServ;
        this._service = _service;
        this.datepipe = datepipe;
        this.Ischecked = false;
        this.IsManagerSelected = false;
        this.IsformValid = true;
        this.IsAddedSuccessFully = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        this.IsStartDateGreater = true;
        this.IsEdit = false;
        this._service.GetAllUsers().subscribe(function (data) { return _this.listManager = data; });
        this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data; });
    }
    AddProjectComponent.prototype.ngOnInit = function () {
    };
    AddProjectComponent.prototype.changeCheck = function (eve) {
        if (eve.target.checked) {
            this.Ischecked = true;
        }
        else {
            this.Ischecked = false;
        }
    };
    AddProjectComponent.prototype.openModal = function (tmpManager) {
        this.modalRef = this.modalServ.show(tmpManager);
    };
    AddProjectComponent.prototype.trackUser = function (index, item) {
        return item ? item.UserId : undefined;
    };
    AddProjectComponent.prototype.trackProject = function (index, item) {
        return item ? item.ProjectId : undefined;
    };
    AddProjectComponent.prototype.SearchFilter = function (Searchdetail) {
        var _this = this;
        if (Searchdetail !== undefined && Searchdetail.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllUsers().subscribe(function (data) { return _this.listManager = data.filter(function (item) { return item.FirstName.toUpperCase() === Searchdetail.toUpperCase() || item.LastName.toUpperCase() === Searchdetail.toUpperCase()
                || item.EmpId.toUpperCase() === Searchdetail.toUpperCase() || item.UserId.toString() === Searchdetail; }); });
        }
        else {
            this._service.GetAllUsers().subscribe(function (data) { return _this.listManager = data; });
        }
    };
    AddProjectComponent.prototype.ProjectSearchFilter = function (projectSearchCriteria) {
        var _this = this;
        if (projectSearchCriteria !== undefined && projectSearchCriteria.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data.filter(function (item) { return _this.datepipe.transform(item.StartDate, 'yyyy-MM-dd') === _this.datepipe.transform(projectSearchCriteria, 'yyyy-MM-dd') || _this.datepipe.transform(item.EndDate, 'yyyy-MM-dd') === _this.datepipe.transform(projectSearchCriteria, 'yyyy-MM-dd')
                || item.ProjectId.toString() === projectSearchCriteria || item.ProjectDesc.toUpperCase() === projectSearchCriteria.toUpperCase()
                || item.Priority.toString() === projectSearchCriteria || item.ManagerUserId.toString() === projectSearchCriteria; }); });
        }
        else {
            this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data; });
        }
    };
    AddProjectComponent.prototype.StartDateSort = function () {
        var _this = this;
        this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data.sort(function (a, b) {
            if (a.StartDate < b.StartDate) {
                return -1;
            }
            else if (a.StartDate > b.StartDate) {
                return 1;
            }
            else {
                return 0;
            }
        }); });
    };
    AddProjectComponent.prototype.EndDateSort = function () {
        var _this = this;
        this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data.sort(function (a, b) {
            if (a.EndDate < b.EndDate) {
                return -1;
            }
            else if (a.EndDate > b.EndDate) {
                return 1;
            }
            else {
                return 0;
            }
        }); });
    };
    AddProjectComponent.prototype.PrioritySort = function () {
        var _this = this;
        this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data.sort(function (a, b) {
            if (a.Priority < b.Priority) {
                return -1;
            }
            else if (a.Priority > b.Priority) {
                return 1;
            }
            else {
                return 0;
            }
        }); });
    };
    AddProjectComponent.prototype.SelectManger = function (userIdManager) {
        this.ManagerUserId = userIdManager;
        this.IsManagerSelected = true;
    };
    AddProjectComponent.prototype.AddNewProject = function (form) {
        var _this = this;
        var Projectdetails = { ProjectId: 0,
            ProjectDesc: this.ProjectDesc,
            Priority: this.Priority,
            ManagerUserId: this.ManagerUserId,
            StartDate: '',
            EndDate: '' };
        if (this.Ischecked) {
            Projectdetails.StartDate = this.StartDate;
            Projectdetails.EndDate = this.EndDate;
        }
        else {
            this.ProjectDate = new Date();
            Projectdetails.StartDate = this.ProjectDate.toString();
            Projectdetails.EndDate = this.ProjectDate.setDate(this.ProjectDate.getDate() + 1).toString();
            Projectdetails.StartDate = this.datepipe.transform(Projectdetails.StartDate, 'yyyy-MM-dd');
            Projectdetails.EndDate = this.datepipe.transform(Projectdetails.EndDate, 'yyyy-MM-dd');
        }
        this.IsEdit = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        if (Projectdetails.Priority === undefined) {
            Projectdetails.Priority = 15;
        }
        if (Projectdetails.ProjectDesc === undefined || Projectdetails.ManagerUserId === undefined ||
            Projectdetails.StartDate === undefined || Projectdetails.EndDate === undefined ||
            Projectdetails.ProjectDesc === '' || Projectdetails.ManagerUserId === 0
            || Projectdetails.StartDate === '' || Projectdetails.EndDate === '') {
            this.IsformValid = false;
            this.IsAddedSuccessFully = false;
        }
        else if (Date.parse(Projectdetails.StartDate) > Date.parse(Projectdetails.EndDate)) {
            this.IsformValid = true;
            this.IsAddedSuccessFully = false;
            this.IsStartDateGreater = false;
        }
        else {
            this.IsformValid = true;
            this.IsStartDateGreater = true;
            this._service.AddNewProjects(Projectdetails).subscribe(function (data) { return _this.insertResult = data; });
            this.IsAddedSuccessFully = true;
            form.reset();
        }
        window.scroll(0, 0);
    };
    AddProjectComponent.prototype.EditProjectBind = function (_project) {
        this.IsAddedSuccessFully = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        this.IsformValid = true;
        this.IsEdit = true;
        this.ProjectId = _project.ProjectId;
        this.ProjectDesc = _project.ProjectDesc;
        this.Priority = _project.Priority;
        this.StartDate = _project.StartDate;
        this.EndDate = _project.EndDate;
        this.ManagerUserId = _project.ManagerUserId;
        window.scroll(0, 0);
    };
    AddProjectComponent.prototype.UpdateProject = function () {
        var updateResult;
        var Projectdetails = { ProjectId: this.ProjectId,
            ProjectDesc: this.ProjectDesc,
            Priority: this.Priority,
            ManagerUserId: this.ManagerUserId,
            StartDate: this.StartDate,
            EndDate: this.EndDate };
        if (Projectdetails.ProjectDesc === undefined || Projectdetails.ManagerUserId === undefined ||
            Projectdetails.StartDate === undefined || Projectdetails.EndDate === undefined ||
            Projectdetails.ProjectDesc === '' || Projectdetails.Priority === 0 || Projectdetails.ManagerUserId === 0
            || Projectdetails.StartDate === '' || Projectdetails.EndDate === '') {
            this.IsformValid = false;
            this.IsUpdatedSuccessFully = false;
        }
        else if (Date.parse(Projectdetails.StartDate) > Date.parse(Projectdetails.EndDate)) {
            this.IsformValid = true;
            this.IsUpdatedSuccessFully = false;
            this.IsStartDateGreater = false;
        }
        else {
            this.IsformValid = true;
            this._service.UpdateProjects(Projectdetails.ProjectId, Projectdetails).subscribe(function (data) { return updateResult = data; });
            this.IsUpdatedSuccessFully = true;
            this.IsDeletedSuccessFully = false;
            this.IsAddedSuccessFully = false;
        }
        window.scroll(0, 0);
    };
    AddProjectComponent.prototype.DeleteProject = function (ProjectId) {
        var DeleteResult;
        this._service.DeleteProjects(ProjectId).subscribe(function (data) { return DeleteResult = data; });
        this.IsDeletedSuccessFully = true;
        this.IsUpdatedSuccessFully = false;
        this.IsAddedSuccessFully = false;
        this.IsformValid = true;
        window.scroll(0, 0);
    };
    AddProjectComponent.prototype.LoadProjectGrid = function () {
        var _this = this;
        this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data; });
    };
    AddProjectComponent.prototype.ResetProjectForm = function (form) {
        form.reset();
        this.IsAddedSuccessFully = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        this.IsformValid = true;
        this.IsStartDateGreater = true;
        this.IsEdit = false;
        window.scroll(0, 0);
    };
    AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/Dashboard/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.scss */ "./src/app/Dashboard/add-project/add-project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/add-task/add-task.component.html":
/*!************************************************************!*\
  !*** ./src/app/Dashboard/add-task/add-task.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-alert\">Add Task</h3>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <h4><a routerLink=\"/add-task\" routerLinkActive=\"active\">Add Task</a></h4>\n      </li>\n      <li class=\"nav-item\" style=\"padding-left:20px\">\n        <h4><a routerLink=\"/view-task\" class=\"text-secondary\">View Task</a></h4>\n      </li>\n    </ul>\n  </div>\n</div>\n<h6 class=\"alert alert-danger\" *ngIf=\"!IsformValid\">All the below fields are mandatory..!</h6>\n<h6 class=\"alert alert-success\" *ngIf=\"IsAddedSuccessFully\">Task added successfully...</h6>\n<table class=\"table table-striped\" style=\"background-color:lightcyan;\">\n  <tbody>\n    <tr>\n      <td colspan=\"1\">\n        <form #myForm=\"ngForm\" class=\"well form-horizontal\">\n          <fieldset>\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Task:</label>\n              <div class=\"col-md-8 inputGroupContainer\">\n                <div class=\"input-group\"><input id=\"TaskName\" [(ngModel)]=\"Task1\" name=\"TaskName\" placeholder=\"Task Details\"\n                    class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Priority</label>\n              <div class=\"col-md-8 inputGroupContainer\">\n                <div class=\"input-group\">\n                  <label for=\"rangeval\">{{ rangeval.value }}</label>\n                  <input id=\"Priority\" #rangeval [(ngModel)]=\"Priority\" name=\"Priority\" class=\"form-control-range\"\n                    required=\"true\" value=\"\" type=\"range\" min=\"0\" max=\"60\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Parent Task Id:</label>\n              <div class=\"col-md-8 inputGroupContainer\">\n                <div class=\"input-group\"><input id=\"ParentTask\" [(ngModel)]=\"ParentId\" #ParentTask name=\"ParentTask\"\n                    placeholder=\"Parent Task Id\" class=\"form-control\" required=\"true\" value=\"\" type=\"number\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Start Date:</label>\n              <div class=\"col-md-8 inputGroupContainer\">\n                <div class=\"input-group\">\n                  <input id=\"StartDate\" name=\"StartDate\" [(ngModel)]=\"StartDate\" class=\"form-control\" required=\"true\"\n                    value=\"\" type=\"date\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">End Date:</label>\n              <div class=\"col-md-8 inputGroupContainer\">\n                <div class=\"input-group\"><input id=\"EndDate\" name=\"EndDate\" [(ngModel)]=\"EndDate\" class=\"form-control\"\n                    required=\"true\" value=\"\" type=\"date\"></div>\n              </div>\n            </div>\n\n            <div style=\"padding:20px\"> \n              <button class=\"btn btn-primary\" (click)=\"AddNewTaskInformation(myForm)\" type=\"submit\">\n                  <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Add Task</button>\n               &nbsp; &nbsp;\n               \n               <button class=\"btn btn-warning\" (click)=\"ResetTaskForm(myForm)\" type=\"button\">\n                  <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>  Reset</button>\n            </div>\n            \n          </fieldset>\n        </form>\n      </td>\n\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/Dashboard/add-task/add-task.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Dashboard/add-task/add-task.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Dashboard/add-task/add-task.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Dashboard/add-task/add-task.component.ts ***!
  \**********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/shared.service */ "./src/app/Services/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");







var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(_service) {
        this._service = _service;
        this.IsformValid = true;
        this.IsAddedSuccessFully = false;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent.prototype.AddNewTaskInformation = function (form) {
        var _this = this;
        var Taskdetails = { TaskId: 0,
            ParentID: this.ParentId,
            TaskDescription: this.Task1,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            Priority: this.Priority,
            IsTaskCompleted: 0 };
        if (Taskdetails.TaskDescription == undefined || Taskdetails.ParentID == undefined || Taskdetails.StartDate == undefined || Taskdetails.EndDate == undefined) {
            this.IsformValid = false;
        }
        else {
            this.IsformValid = true;
            this._service.AddNewTask(Taskdetails).subscribe(function (data) { return _this.insertResult = data; });
            this.IsAddedSuccessFully = true;
            form.reset();
        }
    };
    AddTaskComponent.prototype.ResetTaskForm = function (form) {
        form.reset();
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/Dashboard/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.scss */ "./src/app/Dashboard/add-task/add-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/add-users/add-users.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Dashboard/add-users/add-users.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-users works!\n</p>\n"

/***/ }),

/***/ "./src/app/Dashboard/add-users/add-users.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Dashboard/add-users/add-users.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9hZGQtdXNlcnMvYWRkLXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Dashboard/add-users/add-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Dashboard/add-users/add-users.component.ts ***!
  \************************************************************/
/*! exports provided: AddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function() { return AddUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddUsersComponent = /** @class */ (function () {
    function AddUsersComponent() {
    }
    AddUsersComponent.prototype.ngOnInit = function () {
    };
    AddUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-users',
            template: __webpack_require__(/*! ./add-users.component.html */ "./src/app/Dashboard/add-users/add-users.component.html"),
            styles: [__webpack_require__(/*! ./add-users.component.scss */ "./src/app/Dashboard/add-users/add-users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddUsersComponent);
    return AddUsersComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/update-task/update-task.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Dashboard/update-task/update-task.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<hr>\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <h4><a routerLink=\"/add-task\" class=\"text-secondary\">Add Task</a></h4>\n      </li>\n      <li class=\"nav-item\" style=\"padding-left:20px\">\n        <h4><a routerLink=\"/view-task\" class=\"text-secondary\">View Task</a></h4>\n      </li>\n    </ul>\n  </div>\n</div>\n<h3 class=\"text-warning\">Update Task</h3>\n<hr>\n<h6 class=\"alert alert-danger\" *ngIf=\"!IsformValid\">All the below fields are mandatory..!</h6>\n  <h6 class=\"alert alert-success\" *ngIf=\"IsUpdatedSuccessFully\">Task updated successfully...</h6>\n \n<table class=\"table table-striped\" style=\"background-color:lightcyan;\">\n    <tbody>\n       <tr>\n          <td colspan=\"1\">\n             <form    class=\"well form-horizontal\">\n                <fieldset>\n                     <div class=\"form-group\">\n                           <label class=\"col-md-4 control-label\">Task Id:</label>\n                           <div class=\"col-md-8 inputGroupContainer\">\n                              \n                              <div class=\"input-group\"><input id=\"TaskId\" [(ngModel)]=\"TaskId\"  name=\"TaskId\" readonly class=\"form-control\"  type=\"text\"></div>\n                           </div>\n                        </div>\n                   <div class=\"form-group\">\n                      <label class=\"col-md-4 control-label\">Task:</label>\n                      <div class=\"col-md-8 inputGroupContainer\">\n                         \n                         <div class=\"input-group\"><input id=\"TaskDescription\" [(ngModel)]=\"TaskDescription\"  name=\"TaskDescription\" placeholder=\"Task Details\" class=\"form-control\" required=\"true\" type=\"text\"></div>\n                      </div>\n                   </div>\n                   <div class=\"form-group\">\n                      <label class=\"col-md-4 control-label\">Priority</label>\n                      <div class=\"col-md-8 inputGroupContainer\">\n                         <div class=\"input-group\">\n                            <label for=\"rangeval\">{{ rangeval.value }}</label>\n                            <input id=\"Priority\" #rangeval [(ngModel)]=\"Priority\"   name=\"Priority\"  class=\"form-control-range\" required=\"true\"  type=\"range\" min=\"0\" max=\"30\" ></div>                    \n                      </div>\n                   </div>\n                   <div class=\"form-group\">\n                      <label class=\"col-md-4 control-label\">Parent Task Id:</label>\n                      <div class=\"col-md-8 inputGroupContainer\">\n                        <div class=\"input-group\"><input id=\"ParentTask\" [(ngModel)]=\"ParentID\"  #ParentTask name=\"ParentTask\" placeholder=\"Parent Task Id\" class=\"form-control\" required=\"true\"  type=\"number\"></div>\n                      </div>\n                   </div>\n                   <div class=\"form-group\">\n                      <label class=\"col-md-4 control-label\">Start Date:</label>\n                      <div class=\"col-md-8 inputGroupContainer\">\n                         <div class=\"input-group\">\n                           <input id=\"StartDate\" name=\"StartDate\" [ngModel]=\"StartDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"StartDate=$event\" class=\"form-control\" required=\"true\"  type=\"date\"></div>\n                      </div>\n                   </div>\n                   <div class=\"form-group\">\n                      <label class=\"col-md-4 control-label\">End Date:</label>\n                      <div class=\"col-md-8 inputGroupContainer\">\n                        <div class=\"input-group\"><input id=\"EndDate\" name=\"EndDate\" [ngModel]=\"EndDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"EndDate=$event\"   class=\"form-control\" required=\"true\" type=\"date\"></div>\n                      </div>\n                   </div>\n                                   \n              <div style=\"padding:20px\"> <button class=\"btn btn-primary\" (click)=\"UpdateTask()\" type=\"submit\"> <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Update Task</button> &nbsp; &nbsp; <a routerLink=\"/view-task\"><button class=\"btn btn-info\"  type=\"button\">Cancel</button></a> </div>\n                </fieldset>\n             </form>\n          </td>\n         \n       </tr>\n    </tbody>\n </table>\n "

/***/ }),

/***/ "./src/app/Dashboard/update-task/update-task.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Dashboard/update-task/update-task.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC91cGRhdGUtdGFzay91cGRhdGUtdGFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Dashboard/update-task/update-task.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Dashboard/update-task/update-task.component.ts ***!
  \****************************************************************/
/*! exports provided: UpdateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskComponent", function() { return UpdateTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/shared.service */ "./src/app/Services/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");







var UpdateTaskComponent = /** @class */ (function () {
    function UpdateTaskComponent(_service, route) {
        var _this = this;
        this._service = _service;
        this.route = route;
        this.IsformValid = true;
        this.IsUpdatedSuccessFully = false;
        var id = this.route.snapshot.paramMap.get('taskid');
        this._service.GetTask(parseInt(id)).subscribe(function (data) {
            _this.TaskId = data.TaskId;
            _this.TaskDescription = data.TaskDescription;
            _this.Priority = data.Priority;
            _this.StartDate = data.StartDate;
            _this.EndDate = data.EndDate;
            _this.ParentID = data.ParentID;
        });
    }
    UpdateTaskComponent.prototype.ngOnInit = function () {
    };
    UpdateTaskComponent.prototype.UpdateTask = function () {
        var _this = this;
        var Taskdetails = {
            TaskId: this.TaskId,
            ParentID: this.ParentID,
            TaskDescription: this.TaskDescription,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            Priority: this.Priority,
            IsTaskCompleted: 0
        };
        if (Taskdetails.TaskDescription == undefined || Taskdetails.StartDate == undefined || Taskdetails.EndDate == undefined) {
            this.IsformValid = false;
        }
        else {
            this.IsformValid = true;
            this._service.UpdateTask(Taskdetails.TaskId, Taskdetails).subscribe(function (data) { return _this.updateResult = data; });
            this.IsUpdatedSuccessFully = true;
        }
    };
    UpdateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]],
            providers: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-task',
            template: __webpack_require__(/*! ./update-task.component.html */ "./src/app/Dashboard/update-task/update-task.component.html"),
            styles: [__webpack_require__(/*! ./update-task.component.scss */ "./src/app/Dashboard/update-task/update-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], UpdateTaskComponent);
    return UpdateTaskComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/view-task/view-task.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Dashboard/view-task/view-task.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3 class=\"text-alert\">View Task</h3>\n<hr>\n<div class=\"row\">\n    \n    <div class=\"col-xl-12\">\n  <ul class=\"nav nav-pills \">\n    <li class=\"nav-item\">\n      <h4><a routerLink=\"/add-task\" class=\"text-secondary\" >Add Task</a></h4>\n    </li>\n    <li class=\"nav-item\" style=\"padding-left:20px\">\n      <h4><a routerLink=\"/view-task\" routerLinkActive=\"active\" >View Task</a></h4>\n    </li>\n    </ul>\n  </div>\n  \n  </div>\n\n<div class=\"row\">\n    \n  <div class=\"col-md-6\">\n      <label class=\"control-label\">Task:</label>   \n      <div class=\"input-group\"><input id=\"TaskName\" name=\"TaskName\" #TaskName (keyup)=\"TaskFilter(TaskName.value)\" placeholder=\"Task Details\" class=\"form-control\"   type=\"text\"></div>\n  </div>\n  <div class=\"col-md-6\">\n      <label class=\"control-label\">Parent Task:</label>   \n      <div class=\"input-group\"><input id=\"ParentTaskName\" #ParentTaskName (keyup)=\"ParentTaskFilter(ParentTaskName.value)\" name=\"ParentTaskName\" placeholder=\"Parent Task Details\" class=\"form-control\"  value=\"\" type=\"number\"></div>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <label class=\"control-label\">Priority From:</label>   \n        <div class=\"input-group\"><input id=\"PriorityFrom\" name=\"PriorityFrom\" #PriorityFrom (keyup)=\"PriorityTaskFilter(PriorityFrom.value)\" placeholder=\"Priority From\" class=\"form-control\"  value=\"\" type=\"number\"></div>\n    </div>\n    <div class=\"col-md-3\">\n        <label class=\"control-label\">Priority To:</label>   \n        <div class=\"input-group\"><input id=\"PriorityTo\" name=\"PriorityTo\" #PriorityTo (keyup)=\"PriorityTaskFilter(PriorityTo.value)\"  placeholder=\"Priority To\" class=\"form-control\"  value=\"\" type=\"number\"></div>\n    </div>\n    <div class=\"col-md-3\">\n        <label class=\"control-label\">Start Date:</label>   \n        <div class=\"input-group\"><input id=\"StartDate\" name=\"StartDate\" #StartDate (blur)=\"StartDateTaskFilter(StartDate.value)\"  class=\"form-control\"  value=\"\" type=\"date\" ></div>\n    </div>\n    <div class=\"col-md-3\">\n        <label class=\"control-label\">End Date:</label>   \n        <div class=\"input-group\"><input id=\"EndDate\" name=\"EndDate\" #EndDate (blur)=\"EndDateTaskFilter(EndDate.value)\"  class=\"form-control\"  value=\"\" type=\"date\"></div>\n    </div>\n    \n  </div>\n  <br>  \n\n  <table class=\"table\" style=\"background-color:lightcyan;\">\n      <thead>\n          <tr>\n            <th scope=\"col\">Task Id</th>\n            <th scope=\"col\">Task</th>\n            <th scope=\"col\">Parent Task</th>\n            <th scope=\"col\">Priority</th>\n            <th scope=\"col\">Start</th>\n            <th scope=\"col\">End</th>\n            <th></th>     \n            <th></th>\n            <th></th>\n            <th>IsTaskCompleted</th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor =\"let item of tasks ; trackBy: TrackTask\" >         \n              <td>{{item.TaskId}}</td>\n              <td>{{item.TaskDescription}}</td>\n              <td>{{item.ParentID}}</td>\n              <td>{{item.Priority}}</td>\n              <td>{{item.StartDate | date:'MM-dd-yyyy'}}</td>\n              <td>{{item.EndDate | date:'MM-dd-yyyy' }}</td>\n             \n              <td style=\"padding-left:0;padding-right:0;\"><a routerLink=\"/update-task/{{item.TaskId}}\"><button class=\"btn btn-primary\" [disabled]=\" (item.IsTaskCompleted=='1')\" > <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Edit</button></a></td> \n   \n              <td style=\"padding-left:0;padding-right:0\"><button [disabled]=\" (item.IsTaskCompleted == '1')\" (click)=\"CompleteTaskFlagchange(item)\"  class=\"btn btn-warning\"> <i class=\"fa fa-hourglass-end\" aria-hidden=\"true\" ></i> End Task</button></td>             \n              <td style=\"padding-left:0;padding-right:0\"><button [disabled]=\" (item.IsTaskCompleted =='1')\" (click)=\"DeleteTask(item.TaskId)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button></td>\n              <td>{{(item.IsTaskCompleted== true)? 'Yes':'No'}}</td>\n            </tr>\n          </tbody>\n        </table>"

/***/ }),

/***/ "./src/app/Dashboard/view-task/view-task.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Dashboard/view-task/view-task.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC92aWV3LXRhc2svdmlldy10YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Dashboard/view-task/view-task.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Dashboard/view-task/view-task.component.ts ***!
  \************************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/shared.service */ "./src/app/Services/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");






var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(_service, datepipe) {
        var _this = this;
        this._service = _service;
        this.datepipe = datepipe;
        this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
    };
    ViewTaskComponent.prototype.DeleteTask = function (TaskId) {
        var _this = this;
        var DeleteResult;
        this._service.DeleteTask(TaskId).subscribe(function (data) { return DeleteResult = data; });
        this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        alert('Task has been deleted successfully..!');
    };
    ViewTaskComponent.prototype.CompleteTaskFlagchange = function (Item) {
        var _this = this;
        var updateResult;
        Item.IsTaskCompleted = 1;
        this._service.CompleteTaskFlagUpdate(Item).subscribe(function (data) { return updateResult = data; });
        this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        alert('Task has been marked as End..!');
    };
    ViewTaskComponent.prototype.TrackTask = function (index, item) {
        return item ? item.TaskID : undefined;
    };
    ViewTaskComponent.prototype.TaskFilter = function (taskdetail) {
        var _this = this;
        if (taskdetail != undefined && taskdetail.length != 0) {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return item.TaskDescription.toUpperCase() === taskdetail.toUpperCase(); }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.ParentTaskFilter = function (Parenttaskdetail) {
        var _this = this;
        if (Parenttaskdetail != undefined && Parenttaskdetail != 0) {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return item.ParentID == Parenttaskdetail; }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.PriorityTaskFilter = function (taskPriority) {
        var _this = this;
        if (taskPriority != undefined && taskPriority != 0) {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return item.Priority == taskPriority; }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.StartDateTaskFilter = function (StartDate) {
        var _this = this;
        if (StartDate != undefined && StartDate.length != 0) {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return _this.datepipe.transform(item.StartDate, 'yyyy-MM-dd') == _this.datepipe.transform(StartDate, 'yyyy-MM-dd'); }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.EndDateTaskFilter = function (endDate) {
        var _this = this;
        if (endDate != undefined && endDate.length != 0) {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return _this.datepipe.transform(item.EndDate, 'yyyy-MM-dd') == _this.datepipe.transform(endDate, 'yyyy-MM-dd'); }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"]],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/Dashboard/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.scss */ "./src/app/Dashboard/view-task/view-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/Services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SharedService = /** @class */ (function () {
    function SharedService(_http) {
        this._http = _http;
        this._ApiUrl = 'http://localhost:49886/Tasks/api/Task';
    }
    // Users Related Methods Start
    SharedService.prototype.GetAllUsers = function () {
        return this._http.get(this._ApiUrl + 'User').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.AddNewUser = function (Item) {
        return this._http.post(this._ApiUrl + 'User', Item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.UpdateUser = function (UserId, Item) {
        return this._http.put(this._ApiUrl + 'User/' + UserId, Item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.DeleteUser = function (UserId) {
        return this._http.delete(this._ApiUrl + 'User/' + UserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    // Users Related Methods End
    // Project Related Method Start
    SharedService.prototype.GetAllProjects = function () {
        return this._http.get(this._ApiUrl + 'Project').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.AddNewProjects = function (Item) {
        return this._http.post(this._ApiUrl + 'Project', Item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.UpdateProjects = function (ProjectId, Item) {
        return this._http.put(this._ApiUrl + 'Project/' + ProjectId, Item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.DeleteProjects = function (ProjectId) {
        return this._http.delete(this._ApiUrl + 'Project/' + ProjectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    // Project Related Method End
    // Task Start
    SharedService.prototype.AddNewParentTask = function (Item) {
        return this._http.post(this._ApiUrl + 'ParentTask', Item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.GetAllTask = function () {
        return this._http.get(this._ApiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.GetTask = function (TaskId) {
        return this._http.get(this._ApiUrl + '?TaskId=' + TaskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.AddNewTask = function (task) {
        return this._http.post(this._ApiUrl, task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.UpdateTask = function (TaskId, task) {
        return this._http.put(this._ApiUrl + '/' + TaskId, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.CompleteTaskFlagUpdate = function (task) {
        return this._http.put(this._ApiUrl, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.DeleteTask = function (TaskId) {
        return this._http.delete(this._ApiUrl + '/' + TaskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SharedService);
    return SharedService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Dashboard_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard/add-task/add-task.component */ "./src/app/Dashboard/add-task/add-task.component.ts");
/* harmony import */ var _Dashboard_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard/view-task/view-task.component */ "./src/app/Dashboard/view-task/view-task.component.ts");
/* harmony import */ var _Dashboard_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dashboard/update-task/update-task.component */ "./src/app/Dashboard/update-task/update-task.component.ts");






var routes = [
    { path: '', redirectTo: '/view-task', pathMatch: 'full' },
    { path: 'add-task', component: _Dashboard_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__["AddTaskComponent"] },
    { path: 'view-task', component: _Dashboard_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_4__["ViewTaskComponent"] },
    { path: 'update-task/:taskid', component: _Dashboard_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_5__["UpdateTaskComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<div class=\"container\">\n<div style=\"text-align:center\">\n  <h3 class=\"alert alert-primary \" >\n    Welcome to {{ title }}\n  </h3>\n</div>\n\n<router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Task Manager Application';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Dashboard_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dashboard/add-task/add-task.component */ "./src/app/Dashboard/add-task/add-task.component.ts");
/* harmony import */ var _Dashboard_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dashboard/view-task/view-task.component */ "./src/app/Dashboard/view-task/view-task.component.ts");
/* harmony import */ var _Dashboard_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dashboard/update-task/update-task.component */ "./src/app/Dashboard/update-task/update-task.component.ts");
/* harmony import */ var _Services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/shared.service */ "./src/app/Services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Dashboard_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Dashboard/add-project/add-project.component */ "./src/app/Dashboard/add-project/add-project.component.ts");
/* harmony import */ var _Dashboard_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dashboard/add-users/add-users.component */ "./src/app/Dashboard/add-users/add-users.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _Dashboard_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
                _Dashboard_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_7__["ViewTaskComponent"],
                _Dashboard_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_8__["UpdateTaskComponent"],
                _Dashboard_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_12__["AddProjectComponent"],
                _Dashboard_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_13__["AddUsersComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_Services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Manoj\Desktop\FSE\Final Submission\TaskManagerApplication-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map