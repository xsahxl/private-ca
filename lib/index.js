"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __importDefault(require("./common/base"));
var logger_1 = __importDefault(require("./common/logger"));
var core_1 = require("@xsahxl/core");
var ComponentDemo = /** @class */ (function (_super) {
    __extends(ComponentDemo, _super);
    function ComponentDemo(props) {
        return _super.call(this, props) || this;
    }
    /**
     * demo ??????
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.test = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var fcdeploy, website, domain, jamstack, fcapi, fcdefault, fcbasesdk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.default.info('download fc-deploy ncc test');
                        return [4 /*yield*/, core_1.loadComponent('fc-deploy')];
                    case 1:
                        fcdeploy = _a.sent();
                        logger_1.default.info('download website not ncc test');
                        return [4 /*yield*/, core_1.loadComponent('website')];
                    case 2:
                        website = _a.sent();
                        logger_1.default.info('download many component');
                        return [4 /*yield*/, core_1.loadComponent('domain')];
                    case 3:
                        domain = _a.sent();
                        return [4 /*yield*/, core_1.loadComponent('jamstack-api')];
                    case 4:
                        jamstack = _a.sent();
                        return [4 /*yield*/, core_1.loadComponent('fc-api')];
                    case 5:
                        fcapi = _a.sent();
                        return [4 /*yield*/, core_1.loadComponent('fc-default')];
                    case 6:
                        fcdefault = _a.sent();
                        return [4 /*yield*/, core_1.loadComponent('fc-base-sdk')];
                    case 7:
                        fcbasesdk = _a.sent();
                        return [2 /*return*/, { fcdeploy: fcdeploy, website: website, domain: domain, jamstack: jamstack, fcapi: fcapi, fcdefault: fcdefault, fcbasesdk: fcbasesdk }];
                }
            });
        });
    };
    return ComponentDemo;
}(base_1.default));
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQTBDO0FBQzFDLDJEQUFxQztBQUVyQyxxQ0FBNkM7QUFFN0M7SUFBMkMsaUNBQWE7SUFDdEQsdUJBQVksS0FBSztlQUNmLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7SUFDRDs7OztPQUlHO0lBQ1UsNEJBQUksR0FBakIsVUFBa0IsTUFBa0I7Ozs7Ozt3QkFDbEMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQzt3QkFDMUIscUJBQU0sb0JBQWEsQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQTNDLFFBQVEsR0FBRyxTQUFnQzt3QkFDakQsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQzt3QkFDN0IscUJBQU0sb0JBQWEsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQXhDLE9BQU8sR0FBRyxTQUE4Qjt3QkFDOUMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDeEIscUJBQU0sb0JBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQXRDLE1BQU0sR0FBRyxTQUE2Qjt3QkFDM0IscUJBQU0sb0JBQWEsQ0FBQyxjQUFjLENBQUMsRUFBQTs7d0JBQTlDLFFBQVEsR0FBRyxTQUFtQzt3QkFDdEMscUJBQU0sb0JBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQXJDLEtBQUssR0FBRyxTQUE2Qjt3QkFDekIscUJBQU0sb0JBQWEsQ0FBQyxZQUFZLENBQUMsRUFBQTs7d0JBQTdDLFNBQVMsR0FBRyxTQUFpQzt3QkFDakMscUJBQU0sb0JBQWEsQ0FBQyxhQUFhLENBQUMsRUFBQTs7d0JBQTlDLFNBQVMsR0FBRyxTQUFrQzt3QkFDcEQsc0JBQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxFQUFDOzs7O0tBQzdFO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdEJELENBQTJDLGNBQWEsR0FzQnZEIn0=