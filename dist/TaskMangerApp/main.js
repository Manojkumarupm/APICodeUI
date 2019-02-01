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

module.exports = "<h3 class=\"text-warning\">Add Project</h3>\r\n<hr />\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <ul class=\"nav nav-pills \">\r\n      <li class=\"nav-item\">\r\n        <h4><a routerLink=\"/add-task\"  class=\"text-secondary\">Add Task</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/view-task\"  class=\"text-secondary\">View Task</a></h4>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/add-users\" class=\"text-secondary\">Add User</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4>\r\n          <a routerLink=\"/add-project\" routerLinkActive=\"active\">Add Project</a>\r\n        </h4>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<h6 class=\"alert alert-danger\" *ngIf=\"!IsformValid\">\r\n  All the below fields are mandatory..!\r\n</h6>\r\n<h6 class=\"alert alert-danger\" *ngIf=\"!IsStartDateGreater\">\r\n  Start date should not be greaterthan End date..!\r\n</h6>\r\n<h6 class=\"alert alert-success\" *ngIf=\"IsAddedSuccessFully\">\r\n  Project added successfully...\r\n</h6>\r\n<h6 class=\"alert alert-success\" *ngIf=\"IsUpdatedSuccessFully\">\r\n  Project updated successfully...\r\n</h6>\r\n<h6 class=\"alert alert-warning\" *ngIf=\"IsDeletedSuccessFully\">\r\n  Project suspended successfully...\r\n</h6>\r\n<form #myForm=\"ngForm\" class=\"well form-horizontal\">\r\n  <table class=\"table table-striped\" style=\"background-color:lightcyan;\">\r\n    <tbody>\r\n      <tr>\r\n        <td colspan=\"1\">\r\n          <fieldset>\r\n            <div class=\"form-group\" *ngIf=\"IsEdit\">\r\n              <label class=\"col-md-4 control-label\">Project Id:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    id=\"ProjectId\"\r\n                    [(ngModel)]=\"ProjectId\"\r\n                    name=\"ProjectId\"\r\n                    class=\"form-control\"\r\n                    readonly\r\n                    type=\"number\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Project:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    id=\"ProjectDescription\"\r\n                    [(ngModel)]=\"ProjectDescription\"\r\n                    name=\"ProjectDescription\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Project Description\"\r\n                    type=\"text\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-md-4 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    id=\"StartEndDateCheck\"\r\n                    name=\"StartEndDateCheck\"\r\n                    class=\"form-control\"\r\n                    (change)=\"changeCheck($event)\"\r\n                    type=\"checkbox\"\r\n                  />\r\n                  <label class=\"control-label\"> Set Start and End Date</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Start Date:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    id=\"StartDate\"\r\n                    [disabled]=\"!Ischecked\"\r\n                    name=\"StartDate\"\r\n                    [ngModel]=\"StartDate | date: 'yyyy-MM-dd'\"\r\n                    (ngModelChange)=\"StartDate = $event\"\r\n                    class=\"form-control\"\r\n                    required=\"true\"\r\n                    value=\"\"\r\n                    type=\"date\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">End Date:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    id=\"EndDate\"\r\n                    [disabled]=\"!Ischecked\"\r\n                    name=\"EndDate\"\r\n                    [ngModel]=\"EndDate | date: 'yyyy-MM-dd'\"\r\n                    (ngModelChange)=\"EndDate = $event\"\r\n                    class=\"form-control\"\r\n                    required=\"true\"\r\n                    value=\"\"\r\n                    type=\"date\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Priority:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <label for=\"rangeval\">{{ rangeval.value }}</label>\r\n                  <input\r\n                    id=\"Priority\"\r\n                    #rangeval\r\n                    [(ngModel)]=\"Priority\"\r\n                    name=\"Priority\"\r\n                    class=\"form-control-range\"\r\n                    required=\"true\"\r\n                    type=\"range\"\r\n                    min=\"0\"\r\n                    max=\"30\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Manager UserId:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    id=\"ManagerUserId\"\r\n                    [(ngModel)]=\"ManagerUserId\"\r\n                    name=\"ManagerUserId\"\r\n                    class=\"form-control\"\r\n                    required=\"true\"\r\n                    disabled\r\n                    type=\"number\"\r\n                  />\r\n                  <button\r\n                    style=\"float:right; padding:3px;\"\r\n                    class=\"btn btn-secondary\"\r\n                    type=\"button\"\r\n                    (click)=\"openModal(tempManager)\"\r\n                  >\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div style=\"padding:20px\" *ngIf=\"!IsEdit\">\r\n              <button\r\n                class=\"btn btn-primary\"\r\n                (click)=\"AddNewProject(myForm)\"\r\n                (blur)=\"LoadProjectGrid()\"\r\n                type=\"submit\"\r\n              >\r\n                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Add project\r\n              </button>\r\n              &nbsp; &nbsp;<button\r\n                class=\"btn btn-warning\"\r\n                (click)=\"ResetProjectForm(myForm)\"\r\n                type=\"button\"\r\n              >\r\n                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\r\n              </button>\r\n            </div>\r\n            <div style=\"padding:20px\" *ngIf=\"IsEdit\">\r\n              <button\r\n                class=\"btn btn-primary\"\r\n                (click)=\"UpdateProject()\"\r\n                (blur)=\"LoadProjectGrid()\"\r\n                type=\"submit\"\r\n              >\r\n                Update Project\r\n              </button>\r\n              &nbsp; &nbsp;<button\r\n                class=\"btn btn-warning\"\r\n                (click)=\"ResetProjectForm(myForm)\"\r\n                type=\"button\"\r\n              >\r\n                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\r\n              </button>\r\n            </div>\r\n          </fieldset>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <hr />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"input-group\">\r\n        <input\r\n          id=\"txtSearchProject\"\r\n          name=\"txtSearchProject\"\r\n          #txtSearchProject\r\n          (keyup)=\"ProjectSearchFilter(txtSearchProject.value)\"\r\n          placeholder=\"Search...\"\r\n          class=\"form-control\"\r\n          value=\"\"\r\n          type=\"text\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <label class=\"control-label\" style=\"padding-right:10px;\">Sort By: </label>\r\n      <button class=\"btn btn-secondary\" (click)=\"StartDateSort()\">\r\n        Start Date\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <button class=\"btn btn-secondary\" (click)=\"EndDateSort()\">\r\n        End Date\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <button class=\"btn btn-secondary\" (click)=\"PrioritySort()\">\r\n        Priority\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <br />\r\n\r\n  <table class=\"table\" style=\"background-color:rgb(229, 242, 245);\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Project Id</th>\r\n        <th scope=\"col\">Project Desc</th>\r\n        <th scope=\"col\">Priority</th>\r\n        <th scope=\"col\">Start Date</th>\r\n        <th scope=\"col\">End Date</th>\r\n        <th scope=\"col\">Manager UserId</th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of listProjects; trackBy: trackProject\">\r\n        <td>{{ item.ProjectId }}</td>\r\n        <td>{{ item.ProjectDescription }}</td>\r\n        <td>{{ item.Priority }}</td>\r\n        <td>{{ item.StartDate | date: \"MM-dd-yyyy\" }}</td>\r\n        <td>{{ item.EndDate | date: \"MM-dd-yyyy\" }}</td>\r\n        <td>{{ item.ManagerUserId }}</td>\r\n        <td style=\"padding-left:0;padding-right:0; margin: 0%\">\r\n          <button class=\"btn btn-secondary\" (click)=\"EditProjectBind(item)\">\r\n            Update\r\n          </button>\r\n        </td>\r\n        <td style=\"padding-left:0;padding-right:0;margin: 0%\">\r\n          <button\r\n            class=\"btn btn-danger\"\r\n            (click)=\"DeleteProject(item.ProjectId)\"\r\n            (blur)=\"LoadProjectGrid()\"\r\n          >\r\n            Suspend\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</form>\r\n<ng-template #tempManager>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left text-warning\">Manager list</h4>\r\n    <button\r\n      class=\"btn btn-secondary close pull-right\"\r\n      type=\"button\"\r\n      (click)=\"modalRef.hide()\"\r\n      aria-label=\"close\"\r\n    ></button>\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h6 class=\"text text-success\" *ngIf=\"IsManagerSelected\">\r\n      Manager userId is selected successfully...\r\n    </h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"input-group\">\r\n          <input\r\n            id=\"txtSearch\"\r\n            name=\"txtSearch\"\r\n            #txtSearch\r\n            (keyup)=\"SearchFilter(txtSearch.value)\"\r\n            placeholder=\"Search...\"\r\n            class=\"form-control\"\r\n            value=\"\"\r\n            type=\"text\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">User Id</th>\r\n          <th scope=\"col\">First Name</th>\r\n          <th scope=\"col\">Last Name</th>\r\n          <th scope=\"col\">Employee Id</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of listManager; trackBy: trackUser\">\r\n          <td>{{ item.UserId }}</td>\r\n          <td>{{ item.FirstName }}</td>\r\n          <td>{{ item.LastName }}</td>\r\n          <td>{{ item.EmployeeId }}</td>\r\n          <td style=\"padding-left:0;padding-right:0; margin: 0%\">\r\n            <button\r\n              style=\"padding:0px;\"\r\n              class=\"btn btn-success\"\r\n              (click)=\"SelectManger(item.UserId)\"\r\n            >\r\n              Select\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-template>\r\n"

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
    AddProjectComponent.prototype.ngOnInit = function () { };
    AddProjectComponent.prototype.changeCheck = function (eve) {
        if (eve.target.checked) {
            this.Ischecked = true;
        }
        else {
            this.Ischecked = false;
        }
    };
    AddProjectComponent.prototype.openModal = function (tempManager) {
        this.modalRef = this.modalServ.show(tempManager);
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
            this._service
                .GetAllUsers()
                .subscribe(function (data) {
                return (_this.listManager = data.filter(function (item) {
                    return item.FirstName.toUpperCase() === Searchdetail.toUpperCase() ||
                        item.LastName.toUpperCase() === Searchdetail.toUpperCase() ||
                        item.EmployeeId.toUpperCase() === Searchdetail.toUpperCase() ||
                        item.UserId.toString() === Searchdetail;
                }));
            });
        }
        else {
            this._service.GetAllUsers().subscribe(function (data) { return (_this.listManager = data); });
        }
    };
    AddProjectComponent.prototype.ProjectSearchFilter = function (projectSearchCriteria) {
        var _this = this;
        if (projectSearchCriteria !== undefined &&
            projectSearchCriteria.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service
                .GetAllProjects()
                .subscribe(function (data) {
                return (_this.listProjects = data.filter(function (item) {
                    return _this.datepipe.transform(item.StartDate, 'yyyy-MM-dd') ===
                        _this.datepipe.transform(projectSearchCriteria, 'yyyy-MM-dd') ||
                        _this.datepipe.transform(item.EndDate, 'yyyy-MM-dd') ===
                            _this.datepipe.transform(projectSearchCriteria, 'yyyy-MM-dd') ||
                        item.ProjectId.toString() === projectSearchCriteria ||
                        item.ProjectDescription.toUpperCase() ===
                            projectSearchCriteria.toUpperCase() ||
                        item.Priority.toString() === projectSearchCriteria ||
                        item.ManagerUserId.toString() === projectSearchCriteria;
                }));
            });
        }
        else {
            this._service
                .GetAllProjects()
                .subscribe(function (data) { return (_this.listProjects = data); });
        }
    };
    AddProjectComponent.prototype.StartDateSort = function () {
        var _this = this;
        this._service.GetAllProjects().subscribe(function (data) {
            return (_this.listProjects = data.sort(function (a, b) {
                if (a.StartDate < b.StartDate) {
                    return -1;
                }
                else if (a.StartDate > b.StartDate) {
                    return 1;
                }
                else {
                    return 0;
                }
            }));
        });
    };
    AddProjectComponent.prototype.EndDateSort = function () {
        var _this = this;
        this._service.GetAllProjects().subscribe(function (data) {
            return (_this.listProjects = data.sort(function (a, b) {
                if (a.EndDate < b.EndDate) {
                    return -1;
                }
                else if (a.EndDate > b.EndDate) {
                    return 1;
                }
                else {
                    return 0;
                }
            }));
        });
    };
    AddProjectComponent.prototype.PrioritySort = function () {
        var _this = this;
        this._service.GetAllProjects().subscribe(function (data) {
            return (_this.listProjects = data.sort(function (a, b) {
                if (a.Priority < b.Priority) {
                    return -1;
                }
                else if (a.Priority > b.Priority) {
                    return 1;
                }
                else {
                    return 0;
                }
            }));
        });
    };
    AddProjectComponent.prototype.SelectManger = function (userIdManager) {
        this.ManagerUserId = userIdManager;
        this.IsManagerSelected = true;
    };
    AddProjectComponent.prototype.AddNewProject = function (form) {
        var _this = this;
        var Projectdetails = {
            ProjectId: 0,
            ProjectDescription: this.ProjectDescription,
            Priority: this.Priority,
            ManagerUserId: this.ManagerUserId,
            StartDate: '',
            EndDate: ''
        };
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
        if (Projectdetails.ProjectDescription === undefined ||
            Projectdetails.ManagerUserId === undefined ||
            Projectdetails.StartDate === undefined ||
            Projectdetails.EndDate === undefined ||
            Projectdetails.ProjectDescription === '' ||
            Projectdetails.ManagerUserId === 0 ||
            Projectdetails.StartDate === '' ||
            Projectdetails.EndDate === '') {
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
            this._service
                .AddNewProjects(Projectdetails)
                .subscribe(function (data) { return (_this.insertResult = data); });
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
        this.ProjectDescription = _project.ProjectDescription;
        this.Priority = _project.Priority;
        this.StartDate = _project.StartDate;
        this.EndDate = _project.EndDate;
        this.ManagerUserId = _project.ManagerUserId;
        window.scroll(0, 0);
    };
    AddProjectComponent.prototype.UpdateProject = function () {
        var updateResult;
        var Projectdetails = {
            ProjectId: this.ProjectId,
            ProjectDescription: this.ProjectDescription,
            Priority: this.Priority,
            ManagerUserId: this.ManagerUserId,
            StartDate: this.StartDate,
            EndDate: this.EndDate
        };
        if (Projectdetails.ProjectDescription === undefined ||
            Projectdetails.ManagerUserId === undefined ||
            Projectdetails.StartDate === undefined ||
            Projectdetails.EndDate === undefined ||
            Projectdetails.ProjectDescription === '' ||
            Projectdetails.Priority === 0 ||
            Projectdetails.ManagerUserId === 0 ||
            Projectdetails.StartDate === '' ||
            Projectdetails.EndDate === '') {
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
            this._service
                .UpdateProjects(Projectdetails.ProjectId, Projectdetails)
                .subscribe(function (data) { return (updateResult = data); });
            this.IsUpdatedSuccessFully = true;
            this.IsDeletedSuccessFully = false;
            this.IsAddedSuccessFully = false;
        }
        window.scroll(0, 0);
    };
    AddProjectComponent.prototype.DeleteProject = function (ProjectId) {
        var DeleteResult;
        this._service
            .DeleteProjects(ProjectId)
            .subscribe(function (data) { return (DeleteResult = data); });
        this.IsDeletedSuccessFully = true;
        this.IsUpdatedSuccessFully = false;
        this.IsAddedSuccessFully = false;
        this.IsformValid = true;
        window.scroll(0, 0);
    };
    AddProjectComponent.prototype.LoadProjectGrid = function () {
        var _this = this;
        this._service
            .GetAllProjects()
            .subscribe(function (data) { return (_this.listProjects = data); });
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

module.exports = "<h3 class=\"text-alert\">Add Task</h3>\r\n<hr>\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <ul class=\"nav nav-pills \">\r\n      <li class=\"nav-item\">\r\n        <h4><a routerLink=\"/add-task\" routerLinkActive=\"active\">Add Task</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/view-task\" class=\"text-secondary\">View Task</a></h4>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/add-users\" class=\"text-secondary\">Add User</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4>\r\n          <a routerLink=\"/add-project\"  class=\"text-secondary\">Add Project</a>\r\n        </h4>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<h6 class=\"alert alert-danger\" *ngIf=\"!IsformValid\">All the below fields are mandatory..!</h6>\r\n  <h6 class=\"alert alert-success\" *ngIf=\"IsAddedSuccessFully\">Task added successfully...</h6>\r\n  <h6 class=\"alert alert-success\" *ngIf=\"IsParentAddedSuccessFully\">Parent Task added successfully...</h6>\r\n  <h6 class=\"alert alert-danger\" *ngIf=\"IsStartDateGreater\">Start date should not be greaterthan End date..!</h6>\r\n<table class=\"table table-striped\" style=\"background-color:lightcyan;\">\r\n  <tbody>\r\n    <tr>\r\n      <td colspan=\"1\">\r\n        <form #myForm=\"ngForm\" class=\"well form-horizontal\">\r\n          <fieldset>\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-md-4 control-label\">Project Id:</label>\r\n                  <div class=\"col-md-8 inputGroupContainer\">\r\n                        <div class=\"input-group\">\r\n               <input id=\"ProjectId\" [(ngModel)]=\"ProjectId\"   name=\"ProjectId\"  class=\"form-control\" required=\"true\"  disabled type=\"number\" > <button [disabled]=\"Ischecked\" style=\"float:right; padding:3px;\" class=\"btn btn-secondary\"  type=\"button\" (click)=\"openProjectModal(tempProject)\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button> </div>\r\n               </div>\r\n              </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Task:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\"><input id=\"TaskDescription\" [(ngModel)]=\"TaskDescription\" name=\"TaskDescription\" placeholder=\"Task Details\"\r\n                    class=\"form-control\" required=\"true\" value=\"\" type=\"text\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" >\r\n\r\n              <div class=\"col-md-4 inputGroupContainer\">\r\n                 <div class=\"input-group\">\r\n                   <input id=\"ParentTaskCheck\" name=\"ParentTaskCheck\" class=\"form-control\" (change)=\"changeCheck($event)\"   type=\"checkbox\">\r\n                   <label class=\"control-label\">Parent Task</label></div>\r\n              </div>\r\n\r\n           </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Priority</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <label for=\"rangeval\">{{ rangeval.value }}</label>\r\n                  <input id=\"Priority\" #rangeval [(ngModel)]=\"Priority\" name=\"Priority\" class=\"form-control-range\"\r\n                    required=\"true\" value=\"\" type=\"range\" min=\"0\" max=\"60\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Parent Task Id:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                 <div class=\"input-group\"><input id=\"ParentTask\" [disabled]=\"Ischecked\" [(ngModel)]=\"ParentId\"  #ParentTask name=\"ParentTask\" placeholder=\"Parent Task Id\" readonly class=\"form-control\" required=\"true\" value=\"\" type=\"number\">\r\n                   <button [disabled]=\"Ischecked\" style=\"float:right; padding:3px;\" class=\"btn btn-secondary\"  type=\"button\" (click)=\"openParenttaskModal(tempParentTask)\" >search</button>   </div>\r\n              </div>\r\n           </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">Start Date:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\">\r\n                  <input id=\"StartDate\" name=\"StartDate\" [(ngModel)]=\"StartDate\" class=\"form-control\" required=\"true\"\r\n                    value=\"\" type=\"date\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">End Date:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                <div class=\"input-group\"><input id=\"EndDate\" name=\"EndDate\" [(ngModel)]=\"EndDate\" class=\"form-control\"\r\n                    required=\"true\" value=\"\" type=\"date\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4 control-label\">UserId:</label>\r\n              <div class=\"col-md-8 inputGroupContainer\">\r\n                  <div class=\"input-group\">\r\n           <input id=\"UserId\" [(ngModel)]=\"UserId\"   name=\"UserId\"  class=\"form-control\" required=\"true\" readonly  disabled type=\"number\" > <button [disabled]=\"Ischecked\" style=\"float:right; padding:3px;\" class=\"btn btn-secondary\"  type=\"button\" (click)=\"openUserModal(tempUser)\" >search</button>    </div>\r\n           </div>\r\n          </div>\r\n            <div style=\"padding:20px\">\r\n              <button class=\"btn btn-primary\" (click)=\"AddNewTaskInformation(myForm)\" type=\"submit\">\r\n                  <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Add Task</button>\r\n               &nbsp; &nbsp;\r\n\r\n               <button class=\"btn btn-warning\" (click)=\"ResetTaskForm(myForm)\" type=\"button\">\r\n                  <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>  Reset</button>\r\n            </div>\r\n\r\n          </fieldset>\r\n        </form>\r\n      </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<ng-template #tempProject >\r\n    <div class=\"modal-header\">\r\n<h4 class=\"modal-title pull-left text-warning\">Project list</h4>\r\n<button class=\"btn btn-secondary close pull-right\" type=\"button\" (click)=\"ProjectmodalReference.hide()\" aria-label=\"close\"></button>\r\n<span aria-hidden=\"true\">&times;</span>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n       <h6 class=\"text text-success\" *ngIf=\"IsProjectSelected\">Project is selected successfully...</h6>\r\n       <div class=\"row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\"><input id=\"txtSearchProject\" name=\"txtSearchProject\" #txtSearchProject (keyup)=\"SearchProjectFilter(txtSearchProject.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\">\r\n              </div>\r\n          </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n          <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">ProjectId</th>\r\n                      <th scope=\"col\">ProjectDescription</th>\r\n                      <th scope=\"col\">Priority</th>\r\n                      <th scope=\"col\">ManagerUserId</th>\r\n                      <th></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr *ngFor =\"let item of listProjects ; trackBy: trackProject\" >\r\n                        <td>{{item.ProjectId}}</td>\r\n                        <td>{{item.ProjectDescription}}</td>\r\n                        <td>{{item.Priority}}</td>\r\n                        <td>{{item.ManagerUserId }}</td>\r\n                        <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button style=\"padding:0px;\" class=\"btn btn-success\" (click)=\"SelectProject(item.ProjectId)\"  >Select</button></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n\r\n    </div>\r\n   </ng-template>\r\n\r\n   <ng-template #tempParentTask >\r\n       <div class=\"modal-header\">\r\n <h4 class=\"modal-title pull-left text-warning\">Parent Task list</h4>\r\n <button class=\"btn btn-secondary close pull-right\" type=\"button\" (click)=\"ParentTaskModalReference.hide()\" aria-label=\"close\"></button>\r\n  <span aria-hidden=\"true\">&times;</span>\r\n       </div>\r\n       <div class=\"modal-body\">\r\n          <h6 class=\"text text-success\" *ngIf=\"IsParentTaskSelected\">Parent task is selected successfully...</h6>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\"><input id=\"txtSearchParentTask\" name=\"txtSearchParentTask\" #txtSearchParentTask (keyup)=\"SearchParentTaskFilter(txtSearchParentTask.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\r\n             </div>\r\n             </div>\r\n             <br>\r\n             <table class=\"table\" >\r\n                   <thead>\r\n                       <tr>\r\n                         <th scope=\"col\">Parent Id</th>\r\n                         <th scope=\"col\">Parent Task</th>\r\n\r\n                         <th></th>\r\n                       </tr>\r\n                     </thead>\r\n                     <tbody>\r\n                         <tr *ngFor =\"let item of listParentTask ; trackBy: trackParentTask\" >\r\n                           <td>{{item.ParentId}}</td>\r\n                           <td>{{item.ParentTask1}}</td>\r\n                           <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button style=\"padding:0px;\" class=\"btn btn-success\" (click)=\"SelectParentTask(item.ParentId)\"  >Select</button></td>\r\n                         </tr>\r\n                       </tbody>\r\n                     </table>\r\n\r\n       </div>\r\n      </ng-template>\r\n      <ng-template #tempUser>\r\n          <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left text-warning\">User list</h4>\r\n    <button class=\"btn btn-secondary close pull-right\" type=\"button\" (click)=\"UserModalReference.hide()\" aria-label=\"close\"></button>\r\n     <span aria-hidden=\"true\">&times;</span>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n             <h6 class=\"text text-success\" *ngIf=\"IsUserSelected\">User userId is selected successfully...</h6>\r\n             <div class=\"row\">\r\n                 <div class=\"col-md-6\">\r\n                    <div class=\"input-group\"><input id=\"txtSearchUser\" name=\"txtSearchUser\" #txtSearchUser (keyup)=\"SearchUserFilter(txtSearchUser.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\r\n                </div>\r\n                </div>\r\n                <br>\r\n             <table class=\"table\" >\r\n                 <thead>\r\n                     <tr>\r\n                       <th scope=\"col\">User Id</th>\r\n                       <th scope=\"col\">First Name</th>\r\n                       <th scope=\"col\">Last Name</th>\r\n                       <th scope=\"col\">Employee Id</th>\r\n                       <th></th>\r\n\r\n                     </tr>\r\n                   </thead>\r\n                   <tbody>\r\n                       <tr *ngFor =\"let item of listUser ; trackBy: trackUser\" >\r\n                         <td>{{item.UserId}}</td>\r\n                         <td>{{item.FirstName}}</td>\r\n                         <td>{{item.LastName}}</td>\r\n                         <td>{{item.EmployeeId}}</td>\r\n                         <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button style=\"padding:0px;\" class=\"btn btn-success\" (click)=\"SelectUser(item.UserId)\"  >Select</button></td>\r\n                       </tr>\r\n                     </tbody>\r\n                   </table>\r\n\r\n          </div>\r\n         </ng-template>\r\n"

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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var AddTaskComponent = /** @class */ (function () {
    // Modal Reference Variable End
    // tslint:disable-next-line:max-line-length
    function AddTaskComponent(_service, ProjectmodalServ, ParentTaskmodalServ, UsermodalServ, datepipe) {
        var _this = this;
        this._service = _service;
        this.ProjectmodalServ = ProjectmodalServ;
        this.ParentTaskmodalServ = ParentTaskmodalServ;
        this.UsermodalServ = UsermodalServ;
        this.datepipe = datepipe;
        // List Objects Holder End
        // Properties To Validate Start
        this.IsformValid = true;
        this.IsAddedSuccessFully = false;
        this.IsParentAddedSuccessFully = false;
        this.IsProjectSelected = false;
        this.IsParentTaskSelected = false;
        this.IsStartDateGreater = false;
        this.IsUserSelected = false;
        this.Ischecked = false;
        this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data; });
        this._service.GetAllParentTask().subscribe(function (data) { return _this.listParentTask = data; });
        this._service.GetAllUsers().subscribe(function (data) { return _this.listUser = data; });
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    // New Task Add Method
    AddTaskComponent.prototype.AddNewTaskInformation = function (form) {
        var _this = this;
        this.IsParentAddedSuccessFully = false;
        if (this.Ischecked) {
            var ParentTaskDetails = { ParentId: 0, ParentTask1: this.TaskDescription };
            if (ParentTaskDetails.ParentTask1 === undefined || ParentTaskDetails.ParentTask1 === '') {
                this.IsformValid = false;
            }
            else {
                this.IsformValid = true;
                this._service.AddNewParentTask(ParentTaskDetails).subscribe(function (data) { return _this.insertResult = data; });
                this.IsParentAddedSuccessFully = true;
                form.reset();
            }
        }
        else {
            var Taskdetails = {
                TaskId: 0,
                ParentId: this.ParentId,
                TaskDescription: this.TaskDescription,
                StartDate: this.StartDate,
                EndDate: this.EndDate,
                Priority: this.Priority,
                IsTaskCompleted: 0,
                ProjectId: this.ProjectId,
                UserId: this.UserId
            };
            if (Taskdetails.Priority === undefined) {
                Taskdetails.Priority = 15;
            }
            // tslint:disable-next-line:max-line-length
            if (Taskdetails.TaskDescription === undefined || Taskdetails.ParentId === undefined || Taskdetails.StartDate === undefined || Taskdetails.EndDate === undefined
                || Taskdetails.ProjectId === undefined || Taskdetails.UserId === undefined
                || Taskdetails.TaskDescription.length === 0) {
                this.IsformValid = false;
            }
            else if (Date.parse(Taskdetails.StartDate) > Date.parse(Taskdetails.EndDate)) {
                this.IsformValid = true;
                this.IsAddedSuccessFully = false;
                this.IsStartDateGreater = true;
            }
            else {
                this.IsformValid = true;
                this.IsStartDateGreater = false;
                this._service.AddNewTask(Taskdetails).subscribe(function (data) { return _this.insertResult = data; });
                this.IsAddedSuccessFully = true;
                form.reset();
            }
        }
        window.scroll(0, 0);
    };
    AddTaskComponent.prototype.ResetTaskForm = function (form) {
        form.reset();
        this.IsAddedSuccessFully = false;
        this.IsParentAddedSuccessFully = false;
        this.IsParentTaskSelected = false;
        this.IsUserSelected = false;
        this.IsProjectSelected = false;
        this.IsformValid = true;
        this.IsStartDateGreater = false;
        window.scroll(0, 0);
    };
    AddTaskComponent.prototype.SelectProject = function (ProjectId) {
        this.ProjectId = ProjectId;
        this.IsProjectSelected = true;
    };
    AddTaskComponent.prototype.SelectParentTask = function (ParentId) {
        this.ParentId = ParentId;
        this.IsParentTaskSelected = true;
    };
    AddTaskComponent.prototype.openProjectModal = function (tmpProject) {
        this.ProjectmodalReference = this.ProjectmodalServ.show(tmpProject);
    };
    AddTaskComponent.prototype.openParenttaskModal = function (tmpParentTask) {
        this.ParentTaskModalReference = this.ParentTaskmodalServ.show(tmpParentTask);
    };
    AddTaskComponent.prototype.SearchProjectFilter = function (projectSearchCriteria) {
        var _this = this;
        if (projectSearchCriteria !== undefined && projectSearchCriteria.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data.filter(function (item) { return _this.datepipe.transform(item.StartDate, 'yyyy-MM-dd') === _this.datepipe.transform(projectSearchCriteria, 'yyyy-MM-dd') || _this.datepipe.transform(item.EndDate, 'yyyy-MM-dd') === _this.datepipe.transform(projectSearchCriteria, 'yyyy-MM-dd')
                // tslint:disable-next-line:max-line-length
                || item.ProjectId.toString() === projectSearchCriteria || item.ProjectDescription.toUpperCase() === projectSearchCriteria.toUpperCase()
                || item.Priority.toString() === projectSearchCriteria || item.ManagerUserId.toString() === projectSearchCriteria; }); });
        }
        else {
            this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data; });
        }
    };
    AddTaskComponent.prototype.SearchParentTaskFilter = function (ParentTaskSearchCriteria) {
        var _this = this;
        if (ParentTaskSearchCriteria !== undefined && ParentTaskSearchCriteria.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllParentTask().subscribe(function (data) { return _this.listParentTask = data.filter(function (item) { return item.ParentId.toString() === ParentTaskSearchCriteria || item.ParentTask1.toUpperCase() === ParentTaskSearchCriteria.toUpperCase(); }); });
        }
        else {
            this._service.GetAllParentTask().subscribe(function (data) { return _this.listParentTask = data; });
        }
    };
    AddTaskComponent.prototype.changeCheck = function (eve) {
        if (eve.target.checked) {
            this.Ischecked = true;
        }
        else {
            this.Ischecked = false;
        }
    };
    AddTaskComponent.prototype.trackParentTask = function (index, item) {
        return item ? item.ParentId : undefined;
    };
    AddTaskComponent.prototype.trackProject = function (index, item) {
        return item ? item.ProjectId : undefined;
    };
    AddTaskComponent.prototype.SelectUser = function (UserId) {
        this.UserId = UserId;
        this.IsUserSelected = true;
    };
    AddTaskComponent.prototype.trackUser = function (index, item) {
        return item ? item.UserId : undefined;
    };
    AddTaskComponent.prototype.SearchUserFilter = function (Searchdetail) {
        var _this = this;
        if (Searchdetail !== undefined && Searchdetail.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllUsers().subscribe(function (data) { return _this.listUser = data.filter(function (item) { return item.FirstName.toUpperCase() === Searchdetail.toUpperCase() || item.LastName.toUpperCase() === Searchdetail.toUpperCase()
                || item.EmployeeId.toUpperCase() === Searchdetail.toUpperCase() || item.UserId.toString() === Searchdetail; }); });
        }
        else {
            this._service.GetAllUsers().subscribe(function (data) { return _this.listUser = data; });
        }
    };
    AddTaskComponent.prototype.openUserModal = function (tmpUser) {
        this.UserModalReference = this.UsermodalServ.show(tmpUser);
    };
    AddTaskComponent.prototype.LoadParentTask = function () {
        var _this = this;
        this._service.GetAllParentTask().subscribe(function (data) { return _this.listParentTask = data; });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
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

module.exports = "\r\n<h3 class=\"text-warning\">Add User</h3>\r\n<hr>\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <ul class=\"nav nav-pills \">\r\n      <li class=\"nav-item\">\r\n        <h4><a routerLink=\"/add-task\"  class=\"text-secondary\">Add Task</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/view-task\"  class=\"text-secondary\">View Task</a></h4>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/add-users\" routerLinkActive=\"active\">Add User</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4>\r\n          <a routerLink=\"/add-project\" class=\"text-secondary\">Add Project</a>\r\n        </h4>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n  <h6 class=\"alert alert-danger\" *ngIf=\"!IsformValid\">All the below fields are mandatory..!</h6>\r\n  <h6 class=\"alert alert-success\" *ngIf=\"IsAddedSuccessFully\">User added successfully...</h6>\r\n  <h6 class=\"alert alert-success\" *ngIf=\"IsUpdatedSuccessFully\">User updated successfully...</h6>\r\n  <h6 class=\"alert alert-warning\" *ngIf=\"IsDeletedSuccessFully\">User deleted successfully...</h6>\r\n  <form  #myForm=\"ngForm\"  class=\"well form-horizontal\"  >\r\n<table class=\"table table-striped\">\r\n    <tbody>\r\n       <tr>\r\n          <td colspan=\"1\">\r\n\r\n                <fieldset>\r\n                     <div class=\"form-group\" *ngIf=\"IsEdit\">\r\n                           <label class=\"col-md-4 control-label\">User Id:</label>\r\n                           <div class=\"col-md-8 inputGroupContainer\">\r\n                              <div class=\"input-group\"><input id=\"UserId\" [(ngModel)]=\"UserId\"  name=\"UserId\"  class=\"form-control\" readonly type=\"number\"></div>\r\n                           </div>\r\n                        </div>\r\n\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">First Name:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                         <div class=\"input-group\"><input id=\"FirstName\" [(ngModel)]=\"FirstName\"  name=\"FirstName\" placeholder=\"First Name\" class=\"form-control\" maxlength=\"100\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                      </div>\r\n                   </div>\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">Last Name:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                         <div class=\"input-group\"><input id=\"LastName\" [(ngModel)]=\"LastName\"  name=\"LastName\" placeholder=\"Last Name\" class=\"form-control\" maxlength=\"100\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                      </div>\r\n                   </div>\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">Employee Id:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                         <div class=\"input-group\"><input id=\"EmployeeId\" [(ngModel)]=\"EmployeeId\"  name=\"EmployeeId\" placeholder=\"Employee Id\" class=\"form-control\" maxlength=\"30\" required=\"true\" value=\"\" type=\"text\"></div>\r\n                      </div>\r\n                   </div>\r\n\r\n              <div style=\"padding:20px\" *ngIf=\"!IsEdit\" > <button class=\"btn btn-primary\" (click)=\"AddNewUser(myForm) \" (blur)=\"LoadUsersGrid()\" type=\"submit\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Add User</button> &nbsp; &nbsp;<button class=\"btn btn-info\" (click)=\"ResetUserForm(myForm)\" type=\"button\"><i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset</button> </div>\r\n              <div style=\"padding:20px\" *ngIf=\"IsEdit\"> <button class=\"btn btn-primary\" (click)=\"UpdateUser() \" (blur)=\"LoadUsersGrid()\" type=\"submit\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Update User</button> &nbsp; &nbsp;<button class=\"btn btn-info\" (click)=\"ResetUserForm(myForm)\" type=\"button\"><i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset</button> </div>\r\n                </fieldset>\r\n\r\n          </td>\r\n\r\n       </tr>\r\n    </tbody>\r\n </table>\r\n <hr>\r\n<div class=\"row\">\r\n   <div class=\"col-md-6\">\r\n      <div class=\"input-group\"><input id=\"txtSearch\" name=\"txtSearch\" #txtSearch (keyup)=\"SearchFilter(txtSearch.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n      <label class=\"control-label\" style=\"padding-right:10px;\">Sort By: </label>\r\n      <button class=\"btn btn-secondary\"  (click)=\"FirstNameSort()\"  style=\"padding:6px;\">First Name</button>\r\n   </div>\r\n   <div class=\"col-md-2\">\r\n      <button class=\"btn btn-secondary\"  (click)=\"LastNameSort()\" style=\"padding:6px;\" >Last Name</button>\r\n   </div>\r\n   <div class=\"col-md-2\" >\r\n      <button class=\"btn btn-secondary\" (click)=\"IdSort()\" >Id</button>\r\n   </div>\r\n  </div>\r\n\r\n<hr>\r\n  <table class=\"table\" >\r\n      <thead>\r\n          <tr>\r\n            <th scope=\"col\">User Id</th>\r\n            <th scope=\"col\">First Name</th>\r\n            <th scope=\"col\">Last Name</th>\r\n            <th scope=\"col\">Employee Id</th>\r\n            <th></th>\r\n            <th></th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor =\"let item of list ; trackBy: trackUser\" >\r\n              <td>{{item.UserId}}</td>\r\n              <td>{{item.FirstName}}</td>\r\n              <td>{{item.LastName}}</td>\r\n              <td>{{item.EmployeeId}}</td>\r\n\r\n              <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button class=\"btn btn-secondary\" (click)=\"EditUserBind(item)\"  >Edit</button></td>\r\n              <td style=\"padding-left:0;padding-right:0;margin: 0%\"><button class=\"btn btn-danger\" (click)=\"DeleteUser(item.UserId)\" (blur)=\"LoadUsersGrid()\" >Delete</button></td>\r\n\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </form>\r\n"

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
/* harmony import */ var src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/shared.service */ "./src/app/Services/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AddUsersComponent = /** @class */ (function () {
    function AddUsersComponent(_service) {
        var _this = this;
        this._service = _service;
        this.IsformValid = true;
        this.IsAddedSuccessFully = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        this.IsEdit = false;
        this._service.GetAllUsers().subscribe(function (data) { return (_this.list = data); });
    }
    AddUsersComponent.prototype.ngOnInit = function () { };
    AddUsersComponent.prototype.LoadUsersGrid = function () {
        var _this = this;
        this._service.GetAllUsers().subscribe(function (data) { return (_this.list = data); });
    };
    AddUsersComponent.prototype.AddNewUser = function (form) {
        var _this = this;
        var Userdetails = {
            UserId: 0,
            FirstName: this.FirstName,
            LastName: this.LastName,
            EmployeeId: this.EmployeeId
        };
        this.IsEdit = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        if (Userdetails.FirstName === undefined ||
            Userdetails.LastName === undefined ||
            Userdetails.EmployeeId === undefined ||
            Userdetails.FirstName === '' ||
            Userdetails.LastName === '' ||
            Userdetails.EmployeeId === '') {
            this.IsformValid = false;
            this.IsAddedSuccessFully = false;
        }
        else {
            this.IsformValid = true;
            this._service
                .AddNewUser(Userdetails)
                .subscribe(function (data) { return (_this.insertResult = data); });
            this.IsAddedSuccessFully = true;
            form.reset();
        }
        window.scroll(0, 0);
    };
    AddUsersComponent.prototype.EditUserBind = function (user) {
        this.IsAddedSuccessFully = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        this.IsformValid = true;
        this.IsEdit = true;
        this.UserId = user.UserId;
        this.FirstName = user.FirstName;
        this.LastName = user.LastName;
        this.EmployeeId = user.EmployeeId;
        window.scroll(0, 0);
    };
    AddUsersComponent.prototype.ResetUserForm = function (form) {
        form.reset();
        this.IsAddedSuccessFully = false;
        this.IsDeletedSuccessFully = false;
        this.IsUpdatedSuccessFully = false;
        this.IsformValid = true;
        this.IsEdit = false;
        window.scroll(0, 0);
    };
    AddUsersComponent.prototype.trackUser = function (index, item) {
        return item ? item.UserId : undefined;
    };
    AddUsersComponent.prototype.SearchFilter = function (Searchdetail) {
        var _this = this;
        if (Searchdetail !== undefined && Searchdetail.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service
                .GetAllUsers()
                .subscribe(function (data) {
                return (_this.list = data.filter(function (item) {
                    return item.FirstName.toUpperCase() === Searchdetail.toUpperCase() ||
                        item.LastName.toUpperCase() === Searchdetail.toUpperCase() ||
                        item.EmployeeId.toUpperCase() === Searchdetail.toUpperCase() ||
                        item.UserId.toString() === Searchdetail;
                }));
            });
        }
        else {
            this._service.GetAllUsers().subscribe(function (data) { return (_this.list = data); });
        }
    };
    AddUsersComponent.prototype.FirstNameSort = function () {
        var _this = this;
        this._service.GetAllUsers().subscribe(function (data) {
            return (_this.list = data.sort(function (a, b) {
                if (a.FirstName < b.FirstName) {
                    return -1;
                }
                else if (a.FirstName > b.FirstName) {
                    return 1;
                }
                else {
                    return 0;
                }
            }));
        });
    };
    AddUsersComponent.prototype.LastNameSort = function () {
        var _this = this;
        this._service.GetAllUsers().subscribe(function (data) {
            return (_this.list = data.sort(function (a, b) {
                if (a.LastName < b.LastName) {
                    return -1;
                }
                else if (a.LastName > b.LastName) {
                    return 1;
                }
                else {
                    return 0;
                }
            }));
        });
    };
    AddUsersComponent.prototype.IdSort = function () {
        var _this = this;
        this._service.GetAllUsers().subscribe(function (data) {
            return (_this.list = data.sort(function (a, b) {
                if (a.UserId < b.UserId) {
                    return -1;
                }
                else if (a.UserId > b.UserId) {
                    return 1;
                }
                else {
                    return 0;
                }
            }));
        });
    };
    AddUsersComponent.prototype.DeleteUser = function (UserId) {
        var DeleteResult;
        this._service.DeleteUser(UserId).subscribe(function (data) { return (DeleteResult = data); });
        this.IsDeletedSuccessFully = true;
        this.IsUpdatedSuccessFully = false;
        this.IsAddedSuccessFully = false;
        this.IsformValid = true;
        window.scroll(0, 0);
    };
    AddUsersComponent.prototype.UpdateUser = function () {
        var updateResult;
        var Userdetails = {
            UserId: this.UserId,
            FirstName: this.FirstName,
            LastName: this.LastName,
            EmployeeId: this.EmployeeId
        };
        if (Userdetails.FirstName === undefined ||
            Userdetails.LastName === undefined ||
            Userdetails.EmployeeId === undefined ||
            Userdetails.FirstName === '' ||
            Userdetails.LastName === '' ||
            Userdetails.EmployeeId === '') {
            this.IsformValid = false;
            this.IsUpdatedSuccessFully = false;
        }
        else {
            this.IsformValid = true;
            this._service
                .UpdateUser(Userdetails.UserId, Userdetails)
                .subscribe(function (data) { return (updateResult = data); });
            this.IsUpdatedSuccessFully = true;
            this.IsDeletedSuccessFully = false;
            this.IsAddedSuccessFully = false;
        }
        window.scroll(0, 0);
    };
    AddUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-users',
            template: __webpack_require__(/*! ./add-users.component.html */ "./src/app/Dashboard/add-users/add-users.component.html"),
            styles: [__webpack_require__(/*! ./add-users.component.scss */ "./src/app/Dashboard/add-users/add-users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "\r\n<hr>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <ul class=\"nav nav-pills \">\r\n      <li class=\"nav-item\">\r\n        <h4><a routerLink=\"/add-task\" class=\"text-secondary\">Add Task</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/view-task\" class=\"text-secondary\">View Task</a></h4>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/add-users\" class=\"text-secondary\">Add User</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4>\r\n          <a routerLink=\"/add-project\"  class=\"text-secondary\">Add Project</a>\r\n        </h4>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<h3 class=\"text-warning\">Update Task</h3>\r\n<hr>\r\n<h6 class=\"alert alert-danger\" *ngIf=\"!IsformValid\">All the below fields are mandatory..!</h6>\r\n  <h6 class=\"alert alert-success\" *ngIf=\"IsUpdatedSuccessFully\">Task updated successfully...</h6>\r\n\r\n<table class=\"table table-striped\" style=\"background-color:lightcyan;\">\r\n    <tbody>\r\n       <tr>\r\n          <td colspan=\"1\">\r\n             <form    class=\"well form-horizontal\">\r\n                <fieldset>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\">Project Id:</label>\r\n                        <div class=\"col-md-8 inputGroupContainer\">\r\n                              <div class=\"input-group\">\r\n                     <input id=\"ProjectId\" [(ngModel)]=\"ProjectId\"   name=\"ProjectId\"  class=\"form-control\" required=\"true\"  disabled type=\"number\" > <button style=\"float:right; padding:3px;\" class=\"btn btn-secondary\"  type=\"button\" (click)=\"openProjectModal(tempProject)\" >search</button> </div>\r\n                     </div>\r\n                    </div>\r\n                     <div class=\"form-group\">\r\n                           <label class=\"col-md-4 control-label\">Task Id:</label>\r\n                           <div class=\"col-md-8 inputGroupContainer\">\r\n\r\n                              <div class=\"input-group\"><input id=\"TaskId\" [(ngModel)]=\"TaskId\"  name=\"TaskId\" readonly class=\"form-control\"  type=\"text\"></div>\r\n                           </div>\r\n                        </div>\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">Task:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n\r\n                         <div class=\"input-group\"><input id=\"TaskDescription\" [(ngModel)]=\"TaskDescription\"  name=\"TaskDescription\" placeholder=\"Task Details\" class=\"form-control\" required=\"true\" type=\"text\"></div>\r\n                      </div>\r\n                   </div>\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">Parent Task Id:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                         <div class=\"input-group\"><input id=\"ParentTask\"  [(ngModel)]=\"ParentId\"  #ParentTask name=\"ParentTask\" placeholder=\"Parent Task Id\" readonly class=\"form-control\" required=\"true\" value=\"\" type=\"number\">\r\n                           <button  style=\"float:right; padding:3px;\" class=\"btn btn-secondary\"  type=\"button\" (click)=\"openParenttaskModal(tempParentTask)\" >search</button>   </div>\r\n                      </div>\r\n                   </div>\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">Priority</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                         <div class=\"input-group\">\r\n                            <label for=\"rangeval\">{{ rangeval.value }}</label>\r\n                            <input id=\"Priority\" #rangeval [(ngModel)]=\"Priority\"   name=\"Priority\"  class=\"form-control-range\" required=\"true\"  type=\"range\" min=\"0\" max=\"30\" ></div>\r\n                      </div>\r\n                   </div>\r\n\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">Start Date:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                         <div class=\"input-group\">\r\n                           <input id=\"StartDate\" name=\"StartDate\" [ngModel]=\"StartDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"StartDate=$event\" class=\"form-control\" required=\"true\"  type=\"date\"></div>\r\n                      </div>\r\n                   </div>\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">End Date:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                        <div class=\"input-group\"><input id=\"EndDate\" name=\"EndDate\" [ngModel]=\"EndDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"EndDate=$event\"   class=\"form-control\" required=\"true\" type=\"date\"></div>\r\n                      </div>\r\n                   </div>\r\n                   <div class=\"form-group\">\r\n                      <label class=\"col-md-4 control-label\">UserId:</label>\r\n                      <div class=\"col-md-8 inputGroupContainer\">\r\n                          <div class=\"input-group\">\r\n                   <input id=\"UserId\" [(ngModel)]=\"UserId\"   name=\"UserId\"  class=\"form-control\" required=\"true\" readonly  disabled type=\"number\" > <button style=\"float:right; padding:3px;\" class=\"btn btn-secondary\"  type=\"button\" (click)=\"openUserModal(tempUser)\" >search</button>    </div>\r\n                   </div>\r\n                  </div>\r\n              <div style=\"padding:20px\"> <button class=\"btn btn-primary\" (click)=\"UpdateTask()\" type=\"submit\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Update Task</button> &nbsp; &nbsp; <a routerLink=\"/view-task\"><button class=\"btn btn-warning\"  type=\"button\"><i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Cancel</button></a> </div>\r\n                </fieldset>\r\n             </form>\r\n          </td>\r\n\r\n       </tr>\r\n    </tbody>\r\n </table>\r\n\r\n <ng-template #tempProject >\r\n    <div class=\"modal-header\">\r\n<h4 class=\"modal-title pull-left text-warning\">Project list</h4>\r\n<button class=\"btn btn-secondary close pull-right\" type=\"button\" (click)=\"ProjectmodalRef.hide()\" aria-label=\"close\"></button>\r\n<span aria-hidden=\"true\">&times;</span>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n       <h6 class=\"text text-success\" *ngIf=\"IsProjectSelected\">Project is selected successfully...</h6>\r\n       <div class=\"row\">\r\n           <div class=\"col-md-6\">\r\n              <div class=\"input-group\"><input id=\"txtSearchProject\" name=\"txtSearchProject\" #txtSearchProject (keyup)=\"SearchProjectFilter(txtSearchProject.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\r\n          </div>\r\n          </div>\r\n          <br>\r\n          <table class=\"table\" >\r\n                <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">ProjectId</th>\r\n                      <th scope=\"col\">ProjectDesc</th>\r\n                      <th scope=\"col\">Priority</th>\r\n                      <th scope=\"col\">ManagerUserId</th>\r\n                      <th></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr *ngFor =\"let item of listProjects ; trackBy: trackProject\" >\r\n                        <td>{{item.ProjectId}}</td>\r\n                        <td>{{item.ProjectDescription}}</td>\r\n                        <td>{{item.Priority}}</td>\r\n                        <td>{{item.ManagerUserId }}</td>\r\n                        <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button style=\"padding:0px;\" class=\"btn btn-success\" (click)=\"SelectProject(item.ProjectId)\"  >Select</button></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n    </div>\r\n   </ng-template>\r\n\r\n   <ng-template #tempParentTask >\r\n       <div class=\"modal-header\">\r\n <h4 class=\"modal-title pull-left text-warning\">Parent Task list</h4>\r\n <button class=\"btn btn-secondary close pull-right\" type=\"button\" (click)=\"ParentTaskmodalRef.hide()\" aria-label=\"close\"></button>\r\n  <span aria-hidden=\"true\">&times;</span>\r\n       </div>\r\n       <div class=\"modal-body\">\r\n          <h6 class=\"text text-success\" *ngIf=\"IsParentTaskSelected\">Parent task is selected successfully...</h6>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"input-group\"><input id=\"txtSearchParentTask\" name=\"txtSearchParentTask\" #txtSearchParentTask (keyup)=\"SearchParentTaskFilter(txtSearchParentTask.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\r\n             </div>\r\n             </div>\r\n             <br>\r\n             <table class=\"table\" >\r\n                   <thead>\r\n                       <tr>\r\n                         <th scope=\"col\">Parent Id</th>\r\n                         <th scope=\"col\">Parent Task</th>\r\n\r\n                         <th></th>\r\n                       </tr>\r\n                     </thead>\r\n                     <tbody>\r\n                         <tr *ngFor =\"let item of listParentTask ; trackBy: trackParentTask\" >\r\n                           <td>{{item.ParentId}}</td>\r\n                           <td>{{item.ParentTask1}}</td>\r\n                           <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button style=\"padding:0px;\" class=\"btn btn-success\" (click)=\"SelectParentTask(item.ParentId)\"  >Select</button></td>\r\n                         </tr>\r\n                       </tbody>\r\n                     </table>\r\n\r\n       </div>\r\n      </ng-template>\r\n      <ng-template #tempUser>\r\n          <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left text-warning\">User list</h4>\r\n    <button class=\"btn btn-secondary close pull-right\" type=\"button\" (click)=\"UsermodalRef.hide()\" aria-label=\"close\"></button>\r\n     <span aria-hidden=\"true\">&times;</span>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n             <h6 class=\"text text-success\" *ngIf=\"IsUserSelected\">User userId is selected successfully...</h6>\r\n             <div class=\"row\">\r\n                 <div class=\"col-md-6\">\r\n                    <div class=\"input-group\"><input id=\"txtSearchUser\" name=\"txtSearchUser\" #txtSearchUser (keyup)=\"SearchUserFilter(txtSearchUser.value)\"  placeholder=\"Search...\" class=\"form-control\"  value=\"\" type=\"text\"></div>\r\n                </div>\r\n                </div>\r\n                <br>\r\n             <table class=\"table\" >\r\n                 <thead>\r\n                     <tr>\r\n                       <th scope=\"col\">User Id</th>\r\n                       <th scope=\"col\">First Name</th>\r\n                       <th scope=\"col\">Last Name</th>\r\n                       <th scope=\"col\">Employee Id</th>\r\n                       <th></th>\r\n\r\n                     </tr>\r\n                   </thead>\r\n                   <tbody>\r\n                       <tr *ngFor =\"let item of listUser ; trackBy: trackUser\" >\r\n                         <td>{{item.UserId}}</td>\r\n                         <td>{{item.FirstName}}</td>\r\n                         <td>{{item.LastName}}</td>\r\n                         <td>{{item.EmployeeId}}</td>\r\n                         <td style=\"padding-left:0;padding-right:0; margin: 0%\"><button style=\"padding:0px;\" class=\"btn btn-success\" (click)=\"SelectUser(item.UserId)\"  >Select</button></td>\r\n                       </tr>\r\n                     </tbody>\r\n                   </table>\r\n\r\n          </div>\r\n         </ng-template>\r\n"

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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var UpdateTaskComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function UpdateTaskComponent(_service, route, ProjectmodalServ, ParentTaskmodalServ, UsermodalServ, datepipe) {
        var _this = this;
        this._service = _service;
        this.route = route;
        this.ProjectmodalServ = ProjectmodalServ;
        this.ParentTaskmodalServ = ParentTaskmodalServ;
        this.UsermodalServ = UsermodalServ;
        this.datepipe = datepipe;
        this.IsformValid = true;
        this.IsUpdatedSuccessFully = false;
        this.IsProjectSelected = false;
        this.IsStartDateGreater = false;
        this.IsUserSelected = false;
        this.IsParentTaskSelected = false;
        this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data; });
        this._service.GetAllParentTask().subscribe(function (data) { return _this.listParentTask = data; });
        this._service.GetAllUsers().subscribe(function (data) { return _this.listUser = data; });
        var id = this.route.snapshot.paramMap.get('taskid');
        // tslint:disable-next-line:radix
        this._service.GetTask(parseInt(id)).subscribe(function (data) {
            _this.TaskId = data.TaskId;
            _this.TaskDescription = data.TaskDescription;
            _this.Priority = data.Priority;
            _this.StartDate = data.StartDate;
            _this.EndDate = data.EndDate;
            _this.ParentId = data.ParentId;
            _this.ProjectId = data.ProjectId;
            _this.UserId = data.UserId;
        });
    }
    UpdateTaskComponent.prototype.ngOnInit = function () {
    };
    UpdateTaskComponent.prototype.UpdateTask = function () {
        var _this = this;
        this.IsStartDateGreater = false;
        var Taskdetails = { TaskId: this.TaskId,
            ParentId: this.ParentId,
            TaskDescription: this.TaskDescription,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            Priority: this.Priority,
            IsTaskCompleted: 0,
            ProjectId: this.ProjectId,
            UserId: this.UserId };
        // tslint:disable-next-line:max-line-length
        if (Taskdetails.TaskDescription === undefined || Taskdetails.TaskDescription === '' || Taskdetails.StartDate === undefined || Taskdetails.EndDate === undefined) {
            this.IsformValid = false;
        }
        else if (Date.parse(Taskdetails.StartDate) > Date.parse(Taskdetails.EndDate)) {
            this.IsUpdatedSuccessFully = false;
            this.IsformValid = true;
            this.IsStartDateGreater = true;
        }
        else {
            this.IsformValid = true;
            this.IsStartDateGreater = false;
            this._service.UpdateTask(Taskdetails.TaskId, Taskdetails).subscribe(function (data) { return _this.updateResult = data; });
            this.IsUpdatedSuccessFully = true;
        }
        window.scroll(0, 0);
    };
    UpdateTaskComponent.prototype.SelectProject = function (ProjectId) {
        this.ProjectId = ProjectId;
        this.IsProjectSelected = true;
    };
    UpdateTaskComponent.prototype.SelectParentTask = function (ParentId) {
        this.ParentId = ParentId;
        this.IsParentTaskSelected = true;
    };
    UpdateTaskComponent.prototype.openProjectModal = function (tmpProject) {
        this.ProjectmodalRef = this.ProjectmodalServ.show(tmpProject);
    };
    UpdateTaskComponent.prototype.openParenttaskModal = function (tmpParentTask) {
        this.ParentTaskmodalRef = this.ParentTaskmodalServ.show(tmpParentTask);
    };
    UpdateTaskComponent.prototype.SearchProjectFilter = function (projectSearchCriteria) {
        var _this = this;
        if (projectSearchCriteria !== undefined && projectSearchCriteria.length !== 0) {
            this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data.filter(function (item) {
                return item.ProjectId.toString() === projectSearchCriteria || item.ProjectDescription.toUpperCase() === projectSearchCriteria.toUpperCase()
                    || item.Priority.toString() === projectSearchCriteria || item.ManagerUserId.toString() === projectSearchCriteria;
            }); });
        }
        else {
            this._service.GetAllProjects().subscribe(function (data) { return _this.listProjects = data; });
        }
    };
    UpdateTaskComponent.prototype.SearchParentTaskFilter = function (ParentTaskSearchCriteria) {
        var _this = this;
        if (ParentTaskSearchCriteria !== undefined && ParentTaskSearchCriteria.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllParentTask().subscribe(function (data) { return _this.listParentTask = data.filter(function (item) { return item.ParentId.toString() === ParentTaskSearchCriteria || item.ParentTask1.toUpperCase() === ParentTaskSearchCriteria.toUpperCase(); }); });
        }
        else {
            this._service.GetAllParentTask().subscribe(function (data) { return _this.listParentTask = data; });
        }
    };
    UpdateTaskComponent.prototype.trackParentTask = function (index, item) {
        return item ? item.ParentId : undefined;
    };
    UpdateTaskComponent.prototype.trackProject = function (index, item) {
        return item ? item.ProjectId : undefined;
    };
    UpdateTaskComponent.prototype.SelectUser = function (UserId) {
        this.UserId = UserId;
        this.IsUserSelected = true;
    };
    UpdateTaskComponent.prototype.trackUser = function (index, item) {
        return item ? item.UserId : undefined;
    };
    UpdateTaskComponent.prototype.SearchUserFilter = function (Searchdetail) {
        var _this = this;
        if (Searchdetail !== undefined && Searchdetail.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllUsers().subscribe(function (data) { return _this.listUser = data.filter(function (item) { return item.FirstName.toUpperCase() === Searchdetail.toUpperCase() || item.LastName.toUpperCase() === Searchdetail.toUpperCase()
                || item.EmployeeId.toUpperCase() === Searchdetail.toUpperCase() || item.UserId.toString() === Searchdetail; }); });
        }
        else {
            this._service.GetAllUsers().subscribe(function (data) { return _this.listUser = data; });
        }
    };
    UpdateTaskComponent.prototype.openUserModal = function (tmpUser) {
        this.UsermodalRef = this.UsermodalServ.show(tmpUser);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
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

module.exports = "<h3 class=\"text-alert\">View Task</h3>\r\n<hr />\r\n<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <ul class=\"nav nav-pills \">\r\n      <li class=\"nav-item\">\r\n        <h4><a routerLink=\"/add-task\" class=\"text-secondary\">Add Task</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4>\r\n          <a routerLink=\"/view-task\" routerLinkActive=\"active\">View Task</a>\r\n        </h4>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4><a routerLink=\"/add-users\" class=\"text-secondary\">Add User</a></h4>\r\n      </li>\r\n      <li class=\"nav-item\" style=\"padding-left:20px\">\r\n        <h4>\r\n          <a routerLink=\"/add-project\" class=\"text-secondary\">Add Project</a>\r\n        </h4>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <label class=\"control-label\">Task:</label>\r\n    <div class=\"input-group\">\r\n      <input\r\n        id=\"TaskName\"\r\n        name=\"TaskName\"\r\n        #TaskName\r\n        (keyup)=\"TaskFilter(TaskName.value)\"\r\n        placeholder=\"Task Details\"\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <label class=\"control-label\">Parent Task:</label>\r\n    <div class=\"input-group\">\r\n      <input\r\n        id=\"ParentTaskName\"\r\n        #ParentTaskName\r\n        (keyup)=\"ParentTaskFilter(ParentTaskName.value)\"\r\n        name=\"ParentTaskName\"\r\n        placeholder=\"Parent Task Details\"\r\n        class=\"form-control\"\r\n        value=\"\"\r\n        type=\"number\"\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <label class=\"control-label\">Priority From:</label>\r\n    <div class=\"input-group\">\r\n      <input\r\n        id=\"PriorityFrom\"\r\n        name=\"PriorityFrom\"\r\n        #PriorityFrom\r\n        (keyup)=\"PriorityTaskFilter(PriorityFrom.value)\"\r\n        placeholder=\"Priority From\"\r\n        class=\"form-control\"\r\n        value=\"\"\r\n        type=\"number\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <label class=\"control-label\">Priority To:</label>\r\n    <div class=\"input-group\">\r\n      <input\r\n        id=\"PriorityTo\"\r\n        name=\"PriorityTo\"\r\n        #PriorityTo\r\n        (keyup)=\"PriorityTaskFilter(PriorityTo.value)\"\r\n        placeholder=\"Priority To\"\r\n        class=\"form-control\"\r\n        value=\"\"\r\n        type=\"number\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <label class=\"control-label\">Start Date:</label>\r\n    <div class=\"input-group\">\r\n      <input\r\n        id=\"StartDate\"\r\n        name=\"StartDate\"\r\n        #StartDate\r\n        (blur)=\"StartDateTaskFilter(StartDate.value)\"\r\n        class=\"form-control\"\r\n        value=\"\"\r\n        type=\"date\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <label class=\"control-label\">End Date:</label>\r\n    <div class=\"input-group\">\r\n      <input\r\n        id=\"EndDate\"\r\n        name=\"EndDate\"\r\n        #EndDate\r\n        (blur)=\"EndDateTaskFilter(EndDate.value)\"\r\n        class=\"form-control\"\r\n        value=\"\"\r\n        type=\"date\"\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n\r\n<table class=\"table\" style=\"background-color:lightcyan;\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Task Id</th>\r\n      <th scope=\"col\">Task</th>\r\n      <th scope=\"col\">Parent Task</th>\r\n      <th scope=\"col\">Project Id</th>\r\n      <th scope=\"col\">Priority</th>\r\n      <th scope=\"col\">Start</th>\r\n      <th scope=\"col\">End</th>\r\n      <th Scope=\"col\">UserId</th>\r\n      <th></th>\r\n      <th></th>\r\n      <th></th>\r\n      <th>IsTaskCompleted</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of tasks; trackBy: TrackTask\">\r\n      <td >{{ item.TaskId }}</td>\r\n      <td >{{ item.TaskDescription }}</td>\r\n      <th >{{item.ParentId}}</th>\r\n      <td >{{ item.ProjectId }}</td>\r\n      <td >{{ item.Priority }}</td>\r\n      <td >{{ item.StartDate | date: \"MM-dd-yyyy\" }}</td>\r\n      <td>{{ item.EndDate | date: \"MM-dd-yyyy\" }}</td>\r\n      <th >UserId</th>\r\n      <td style=\"padding-left:0;padding-right:0;\">\r\n        <a routerLink=\"/update-task/{{ item.TaskId }}\"\r\n          ><button\r\n            class=\"btn btn-primary\"\r\n            [disabled]=\"item.IsTaskCompleted == 1\"\r\n          >\r\n            <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Edit\r\n          </button></a\r\n        >\r\n      </td>\r\n\r\n      <td style=\"padding-left:0;padding-right:0\">\r\n        <button\r\n          [disabled]=\"item.IsTaskCompleted == 1\"\r\n          (click)=\"CompleteTaskFlagchange(item)\"\r\n          class=\"btn btn-warning\"\r\n        >\r\n          <i class=\"fa fa-hourglass-end\" aria-hidden=\"true\"></i> End Task\r\n        </button>\r\n      </td>\r\n      <td style=\"padding-left:0;padding-right:0\">\r\n        <button\r\n          [disabled]=\"item.IsTaskCompleted == 1\"\r\n          (click)=\"DeleteTask(item.TaskId)\"\r\n          class=\"btn btn-danger\"\r\n        >\r\n          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete\r\n        </button>\r\n      </td>\r\n      <td>{{ item.IsTaskCompleted == 1 ? \"Yes\" : \"No\" }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

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
        if (taskdetail !== undefined && taskdetail.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return item.TaskDescription.toUpperCase() === taskdetail.toUpperCase(); }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.ParentTaskFilter = function (Parenttaskdetail) {
        var _this = this;
        if (Parenttaskdetail !== undefined && Parenttaskdetail !== 0) {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return item.ParentId === Parenttaskdetail; }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.PriorityTaskFilter = function (taskPriority) {
        var _this = this;
        if (taskPriority !== undefined && taskPriority !== 0) {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return item.Priority === taskPriority; }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.StartDateTaskFilter = function (StartDate) {
        var _this = this;
        if (StartDate !== undefined && StartDate.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return _this.datepipe.transform(item.StartDate, 'yyyy-MM-dd') === _this.datepipe.transform(StartDate, 'yyyy-MM-dd'); }); });
        }
        else {
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data; });
        }
    };
    ViewTaskComponent.prototype.EndDateTaskFilter = function (endDate) {
        var _this = this;
        if (endDate !== undefined && endDate.length !== 0) {
            // tslint:disable-next-line:max-line-length
            this._service.GetAllTask().subscribe(function (data) { return _this.tasks = data.filter(function (item) { return _this.datepipe.transform(item.EndDate, 'yyyy-MM-dd') === _this.datepipe.transform(endDate, 'yyyy-MM-dd'); }); });
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
        this._ApiUrl = 'http://localhost:49886/api/';
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
        return this._http.put(this._ApiUrl + 'User' + UserId, Item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.DeleteUser = function (UserId) {
        return this._http.delete(this._ApiUrl + 'User' + UserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    // Users Related Methods End
    // Project Related Method Start
    SharedService.prototype.GetAllProjects = function () {
        return this._http.get(this._ApiUrl + 'Projects').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.AddNewProjects = function (Item) {
        return this._http.post(this._ApiUrl + 'Projects', Item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.UpdateProjects = function (ProjectId, Item) {
        return this._http.put(this._ApiUrl + 'Projects' + ProjectId, Item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.DeleteProjects = function (ProjectId) {
        return this._http.delete(this._ApiUrl + 'Projects' + ProjectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    // Project Related Method End
    // Task Start
    SharedService.prototype.AddNewParentTask = function (Item) {
        return this._http.post(this._ApiUrl + 'ParentTask', Item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.GetAllTask = function () {
        return this._http.get(this._ApiUrl + 'Task').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.GetTask = function (TaskId) {
        return this._http.get(this._ApiUrl + 'Task?TaskId=' + TaskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.AddNewTask = function (task) {
        return this._http.post(this._ApiUrl + 'Task', task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.UpdateTask = function (TaskId, task) {
        return this._http.put(this._ApiUrl + 'Task' + TaskId, task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.CompleteTaskFlagUpdate = function (task) {
        return this._http.put(this._ApiUrl + 'Task', task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    SharedService.prototype.DeleteTask = function (TaskId) {
        return this._http.delete(this._ApiUrl + '/' + TaskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
    };
    // Task End
    // Parent Task Start
    SharedService.prototype.GetAllParentTask = function () {
        return this._http.get(this._ApiUrl + 'ParentTask').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x; }));
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
/* harmony import */ var _Dashboard_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dashboard/add-project/add-project.component */ "./src/app/Dashboard/add-project/add-project.component.ts");
/* harmony import */ var _Dashboard_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dashboard/add-users/add-users.component */ "./src/app/Dashboard/add-users/add-users.component.ts");








var routes = [
    { path: '', redirectTo: '/view-task', pathMatch: 'full' },
    { path: 'add-task', component: _Dashboard_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__["AddTaskComponent"] },
    { path: 'add-project', component: _Dashboard_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_6__["AddProjectComponent"] },
    { path: 'add-users', component: _Dashboard_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__["AddUsersComponent"] },
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<div class=\"container\">\r\n<div style=\"text-align:center\">\r\n  <h3 class=\"alert alert-primary \" >\r\n    Welcome to {{ title }}\r\n  </h3>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n</div>\r\n"

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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Dashboard_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dashboard/add-project/add-project.component */ "./src/app/Dashboard/add-project/add-project.component.ts");
/* harmony import */ var _Dashboard_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Dashboard/add-users/add-users.component */ "./src/app/Dashboard/add-users/add-users.component.ts");















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
                _Dashboard_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_13__["AddProjectComponent"],
                _Dashboard_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_14__["AddUsersComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot()
            ],
            providers: [_Services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
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

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\Assignments\Capsule\Final Certification\APICodeUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map