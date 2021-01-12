(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/group.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/css/group.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-todo .tasks {\n    background: #fff;\n    padding: 0;\n    border-right: 1px solid #d1d4d7;\n    /*margin: -30px 15px -30px -15px;*/\n    border-radius: .3rem;\n}\n\n.page-todo .task-list {\n    padding: 30px 15px;\n    height: 100%\n}\n\n.page-todo .graph {\n    height: 100%\n}\n\n.page-todo .priority.high {\n    background: #fffdfd;\n    margin-bottom: 1px\n}\n\n.page-todo .priority.high span {\n    background: #f86c6b;\n    padding: 2px 10px;\n    color: #fff;\n    display: inline-block;\n    font-size: 12px\n}\n\n.page-todo .priority.medium {\n    background: #fff0ab;\n    margin-bottom: 1px\n}\n\n.page-todo .priority.medium span {\n    background: #f8cb00;\n    padding: 2px 10px;\n    color: #fff;\n    display: inline-block;\n    font-size: 12px\n}\n\n.page-todo .priority.low {\n    background: #cfedda;\n    margin-bottom: 1px\n}\n\n.page-todo .priority.low span {\n    background: #4dbd74;\n    padding: 2px 10px;\n    color: #fff;\n    display: inline-block;\n    font-size: 12px\n}\n\n.page-todo .task {\n    border-bottom: 1px solid #e4e5e6;\n    margin-bottom: 1px;\n    position: relative\n}\n\n.page-todo .task .desc {\n    display: inline-block;\n    width: 100%;\n    padding: 10px 10px;\n    font-size: 12px\n}\n\n.page-todo .task .desc .title {\n    font-size: 18px;\n    margin-bottom: 5px\n}\n\n.page-todo .task .time {\n    display: inline-block;\n    width: 15%;\n    padding: 10px 10px 10px 0;\n    font-size: 12px;\n    text-align: right;\n    position: absolute;\n    top: 0;\n    right: 0\n}\n\n.page-todo .task .time .date {\n    font-size: 18px;\n    margin-bottom: 5px\n}\n\n.page-todo .task.last {\n    border-bottom: 1px solid transparent\n}\n\n.page-todo .task.high {\n    border-left: 2px solid #f86c6b\n}\n\n.page-todo .task.medium {\n    border-left: 2px solid #f8cb00\n}\n\n.page-todo .task.low {\n    border-left: 2px solid #4dbd74\n}\n\n.page-todo .timeline {\n    width: auto;\n    height: 100%;\n    margin: 20px auto;\n    position: relative\n}\n\n.page-todo .timeline:before {\n    position: absolute;\n    content: '';\n    height: 100%;\n    width: 4px;\n    background: #d1d4d7;\n    left: 50%;\n    margin-left: -2px\n}\n\n.page-todo .timeslot {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 5px 0\n}\n\n.page-todo .timeslot .task {\n    position: relative;\n    width: 44%;\n    display: block;\n    border: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box\n}\n\n.page-todo .timeslot .task span {\n    border: 2px solid #63c2de;\n    background: #e1f3f9;\n    padding: 5px;\n    display: block;\n    font-size: 11px\n}\n\n.page-todo .timeslot .task span span.details {\n    font-size: 16px;\n    margin-bottom: 10px\n}\n\n.page-todo .timeslot .task span span.remaining {\n    font-size: 14px\n}\n\n.page-todo .timeslot .task span span {\n    border: 0;\n    background: 0 0;\n    padding: 0\n}\n\n.page-todo .timeslot .task .arrow {\n    position: absolute;\n    top: 6px;\n    right: 0;\n    height: 20px;\n    width: 20px;\n    border-left: 12px solid #63c2de;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    margin-right: -18px\n}\n\n.page-todo .timeslot .task .arrow:after {\n    position: absolute;\n    content: '';\n    top: -12px;\n    right: 3px;\n    height: 20px;\n    width: 20px;\n    border-left: 12px solid #e1f3f9;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent\n}\n\n.page-todo .timeslot .icon {\n    position: absolute;\n    border: 2px solid #d1d4d7;\n    background: #2a2c36;\n    -webkit-border-radius: 50em;\n    -moz-border-radius: 50em;\n    border-radius: 50em;\n    height: 30px;\n    width: 30px;\n    top: 0;\n    left: 50%;\n    margin-left: -17px;\n    color: #fff;\n    font-size: 14px;\n    line-height: 30px;\n    text-align: center;\n    text-shadow: none;\n    z-index: 2;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box\n}\n\n.page-todo .timeslot .time {\n    background: #d1d4d7;\n    position: absolute;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n    top: 1px;\n    left: 50%;\n    padding: 5px 10px 5px 40px;\n    z-index: 1;\n    margin-top: 1px\n}\n\n.page-todo .timeslot.alt .task {\n    margin-left: 56%;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box\n}\n\n.page-todo .timeslot.alt .task .arrow {\n    position: absolute;\n    top: 6px;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border-left: none;\n    border-right: 12px solid #63c2de;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent;\n    margin-left: -18px\n}\n\n.page-todo .timeslot.alt .task .arrow:after {\n    top: -12px;\n    left: 3px;\n    height: 20px;\n    width: 20px;\n    border-left: none;\n    border-right: 12px solid #e1f3f9;\n    border-top: 12px solid transparent;\n    border-bottom: 12px solid transparent\n}\n\n.page-todo .timeslot.alt .time {\n    top: 1px;\n    left: auto;\n    right: 50%;\n    padding: 5px 40px 5px 10px\n}\n\n@media only screen and (min-width:992px) and (max-width:1199px) {\n    .page-todo task .desc {\n        display: inline-block;\n        width: 70%;\n        padding: 10px 10px;\n        font-size: 12px\n    }\n    .page-todo task .desc .title {\n        font-size: 16px;\n        margin-bottom: 5px\n    }\n    .page-todo task .time {\n        display: inline-block;\n        float: right;\n        width: 20%;\n        padding: 10px 10px;\n        font-size: 12px;\n        text-align: right\n    }\n    .page-todo task .time .date {\n        font-size: 16px;\n        margin-bottom: 5px\n    }\n}\n\n@media only screen and (min-width:768px) and (max-width:991px) {\n    .page-todo .task {\n        margin-bottom: 1px\n    }\n    .page-todo .task .desc {\n        display: inline-block;\n        width: 65%;\n        padding: 10px 10px;\n        font-size: 10px;\n        margin-right: -20px\n    }\n    .page-todo .task .desc .title {\n        font-size: 14px;\n        margin-bottom: 5px\n    }\n    .page-todo .task .time {\n        display: inline-block;\n        float: right;\n        width: 25%;\n        padding: 10px 10px;\n        font-size: 10px;\n        text-align: right\n    }\n    .page-todo .task .time .date {\n        font-size: 14px;\n        margin-bottom: 5px\n    }\n    .page-todo .timeslot .task span {\n        padding: 5px;\n        display: block;\n        font-size: 10px\n    }\n    .page-todo .timeslot .task span span {\n        border: 0;\n        background: 0 0;\n        padding: 0\n    }\n    .page-todo .timeslot .task span span.details {\n        font-size: 14px;\n        margin-bottom: 0\n    }\n    .page-todo .timeslot .task span span.remaining {\n        font-size: 12px\n    }\n}\n\n@media only screen and (max-width:767px) {\n    .page-todo .tasks {\n        position: relative;\n        margin: 0!important\n    }\n    .page-todo .graph {\n        position: relative;\n        margin: 0!important\n    }\n    .page-todo .task {\n        margin-bottom: 1px\n    }\n    .page-todo .task .desc {\n        display: inline-block;\n        width: 65%;\n        padding: 10px 10px;\n        font-size: 10px;\n        margin-right: -20px\n    }\n    .page-todo .task .desc .title {\n        font-size: 14px;\n        margin-bottom: 5px\n    }\n    .page-todo .task .time {\n        display: inline-block;\n        float: right;\n        width: 25%;\n        padding: 10px 10px;\n        font-size: 10px;\n        text-align: right\n    }\n    .page-todo .task .time .date {\n        font-size: 14px;\n        margin-bottom: 5px\n    }\n    .page-todo .timeslot .task span {\n        padding: 5px;\n        display: block;\n        font-size: 10px\n    }\n    .page-todo .timeslot .task span span {\n        border: 0;\n        background: 0 0;\n        padding: 0\n    }\n    .page-todo .timeslot .task span span.details {\n        font-size: 14px;\n        margin-bottom: 0\n    }\n    .page-todo .timeslot .task span span.remaining {\n        font-size: 12px\n    }\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/css/group.css":
/*!*********************************!*\
  !*** ./resources/css/group.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!./group.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/group.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/Routes/Course.js":
/*!***************************************!*\
  !*** ./resources/js/Routes/Course.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CourseDrag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CourseDrag */ "./resources/js/components/CourseDrag.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Course(props) {
  var lessonId = props.match.params.course;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      pageProps = _useState4[0],
      setPageProps = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      redirect = _useState6[0],
      setRedirect = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoading(true);
    axios.get("/course/".concat(lessonId, "/show")).then(function (response) {
      return jsonHandler(response.data);
    })["catch"](function (err) {
      if (err.response.status == 404 || err.response.status == 403) {
        setRedirect('/404');
      }
    });
  }, []);

  var jsonHandler = function jsonHandler(data) {
    setPageProps(data);
    setLoading(false);
  };

  var isDataNotReady = function isDataNotReady(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  var dataNotReady = isDataNotReady(pageProps);
  return redirect ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: redirect
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a, {
    active: loading,
    spinner: true,
    text: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC...!"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 mt-3 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "display-4"
  }, dataNotReady ? '-' : pageProps.lesson.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, dataNotReady ? '-' : "".concat(pageProps.course.title, " ").concat(pageProps.teacher.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text"
  }, "\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u06CC\u06A9\u06CC \u0627\u0632 \u06AF\u0631\u0648\u0647 \u0647\u0627\u06CC \u0632\u06CC\u0631 \u0642\u0631\u0627\u0631 \u062F\u0647\u06CC\u062F"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, dataNotReady ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseDrag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    groups: pageProps.groups,
    users: pageProps.users,
    setLoading: setLoading
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ }),

/***/ "./resources/js/components/CourseDrag.js":
/*!***********************************************!*\
  !*** ./resources/js/components/CourseDrag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _css_group_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/group.css */ "./resources/css/group.css");
/* harmony import */ var _css_group_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_group_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserDrag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserDrag */ "./resources/js/components/UserDrag.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var grid = 8;

var getListStyle = function getListStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? '#e7e7e7' : 'rgb(253 247 253)',
    padding: grid,
    // width: 250,
    minHeight: "100px",
    marginBottom: "10px"
  };
};

var CourseDrag = /*#__PURE__*/function (_Component) {
  _inherits(CourseDrag, _Component);

  var _super = _createSuper(CourseDrag);

  function CourseDrag() {
    var _this;

    _classCallCheck(this, CourseDrag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onDragEnd", function (result) {
      var source = result.source,
          destination = result.destination;
      console.log(result); // dropped outside the list

      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {//todo:: add here if needed
      } else {
        if (source.droppableId == 'droppable') {
          var destinationGroup = _this.state.groups.find(function (item) {
            return item.id == destination.droppableId;
          });

          var _this$state$users$spl = _this.state.users.splice(source.index, 1),
              _this$state$users$spl2 = _slicedToArray(_this$state$users$spl, 1),
              user = _this$state$users$spl2[0];

          destinationGroup.users.splice(destination.index, 0, user);
          axios.post("/course/user/update", {
            destinationGroupId: destinationGroup.id,
            userId: user.id
          }).then(function (response) {
            _this.props.setLoading(false);
          })["catch"](function (err) {
            _this.props.setLoading(false);
          });
        } else if (destination.droppableId == 'droppable') {
          var sourceGroup = _this.state.groups.find(function (item) {
            return item.id == source.droppableId;
          });

          var _sourceGroup$users$sp = sourceGroup.users.splice(source.index, 1),
              _sourceGroup$users$sp2 = _slicedToArray(_sourceGroup$users$sp, 1),
              _user = _sourceGroup$users$sp2[0];

          _this.state.users.splice(destination.index, 0, _user);

          _this.props.setLoading(true);

          axios.post("/course/user/update", {
            srcGroupId: sourceGroup.id,
            userId: _user.id
          }).then(function (response) {
            _this.props.setLoading(false);
          })["catch"](function (err) {
            _this.props.setLoading(false);
          });
        } else {
          var _sourceGroup = _this.state.groups.find(function (item) {
            return item.id == source.droppableId;
          });

          var _destinationGroup = _this.state.groups.find(function (item) {
            return item.id == destination.droppableId;
          });

          var _sourceGroup$users$sp3 = _sourceGroup.users.splice(source.index, 1),
              _sourceGroup$users$sp4 = _slicedToArray(_sourceGroup$users$sp3, 1),
              _user2 = _sourceGroup$users$sp4[0];

          _destinationGroup.users.splice(destination.index, 0, _user2);

          _this.props.setLoading(true);

          axios.post("/course/group/update", {
            srcGroupId: _sourceGroup.id,
            destinationGroupId: _destinationGroup.id,
            userId: _user2.id
          }).then(function (response) {
            _this.props.setLoading(false);
          })["catch"](function (err) {
            _this.props.setLoading(false);
          });
        }
      }
    });

    return _this;
  }

  _createClass(CourseDrag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setLoading(true);
      this.setState(this.props);
      this.props.setLoading(false);
    }
  }, {
    key: "render",
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container page-todo bootstrap snippets bootdeys"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
        onDragEnd: this.onDragEnd
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 tasks"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0627\u0639\u0636\u0627"), this.state == null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Droppable"], {
        droppableId: "droppable"
      }, function (provided, snapshot) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: provided.innerRef,
          style: getListStyle(snapshot.isDraggingOver)
        }, _this2.state.users.map(function (user, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDrag__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: user.id,
            user: user,
            index: index
          });
        }), provided.placeholder);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 tasks"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "task-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u06AF\u0631\u0648\u0647 \u0647\u0627"), this.state == null ? null : this.state.groups.map(function (group, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "group",
          key: group.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "priority low"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, group.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Droppable"], {
          droppableId: group.id.toString()
        }, function (provided, snapshot) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            ref: provided.innerRef,
            style: getListStyle(snapshot.isDraggingOver)
          }, group.users.map(function (user, index) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDrag__WEBPACK_IMPORTED_MODULE_3__["default"], {
              key: user.id,
              user: user,
              index: index
            });
          }), provided.placeholder);
        }));
      }))))));
    }
  }]);

  return CourseDrag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CourseDrag);

/***/ }),

/***/ "./resources/js/components/UserDrag.js":
/*!*********************************************!*\
  !*** ./resources/js/components/UserDrag.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _css_group_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/group.css */ "./resources/css/group.css");
/* harmony import */ var _css_group_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_group_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var grid = 8;

var getItemStyle = function getItemStyle(isDragging, draggableStyle, isDragDisabled) {
  return _objectSpread({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid,
    margin: "0 0 ".concat(grid, "px 0"),
    boxShadow: '0 3px 6px 0 #c3c3c3c7',
    // change background colour if dragging
    background: isDragDisabled ? '#e2e2e2' : isDragging ? 'rgba(126,229,173,0.9)' : '#fdfdfd'
  }, draggableStyle);
};

var UserDrag = /*#__PURE__*/function (_Component) {
  _inherits(UserDrag, _Component);

  var _super = _createSuper(UserDrag);

  function UserDrag() {
    _classCallCheck(this, UserDrag);

    return _super.apply(this, arguments);
  }

  _createClass(UserDrag, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      var isDragDisabled = user.id != window.laravel.user.id;
      console.log(user);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Draggable"], {
        draggableId: user.id.toString(),
        isDragDisabled: isDragDisabled,
        index: this.props.index
      }, function (provided, snapshot) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
          className: "task low",
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          style: getItemStyle(snapshot.isDragging, provided.draggableProps.style, isDragDisabled)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "desc col-sm-10"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, user.display_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pull-left col-sm-2 text-center"
        }, isDragDisabled ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-user-circle-o",
          title: "\u062F\u0627\u0646\u0634\u062C\u0648"
        })));
      });
    }
  }]);

  return UserDrag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserDrag);

/***/ })

}]);