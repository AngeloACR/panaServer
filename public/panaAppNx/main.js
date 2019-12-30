(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/data/src/index.ts":
/*!**************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/data/src/index.ts ***!
  \**************************************************************************/
/*! exports provided: CommType, getCommunications, UserType, determineIfUserIsDoctor, determineIfUserIsPatient, Question, Answer, Review, ChatEventType, determineIfIsChatUnit, isChatUnit, SocketEventType, SocketPackage, mockPatient, mockDoctor, mockQuestion, mockAnswer, mockAppointment, mockReview, mockLog, mockChat, mockChatPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/user.model */ "../../libs/data/src/lib/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommType", function() { return _lib_user_model__WEBPACK_IMPORTED_MODULE_1__["CommType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCommunications", function() { return _lib_user_model__WEBPACK_IMPORTED_MODULE_1__["getCommunications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return _lib_user_model__WEBPACK_IMPORTED_MODULE_1__["UserType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determineIfUserIsDoctor", function() { return _lib_user_model__WEBPACK_IMPORTED_MODULE_1__["determineIfUserIsDoctor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determineIfUserIsPatient", function() { return _lib_user_model__WEBPACK_IMPORTED_MODULE_1__["determineIfUserIsPatient"]; });

/* harmony import */ var _lib_ask_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ask.model */ "../../libs/data/src/lib/ask.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _lib_ask_model__WEBPACK_IMPORTED_MODULE_2__["Question"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _lib_ask_model__WEBPACK_IMPORTED_MODULE_2__["Answer"]; });

/* harmony import */ var _lib_review_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/review.model */ "../../libs/data/src/lib/review.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return _lib_review_model__WEBPACK_IMPORTED_MODULE_3__["Review"]; });

/* harmony import */ var _lib_chat_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/chat.model */ "../../libs/data/src/lib/chat.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatEventType", function() { return _lib_chat_model__WEBPACK_IMPORTED_MODULE_4__["ChatEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determineIfIsChatUnit", function() { return _lib_chat_model__WEBPACK_IMPORTED_MODULE_4__["determineIfIsChatUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isChatUnit", function() { return _lib_chat_model__WEBPACK_IMPORTED_MODULE_4__["isChatUnit"]; });

/* harmony import */ var _lib_socket_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/socket.model */ "../../libs/data/src/lib/socket.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketEventType", function() { return _lib_socket_model__WEBPACK_IMPORTED_MODULE_5__["SocketEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketPackage", function() { return _lib_socket_model__WEBPACK_IMPORTED_MODULE_5__["SocketPackage"]; });

/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock */ "../../libs/data/src/mock.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockPatient", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockPatient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockDoctor", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockDoctor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockQuestion", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockQuestion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockAnswer", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockAnswer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockAppointment", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockAppointment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockReview", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockReview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockLog", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockChat", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockChat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockChatPreview", function() { return _mock__WEBPACK_IMPORTED_MODULE_6__["mockChatPreview"]; });







 //TODO: DELETE


/***/ }),

/***/ "../../libs/data/src/lib/ask.model.ts":
/*!**********************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/data/src/lib/ask.model.ts ***!
  \**********************************************************************************/
/*! exports provided: Question, Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "../../libs/data/src/lib/user.model.ts");


var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());

var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "../../libs/data/src/lib/chat.model.ts":
/*!***********************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/data/src/lib/chat.model.ts ***!
  \***********************************************************************************/
/*! exports provided: ChatEventType, determineIfIsChatUnit, isChatUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEventType", function() { return ChatEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineIfIsChatUnit", function() { return determineIfIsChatUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChatUnit", function() { return isChatUnit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var ChatEventType;
(function (ChatEventType) {
    ChatEventType["CALL_MADE"] = "call_made";
    ChatEventType["CALL_MISSED_INCOMING"] = "call_missed";
    ChatEventType["CALL_RECEIVED"] = "call_received";
    ChatEventType["CALL_MISSED_OUTGOING"] = "call_missed_outgoing";
    ChatEventType["VIDEOCALL"] = "video_call";
    ChatEventType["VIDEOCALL_MISSED"] = "missed_video_call";
    //Material Icon Name
})(ChatEventType || (ChatEventType = {}));
function isChatUnit(toBeDetermined) {
    if (toBeDetermined.senderId) {
        return true;
    }
    return false;
}
function determineIfIsChatUnit(toBeDetermined) {
    return isChatUnit(toBeDetermined);
}



/***/ }),

/***/ "../../libs/data/src/lib/review.model.ts":
/*!*************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/data/src/lib/review.model.ts ***!
  \*************************************************************************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());



/***/ }),

/***/ "../../libs/data/src/lib/socket.model.ts":
/*!*************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/data/src/lib/socket.model.ts ***!
  \*************************************************************************************/
/*! exports provided: SocketEventType, SocketPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEventType", function() { return SocketEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketPackage", function() { return SocketPackage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var SocketEventType;
(function (SocketEventType) {
    SocketEventType["CHAT_ADD_USER"] = "add user";
    SocketEventType["CHAT_LOGIN"] = "login";
    SocketEventType["CHAT_NEW_MESSAGE"] = "new message";
    SocketEventType["CHAT_USER_JOINED"] = "user joined";
    SocketEventType["CHAT_USER_LEFT"] = "user left";
    SocketEventType["CHAT_TYPING"] = "typing";
    SocketEventType["CHAT_SEND_FILE"] = "send file";
    SocketEventType["CHAT_NO_TYPING"] = "stop typing";
    SocketEventType["MAKE_CALL"] = "make call";
    SocketEventType["MAKE_VIDEO_CALL"] = "make video call";
    SocketEventType["VIDEO_NEW_CHANNEL"] = "new-channel";
    SocketEventType["VIDEO_PRESENCE"] = "presence";
    SocketEventType["N_USERS"] = "read number of users";
})(SocketEventType || (SocketEventType = {}));
var SocketNamespaces;
(function (SocketNamespaces) {
    SocketNamespaces["CONSULTA"] = "Consultas";
})(SocketNamespaces || (SocketNamespaces = {}));
var SocketPackage = /** @class */ (function () {
    function SocketPackage(i, payload) {
        if (payload === void 0) { payload = undefined; }
        if (i.type) {
            var _i = i;
            this.type = _i.type;
            this.payload = _i.payload;
        }
        else {
            this.type = i;
            this.payload = payload;
        }
    }
    return SocketPackage;
}());

function createRoom(user1) {
    //doctor paciente
    //doctor visitador medico
    //doctor farmacia
    //visitador farmacia
    //TODO: crear cuarto por cada doctor;
    // `idDoctor-idPaciente`
    return '';
    // return [user1 user2];
}


/***/ }),

/***/ "../../libs/data/src/lib/user.model.ts":
/*!***********************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/data/src/lib/user.model.ts ***!
  \***********************************************************************************/
/*! exports provided: CommType, getCommunications, UserType, determineIfUserIsDoctor, determineIfUserIsPatient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommType", function() { return CommType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommunications", function() { return getCommunications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineIfUserIsDoctor", function() { return determineIfUserIsDoctor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineIfUserIsPatient", function() { return determineIfUserIsPatient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var CommType;
(function (CommType) {
    CommType[CommType["CHAT"] = 1] = "CHAT";
    CommType[CommType["CALL"] = 2] = "CALL";
    CommType[CommType["VIDEO"] = 4] = "VIDEO";
})(CommType || (CommType = {}));
function getCommunications(val) {
    switch (val) {
        case 0:
            return [];
        case 1:
            return [CommType.CHAT];
        case 2:
            return [CommType.CALL];
        case 3:
            return [CommType.CHAT, CommType.CALL];
        case 4:
            return [CommType.VIDEO];
        case 5:
            return [CommType.VIDEO, CommType.CHAT];
        case 6:
            return [CommType.VIDEO, CommType.CALL];
        case 7:
            return [CommType.VIDEO, CommType.CALL, CommType.CHAT];
        default:
            return [];
    }
}
var UserType;
(function (UserType) {
    UserType["PATIENT"] = "patient";
    UserType["DOCTOR"] = "doctor";
    UserType["PHARMA"] = "pharma";
    UserType["SALESREP"] = "business";
})(UserType || (UserType = {}));
function determineIfUserIsDoctor(user) {
    return (user && user.type === UserType.DOCTOR);
}
function determineIfUserIsPatient(user) {
    return (user && user.type === UserType.PATIENT);
}


/***/ }),

/***/ "../../libs/data/src/mock.ts":
/*!*************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/data/src/mock.ts ***!
  \*************************************************************************/
/*! exports provided: mockPatient, mockDoctor, mockQuestion, mockAnswer, mockAppointment, mockReview, mockLog, mockChat, mockChatPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockPatient", function() { return mockPatient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockDoctor", function() { return mockDoctor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockQuestion", function() { return mockQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAnswer", function() { return mockAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAppointment", function() { return mockAppointment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockReview", function() { return mockReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockLog", function() { return mockLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockChat", function() { return mockChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockChatPreview", function() { return mockChatPreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/user.model */ "../../libs/data/src/lib/user.model.ts");
/* harmony import */ var _lib_chat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/chat.model */ "../../libs/data/src/lib/chat.model.ts");
/* harmony import */ var apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apps/panadoc/src/environments/environment */ "./src/environments/environment.ts");





var mockAppointment = {
    finishDate: moment__WEBPACK_IMPORTED_MODULE_1__()
        .add(4, 'days')
        .add(30, 'minutes')
        .toDate(),
    doctorId: '2',
    patientId: '1',
    initDate: moment__WEBPACK_IMPORTED_MODULE_1__()
        .add(4, 'days')
        .toDate(),
    uid: '5',
    length: 15,
};
var mockPatient = {
    mhsId: [''],
    phone: '124123',
    type: _lib_user_model__WEBPACK_IMPORTED_MODULE_2__["UserType"].PATIENT,
    uid: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.patientUID,
    appointments: [],
    name: 'Luke Reynolds',
    username: 'luke.reynolds',
    mail: 'luke.reynolds@gmail.com',
    password: 'mockPass',
    avatarSrc: 'http://lorempixel.com/125/125/people/placeholder',
};
var mockReview = {
    doctorId: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.doctorUID,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit primis, tristique\n  orci habitasse eu praesent duis felis, lobortis montes fames accumsan.\n  Sem sapien ligula vivamus cum tincidunt congue sollicitudin eu",
    rating: 2,
    patientId: '2',
    date: moment__WEBPACK_IMPORTED_MODULE_1__()
        .subtract('1', 'day')
        .toDate(),
    uid: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.patientUID,
};
var mockDoctor = {
    uid: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.doctorUID,
    phone: '124123',
    type: _lib_user_model__WEBPACK_IMPORTED_MODULE_2__["UserType"].DOCTOR,
    appointments: [mockAppointment],
    name: 'Dr. Carl Carroll',
    username: 'carl.carroll',
    mail: 'carl.carroll@gmail.com',
    password: 'mockPass',
    speciality: 'Dermatólogo',
    avatarSrc: 'assets/images/mockDoctor.jpg',
    addr: 'Skin ethics Skin Clinic & Dermatology Center',
    experience: '20 Years',
    likePerc: 4.5,
    likes: 125,
    summary: "Lorem ipsum dolor sit amet consectetur adipiscing elit fusce nec nunc\n  curae, placerat porta a aenean netus erat nisi duis convallis litora\n  venenatis, sodales vulputate eu lacinia risus pellentesque id enim\n  dapibus habitasse. Praesent penatibus ante curabitur aliquam platea\n  auctor eget nostra sociis faucibus, felis maecenas massa lacinia\n  elementum dapibus porttitor fames eleifend. Arcu phasellus eget ultrices\n  in primis quis et, habitant at bibendum nec nascetur turpis, curae felis\n  dui quam suscipit congue. Proin erat sollicitudin suscipit risus\n  sagittis lectus mattis, leo massa integer ligula vestibulum quisque\n  aliquet mi, torquent nunc turpis nisl accumsan eleifend.",
    reviews: [],
};
var mockQuestion = {
    askerId: '1',
    answerId: '',
    title: '¿Puede mi bebe beber Coca-Cola?',
    details: "raesent penatibus ante curabitur aliquam platea\n  auctor eget nostra sociis faucibus, felis maecenas massa lacinia\n  elementum dapibus porttitor fames eleifend"
};
var mockAnswer = {
    questionId: '1',
    text: " Lorem ipsum dolor sit amet consectetur adipiscing elit, iaculis volutpat\n  lacus aenean varius ut, tempor mauris eleifend himenaeos praesent non.\n  Sem sapien ligula vivamus cum tincidunt congue sollicitudin eu,\n  facilisis hendrerit dis vitae natoque litora auctor nascetur eros, erat\n  scelerisque ac rutrum curabitur nec ultricies.",
    doctorId: '2',
    date: moment__WEBPACK_IMPORTED_MODULE_1__()
        .subtract(3, 'days')
        .toDate(),
};
var mockLog = [
    {
        uid: '123',
        senderId: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.doctorUID,
        message: 'Soy Doctor',
        receiverId: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.patientUID,
        date: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'year').toDate(),
    },
    {
        uid: '1234',
        receiverId: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.doctorUID,
        message: 'Soy Paciente',
        senderId: apps_panadoc_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].test.patientUID,
        date: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'months').toDate(),
    }
];
var mockChat = function (me, other) {
    return {
        members: [me, other],
        uid: '1234123213',
        log: mockLog.map(function (l) {
            var mine = l.senderId === me.uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, l, { receiverId: mine ? other : me, senderId: mine ? me : other });
        })
    };
};
var mockChatPreview = function (me, other) {
    return mockLog
        .filter(function (v) { return Object(_lib_chat_model__WEBPACK_IMPORTED_MODULE_3__["isChatUnit"])(v); })
        .filter(function (c) { return c.senderId !== me.uid; })
        .map(function (v) { return ({
        contact: other,
        lastMessage: v,
    }); }).slice();
};



/***/ }),

/***/ "../../libs/ui/src/index.ts":
/*!************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/index.ts ***!
  \************************************************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ui.module */ "../../libs/ui/src/lib/ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _lib_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiModule"]; });





/***/ }),

/***/ "../../libs/ui/src/lib/button-comms-row/button-comms-row.component.css":
/*!*******************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/button-comms-row/button-comms-row.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvYnV0dG9uLWNvbW1zLXJvdy9idXR0b24tY29tbXMtcm93LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/ui/src/lib/button-comms-row/button-comms-row.component.ts":
/*!******************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/button-comms-row/button-comms-row.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ButtonCommsComponent, ButtonCommsRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCommsComponent", function() { return ButtonCommsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCommsRowComponent", function() { return ButtonCommsRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");



var ButtonCommsComponent = /** @class */ (function () {
    function ButtonCommsComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonCommsComponent.prototype.cta = function () {
        this.click.emit(this.comm);
    };
    ButtonCommsComponent.prototype.ngOnInit = function () {
        switch (this.comm) {
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["CommType"].CHAT:
                this.icon = 'chat_bubble';
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["CommType"].CALL:
                this.icon = 'call';
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["CommType"].VIDEO:
                this.icon = 'video_call';
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ButtonCommsComponent.prototype, "comm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ButtonCommsComponent.prototype, "fab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonCommsComponent.prototype, "click", void 0);
    ButtonCommsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-button-comm',
            template: "\n  <ng-container *ngIf=\"fab; else normal\">\n    <button \n      mat-fab-button\n      aria-label=\"Escribir al Doctor\" \n      (click)=\"cta()\">\n      <mat-icon>\n        {{ icon }}\n      </mat-icon>\n    </button>\n    </ng-container>\n    <ng-template #normal>\n      <button \n        mat-icon-button\n        aria-label=\"Escribir al Doctor\" \n        (click)=\"cta()\">\n        <mat-icon>\n          {{ icon }}\n        </mat-icon>\n      </button>\n    </ng-template>\n  \n  ",
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button-comms-row.component.css */ "../../libs/ui/src/lib/button-comms-row/button-comms-row.component.css")).default]
        })
    ], ButtonCommsComponent);
    return ButtonCommsComponent;
}());

var ButtonCommsRowComponent = /** @class */ (function () {
    function ButtonCommsRowComponent() {
        this.comms = [_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["CommType"].CALL, _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["CommType"].CHAT, _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["CommType"].VIDEO];
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonCommsRowComponent.prototype.onCommunicate = function (n) {
        var value = _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["CommType"][n];
        if (!Number.isNaN(n) && value) {
            this.click.emit(value);
        }
    };
    ButtonCommsRowComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonCommsRowComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ButtonCommsRowComponent.prototype, "fab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonCommsRowComponent.prototype, "click", void 0);
    ButtonCommsRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-button-comm-row',
            template: "\n    <div\n      class=\"communications-buttons\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"1rem\"\n    >\n      <span *ngFor=\"let comm of comms\">\n        <panadoc-button-comm \n        [comm]=\"comm\" \n        [fab]=\"fab\"\n        (click)=\"onCommunicate($event)\"\n        > </panadoc-button-comm>\n      </span>\n    </div>\n  ",
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button-comms-row.component.css */ "../../libs/ui/src/lib/button-comms-row/button-comms-row.component.css")).default]
        })
    ], ButtonCommsRowComponent);
    return ButtonCommsRowComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/card-answer/card-answer.component.scss":
/*!**********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-answer/card-answer.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-card .avatar-doctor {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n.answer-card .answer .name {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0px;\n}\n.answer-card .answer .date {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL2NhcmQtYW5zd2VyL2NhcmQtYW5zd2VyLmNvbXBvbmVudC5zY3NzIiwibGlicy91aS9zcmMvbGliL2NhcmQtYW5zd2VyL2NhcmQtYW5zd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FESUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRk47QURLSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQ0hOIiwiZmlsZSI6ImxpYnMvdWkvc3JjL2xpYi9jYXJkLWFuc3dlci9jYXJkLWFuc3dlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnN3ZXItY2FyZCB7XG4gIC5hdmF0YXItZG9jdG9yIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmFuc3dlciB7XG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIH1cbiAgfVxufSIsIi5hbnN3ZXItY2FyZCAuYXZhdGFyLWRvY3RvciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hbnN3ZXItY2FyZCAuYW5zd2VyIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweDtcbn1cbi5hbnN3ZXItY2FyZCAuYW5zd2VyIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn0iXX0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/card-answer/card-answer.component.ts":
/*!********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-answer/card-answer.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CardAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAnswerComponent", function() { return CardAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var CardAnswerComponent = /** @class */ (function () {
    function CardAnswerComponent() {
    }
    CardAnswerComponent.prototype.ngOnInit = function () {
        this.date = moment__WEBPACK_IMPORTED_MODULE_3__(this.answer.date)
            .locale('es')
            .fromNow();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["Answer"])
    ], CardAnswerComponent.prototype, "answer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["Question"])
    ], CardAnswerComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardAnswerComponent.prototype, "asker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardAnswerComponent.prototype, "answerer", void 0);
    CardAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-card-answer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-answer.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-answer/card-answer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-answer.component.scss */ "../../libs/ui/src/lib/card-answer/card-answer.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardAnswerComponent);
    return CardAnswerComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/card-appointment/card-appointment.component.scss":
/*!********************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-appointment/card-appointment.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvY2FyZC1hcHBvaW50bWVudC9jYXJkLWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/card-appointment/card-appointment.component.ts":
/*!******************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-appointment/card-appointment.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CardAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAppointmentComponent", function() { return CardAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var CardAppointmentComponent = /** @class */ (function () {
    function CardAppointmentComponent() {
        this.rescheduled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardAppointmentComponent.prototype.cancel = function (e) { this.canceled.emit(this.appointment); };
    CardAppointmentComponent.prototype.reschedule = function (e) { this.rescheduled.emit(this.appointment); };
    CardAppointmentComponent.prototype.getTime = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(date)
            .locale('es')
            .format('hh:mm a');
    };
    CardAppointmentComponent.prototype.ngOnInit = function () {
        this.startTime = this.getTime(this.appointment.initDate);
        this.finishTime = this.getTime(this.appointment.finishDate);
        this.day = moment__WEBPACK_IMPORTED_MODULE_2__(this.appointment.initDate)
            .locale('es')
            .format('dddd, D [de] MMMM');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardAppointmentComponent.prototype, "appointment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardAppointmentComponent.prototype, "patient", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardAppointmentComponent.prototype, "rescheduled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardAppointmentComponent.prototype, "canceled", void 0);
    CardAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-card-appointment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-appointment.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-appointment/card-appointment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-appointment.component.scss */ "../../libs/ui/src/lib/card-appointment/card-appointment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardAppointmentComponent);
    return CardAppointmentComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/card-doctor/card-doctor.component.scss":
/*!**********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-doctor/card-doctor.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-appointment mat-card-content .square-row .square h4:last-of-type {\n  font-weight: bold;\n}\n.card-appointment mat-card-content .square-row .square:first-child {\n  text-align: left;\n}\n.card-appointment mat-card-content .square-row .square:last-child {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL2NhcmQtZG9jdG9yL2NhcmQtZG9jdG9yLmNvbXBvbmVudC5zY3NzIiwibGlicy91aS9zcmMvbGliL2NhcmQtZG9jdG9yL2NhcmQtZG9jdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFRO0VBQ0UsaUJBQUE7QUNQVjtBRFVRO0VBQ0UsZ0JBQUE7QUNSVjtBRFdRO0VBQ0UsaUJBQUE7QUNUViIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvY2FyZC1kb2N0b3IvY2FyZC1kb2N0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1hcHBvaW50bWVudCB7XG4gIG1hdC1jYXJkLWhlYWRlciB7fVxuXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIC5hZGRyIHt9XG5cbiAgICAuc3F1YXJlLXJvdyB7XG4gICAgICAuc3F1YXJlIHtcbiAgICAgICAgaDQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLmNhcmQtYXBwb2ludG1lbnQgbWF0LWNhcmQtY29udGVudCAuc3F1YXJlLXJvdyAuc3F1YXJlIGg0Omxhc3Qtb2YtdHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQtYXBwb2ludG1lbnQgbWF0LWNhcmQtY29udGVudCAuc3F1YXJlLXJvdyAuc3F1YXJlOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jYXJkLWFwcG9pbnRtZW50IG1hdC1jYXJkLWNvbnRlbnQgLnNxdWFyZS1yb3cgLnNxdWFyZTpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "../../libs/ui/src/lib/card-doctor/card-doctor.component.ts":
/*!********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-doctor/card-doctor.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CardDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDoctorComponent", function() { return CardDoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CardDoctorComponent = /** @class */ (function () {
    function CardDoctorComponent() {
        this.appointment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newReview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.redirect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardDoctorComponent.prototype.ngOnInit = function () { };
    CardDoctorComponent.prototype.newAppointment = function () { this.appointment.emit(this.doctor); };
    CardDoctorComponent.prototype.review = function (newReview) {
        this.newReview.emit(newReview);
    };
    CardDoctorComponent.prototype.redirectTo = function () {
        this.redirect.emit(this.doctor.uid);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardDoctorComponent.prototype, "doctor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardDoctorComponent.prototype, "appointment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardDoctorComponent.prototype, "newReview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardDoctorComponent.prototype, "redirect", void 0);
    CardDoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-card-doctor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-doctor.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-doctor/card-doctor.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-doctor.component.scss */ "../../libs/ui/src/lib/card-doctor/card-doctor.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardDoctorComponent);
    return CardDoctorComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/card-question/card-question.component.scss":
/*!**************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-question/card-question.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvY2FyZC1xdWVzdGlvbi9jYXJkLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/card-question/card-question.component.ts":
/*!************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-question/card-question.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CardQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardQuestionComponent", function() { return CardQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");



var CardQuestionComponent = /** @class */ (function () {
    function CardQuestionComponent() {
        this.answerEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardQuestionComponent.prototype.ngOnInit = function () { };
    CardQuestionComponent.prototype.answer = function () {
        var answer = { doctorId: this.doctorId, date: new Date(), text: this.text };
        this.answerEmitter.emit(answer);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["Question"])
    ], CardQuestionComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardQuestionComponent.prototype, "asker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardQuestionComponent.prototype, "doctorId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardQuestionComponent.prototype, "answerEmitter", void 0);
    CardQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-card-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-question.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-question/card-question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-question.component.scss */ "../../libs/ui/src/lib/card-question/card-question.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardQuestionComponent);
    return CardQuestionComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/card-review/card-review.component.scss":
/*!**********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-review/card-review.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvY2FyZC1yZXZpZXcvY2FyZC1yZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../../libs/ui/src/lib/card-review/card-review.component.ts":
/*!********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-review/card-review.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CardReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReviewComponent", function() { return CardReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var CardReviewComponent = /** @class */ (function () {
    function CardReviewComponent() {
    }
    CardReviewComponent.prototype.ngOnInit = function () {
        this.date = moment__WEBPACK_IMPORTED_MODULE_2__(this.review.date)
            .add(4, 'days')
            .add(20, 'minutes')
            .locale('es')
            .toNow();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardReviewComponent.prototype, "doctor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardReviewComponent.prototype, "review", void 0);
    CardReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-card-review',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-review.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-review/card-review.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-review.component.scss */ "../../libs/ui/src/lib/card-review/card-review.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardReviewComponent);
    return CardReviewComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/chat-items/chat-event.component.ts":
/*!******************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-items/chat-event.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChatEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEventComponent", function() { return ChatEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");




var ChatEventComponent = /** @class */ (function () {
    function ChatEventComponent() {
    }
    ChatEventComponent.prototype.ngOnInit = function () {
        this.message = this.getChatEventMessage(this.item.eventType);
        this.date = moment__WEBPACK_IMPORTED_MODULE_1__(this.date).locale('es').fromNow();
    };
    ChatEventComponent.prototype.getChatEventMessage = function (e) {
        switch (e) {
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["ChatEventType"].CALL_MADE:
                return 'Se ha realizado una llamada';
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["ChatEventType"].CALL_MISSED_INCOMING:
                return 'Se ha recibido una llamada entrante';
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["ChatEventType"].CALL_MISSED_OUTGOING:
                return 'Se perdió una llamada saliente';
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["ChatEventType"].CALL_RECEIVED:
                return 'Se ha recibido una llamada';
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["ChatEventType"].VIDEOCALL:
                return 'Se realizó una videollamada';
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["ChatEventType"].VIDEOCALL_MISSED:
                return 'Se perdió una videollamada';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatEventComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChatEventComponent.prototype, "date", void 0);
    ChatEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'chat-event',
            template: "\n    <mat-list-item\n      class=\"chatEvent\"\n      fxLayoutAlign=\"space-around end\"      \n      \n    >\n        <mat-icon>{{ item.eventType }}</mat-icon>\n        <h4 >{{ message }} {{ date }}</h4>\n    </mat-list-item>\n  ",
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-unit.styles.scss */ "../../libs/ui/src/lib/chat-items/chat-unit.styles.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatEventComponent);
    return ChatEventComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/chat-items/chat-typing.component.scss":
/*!*********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-items/chat-typing.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatUnit {\n  padding: 1rem 0px !important;\n  height: -webkit-min-content !important;\n  height: -moz-min-content !important;\n  height: min-content !important;\n}\n.chatUnit .mat-card {\n  direction: initial;\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n  border: 100px;\n  padding: 8px 16px;\n  align-items: baseline;\n}\n.chatUnit .mat-card.user {\n  border-radius: 50px 50px 15px 50px;\n}\n.chatUnit .mat-card.receiver {\n  border-radius: 50px 50px 50px 15px;\n}\n.chatUnit .mat-card .message {\n  -webkit-font-kerning: normal;\n          font-kerning: normal;\n  margin-bottom: 0px;\n}\n.chatUnit .mat-card .timestamp {\n  text-align: right;\n}\n.chatUnit .text-center {\n  text-align: center;\n  width: 100%;\n}\n.chatUnit .typing-indicator {\n  will-change: transform;\n  width: auto;\n  display: table;\n  margin: 0 auto;\n  position: relative;\n  -webkit-animation: 2s bulge infinite ease-out;\n          animation: 2s bulge infinite ease-out;\n}\n.chatUnit .typing-indicator span {\n  height: 10px;\n  width: 10px;\n  float: left;\n  margin: 0 1px;\n  background-color: #9E9EA1;\n  display: block;\n  border-radius: 50%;\n  opacity: 0.4;\n}\n.chatUnit .typing-indicator span:nth-of-type(1) {\n  -webkit-animation: 1s blink infinite 0.3333s;\n          animation: 1s blink infinite 0.3333s;\n}\n.chatUnit .typing-indicator span:nth-of-type(2) {\n  -webkit-animation: 1s blink infinite 0.6666s;\n          animation: 1s blink infinite 0.6666s;\n}\n.chatUnit .typing-indicator span:nth-of-type(3) {\n  -webkit-animation: 1s blink infinite 0.9999s;\n          animation: 1s blink infinite 0.9999s;\n}\n@-webkit-keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes bulge {\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes bulge {\n  50% {\n    transform: scale(1.05);\n  }\n}\n.chatEvent .p {\n  margin: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n.chatEvent .cont {\n  align-items: initial !important;\n  justify-content: space-between !important;\n  max-width: 75% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL2NoYXQtaXRlbXMvY2hhdC10eXBpbmcuY29tcG9uZW50LnNjc3MiLCJsaWJzL3VpL3NyYy9saWIvY2hhdC1pdGVtcy9jaGF0LXR5cGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0Esc0NBQUE7RUFBQSxtQ0FBQTtFQUFBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQUo7QURFSTtFQUNFLGtDQUFBO0FDQU47QURHSTtFQUNFLGtDQUFBO0FDRE47QURJSTtFQUVFLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxrQkFBQTtBQ0hOO0FETUk7RUFFRSxpQkFBQTtBQ0xOO0FEU0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNQSjtBRFVFO0VBRUUsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7QUNUSjtBRFdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1ROO0FEWVE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0FDVlY7QURTUTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7QUNQVjtBRE1RO0VBQ0UsNENBQUE7VUFBQSxvQ0FBQTtBQ0pWO0FEVUU7RUFDRTtJQUNFLFVBQUE7RUNSSjtBQUNGO0FES0U7RUFDRTtJQUNFLFVBQUE7RUNSSjtBQUNGO0FEV0U7RUFDRTtJQUNFLHNCQUFBO0VDVEo7QUFDRjtBRE1FO0VBQ0U7SUFDRSxzQkFBQTtFQ1RKO0FBQ0Y7QURlRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ1pKO0FEZUU7RUFHRSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUNmSiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvY2hhdC1pdGVtcy9jaGF0LXR5cGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0VW5pdCB7XG4gIHBhZGRpbmc6IDFyZW0gMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcblxuICAubWF0LWNhcmQge1xuICAgIGRpcmVjdGlvbjogaW5pdGlhbDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDhweDtcbiAgICBib3JkZXI6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxuICAgICYudXNlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMTVweCA1MHB4O1xuICAgIH1cblxuICAgICYucmVjZWl2ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggMTVweDtcbiAgICB9XG5cbiAgICAubWVzc2FnZSB7XG5cbiAgICAgIGZvbnQta2VybmluZzogbm9ybWFsO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgIC50aW1lc3RhbXAge1xuXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cblxuICAudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50eXBpbmctaW5kaWNhdG9yIHtcbiAgICAkdGktY29sb3ItYmc6ICNFNkU3RUQ7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYW5pbWF0aW9uOiAycyBidWxnZSBpbmZpbml0ZSBlYXNlLW91dDtcblxuICAgIHNwYW4ge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbjogMCAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUU5RUExO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG5cbiAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMyB7XG4gICAgICAgICY6bnRoLW9mLXR5cGUoI3skaX0pIHtcbiAgICAgICAgICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlICgkaSAqIC4zMzMzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1bGdlIHtcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cblxufVxuXG4uY2hhdEV2ZW50IHtcbiAgLnAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICB9XG5cbiAgLmNvbnQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAvLyAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgLy8gfVxuICB9XG59IiwiLmNoYXRVbml0IHtcbiAgcGFkZGluZzogMXJlbSAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudCAhaW1wb3J0YW50O1xufVxuLmNoYXRVbml0IC5tYXQtY2FyZCB7XG4gIGRpcmVjdGlvbjogaW5pdGlhbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlcjogMTAwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uY2hhdFVuaXQgLm1hdC1jYXJkLnVzZXIge1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMTVweCA1MHB4O1xufVxuLmNoYXRVbml0IC5tYXQtY2FyZC5yZWNlaXZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDE1cHg7XG59XG4uY2hhdFVuaXQgLm1hdC1jYXJkIC5tZXNzYWdlIHtcbiAgZm9udC1rZXJuaW5nOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jaGF0VW5pdCAubWF0LWNhcmQgLnRpbWVzdGFtcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNoYXRVbml0IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdFVuaXQgLnR5cGluZy1pbmRpY2F0b3Ige1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogMnMgYnVsZ2UgaW5maW5pdGUgZWFzZS1vdXQ7XG59XG4uY2hhdFVuaXQgLnR5cGluZy1pbmRpY2F0b3Igc3BhbiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUU5RUExO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY2hhdFVuaXQgLnR5cGluZy1pbmRpY2F0b3Igc3BhbjpudGgtb2YtdHlwZSgxKSB7XG4gIGFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgMC4zMzMzcztcbn1cbi5jaGF0VW5pdCAudHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1vZi10eXBlKDIpIHtcbiAgYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjY2NjZzO1xufVxuLmNoYXRVbml0IC50eXBpbmctaW5kaWNhdG9yIHNwYW46bnRoLW9mLXR5cGUoMykge1xuICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuOTk5OXM7XG59XG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1bGdlIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG59XG5cbi5jaGF0RXZlbnQgLnAge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cbi5jaGF0RXZlbnQgLmNvbnQge1xuICBhbGlnbi1pdGVtczogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA3NSUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/chat-items/chat-typing.component.ts":
/*!*******************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-items/chat-typing.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ChatTypingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatTypingComponent", function() { return ChatTypingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ChatTypingComponent = /** @class */ (function () {
    function ChatTypingComponent() {
    }
    ChatTypingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ChatTypingComponent.prototype, "typing", void 0);
    ChatTypingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-chat-typing',
            template: "\n  <ng-container *ngIf=\"typing\">\n    <mat-list-item dir=\"ltr\" class=\"chatUnit\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <mat-card class=\"receiver\">\n        <div class=\"typing-indicator\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </mat-card>\n    </mat-list-item>\n  </ng-container>\n  ",
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-typing.component.scss */ "../../libs/ui/src/lib/chat-items/chat-typing.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatTypingComponent);
    return ChatTypingComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/chat-items/chat-unit.component.ts":
/*!*****************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-items/chat-unit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChatUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUnitComponent", function() { return ChatUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");



var ChatUnitComponent = /** @class */ (function () {
    function ChatUnitComponent() {
    }
    ChatUnitComponent.prototype.ngOnInit = function () {
        this.isFromUser = this.user.uid === this.author.uid;
        this.modDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.date).locale('es').fromNow(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatUnitComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatUnitComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatUnitComponent.prototype, "author", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], ChatUnitComponent.prototype, "date", void 0);
    ChatUnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'chat-unit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-unit.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat-items/chat-unit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-unit.styles.scss */ "../../libs/ui/src/lib/chat-items/chat-unit.styles.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatUnitComponent);
    return ChatUnitComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/chat-items/chat-unit.styles.scss":
/*!****************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-items/chat-unit.styles.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatUnit {\n  padding: 1rem 0px !important;\n  height: -webkit-min-content !important;\n  height: -moz-min-content !important;\n  height: min-content !important;\n}\n.chatUnit .mat-card {\n  direction: initial;\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n  border: 100px;\n  padding: 8px 16px;\n  align-items: baseline;\n}\n.chatUnit .mat-card.user {\n  border-radius: 50px 50px 15px 50px;\n}\n.chatUnit .mat-card.user .timestamp {\n  display: flex;\n  align-self: flex-start;\n}\n.chatUnit .mat-card.receiver {\n  border-radius: 50px 50px 50px 15px;\n}\n.chatUnit .mat-card.receiver .timestamp {\n  display: flex;\n  align-self: flex-end;\n}\n.chatUnit .mat-card .message {\n  -webkit-font-kerning: normal;\n          font-kerning: normal;\n  margin-bottom: 0px;\n}\n.chatUnit .text-center {\n  text-align: center;\n  width: 100%;\n}\n.chatUnit .typing-indicator {\n  will-change: transform;\n  width: auto;\n  display: table;\n  margin: 0 auto;\n  position: relative;\n  -webkit-animation: 2s bulge infinite ease-out;\n          animation: 2s bulge infinite ease-out;\n}\n.chatUnit .typing-indicator span {\n  height: 10px;\n  width: 10px;\n  float: left;\n  margin: 0 1px;\n  background-color: #9E9EA1;\n  display: block;\n  border-radius: 50%;\n  opacity: 0.4;\n}\n.chatUnit .typing-indicator span:nth-of-type(1) {\n  -webkit-animation: 1s blink infinite 0.3333s;\n          animation: 1s blink infinite 0.3333s;\n}\n.chatUnit .typing-indicator span:nth-of-type(2) {\n  -webkit-animation: 1s blink infinite 0.6666s;\n          animation: 1s blink infinite 0.6666s;\n}\n.chatUnit .typing-indicator span:nth-of-type(3) {\n  -webkit-animation: 1s blink infinite 0.9999s;\n          animation: 1s blink infinite 0.9999s;\n}\n@-webkit-keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes bulge {\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes bulge {\n  50% {\n    transform: scale(1.05);\n  }\n}\n.chatEvent .p {\n  margin: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n.chatEvent .mat-list-item-content {\n  justify-content: center;\n}\n.chatEvent .cont {\n  align-items: initial !important;\n  justify-content: space-between !important;\n  max-width: 75% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL2NoYXQtaXRlbXMvY2hhdC11bml0LnN0eWxlcy5zY3NzIiwibGlicy91aS9zcmMvbGliL2NoYXQtaXRlbXMvY2hhdC11bml0LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUFBLG1DQUFBO0VBQUEsOEJBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNBSjtBREVJO0VBQ0Usa0NBQUE7QUNBTjtBRENNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ1I7QURHSTtFQUNFLGtDQUFBO0FDRE47QURFTTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQ0FSO0FESUk7RUFFRSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0Esa0JBQUE7QUNITjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDTko7QURTRTtFQUVFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0FDUko7QURVSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNSTjtBRFdRO0VBQ0UsNENBQUE7VUFBQSxvQ0FBQTtBQ1RWO0FEUVE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0FDTlY7QURLUTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7QUNIVjtBRFNFO0VBQ0U7SUFDRSxVQUFBO0VDUEo7QUFDRjtBRElFO0VBQ0U7SUFDRSxVQUFBO0VDUEo7QUFDRjtBRFVFO0VBQ0U7SUFDRSxzQkFBQTtFQ1JKO0FBQ0Y7QURLRTtFQUNFO0lBQ0Usc0JBQUE7RUNSSjtBQUNGO0FEY0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNYSjtBRGFFO0VBQ0UsdUJBQUE7QUNYSjtBRGFFO0VBR0UsK0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0FDYkoiLCJmaWxlIjoibGlicy91aS9zcmMvbGliL2NoYXQtaXRlbXMvY2hhdC11bml0LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRVbml0IHtcbiAgcGFkZGluZzogMXJlbSAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudCAhaW1wb3J0YW50O1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgZGlyZWN0aW9uOiBpbml0aWFsO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlcjogMTAwcHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXG4gICAgJi51c2VyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAxNXB4IDUwcHg7XG4gICAgICAudGltZXN0YW1wIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJlY2VpdmVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDE1cHg7XG4gICAgICAudGltZXN0YW1wIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lc3NhZ2Uge1xuXG4gICAgICBmb250LWtlcm5pbmc6IG5vcm1hbDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgfVxuXG4gIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnR5cGluZy1pbmRpY2F0b3Ige1xuICAgICR0aS1jb2xvci1iZzogI0U2RTdFRDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbmltYXRpb246IDJzIGJ1bGdlIGluZmluaXRlIGVhc2Utb3V0O1xuXG4gICAgc3BhbiB7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luOiAwIDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5RTlFQTE7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG9wYWNpdHk6IDAuNDtcblxuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAzIHtcbiAgICAgICAgJjpudGgtb2YtdHlwZSgjeyRpfSkge1xuICAgICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgKCRpICogLjMzMzNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnVsZ2Uge1xuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbiAgfVxuXG59XG5cbi5jaGF0RXZlbnQge1xuICAucCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIH1cbiAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY29udCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIC8vIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICAgIGFsaWduLWl0ZW1zOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgICAvLyB9XG4gIH1cbn0iLCIuY2hhdFVuaXQge1xuICBwYWRkaW5nOiAxcmVtIDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG4uY2hhdFVuaXQgLm1hdC1jYXJkIHtcbiAgZGlyZWN0aW9uOiBpbml0aWFsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiAxMDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5jaGF0VW5pdCAubWF0LWNhcmQudXNlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAxNXB4IDUwcHg7XG59XG4uY2hhdFVuaXQgLm1hdC1jYXJkLnVzZXIgLnRpbWVzdGFtcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4uY2hhdFVuaXQgLm1hdC1jYXJkLnJlY2VpdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggMTVweDtcbn1cbi5jaGF0VW5pdCAubWF0LWNhcmQucmVjZWl2ZXIgLnRpbWVzdGFtcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLmNoYXRVbml0IC5tYXQtY2FyZCAubWVzc2FnZSB7XG4gIGZvbnQta2VybmluZzogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uY2hhdFVuaXQgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaGF0VW5pdCAudHlwaW5nLWluZGljYXRvciB7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiAycyBidWxnZSBpbmZpbml0ZSBlYXNlLW91dDtcbn1cbi5jaGF0VW5pdCAudHlwaW5nLWluZGljYXRvciBzcGFuIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5RTlFQTE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5jaGF0VW5pdCAudHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjMzMzNzO1xufVxuLmNoYXRVbml0IC50eXBpbmctaW5kaWNhdG9yIHNwYW46bnRoLW9mLXR5cGUoMikge1xuICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuNjY2NnM7XG59XG4uY2hhdFVuaXQgLnR5cGluZy1pbmRpY2F0b3Igc3BhbjpudGgtb2YtdHlwZSgzKSB7XG4gIGFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgMC45OTk5cztcbn1cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYnVsZ2Uge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbn1cblxuLmNoYXRFdmVudCAucCB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuLmNoYXRFdmVudCAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2hhdEV2ZW50IC5jb250IHtcbiAgYWxpZ24taXRlbXM6IGluaXRpYWwgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNzUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "../../libs/ui/src/lib/chat-list/chat-list.component.scss":
/*!******************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-list/chat-list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chat-list .chat-row .extra img {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJsaWJzL3VpL3NyYy9saWIvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLTTtFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0xSIiwiZmlsZSI6ImxpYnMvdWkvc3JjL2xpYi9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXQtbGlzdCB7XG5cblxuICAuY2hhdC1yb3cge1xuICAgIC5leHRyYSB7XG4gICAgICBpbWcge1xuXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIiNjaGF0LWxpc3QgLmNoYXQtcm93IC5leHRyYSBpbWcge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/chat-list/chat-list.component.ts":
/*!****************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-list/chat-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChatListItemComponent, ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListItemComponent", function() { return ChatListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");



var ChatListItemComponent = /** @class */ (function () {
    function ChatListItemComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatListItemComponent.prototype.ngOnInit = function () {
        this.userIcon = Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["determineIfUserIsDoctor"])(this.contact) ? 'assets/png-icons/icon-doctor.png' : 'assets/png-icons/icon-user.png';
    };
    ChatListItemComponent.prototype.handleSelect = function () {
        this.select.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatListItemComponent.prototype, "contact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatListItemComponent.prototype, "lastMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatListItemComponent.prototype, "select", void 0);
    ChatListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-chat-list-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-list-item.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat-list/chat-list-item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-list.component.scss */ "../../libs/ui/src/lib/chat-list/chat-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatListItemComponent);
    return ChatListItemComponent;
}());

var ChatListComponent = /** @class */ (function () {
    function ChatListComponent() {
        this.chats = [];
        this.loading = false;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatListComponent.prototype.ngOnInit = function () {
    };
    ChatListComponent.prototype.ngOnChanges = function (changes) {
        var chats = changes.chats;
        this.loading = chats.currentValue.length === 0;
    };
    ChatListComponent.prototype.selectChat = function (index) {
        this.select.emit(index);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChatListComponent.prototype, "chats", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatListComponent.prototype, "select", void 0);
    ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-chat-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-list.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat-list/chat-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-list.component.scss */ "../../libs/ui/src/lib/chat-list/chat-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/chat/chat.component.scss":
/*!********************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat/chat.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chat-component mat-list {\n  overflow: auto;\n}\n\n.conversation-input {\n  position: absolute !important;\n  bottom: 0;\n  margin-bottom: 0px;\n  padding-left: 1rem;\n  width: -webkit-fill-available;\n  background-color: #fafafa;\n}\n\n.conversation-input .full-width {\n  width: 100%;\n}\n\n.conversation-input .full-width .mat-icon {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsImxpYnMvdWkvc3JjL2xpYi9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0FDQUo7O0FER0E7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtBQ0FKOztBREVJO0VBQ0UsZUFBQTtBQ0FOIiwiZmlsZSI6ImxpYnMvdWkvc3JjL2xpYi9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhdC1jb21wb25lbnQge1xuICBtYXQtbGlzdCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbi5jb252ZXJzYXRpb24taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG5cbiAgLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIiNjaGF0LWNvbXBvbmVudCBtYXQtbGlzdCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY29udmVyc2F0aW9uLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmNvbnZlcnNhdGlvbi1pbnB1dCAuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnZlcnNhdGlvbi1pbnB1dCAuZnVsbC13aWR0aCAubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "../../libs/ui/src/lib/chat/chat.component.ts":
/*!******************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat/chat.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var TYPING_WAITING_TIME = 1000;
var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        var _this = this;
        this.socketEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isChatUnit = _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["isChatUnit"];
        this.typingStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$sub = this.typingStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(TYPING_WAITING_TIME / 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.socketEvent.emit(new _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketPackage"](_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_TYPING)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(TYPING_WAITING_TIME * 2))
            .subscribe(function (_) { return _this.socketEvent.emit(new _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketPackage"](_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_NO_TYPING)); });
    }
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollIntoView();
    };
    ChatComponent.prototype.ngOnChanges = function (changes) {
        var chat = changes.conversation;
        if (chat.firstChange) {
        }
        this.scrollIntoView();
        console.log(chat.currentValue);
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.isDoctor = Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["determineIfUserIsDoctor"])(this.user);
        this.scrollIntoView();
    };
    ChatComponent.prototype.scrollIntoView = function () {
        this.input.nativeElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    };
    ChatComponent.prototype._sendText = function () {
        var newMsg = {
            date: new Date(),
            message: this.text,
            senderId: this.user.uid,
            receiverId: this.receiver.uid,
        };
        this.socketEvent.emit(new _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketPackage"](_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_NEW_MESSAGE, newMsg));
        this.text = "";
    };
    ChatComponent.prototype.handleKeyboardEvent = function (event) {
        this.typingStream.next();
        if (event.key === 'Enter') {
            event.preventDefault();
            this._sendText();
        }
    };
    ChatComponent.prototype.getAuthor = function (item) {
        var id = item.senderId;
        return id === this.user.uid ? this.user : this.receiver;
    };
    ChatComponent.prototype.addFiles = function (event) {
        var file = ([event[0]]).pop();
        this.socketEvent.emit(new _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketPackage"](_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_SEND_FILE));
    };
    ChatComponent.prototype.openInput = function () {
        document.getElementById('file-input').click();
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.typingStream.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ChatComponent.prototype, "typing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatComponent.prototype, "receiver", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatComponent.prototype, "conversation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatComponent.prototype, "socketEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatComponent.prototype, "isChatUnit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('conversationInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keypress', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ChatComponent.prototype, "handleKeyboardEvent", null);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-chat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat/chat.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.scss */ "../../libs/ui/src/lib/chat/chat.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());

//TODO: Deshabilitar contacto cuando no este en la cita


/***/ }),

/***/ "../../libs/ui/src/lib/file-upload/file-upload.component.scss":
/*!**********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/file-upload/file-upload.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar-holder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  text-align: center;\n}\n.avatar-holder .icons {\n  position: relative;\n  height: 100px;\n  width: auto;\n}\n.dropzone input {\n  visibility: hidden;\n}\n.dropzone .mat-mini-fab {\n  box-shadow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwibGlicy91aS9zcmMvbGliL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRUo7QURHRTtFQUNFLGtCQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0FDQUoiLCJmaWxlIjoibGlicy91aS9zcmMvbGliL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhci1ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmljb25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG4uZHJvcHpvbmUge1xuICBpbnB1dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC5tYXQtbWluaS1mYWJ7XG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gIH1cbn0iLCIuYXZhdGFyLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF2YXRhci1ob2xkZXIgLmljb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmRyb3B6b25lIGlucHV0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmRyb3B6b25lIC5tYXQtbWluaS1mYWIge1xuICBib3gtc2hhZG93OiB1bnNldDtcbn0iXX0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/file-upload/file-upload.component.ts":
/*!********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/file-upload/file-upload.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");



var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.filesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventIsDoctor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userDefined = false;
        this.files = [];
        this.userIsDoctor = false;
        this.doctorSrc = "assets/svg-icons/doctor-color.svg";
        this.patientSrc = "assets/svg-icons/patient-color.svg";
        this.doctorIcon = this.setIconType(this.userIsDoctor);
        this.patientIcon = this.setIconType(!this.userIsDoctor);
        this.doctorTooltip = this.setTextType(this.userIsDoctor);
        this.patientTooltip = this.setTextType(!this.userIsDoctor);
    }
    FileUploadComponent.prototype.switchIcon = function () {
        this.userIsDoctor = !this.userIsDoctor;
        this.eventIsDoctor.emit(this.userIsDoctor);
        this.doctorIcon = this.setIconType(this.userIsDoctor);
        this.patientIcon = this.setIconType(!this.userIsDoctor);
        this.doctorTooltip = this.setTextType(this.userIsDoctor);
        this.patientTooltip = this.setTextType(!this.userIsDoctor);
        this.doctorSrc = "assets/svg-icons/doctor-" + (this.userIsDoctor ? 'color' : 'mono') + ".svg";
        this.patientSrc = "assets/svg-icons/patient-" + (!this.userIsDoctor ? 'color' : 'mono') + ".svg";
    };
    ;
    FileUploadComponent.prototype.ngOnInit = function () {
        if (this.userDefined) {
            this.userIsDoctor = this.userDefined === _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["UserType"].DOCTOR;
        }
        else {
            this.switchIcon();
        }
    };
    FileUploadComponent.prototype.addFiles = function (event) {
        this.files = [event[0]];
        this.done();
    };
    FileUploadComponent.prototype.done = function () {
        this.filesEvent.emit(this.files);
    };
    FileUploadComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    FileUploadComponent.prototype.openInput = function () {
        document.getElementById('file-input').click();
    };
    FileUploadComponent.prototype.cta = function (doctorIconChosen) {
        if (doctorIconChosen) {
            if (this.userIsDoctor) {
                this.openInput();
            }
            else {
                this.switchIcon();
            }
        }
        else {
            if (this.userIsDoctor) {
                this.switchIcon();
            }
            else {
                this.openInput();
            }
        }
    };
    FileUploadComponent.prototype.setTextType = function (isChosen) {
        return (isChosen) ? 'Seleccione Foto' : 'Cambiar Tipo de Usuario';
    };
    FileUploadComponent.prototype.setIconType = function (isChosen) {
        return isChosen ? 'attach_file' : 'sync_alt';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", File)
    ], FileUploadComponent.prototype, "tipo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "filesEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "eventIsDoctor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "userDefined", void 0);
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upload.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/file-upload/file-upload.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upload.component.scss */ "../../libs/ui/src/lib/file-upload/file-upload.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/form-appointment/form-appointment.component.scss":
/*!********************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-appointment/form-appointment.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvZm9ybS1hcHBvaW50bWVudC9mb3JtLWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/form-appointment/form-appointment.component.ts":
/*!******************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-appointment/form-appointment.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: FormAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAppointmentComponent", function() { return FormAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FormAppointmentComponent = /** @class */ (function () {
    function FormAppointmentComponent() {
    }
    FormAppointmentComponent.prototype.ngOnInit = function () {
    };
    FormAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-appointment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-appointment.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/form-appointment/form-appointment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-appointment.component.scss */ "../../libs/ui/src/lib/form-appointment/form-appointment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormAppointmentComponent);
    return FormAppointmentComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/form-user/form-doctor-profile.component.scss":
/*!****************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-user/form-doctor-profile.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvZm9ybS11c2VyL2Zvcm0tZG9jdG9yLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../../libs/ui/src/lib/form-user/form-doctor-profile.component.ts":
/*!**************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-user/form-doctor-profile.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function() { return DoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var DoctorComponent = /** @class */ (function () {
    function DoctorComponent() {
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        this.$subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.isDoctor = false;
        this.numberMask = [
            '+',
            /[1-9]/,
            /\d/,
            ' ',
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/
        ];
        this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    }
    DoctorComponent.prototype.setUser = function (isDoctor) {
        this.isDoctor = isDoctor;
    };
    DoctorComponent.prototype.ngOnInit = function () {
    };
    DoctorComponent.prototype.getAvatarFile = function (files) {
        console.log(files);
    };
    DoctorComponent.prototype.onSubmit = function (form) {
        var iUser = form.value;
        alert(JSON.stringify(iUser));
    };
    DoctorComponent.prototype.login = function () {
    };
    DoctorComponent.prototype.ngOnDestroy = function () {
        this.$subs.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DoctorComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DoctorComponent.prototype, "disabled", void 0);
    DoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-doctor-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-doctor-profile.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/form-user/form-doctor-profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-doctor-profile.component.scss */ "../../libs/ui/src/lib/form-user/form-doctor-profile.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/form-user/form-patient-profile.component.scss":
/*!*****************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-user/form-patient-profile.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvZm9ybS11c2VyL2Zvcm0tcGF0aWVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/form-user/form-patient-profile.component.ts":
/*!***************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-user/form-patient-profile.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");




var PatientComponent = /** @class */ (function () {
    function PatientComponent() {
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        this.$subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        //TODO: Disable
        this.isDoctor = false;
        this.userDefined = '';
        this.numberMask = [
            '+',
            /[1-9]/,
            /\d/,
            ' ',
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/
        ];
        this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    }
    PatientComponent.prototype.setUser = function (isDoctor) {
        this.isDoctor = isDoctor;
    };
    PatientComponent.prototype.ngOnInit = function () {
        this.userDefined = Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["determineIfUserIsDoctor"])(this.user) ? _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["UserType"].DOCTOR : _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["UserType"].PATIENT;
    };
    PatientComponent.prototype.getAvatarFile = function (files) {
        console.log(files);
    };
    PatientComponent.prototype.onSubmit = function (form) {
        var iUser = form.value;
        alert(JSON.stringify(iUser));
    };
    PatientComponent.prototype.login = function () {
    };
    PatientComponent.prototype.ngOnDestroy = function () {
        this.$subs.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PatientComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PatientComponent.prototype, "disabled", void 0);
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-basic-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-patient-profile.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/form-user/form-patient-profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-patient-profile.component.scss */ "../../libs/ui/src/lib/form-user/form-patient-profile.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/material.module.ts":
/*!**************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/material.module.ts ***!
  \**************************************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");



var material = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: material.slice(),
            exports: material.slice()
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/new-review/new-review.component.scss":
/*!********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/new-review/new-review.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-review-component .new-review-component-content {\n  padding: 1em;\n  padding-bottom: 2em;\n}\n\n.hidden-btn {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL25ldy1yZXZpZXcvbmV3LXJldmlldy5jb21wb25lbnQuc2NzcyIsImxpYnMvdWkvc3JjL2xpYi9uZXctcmV2aWV3L25ldy1yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURNQTtFQUNFLGFBQUE7QUNIRiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvbmV3LXJldmlldy9uZXctcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1yZXZpZXctY29tcG9uZW50IHtcbiAgLm5ldy1yZXZpZXctY29tcG9uZW50LWhlYWRlciB7fVxuXG4gIC5uZXctcmV2aWV3LWNvbXBvbmVudC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgfVxufVxuXG4uaGlkZGVuLWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbn0iLCIubmV3LXJldmlldy1jb21wb25lbnQgLm5ldy1yZXZpZXctY29tcG9uZW50LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG59XG5cbi5oaWRkZW4tYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/new-review/new-review.component.ts":
/*!******************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/new-review/new-review.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NewReviewButtonComponent, NewReviewSheetContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReviewButtonComponent", function() { return NewReviewButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReviewSheetContentComponent", function() { return NewReviewSheetContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "../../node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var NewReviewButtonComponent = /** @class */ (function () {
    function NewReviewButtonComponent(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
        this.newReview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewReviewButtonComponent.prototype.openBottomSheet = function () {
        var _this = this;
        var bottomSheetRef = this._bottomSheet.open(NewReviewSheetContentComponent, {
            data: { doctor: this.doctor }
        });
        bottomSheetRef.afterDismissed().subscribe(function (results) {
            results && _this.newReview.emit(results);
        });
    };
    NewReviewButtonComponent.ctorParameters = function () { return [
        { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewReviewButtonComponent.prototype, "doctor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewReviewButtonComponent.prototype, "newReview", void 0);
    NewReviewButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-review-btn',
            template: ' <button mat-button (click)="openBottomSheet()">Valorar</button>',
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-review.component.scss */ "../../libs/ui/src/lib/new-review/new-review.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]])
    ], NewReviewButtonComponent);
    return NewReviewButtonComponent;
}());

var NewReviewSheetContentComponent = /** @class */ (function () {
    function NewReviewSheetContentComponent(data, _bottomSheetRef) {
        this.data = data;
        this._bottomSheetRef = _bottomSheetRef;
        this.text = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.doctor = data.doctor;
    }
    NewReviewSheetContentComponent.prototype.ngOnInit = function () { };
    NewReviewSheetContentComponent.prototype.onRatingChange = function (_a) {
        var rating = _a.rating;
        this.rating = rating;
    };
    NewReviewSheetContentComponent.prototype.close = function (event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    };
    NewReviewSheetContentComponent.prototype.save = function (event) {
        var newReview = {
            date: new Date(),
            text: this.text.value,
            rating: this.rating,
            doctorId: this.doctor.uid,
            patientId: '',
        };
        this._bottomSheetRef.dismiss(newReview);
        event.preventDefault();
    };
    NewReviewSheetContentComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] },
        { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }
    ]; };
    NewReviewSheetContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-review.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/new-review/new-review.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-review.component.scss */ "../../libs/ui/src/lib/new-review/new-review.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"]])
    ], NewReviewSheetContentComponent);
    return NewReviewSheetContentComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.scss":
/*!******************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".public-profile-container .header {\n  padding-top: 16px;\n}\n.public-profile-container .header .avatar-doctor {\n  border-radius: 50%;\n  max-width: 15vw;\n}\n.public-profile-container .square-row .square h4:last-of-type {\n  font-weight: bold;\n}\n.public-profile-container .square-row .square:first-child {\n  text-align: left;\n}\n.public-profile-container .square-row .square:last-child {\n  text-align: right;\n}\n.public-profile-container mat-expansion-panel,\n.public-profile-container mat-expansion-panel-header {\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvbGlicy91aS9zcmMvbGliL3B1YmxpYy1wcm9maWxlLWRvY3Rvci9wdWJsaWMtcHJvZmlsZS1kb2N0b3IuY29tcG9uZW50LnNjc3MiLCJsaWJzL3VpL3NyYy9saWIvcHVibGljLXByb2ZpbGUtZG9jdG9yL3B1YmxpYy1wcm9maWxlLWRvY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FETU07RUFDRSxpQkFBQTtBQ0pSO0FET007RUFDRSxnQkFBQTtBQ0xSO0FEUU07RUFDRSxpQkFBQTtBQ05SO0FEV0U7O0VBRUUsa0JBQUE7QUNUSiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvcHVibGljLXByb2ZpbGUtZG9jdG9yL3B1YmxpYy1wcm9maWxlLWRvY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdWJsaWMtcHJvZmlsZS1jb250YWluZXIge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcblxuICAgIC5hdmF0YXItZG9jdG9yIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1heC13aWR0aDoxNXZ3O1xuICAgIH1cbiAgfVxuXG4gIC5zcXVhcmUtcm93IHtcbiAgICAuc3F1YXJlIHtcbiAgICAgIGg0Omxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWF0LWV4cGFuc2lvbi1wYW5lbCxcbiAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufSIsIi5wdWJsaWMtcHJvZmlsZS1jb250YWluZXIgLmhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLnB1YmxpYy1wcm9maWxlLWNvbnRhaW5lciAuaGVhZGVyIC5hdmF0YXItZG9jdG9yIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXgtd2lkdGg6IDE1dnc7XG59XG4ucHVibGljLXByb2ZpbGUtY29udGFpbmVyIC5zcXVhcmUtcm93IC5zcXVhcmUgaDQ6bGFzdC1vZi10eXBlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHVibGljLXByb2ZpbGUtY29udGFpbmVyIC5zcXVhcmUtcm93IC5zcXVhcmU6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnB1YmxpYy1wcm9maWxlLWNvbnRhaW5lciAuc3F1YXJlLXJvdyAuc3F1YXJlOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wdWJsaWMtcHJvZmlsZS1jb250YWluZXIgbWF0LWV4cGFuc2lvbi1wYW5lbCxcbi5wdWJsaWMtcHJvZmlsZS1jb250YWluZXIgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "../../libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PublicProfileDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileDoctorComponent", function() { return PublicProfileDoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var PublicProfileDoctorComponent = /** @class */ (function () {
    function PublicProfileDoctorComponent() {
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    }
    PublicProfileDoctorComponent.prototype.ngOnInit = function () {
        console.log(this.doctor);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PublicProfileDoctorComponent.prototype, "doctor", void 0);
    PublicProfileDoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-public-profile-doctor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./public-profile-doctor.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./public-profile-doctor.component.scss */ "../../libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicProfileDoctorComponent);
    return PublicProfileDoctorComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/public-profile-patient/public-profile-patient.component.scss":
/*!********************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/public-profile-patient/public-profile-patient.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvcHVibGljLXByb2ZpbGUtcGF0aWVudC9wdWJsaWMtcHJvZmlsZS1wYXRpZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "../../libs/ui/src/lib/public-profile-patient/public-profile-patient.component.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/public-profile-patient/public-profile-patient.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PublicProfilePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePatientComponent", function() { return PublicProfilePatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PublicProfilePatientComponent = /** @class */ (function () {
    function PublicProfilePatientComponent() {
    }
    PublicProfilePatientComponent.prototype.ngOnInit = function () {
    };
    PublicProfilePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-public-profile-patient',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./public-profile-patient.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/public-profile-patient/public-profile-patient.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./public-profile-patient.component.scss */ "../../libs/ui/src/lib/public-profile-patient/public-profile-patient.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicProfilePatientComponent);
    return PublicProfilePatientComponent;
}());



/***/ }),

/***/ "../../libs/ui/src/lib/ui.module.ts":
/*!********************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/ui.module.ts ***!
  \********************************************************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _card_doctor_card_doctor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-doctor/card-doctor.component */ "../../libs/ui/src/lib/card-doctor/card-doctor.component.ts");
/* harmony import */ var _card_question_card_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-question/card-question.component */ "../../libs/ui/src/lib/card-question/card-question.component.ts");
/* harmony import */ var _card_answer_card_answer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-answer/card-answer.component */ "../../libs/ui/src/lib/card-answer/card-answer.component.ts");
/* harmony import */ var _card_appointment_card_appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-appointment/card-appointment.component */ "../../libs/ui/src/lib/card-appointment/card-appointment.component.ts");
/* harmony import */ var _card_review_card_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-review/card-review.component */ "../../libs/ui/src/lib/card-review/card-review.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-review/new-review.component */ "../../libs/ui/src/lib/new-review/new-review.component.ts");
/* harmony import */ var ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-mat-search-bar */ "../../node_modules/ng-mat-search-bar/fesm5/ng-mat-search-bar.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "../../libs/ui/src/lib/material.module.ts");
/* harmony import */ var _button_comms_row_button_comms_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./button-comms-row/button-comms-row.component */ "../../libs/ui/src/lib/button-comms-row/button-comms-row.component.ts");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-svg-icon */ "../../node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-star-rating */ "../../node_modules/angular-star-rating/esm5/angular-star-rating.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "../../libs/ui/src/lib/chat-list/chat-list.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chat/chat.component */ "../../libs/ui/src/lib/chat/chat.component.ts");
/* harmony import */ var _chat_items_chat_event_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chat-items/chat-event.component */ "../../libs/ui/src/lib/chat-items/chat-event.component.ts");
/* harmony import */ var _chat_items_chat_unit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chat-items/chat-unit.component */ "../../libs/ui/src/lib/chat-items/chat-unit.component.ts");
/* harmony import */ var _form_user_form_patient_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-user/form-patient-profile.component */ "../../libs/ui/src/lib/form-user/form-patient-profile.component.ts");
/* harmony import */ var _form_user_form_doctor_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form-user/form-doctor-profile.component */ "../../libs/ui/src/lib/form-user/form-doctor-profile.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "../../libs/ui/src/lib/file-upload/file-upload.component.ts");
/* harmony import */ var _public_profile_doctor_public_profile_doctor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./public-profile-doctor/public-profile-doctor.component */ "../../libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.ts");
/* harmony import */ var _public_profile_patient_public_profile_patient_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./public-profile-patient/public-profile-patient.component */ "../../libs/ui/src/lib/public-profile-patient/public-profile-patient.component.ts");
/* harmony import */ var _form_appointment_form_appointment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form-appointment/form-appointment.component */ "../../libs/ui/src/lib/form-appointment/form-appointment.component.ts");
/* harmony import */ var _chat_items_chat_typing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./chat-items/chat-typing.component */ "../../libs/ui/src/lib/chat-items/chat-typing.component.ts");




























var components = [
    _card_doctor_card_doctor_component__WEBPACK_IMPORTED_MODULE_4__["CardDoctorComponent"],
    _card_question_card_question_component__WEBPACK_IMPORTED_MODULE_5__["CardQuestionComponent"],
    _card_answer_card_answer_component__WEBPACK_IMPORTED_MODULE_6__["CardAnswerComponent"],
    _card_appointment_card_appointment_component__WEBPACK_IMPORTED_MODULE_7__["CardAppointmentComponent"],
    _card_review_card_review_component__WEBPACK_IMPORTED_MODULE_8__["CardReviewComponent"],
    _chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"],
    _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_9__["NewReviewButtonComponent"],
    _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_9__["NewReviewSheetContentComponent"],
    _button_comms_row_button_comms_row_component__WEBPACK_IMPORTED_MODULE_13__["ButtonCommsComponent"],
    _button_comms_row_button_comms_row_component__WEBPACK_IMPORTED_MODULE_13__["ButtonCommsRowComponent"],
    _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_17__["ChatListComponent"],
    _public_profile_doctor_public_profile_doctor_component__WEBPACK_IMPORTED_MODULE_24__["PublicProfileDoctorComponent"],
    _public_profile_patient_public_profile_patient_component__WEBPACK_IMPORTED_MODULE_25__["PublicProfilePatientComponent"],
    _form_user_form_patient_profile_component__WEBPACK_IMPORTED_MODULE_21__["PatientComponent"], _form_user_form_doctor_profile_component__WEBPACK_IMPORTED_MODULE_22__["DoctorComponent"],
    _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_23__["FileUploadComponent"],
    _form_appointment_form_appointment_component__WEBPACK_IMPORTED_MODULE_26__["FormAppointmentComponent"],
    _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_17__["ChatListItemComponent"], _chat_items_chat_event_component__WEBPACK_IMPORTED_MODULE_19__["ChatEventComponent"], _chat_items_chat_unit_component__WEBPACK_IMPORTED_MODULE_20__["ChatUnitComponent"]
];
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_10__["NgMatSearchBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__["AngularSvgIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_15__["StarRatingModule"].forRoot()
            ],
            entryComponents: [_new_review_new_review_component__WEBPACK_IMPORTED_MODULE_9__["NewReviewSheetContentComponent"]],
            declarations: components.concat([_chat_items_chat_typing_component__WEBPACK_IMPORTED_MODULE_27__["ChatTypingComponent"],]),
            exports: components.concat([_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]])
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!********************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/moment/locale sync ^\.\/.*$ ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../node_modules/moment/locale/af.js",
	"./af.js": "../../node_modules/moment/locale/af.js",
	"./ar": "../../node_modules/moment/locale/ar.js",
	"./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../node_modules/moment/locale/ar.js",
	"./az": "../../node_modules/moment/locale/az.js",
	"./az.js": "../../node_modules/moment/locale/az.js",
	"./be": "../../node_modules/moment/locale/be.js",
	"./be.js": "../../node_modules/moment/locale/be.js",
	"./bg": "../../node_modules/moment/locale/bg.js",
	"./bg.js": "../../node_modules/moment/locale/bg.js",
	"./bm": "../../node_modules/moment/locale/bm.js",
	"./bm.js": "../../node_modules/moment/locale/bm.js",
	"./bn": "../../node_modules/moment/locale/bn.js",
	"./bn.js": "../../node_modules/moment/locale/bn.js",
	"./bo": "../../node_modules/moment/locale/bo.js",
	"./bo.js": "../../node_modules/moment/locale/bo.js",
	"./br": "../../node_modules/moment/locale/br.js",
	"./br.js": "../../node_modules/moment/locale/br.js",
	"./bs": "../../node_modules/moment/locale/bs.js",
	"./bs.js": "../../node_modules/moment/locale/bs.js",
	"./ca": "../../node_modules/moment/locale/ca.js",
	"./ca.js": "../../node_modules/moment/locale/ca.js",
	"./cs": "../../node_modules/moment/locale/cs.js",
	"./cs.js": "../../node_modules/moment/locale/cs.js",
	"./cv": "../../node_modules/moment/locale/cv.js",
	"./cv.js": "../../node_modules/moment/locale/cv.js",
	"./cy": "../../node_modules/moment/locale/cy.js",
	"./cy.js": "../../node_modules/moment/locale/cy.js",
	"./da": "../../node_modules/moment/locale/da.js",
	"./da.js": "../../node_modules/moment/locale/da.js",
	"./de": "../../node_modules/moment/locale/de.js",
	"./de-at": "../../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../node_modules/moment/locale/de-at.js",
	"./de-ch": "../../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
	"./de.js": "../../node_modules/moment/locale/de.js",
	"./dv": "../../node_modules/moment/locale/dv.js",
	"./dv.js": "../../node_modules/moment/locale/dv.js",
	"./el": "../../node_modules/moment/locale/el.js",
	"./el.js": "../../node_modules/moment/locale/el.js",
	"./en-SG": "../../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../../node_modules/moment/locale/en-SG.js",
	"./en-au": "../../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../node_modules/moment/locale/en-au.js",
	"./en-ca": "../../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
	"./en-il": "../../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../node_modules/moment/locale/en-il.js",
	"./en-nz": "../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
	"./eo": "../../node_modules/moment/locale/eo.js",
	"./eo.js": "../../node_modules/moment/locale/eo.js",
	"./es": "../../node_modules/moment/locale/es.js",
	"./es-do": "../../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../node_modules/moment/locale/es-do.js",
	"./es-us": "../../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../node_modules/moment/locale/es-us.js",
	"./es.js": "../../node_modules/moment/locale/es.js",
	"./et": "../../node_modules/moment/locale/et.js",
	"./et.js": "../../node_modules/moment/locale/et.js",
	"./eu": "../../node_modules/moment/locale/eu.js",
	"./eu.js": "../../node_modules/moment/locale/eu.js",
	"./fa": "../../node_modules/moment/locale/fa.js",
	"./fa.js": "../../node_modules/moment/locale/fa.js",
	"./fi": "../../node_modules/moment/locale/fi.js",
	"./fi.js": "../../node_modules/moment/locale/fi.js",
	"./fo": "../../node_modules/moment/locale/fo.js",
	"./fo.js": "../../node_modules/moment/locale/fo.js",
	"./fr": "../../node_modules/moment/locale/fr.js",
	"./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../node_modules/moment/locale/fr.js",
	"./fy": "../../node_modules/moment/locale/fy.js",
	"./fy.js": "../../node_modules/moment/locale/fy.js",
	"./ga": "../../node_modules/moment/locale/ga.js",
	"./ga.js": "../../node_modules/moment/locale/ga.js",
	"./gd": "../../node_modules/moment/locale/gd.js",
	"./gd.js": "../../node_modules/moment/locale/gd.js",
	"./gl": "../../node_modules/moment/locale/gl.js",
	"./gl.js": "../../node_modules/moment/locale/gl.js",
	"./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
	"./gu": "../../node_modules/moment/locale/gu.js",
	"./gu.js": "../../node_modules/moment/locale/gu.js",
	"./he": "../../node_modules/moment/locale/he.js",
	"./he.js": "../../node_modules/moment/locale/he.js",
	"./hi": "../../node_modules/moment/locale/hi.js",
	"./hi.js": "../../node_modules/moment/locale/hi.js",
	"./hr": "../../node_modules/moment/locale/hr.js",
	"./hr.js": "../../node_modules/moment/locale/hr.js",
	"./hu": "../../node_modules/moment/locale/hu.js",
	"./hu.js": "../../node_modules/moment/locale/hu.js",
	"./hy-am": "../../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
	"./id": "../../node_modules/moment/locale/id.js",
	"./id.js": "../../node_modules/moment/locale/id.js",
	"./is": "../../node_modules/moment/locale/is.js",
	"./is.js": "../../node_modules/moment/locale/is.js",
	"./it": "../../node_modules/moment/locale/it.js",
	"./it-ch": "../../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../node_modules/moment/locale/it-ch.js",
	"./it.js": "../../node_modules/moment/locale/it.js",
	"./ja": "../../node_modules/moment/locale/ja.js",
	"./ja.js": "../../node_modules/moment/locale/ja.js",
	"./jv": "../../node_modules/moment/locale/jv.js",
	"./jv.js": "../../node_modules/moment/locale/jv.js",
	"./ka": "../../node_modules/moment/locale/ka.js",
	"./ka.js": "../../node_modules/moment/locale/ka.js",
	"./kk": "../../node_modules/moment/locale/kk.js",
	"./kk.js": "../../node_modules/moment/locale/kk.js",
	"./km": "../../node_modules/moment/locale/km.js",
	"./km.js": "../../node_modules/moment/locale/km.js",
	"./kn": "../../node_modules/moment/locale/kn.js",
	"./kn.js": "../../node_modules/moment/locale/kn.js",
	"./ko": "../../node_modules/moment/locale/ko.js",
	"./ko.js": "../../node_modules/moment/locale/ko.js",
	"./ku": "../../node_modules/moment/locale/ku.js",
	"./ku.js": "../../node_modules/moment/locale/ku.js",
	"./ky": "../../node_modules/moment/locale/ky.js",
	"./ky.js": "../../node_modules/moment/locale/ky.js",
	"./lb": "../../node_modules/moment/locale/lb.js",
	"./lb.js": "../../node_modules/moment/locale/lb.js",
	"./lo": "../../node_modules/moment/locale/lo.js",
	"./lo.js": "../../node_modules/moment/locale/lo.js",
	"./lt": "../../node_modules/moment/locale/lt.js",
	"./lt.js": "../../node_modules/moment/locale/lt.js",
	"./lv": "../../node_modules/moment/locale/lv.js",
	"./lv.js": "../../node_modules/moment/locale/lv.js",
	"./me": "../../node_modules/moment/locale/me.js",
	"./me.js": "../../node_modules/moment/locale/me.js",
	"./mi": "../../node_modules/moment/locale/mi.js",
	"./mi.js": "../../node_modules/moment/locale/mi.js",
	"./mk": "../../node_modules/moment/locale/mk.js",
	"./mk.js": "../../node_modules/moment/locale/mk.js",
	"./ml": "../../node_modules/moment/locale/ml.js",
	"./ml.js": "../../node_modules/moment/locale/ml.js",
	"./mn": "../../node_modules/moment/locale/mn.js",
	"./mn.js": "../../node_modules/moment/locale/mn.js",
	"./mr": "../../node_modules/moment/locale/mr.js",
	"./mr.js": "../../node_modules/moment/locale/mr.js",
	"./ms": "../../node_modules/moment/locale/ms.js",
	"./ms-my": "../../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../node_modules/moment/locale/ms.js",
	"./mt": "../../node_modules/moment/locale/mt.js",
	"./mt.js": "../../node_modules/moment/locale/mt.js",
	"./my": "../../node_modules/moment/locale/my.js",
	"./my.js": "../../node_modules/moment/locale/my.js",
	"./nb": "../../node_modules/moment/locale/nb.js",
	"./nb.js": "../../node_modules/moment/locale/nb.js",
	"./ne": "../../node_modules/moment/locale/ne.js",
	"./ne.js": "../../node_modules/moment/locale/ne.js",
	"./nl": "../../node_modules/moment/locale/nl.js",
	"./nl-be": "../../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../node_modules/moment/locale/nl.js",
	"./nn": "../../node_modules/moment/locale/nn.js",
	"./nn.js": "../../node_modules/moment/locale/nn.js",
	"./pa-in": "../../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
	"./pl": "../../node_modules/moment/locale/pl.js",
	"./pl.js": "../../node_modules/moment/locale/pl.js",
	"./pt": "../../node_modules/moment/locale/pt.js",
	"./pt-br": "../../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../node_modules/moment/locale/pt.js",
	"./ro": "../../node_modules/moment/locale/ro.js",
	"./ro.js": "../../node_modules/moment/locale/ro.js",
	"./ru": "../../node_modules/moment/locale/ru.js",
	"./ru.js": "../../node_modules/moment/locale/ru.js",
	"./sd": "../../node_modules/moment/locale/sd.js",
	"./sd.js": "../../node_modules/moment/locale/sd.js",
	"./se": "../../node_modules/moment/locale/se.js",
	"./se.js": "../../node_modules/moment/locale/se.js",
	"./si": "../../node_modules/moment/locale/si.js",
	"./si.js": "../../node_modules/moment/locale/si.js",
	"./sk": "../../node_modules/moment/locale/sk.js",
	"./sk.js": "../../node_modules/moment/locale/sk.js",
	"./sl": "../../node_modules/moment/locale/sl.js",
	"./sl.js": "../../node_modules/moment/locale/sl.js",
	"./sq": "../../node_modules/moment/locale/sq.js",
	"./sq.js": "../../node_modules/moment/locale/sq.js",
	"./sr": "../../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../node_modules/moment/locale/sr.js",
	"./ss": "../../node_modules/moment/locale/ss.js",
	"./ss.js": "../../node_modules/moment/locale/ss.js",
	"./sv": "../../node_modules/moment/locale/sv.js",
	"./sv.js": "../../node_modules/moment/locale/sv.js",
	"./sw": "../../node_modules/moment/locale/sw.js",
	"./sw.js": "../../node_modules/moment/locale/sw.js",
	"./ta": "../../node_modules/moment/locale/ta.js",
	"./ta.js": "../../node_modules/moment/locale/ta.js",
	"./te": "../../node_modules/moment/locale/te.js",
	"./te.js": "../../node_modules/moment/locale/te.js",
	"./tet": "../../node_modules/moment/locale/tet.js",
	"./tet.js": "../../node_modules/moment/locale/tet.js",
	"./tg": "../../node_modules/moment/locale/tg.js",
	"./tg.js": "../../node_modules/moment/locale/tg.js",
	"./th": "../../node_modules/moment/locale/th.js",
	"./th.js": "../../node_modules/moment/locale/th.js",
	"./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../node_modules/moment/locale/tlh.js",
	"./tr": "../../node_modules/moment/locale/tr.js",
	"./tr.js": "../../node_modules/moment/locale/tr.js",
	"./tzl": "../../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../node_modules/moment/locale/tzl.js",
	"./tzm": "../../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
	"./uk": "../../node_modules/moment/locale/uk.js",
	"./uk.js": "../../node_modules/moment/locale/uk.js",
	"./ur": "../../node_modules/moment/locale/ur.js",
	"./ur.js": "../../node_modules/moment/locale/ur.js",
	"./uz": "../../node_modules/moment/locale/uz.js",
	"./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../node_modules/moment/locale/uz.js",
	"./vi": "../../node_modules/moment/locale/vi.js",
	"./vi.js": "../../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../node_modules/moment/locale/yo.js",
	"./yo.js": "../../node_modules/moment/locale/yo.js",
	"./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-answer/card-answer.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-answer/card-answer.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"answer-card\">\n  <mat-card-header>\n    <img mat-card-avatar [src]=\"asker.avatarSrc||'assets/images/user.jpg'\" alt=\"Avatar de Usuario\" />\n    <mat-card-title>{{ question.title }}</mat-card-title>\n    <mat-card-subtitle>{{ asker.name || 'Anonimo' }}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"answer\">\n      <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <div>\n          <p class=\"name\">{{ answerer.name }}</p>\n          <p class=\"date\">{{ date }}</p>\n        </div>\n        <img [src]=\"answerer.avatarSrc||'assets/images/user.jpg'\" class=\"mat-card-avatar\" />\n      </div>\n      <p>\n        {{ answer.text }}\n      </p>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-appointment/card-appointment.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-appointment/card-appointment.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-appointment\">\n  <mat-card-header fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"32px\">\n    <img mat-card-avatar [src]=\"patient.avatarSrc||'assets/images/user.jpg'\" alt=\"Avatar de Doctor\" />\n    <mat-card-title>{{ patient.name }}</mat-card-title>\n    <!-- <mat-card-subtitle>{{ patient.speciality }}</mat-card-subtitle> -->\n\n    <ui-button-comm-row [user]=\"patient\" class=\"communications-buttons\"></ui-button-comm-row>\n  </mat-card-header>\n\n  <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-around stretch\">\n    <div fxLayout=\"column\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"8px\">\n        <mat-icon>access_time</mat-icon>\n        <h3>HORA</h3>\n      </div>\n      <h4>{{ startTime }} a {{ finishTime }}</h4>\n    </div>\n    <div fxLayout=\"column\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"8px\">\n        <mat-icon>calendar_today</mat-icon>\n        <h3>FECHA</h3>\n      </div>\n      <h4>{{ day }}</h4>\n    </div>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <button mat-button (click)=\"reschedule(true)\">Reprogramar</button>\n    <button mat-button (click)=\"cancel(true)\">Cancelar</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-doctor/card-doctor.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-doctor/card-doctor.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-appointment\">\n  <mat-card-header fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"32px\">\n    <img mat-card-avatar [src]=\"doctor.avatarSrc||'assets/images/user.jpg'\" alt=\"Avatar de Doctor\" />\n    <mat-card-title>{{ doctor.name }}</mat-card-title>\n    <mat-card-subtitle>{{ doctor.speciality }}</mat-card-subtitle>\n\n    <ui-button-comm-row [user]=\"doctor\" class=\"communications-buttons \"></ui-button-comm-row>\n  </mat-card-header>\n\n  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxLayoutGap=\"16px\">\n    <div class=\"addr pt-1\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n      <mat-icon fxFlex=\"40%\">room</mat-icon>\n      <h3 fxFlexFill>{{ doctor.addr }}</h3>\n    </div>\n    <div class=\"square-row\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <div class=\"square\" fxLayout=\"column\">\n        <h4>Experiencia</h4>\n        <h4>{{ doctor.experience }}</h4>\n      </div>\n      <div class=\"square\" fxLayout=\"column\">\n        <h4>Valoración</h4>\n        <h4>{{ doctor.likes }} ({{ doctor.likePerc * 100 }}%)</h4>\n      </div>\n      <div class=\"square\" fxLayout=\"column\">\n        <h4>Reseñas</h4>\n        <h4>{{ doctor.reviews.length }}</h4>\n      </div>\n    </div>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <button mat-button (click)=\"newAppointment()\">Pedir Cita</button>\n    <ui-review-btn [doctor]=\"doctor\" (newReview)=\"review($event)\"></ui-review-btn>\n    <button mat-button (click)=\"redirectTo()\">Mas Informacion</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-question/card-question.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-question/card-question.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-question\" *ngIf=\"asker&&question\">\n  <mat-card-header>\n    <img mat-card-avatar [src]=\"asker && asker.avatarSrc||'assets/images/user.jpg'\" alt=\"Avatar de Doctor\" />\n    <mat-card-title>{{ question.title }}</mat-card-title>\n    <mat-card-subtitle>{{ asker.name || 'Anonimo' }}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <mat-form-field fxFlex=\"95%\" fxFlexFill>\n        <!-- //TODO: bind input to answer  -->\n        <textarea [(ngModel)]=\"text\" matInput placeholder=\"Responder pregunta\"></textarea>\n      </mat-form-field>\n      <button mat-icon-button (click)=\"answer()\" [disabled]=\"!text\">\n        <mat-icon> send</mat-icon>\n      </button>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/card-review/card-review.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/card-review/card-review.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-review\">\n  <mat-card-header fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"32px\">\n    <img mat-card-avatar [src]=\"doctor.avatarSrc||'assets/images/user.jpg'\" alt=\"Avatar de Doctor\" />\n    <mat-card-title>{{ doctor.name }}</mat-card-title>\n    <mat-card-subtitle>{{ doctor.speciality }}</mat-card-subtitle>\n\n    <star-rating class=\"card-header-action\" [starType]=\"'svg'\" [rating]=\"review.rating\" labelText=\"22/5/19\"\n      labelPosition=\"right\" staticColor=\"default\" [disabled]=\"true\" [showHalfStars]=\"true\" [readOnly]=\"true\">\n    </star-rating>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p>\n      {{ review.text }}\n    </p>\n    <h4>{{ date }}</h4>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat-items/chat-unit.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-items/chat-unit.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item *ngIf=\"item\" [dir]=\"isFromUser ? 'rtl' : 'ltr'\" class=\"chatUnit\" fxLayout=\"row\"\n  fxLayoutAlign=\"start center\">\n  <mat-card [ngClass]=\"isFromUser ? 'user' : 'receiver'\">\n    <p class=\"message\">\n      {{ item.message||'' }}\n    </p>\n    <h6 class=\"timestamp\">{{ modDate }}</h6>\n  </mat-card>\n  <img matListAvatar matTooltip=\"{{ author.name }}\"\n    src=\"https://randomuser.me/api/portraits/thumb/lego/{{ author.uid }}.jpg\" />\n</mat-list-item>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat-list/chat-list-item.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-list/chat-list-item.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item (click)=\"handleSelect()\" class=\"chat-row\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"32px\">\n\n  <img matListAvatar [src]=\"contact.avatarSrc||'assets/images/user.jpg'\" alt=\"Avatar de Doctor\" />\n  <h3 matLine> {{contact.name || '' }} </h3>\n  <p matLine>\n    <span> {{lastMessage.message||''}} </span>\n  </p>\n  <div class=\"extra\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"16px\">\n    <p matLine>Ayer</p>\n    <img [src]=\"userIcon\" alt=\"Tipo de usuario {{userIcon}}\" />\n  </div>\n</mat-list-item>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat-list/chat-list.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat-list/chat-list.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [ngStyle]=\"{'padding': '0px'}\">\n  <mat-list id=\"chat-list\">\n\n    <ng-container *ngIf=\"loading; else chatTemplate\">\n      <mat-list-item>\n        <mat-progress-bar mode=\"query\"></mat-progress-bar>\n      </mat-list-item>\n    </ng-container>\n    <ng-template #chatTemplate>\n\n      <ng-container *ngFor=\"let chat of chats,let i=index\">\n        <ui-chat-list-item (select)=\"selectChat(i)\" [contact]=\"chat.contact\" [lastMessage]=\"chat.lastMessage\">\n        </ui-chat-list-item>\n        <mat-divider *ngIf=\"i!==chats.length-1\"></mat-divider>\n      </ng-container>\n    </ng-template>\n\n  </mat-list>\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/chat/chat.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/chat/chat.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container id=\"chat-component\" *ngIf=\"conversation; else emptyConversation\">\n\n  <mat-list dense class=\"conversation-history mat-typography\">\n    <ng-container *ngFor=\"let item of conversation.log; index as i\">\n      <ng-container *ngIf=\"isChatUnit(item); else chatEvent\">\n        <chat-unit [item]=\"item\" [date]=\"item.date\" [user]=\"user\" [author]=\"getAuthor(item)\">\n        </chat-unit>\n      </ng-container>\n      <ng-template #chatEvent>\n        <chat-event [item]=\"item\" [date]=\"item.date\"></chat-event>\n      </ng-template>\n    </ng-container>\n    <ui-chat-typing [typing]=\"typing\"></ui-chat-typing>\n  </mat-list>\n</ng-container>\n<ng-template #emptyConversation>\n  <section class=\"empty-conversation\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <h1 class=\"mat-display-1\">\n      Conversacion Vacia\n    </h1>\n  </section>\n</ng-template>\n<mat-divider></mat-divider>\n<div class=\"conversation-input\" #conversationInput>\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"16px\" class=\"full-width\">\n    <mat-form-field fxFlex=\"100%\" fxFlexFill>\n      <input matInput placeholder=\"Mensaje...\" name=\"text\" [(ngModel)]=\"text\" />\n    </mat-form-field>\n\n    <button mat-icon-button (click)=\"_sendText()\">\n      <mat-icon>send</mat-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/file-upload/file-upload.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/file-upload/file-upload.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dropZone (hovered)=\"toggleHover($event)\" (dropped)=\"addFiles($event)\" class=\"dropzone\">\n  <div class=\"icons\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <ng-container *ngIf=\"userDefined; else chooseUser\">\n      <a class=\"main-image\" [matTooltip]=\"'Seleccione Foto'\">\n        <svg-icon [src]=\"userIsDoctor?doctorSrc:patientSrc\" [svgStyle]=\"{ 'width.px': 90 }\"> </svg-icon>\n        <button mat-mini-fab (click)=\"openInput()\">\n          <mat-icon>attach_file</mat-icon>\n        </button>\n      </a>\n\n    </ng-container>\n    <ng-template #chooseUser>\n      <a class=\"main-image\" [matTooltip]=\"doctorTooltip\">\n        <svg-icon [src]=\"doctorSrc\" [svgStyle]=\"{ 'width.px': 90 }\"> </svg-icon>\n        <button mat-mini-fab (click)=\"cta(true)\">\n          <mat-icon>{{doctorIcon}}</mat-icon>\n        </button>\n      </a>\n      <a matRipple [matRippleCentered]=\"true\" class=\"bg-image\" [matTooltip]=\"patientTooltip\">\n        <svg-icon [src]=\"patientSrc\" [svgStyle]=\"{ 'width.px': 90 }\"> </svg-icon>\n        <button mat-mini-fab (click)=\"cta(false)\">\n          <mat-icon>{{patientIcon}}</mat-icon>\n        </button>\n      </a>\n    </ng-template>\n\n  </div>\n  <input id=\"file-input\" type=\"file\" accept=\".jpg,.jpeg,.png,.gif\" (change)=\"addFiles($event.target.files)\" capture />\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/form-appointment/form-appointment.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-appointment/form-appointment.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>form-appointment works!</p>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/form-user/form-doctor-profile.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-user/form-doctor-profile.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form fxLayout=\"column\" fxLayoutAlign=\"center stretch\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n  <div class=\"form-item-names\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <mat-form-field appearance=\"outline\" fxFill fxFlex=\"100%\">\n      <input [disabled]=\"disabled\" ngModel matInput required #specialityInput=\"ngModel\" type=\"text\"\n        placeholder=\"Especializacion\" name=\"speciality\" />\n      <mat-error *ngIf=\"specialityInput.hasError('required')\">\n        Campo no deberia estar vacio.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" fxFill fxFlex=\"100%\">\n      <textarea [disabled]=\"disabled\" ngModel matInput required #addrInput=\"ngModel\" type=\"text\" placeholder=\"Direccion\"\n        name=\"addrInput\">\n    </textarea>\n      <mat-error *ngIf=\"addrInput.hasError('required')\">\n        Campo no deberia estar vacio.\n      </mat-error>\n    </mat-form-field>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\n\n\n\n      <mat-form-field appearance=\"outline\" fxFill fxFlex=\"75%\">\n        <mat-label>Resumen</mat-label>\n        <textarea [disabled]=\"disabled\" matInput placeholder=\"summary\" required minlength=\"10\" ngModel\n          #summaryInput=\"ngModel\" name=\"summary\">\n        </textarea>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" fxFill fxFlex=\"25%\">\n        <mat-label>Anos de Experiencia</mat-label>\n        <textarea [disabled]=\"disabled\" matInput ngModel required #experienceInput=\"ngModel\" type=\"number\"\n          placeholder=\"Experiencia\" name=\"experience\">\n      </textarea>\n        <mat-error *ngIf=\"experienceInput.hasError('required')\">\n          Campo no deberia estar vacio.\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n  </div>\n</form>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/form-user/form-patient-profile.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/form-user/form-patient-profile.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-file-upload ngStyle.gt-xs=\"margin:2em; \" (filesEvent)='getAvatarFile($event)' (eventIsDoctor)='setUser($event)'\n  [userDefined]=\"userDefined\">\n</app-file-upload>\n<form fxLayout=\"column\" fxLayoutAlign=\"center stretch\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n  <div class=\"form-item-names\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutGap=\"10px\"\n    fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n\n    <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n      <mat-label>Nombre</mat-label>\n\n      <input [disabled]=\"disabled\" ngModel matInput required #nombreInput=\"ngModel\" type=\"text\" placeholder=\"Nombre\"\n        name=\"nombre\" />\n      <mat-error *ngIf=\"nombreInput.hasError('required')\">\n        Campo no deberia estar vacio.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n      <mat-label>Apellido</mat-label>\n\n      <input [disabled]=\"disabled\" ngModel matInput required #apellidoInput=\"ngModel\" type=\"text\" placeholder=\"Apellido\"\n        name=\"apellido\" />\n      <mat-error *ngIf=\"apellidoInput.hasError('required')\">\n        Campo no deberia estar vacio.\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div class=\"\">\n    asodasd\n    {{ disabled?'disabled':'enabled' | json }}\n  </div>\n\n  <div class=\"form-item-details\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutGap=\"10px\"\n    fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n\n    <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n      <mat-label>Correo Electronico</mat-label>\n\n      <input [disabled]=\"disabled\" matInput ngModel email required #emailInput=\"ngModel\" type=\"email\"\n        placeholder=\"Correo Electronico\" name=\"email\" />\n      <mat-error *ngIf=\"emailInput.hasError('required')\">\n        Campo no deberia estar vacio.\n      </mat-error>\n      <mat-error *ngIf=\"!emailInput.hasError('required')\">\n        Correo invalido.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n      <mat-label>Numero de Telefono</mat-label>\n      <input [disabled]=\"disabled\" matInput placeholder=\"+58 (426) 5919 060\" [textMask]=\"{mask: numberMask}\" required\n        minlength=\"10\" ngModel type=\"phone\" #pwInput=\"ngModel\" name=\"phone\" />\n      <mat-icon matSuffix>phone</mat-icon>\n    </mat-form-field>\n  </div>\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Fecha de Nacimiento</mat-label>\n    <input [disabled]=\"disabled\" matInput [matDatepicker]=\"dp\" placeholder=\"DD/MM/AAAA\" required ngModel\n      name=\"birthdate\" />\n    <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n    <mat-datepicker #dp></mat-datepicker>\n\n  </mat-form-field>\n\n  <div class=\"form-item-details\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutGap=\"10px\"\n    fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n    <mat-form-field appearance=\"outline\" hintLabel=\"Deberia tener al menos 6 caracteres.\" fxFill fxFlex=\"50%\">\n      <mat-label>Contrasena</mat-label>\n\n      <input [disabled]=\"disabled\" matInput placeholder=\"Contrasena\" required minlength=\"6\" ngModel type=\"password\"\n        #pwInput=\"ngModel\" name=\"password\" />\n      <mat-error>Debe tener al menos 6 caracteres.</mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" hintLabel=\"Deberia tener al menos 6 caracteres.\" fxFill fxFlex=\"50%\">\n      <input [disabled]=\"disabled\" matInput placeholder=\"Contrasena\" required minlength=\"6\" ngModel type=\"password\"\n        #pwInput=\"ngModel\" name=\"password\" />\n      <mat-error>Debe tener al menos 6 caracteres.</mat-error>\n    </mat-form-field>\n  </div>\n</form>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/new-review/new-review.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/new-review/new-review.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-review-component\">\n  <div class=\"new-review-component-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n    <button mat-icon-button aria-label=\"Cerrar Ventana de Creación de Reseñas\" (click)=\"close($event)\">\n      <mat-icon>close</mat-icon>\n    </button>\n    <mat-card-header>\n      <img mat-card-avatar [src]=\"doctor.avatarSrc||'assets/images/user.jpg'\" alt=\"Avatar de Doctor\" />\n      <mat-card-title>{{ doctor.name }}</mat-card-title>\n      <mat-card-subtitle>{{ doctor.speciality }}</mat-card-subtitle>\n    </mat-card-header>\n    <button mat-icon-button [disabled]=\"!rating || !text || text.value === ''\" aria-label=\"Cargar Reseña al Sistema\"\n      (click)=\"save($event)\">\n      <mat-icon>cloud_upload</mat-icon>\n    </button>\n  </div>\n  <div fxLayout=\"column\" fxLayoutGap=\"16px\" class=\"new-review-component-content\">\n    <star-rating class=\"card-header-action\" staticColor=\"default\" [starType]=\"'svg'\" [space]=\"'around'\" [size]=\"'large'\"\n      [speed]=\"'inmediatly'\" [hoverEnabled]=\"'true'\" (ratingChange)=\"onRatingChange($event)\" [showHalfStars]=\"true\">\n    </star-rating>\n    <mat-form-field fxFlex=\"100%\" fxFlexFill hintLabel=\"Maximo 100 caracteres\">\n      <textarea matInput placeholder=\"Describe tu experiencia\" matInput #input [formControl]=\"text\"\n        maxlength=\"100\"></textarea>\n      <mat-hint align=\"end\">{{ input.value?.length || 0 }}/100</mat-hint>\n    </mat-form-field>\n  </div>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/public-profile-doctor/public-profile-doctor.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex class=\"public-profile-container\">\n  <div class=\"loading-shade\" *ngIf=\"($loading | async)\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div class=\"header\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\">\n    <img src=\"assets/images/mockDoctor.jpg\" class=\"avatar-doctor\" />\n    <h2 class=\"mat-display-2\">{{ doctor.name }}</h2>\n    <h3 class=\"mat-display-1\">{{ doctor.speciality }}</h3>\n  </div>\n  <div class=\"square-row\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <div class=\"square\" fxLayout=\"column\">\n      <h4>Experiencia</h4>\n      <h4>{{ doctor.experience }}</h4>\n    </div>\n    <div class=\"square\" fxLayout=\"column\">\n      <h4>Valoración</h4>\n      <h4>{{ doctor.likes }} ({{ doctor.likePerc * 100 }}%)</h4>\n    </div>\n    <div class=\"square\" fxLayout=\"column\">\n      <h4>Reseñas</h4>\n      <h4>{{ doctor.reviews.length }}</h4>\n    </div>\n  </div>\n  <div class=\"panels\">\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        Información Personal\n      </mat-expansion-panel-header>\n      <p>\n        {{ doctor.summary }}\n      </p>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        Dirección de Oficina\n      </mat-expansion-panel-header>\n      <p>\n        {{ doctor.addr }}\n      </p>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        Calificaciones y Reseñas\n      </mat-expansion-panel-header>\n      <div class=\"review-columns\" fxLayout=\"column\">\n        <panadoc-card-review *ngFor=\"let review of doctor.reviews\" [doctor]=\"doctor\" [review]=\"review\">\n        </panadoc-card-review>\n      </div>\n    </mat-expansion-panel>\n  </div>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ui/src/lib/public-profile-patient/public-profile-patient.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!/home/angeloacr/Proyectos/PanaDoc/PanadocNx/libs/ui/src/lib/public-profile-patient/public-profile-patient.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>public-profile-patient works!</p>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!********************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/app.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [ngClass]=\"{ 'dark-theme': isDarkTheme }\" class=\"container mat-typography\" fullscreen>\n  <mat-sidenav #sidenav role=\"navigation\" class=\"sidenav\" [mode]=\"sideNavMode\" [class.hidden]=\"shouldHide\"\n    [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\n    <mat-toolbar color=\"primary\">\n      <img src=\"assets/brand/logo-complete.png\" width=\"160px\" />\n    </mat-toolbar>\n    <panadoc-sidenav-list (closeSidenav)=\"sidenav.close()\"></panadoc-sidenav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content [class.noMarginLeft]=\"shouldHide\">\n    <mat-drawer-container fullscreen>\n      <mat-drawer mode=\"side\" #drawer class=\"drawer\" [opened]=\"matDrawerOpened\" style=\"overflow: hidden;\"\n        [class.hidden]=\"shouldHide\">\n        <mat-toolbar color=\"primary\">\n          <img src=\"assets/brand/logo.png\" width=\"32px\" />\n        </mat-toolbar>\n        <panadoc-sidenav-list [iconOnly]=\"true\" [class.hidden]=\"shouldHide\"></panadoc-sidenav-list>\n      </mat-drawer>\n      <panadoc-header (sidenavToggle)=\"sidenav.toggle()\" (drawerToggle)=\"drawer.toggle()\"\n        [matDrawerShow]=\"matDrawerShow\" class=\"header\" [class.hidden]=\"shouldHide\" [url]=\"url\"></panadoc-header>\n      <main>\n        <router-outlet layout></router-outlet>\n      </main>\n    </mat-drawer-container>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!*********************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" class=\"auth-module-container mat-typography mat-elevation-z10\">\n  <mat-card class=\"card\">\n    <mat-card-header>\n      <!-- <div mat-card-avatar class=\"header-image\"></div> -->\n      <mat-card-title>Inicio de Sesión</mat-card-title>\n    </mat-card-header>\n    <mat-card-content fxLayout=\"column\" fxLayoutGap=\"16px\" fxLayoutAlign=\"center center\">\n      <div class=\"loading-shade\" *ngIf=\"($loading | async)\">\n        <mat-spinner></mat-spinner>\n      </div>\n\n      <img src=\"assets/brand/logo.png\" alt=\"Logo de Panadoc\" class=\"logo-login\" fxFlexAlign=\"center\" />\n      <form [formGroup]=\"form\" (ngSubmit)=\"login()\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"1rem\">\n        <h3 ngStyle.xs=\"width:15rem;\" class=\"text\">\n          Lorem ipsum dolor sit amet consectetur adipiscing elit, malesuada eu\n          egestas dictum mus pulvinar, vulputate enim natoque id sociis risus.\n        </h3>\n        <mat-form-field ngStyle.xs=\"width:15rem;\" appearance=\"outline\">\n          <input matInput placeholder=\"Su nombre de usuario\" formControlName=\"username\" />\n        </mat-form-field>\n        <mat-form-field ngStyle.xs=\"width:15rem;\" appearance=\"outline\">\n          <input type=\"password\" matInput placeholder=\"Su contraseña\" formControlName=\"password\" />\n          <mat-hint>Por favor introduzca su contraseña.</mat-hint>\n          <mat-error>Contraseña invalida.</mat-error>\n        </mat-form-field>\n      </form>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"16px\">\n        <button *ngIf=\"!($loading | async)\" (click)=\"signup()\" mat-raised-button color=\"secondary\">\n          Registrarse\n        </button>\n        <button *ngIf=\"!($loading | async)\" (click)=\"login()\" mat-raised-button color=\"primary\"\n          [disabled]=\"form.invalid\">\n          Iniciar Sesión\n        </button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!***********************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"signup\" class=\"auth-module-container mat-typography mat-elevation-z10\" [class.doctor-bg]=\"isDoctor\">\n  <mat-card class=\"card\">\n    <div class=\"loading-shade\" *ngIf=\"($loading | async)\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <mat-card-header>\n      <mat-card-title>Creacion de cuenta</mat-card-title>\n      <mat-card-subtitle>{{ isDoctor ? 'Doctor' : 'Usuario' }}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n\n      <div class=\"loading-shade\" *ngIf=\"($loading | async)\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <app-file-upload ngStyle.gt-xs=\"margin:2em; \" (filesEvent)='getAvatarFile($event)'\n        (eventIsDoctor)='setUser($event)'></app-file-upload>\n      <form fxLayout=\"column\" fxLayoutAlign=\"center stretch\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"form-item-names\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutGap=\"10px\"\n          fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n\n          <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n            <input ngModel matInput required #nombreInput=\"ngModel\" type=\"text\" placeholder=\"Nombre\" name=\"name\" />\n            <mat-error *ngIf=\"nombreInput.hasError('required')\">\n              Campo no deberia estar vacio.\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n            <input ngModel matInput required #usernameInput=\"ngModel\" type=\"text\" placeholder=\"Nombre de Usuario\"\n              name=\"username\" />\n            <mat-error *ngIf=\"usernameInput.hasError('required')\">\n              Campo no deberia estar vacio.\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-item-details\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutGap=\"10px\"\n          fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n\n          <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n            <input matInput ngModel email required #emailInput=\"ngModel\" type=\"email\" placeholder=\"Correo Electronico\"\n              name=\"email\" />\n            <mat-error *ngIf=\"emailInput.hasError('required')\">\n              Campo no deberia estar vacio.\n            </mat-error>\n            <mat-error *ngIf=\"!emailInput.hasError('required')\">\n              Correo invalido.\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" fxFill fxFlex=\"50%\">\n            <mat-label>Numero de Telefono</mat-label>\n            <input matInput placeholder=\"+58 (###) ##### ###\" [textMask]=\"{mask: numberMask}\" required minlength=\"10\"\n              ngModel type=\"phone\" #pwInput=\"ngModel\" name=\"phone\" />\n            <mat-icon matSuffix>phone</mat-icon>\n          </mat-form-field>\n        </div>\n\n\n\n        <div class=\"form-item-details\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"center stretch\" fxLayoutGap=\"10px\"\n          fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n          <mat-form-field appearance=\"outline\" hintLabel=\"Deberia tener al menos 6 caracteres.\" fxFill fxFlex=\"50%\">\n            <input matInput placeholder=\"Contrasena\" required minlength=\"6\" ngModel type=\"password\" #pwInput=\"ngModel\"\n              name=\"password\" />\n            <mat-error>Debe tener al menos 6 caracteres.</mat-error>\n          </mat-form-field>\n\n          <mat-form-field appearance=\"outline\" hintLabel=\"Deberia tener al menos 6 caracteres.\" fxFill fxFlex=\"50%\">\n            <input matInput placeholder=\"Contrasena\" required minlength=\"6\" ngModel type=\"password\" #pwInput=\"ngModel\"\n              name=\"password\" />\n            <mat-error>Debe tener al menos 6 caracteres.</mat-error>\n          </mat-form-field>\n        </div>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Fecha de Nacimiento</mat-label>\n          <input matInput [matDatepicker]=\"dp\" placeholder=\"DD/MM/AAAA\" required ngModel name=\"birthdate\" />\n          <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n          <mat-datepicker #dp></mat-datepicker>\n\n        </mat-form-field>\n        <div class=\"form-item-names\" fxLayout=\"column\" *ngIf=\"isDoctor\">\n          <mat-form-field appearance=\"outline\" fxFill fxFlex=\"100%\">\n            <input ngModel matInput required #specialityInput=\"ngModel\" type=\"text\"\n              placeholder=\"Especializacion\" name=\"speciality\" />\n            <mat-error *ngIf=\"specialityInput.hasError('required')\">\n              Campo no deberia estar vacio.\n            </mat-error>\n          </mat-form-field>\n      \n          <mat-form-field appearance=\"outline\" fxFill fxFlex=\"100%\">\n            <textarea  ngModel matInput required #addrInput=\"ngModel\" type=\"text\" placeholder=\"Direccion\"\n              name=\"addrInput\">\n          </textarea>\n            <mat-error *ngIf=\"addrInput.hasError('required')\">\n              Campo no deberia estar vacio.\n            </mat-error>\n          </mat-form-field>\n      \n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\n      \n      \n      \n            <mat-form-field appearance=\"outline\" fxFill fxFlex=\"75%\">\n              <mat-label>Resumen</mat-label>\n              <textarea  matInput placeholder=\"summary\" required minlength=\"10\" ngModel\n                #summaryInput=\"ngModel\" name=\"summary\">\n              </textarea>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFill fxFlex=\"25%\">\n              <mat-label>Anos de Experiencia</mat-label>\n              <textarea  matInput ngModel required #experienceInput=\"ngModel\" type=\"number\"\n                placeholder=\"Experiencia\" name=\"experience\">\n            </textarea>\n              <mat-error *ngIf=\"experienceInput.hasError('required')\">\n                Campo no deberia estar vacio.\n              </mat-error>\n            </mat-form-field>\n          </div>\n      \n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"button-holder\" fxLayoutGap=\"16px\">\n          <button *ngIf=\"!($loading | async)\" (click)=\"login()\" mat-raised-button color=\"secondary\">\n            Iniciar Sesión\n          </button>\n          <button *ngIf=\"!($loading | async)\" type=\"submit\" mat-raised-button color=\"primary\">\n            Registrarse\n          </button>\n        </div>\n\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/communications/call/call.component.html":
/*!*****************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/communications/call/call.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n  <mat-card-header>\n    <img mat-card-avatar src=\"assets/images/mockDoctor.jpg\" />\n    <mat-card-title>Dr. Carl Carrol</mat-card-title>\n    <mat-card-subtitle>{{call.duration}}</mat-card-subtitle>\n  </mat-card-header>\n  <div [className]=\"IS_VIDEO_CALL?'call video-call':'call audio-call'\">\n    <div class='video-container' *ngIf=\"IS_VIDEO_CALL; else audioCallTemplate\">\n      <video class=\"other\" autoplay #remote></video>\n      <div class=\"user-container\">\n\n        <video class=\"me\" id=\"me\" autoplay muted #me></video>\n      </div>\n    </div>\n    <ng-template #audioCallTemplate>\n      <video class=\"other hidden\" id=\"other\" controls autoplay muted #remote></video> \n      <video class=\"me hidden\" id=\"me2\" controls autoplay #me></video>\n      <div class=\"lds-ripple\">\n        <div></div>\n        <div></div>\n      </div>\n    </ng-template>\n  </div>\n  <mat-card-actions class=\"buttons-row\" fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-icon-button (click)=\"switchMicState()\">\n      <mat-icon>{{isMutedMic?'mic_off':'mic'}}</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"switchAudioState()\">\n      <mat-icon>{{isMutedAudio?'volume_off':'volume_up'}}</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"call.hangUp()\">\n      <mat-icon>call_end</mat-icon>\n    </button>\n\n    <button mat-icon-button (click)=\"call.showRemote()\">\n      <mat-icon>alarm</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"switchVideoSrc()\" *ngIf=\"supportVideoSwitch &&IS_VIDEO_CALL\">\n      <mat-icon>switch_video</mat-icon>\n    </button>\n\n  </mat-card-actions>\n</mat-card>\n<div class=\"loading-shade\" *ngIf=\"($loading | async)\">\n  <mat-spinner></mat-spinner>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/communications/chat/chat.container.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/communications/chat/chat.container.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"chat-component\">\n  <ng-container *ngIf=\"(loading); else elseTemplate\">\n    <div class=\"loading-shade\">\n\n      <mat-spinner></mat-spinner>\n    </div>\n  </ng-container>\n  <ng-template #elseTemplate>\n\n\n    <mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"1rem\">\n      <button mat-icon-button aria-label=\"Volver\" (click)=\"goBack()\">\n        <mat-icon>arrow_back</mat-icon>\n      </button>\n      <span>{{ receiver.name||'pepe'}}</span>\n      <span fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"1rem\">\n        <button *ngIf=\"!isDoctor\" mat-icon-button aria-label=\"Agendar con el Doctor\" (click)=\"appointDate()\">\n          <mat-icon>event</mat-icon>\n        </button>\n        <ui-button-comm-row [user]=\"receiver\" (click)=\"communicate($event) \"> </ui-button-comm-row>\n        <h1>{{receiverConnected?'CONECTADO':'DESCONECTADO'}}</h1>\n      </span>\n    </mat-toolbar>\n    <!-- <pre>{{ receiver | json }}</pre> -->\n    <ui-chat [user]=\"user\" [conversation]=\"chat\" [receiver]=\"receiver\" [typing]=\"typing\" (socketEvent)=\"emit($event)\">\n    </ui-chat>\n  </ng-template>\n\n</section>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/communications/list/chat-list.container.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/communications/list/chat-list.container.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-chat-list (select)=\"select($event)\" [chats]=\"chats\"></ui-chat-list>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/error/error.component.html":
/*!***************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/components/error/error.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/my-profile/my-profile.component.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/components/my-profile/my-profile.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <div class=\"loading-shade\" *ngIf=\"($loading | async)\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div [ngSwitch]=\"userType\">\n    <div *ngSwitchCase=\"UserType.DOCTOR\">\n      <mat-horizontal-stepper [linear]=\"true\" #stepper id=\"stepper\" [selectedIndex]=\"stepperIndex\"\n        (selectionChange)=\"changed($event)\">\n        <mat-step>\n          <ng-template matStepLabel>Datos Basicos</ng-template>\n          <form-basic-profile [user]=\"user\" [disabled]=\"disabled\"></form-basic-profile>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Datos Avanzados</ng-template>\n          <form-doctor-profile [user]=\"user\" [disabled]=\"disabled\"></form-doctor-profile>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </div>\n    <div *ngSwitchCase=\"UserType.PATIENT\">\n      <form-basic-profile [user]=\"user\" [disabled]=\"disabled\"></form-basic-profile>\n    </div>\n    <div *ngSwitchDefault></div>\n  </div>\n  <!-- <mat-card-actions>\n    <ng-container *ngIf=\"userType===UserType.DOCTOR\">\n      <button mat-button (click)=\"goBack(stepper)\" type=\"button\">Anterior</button>\n      <button mat-button (click)=\"goForward(stepper)\" type=\"button\">Siguiente</button>\n    </ng-container>\n    <button mat-button [disabled]=\"disabled\">Guardar</button>\n  </mat-card-actions> -->\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/public-profile/public-profile.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/components/public-profile/public-profile.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"profile; else loading\">\n  <ui-public-profile-doctor [doctor]=\"profile\"></ui-public-profile-doctor>\n</ng-container>\n<ng-template #loading>\n  <div>Cargando</div>\n</ng-template>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/components/welcome/welcome.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>welcome works!</p>\n<div>Current Count: {{ auth$ | async | json }}</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html":
/*!*****************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/navigation/header/header.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" id=\"#header\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n  [ngStyle]=\"{width: '100%'}\" [class.hidden]=\"forceHide\">\r\n  <span [ngSwitch]=\"url\" [ngStyle]=\"{width: '100%'}\">\r\n\r\n\r\n    <ng-container *ngSwitchCase=\"'/perfil'\">\r\n\r\n      <button mat-icon-button (click)=\"goBack()\" *ngIf=\"showBackArrow\">\r\n        <mat-icon>arrow_back </mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button (click)=\" handleToggle()\" *ngIf=\"matDrawerShow && !showBackArrow\">\r\n        <mat-icon>menu </mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"onToggleSidenav()\" *ngIf=\"!matDrawerShow && !showBackArrow\">\r\n        <mat-icon>menu </mat-icon>\r\n      </button>\r\n      <div fxFlex fxLayout [ngStyle]=\"{'display': 'inline-flex'}\">\r\n        <p>{{title}}</p>\r\n      </div>\r\n      <button mat-icon-button (click)=\"switchEditingState()\">\r\n        <mat-icon>{{isFormDisabled?'edit':'remove_red_eye'}}</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"cta()\" [ngClass]=\"{'headerNext': isDoctor,'headerSave':!isDoctor}\">\r\n        <mat-icon>{{showFrontArrow?'arrow_forward':'save'}} </mat-icon>\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngSwitchDefault>\r\n      <button mat-icon-button (click)=\" handleToggle()\" *ngIf=\"matDrawerShow\">\r\n        <mat-icon>menu </mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"onToggleSidenav()\" *ngIf=\"!matDrawerShow\">\r\n        <mat-icon>menu </mat-icon>\r\n      </button>\r\n      <div fxFlex fxLayout>\r\n        <p>{{title}}</p>\r\n      </div>\r\n    </ng-container>\r\n  </span>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/navigation/sidenav/sidenav.component.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/navigation/sidenav/sidenav.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\" fxLayout=\"column\">\r\n  <ng-container *ngIf=\"($user | async)?.type; else anon\">\r\n    <mat-list *ngIf=\"($user | async) as user\">\r\n    </mat-list>\r\n    <panadoc-sidenav-item *ngFor=\"let menu of ($menus | async)\" [menu]=\"menu\" [iconOnly]=\"iconOnly\">\r\n    </panadoc-sidenav-item>\r\n  </ng-container>\r\n\r\n  <ng-template #anon>\r\n    <mat-list>\r\n      <!-- <mat-list-item>\r\n        <mat-icon matListIcon iconsmall>perm_identity</mat-icon>\r\n         <h3 *ngIf=\"!iconOnly\" matLine>Anonimo</h3>\r\n      </mat-list-item> -->\r\n    </mat-list>\r\n    <panadoc-sidenav-item *ngFor=\"let menu of anonMenu\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"></panadoc-sidenav-item>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/navigation/sidenav/sidenav.item.component.html":
/*!************************************************************************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/raw-loader!./src/app/navigation/sidenav/sidenav.item.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list [style.maxHeight]=\"menu.open ? '1200px' : '48px'\"\r\n  [ngClass]=\"{ secondaryMenu: secondaryMenu, primary: !secondaryMenu }\">\r\n  <mat-list-item *ngIf=\"menu.link\" [routerLink]=\"[menu.link]\" [matTooltip]=\"menu?.name||''\"\r\n    [matTooltipDisabled]=\"!menu.name\" matTooltipPosition=\"right\">\r\n    <mat-icon matListIcon iconsmall *ngIf=\"menu.icon\">{{ menu?.icon }}\r\n    </mat-icon>\r\n    <mat-icon matListIcon iconsmall *ngIf=\"menu.svgIcon\" [svgIcon]=\"menu.svgIcon\">\r\n    </mat-icon>\r\n    <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }}</h3>\r\n  </mat-list-item>\r\n</mat-nav-list>"

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!***********************************************************************************!*\
  !*** /home/angeloacr/Proyectos/PanaDoc/PanadocNx/node_modules/tslib/tslib.es6.js ***!
  \***********************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ask-adoc/ask-adoc.module": [
		"./src/app/ask-adoc/ask-adoc.module.ts",
		"ask-adoc-ask-adoc-module"
	],
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"./communications/communications.module": [
		"./src/app/communications/communications.module.ts"
	],
	"./mguide/mguide.module": [
		"./src/app/mguide/mguide.module.ts",
		"mguide-mguide-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/public-profile/public-profile.component */ "./src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-material-timepicker */ "../../node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");








var routes = [
    {
        path: 'login',
        redirectTo: 'auth/login'
    },
    {
        path: '',
        redirectTo: 'agenda',
        pathMatch: 'full',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'logout',
        redirectTo: 'auth/logout'
    },
    {
        path: 'signup',
        redirectTo: 'auth/signup'
    },
    {
        path: 'doctor/:doctorId',
        component: _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_6__["PublicProfileComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'mi-perfil',
        component: _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_6__["PublicProfileComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'perfil',
        component: _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'agenda',
        loadChildren: './mguide/mguide.module#MguideModule',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'preguntas',
        loadChildren: './ask-adoc/ask-adoc.module#AskADocModule', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'mensajeria',
        loadChildren: './communications/communications.module#CommunicationsModule', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '**',
        component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_7__["NgxMaterialTimepickerModule"].setLocale('es-VE')],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .header {\n  z-index: 500;\n}\n.container .noMarginLeft {\n  margin-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvYXBwcy9wYW5hZG9jL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9wYW5hZG9jL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQ0FKO0FERUU7RUFDRSwyQkFBQTtBQ0FKIiwiZmlsZSI6ImFwcHMvcGFuYWRvYy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAuaGVhZGVyIHtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cbiAgLm5vTWFyZ2luTGVmdHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIuY29udGFpbmVyIC5oZWFkZXIge1xuICB6LWluZGV4OiA1MDA7XG59XG4uY29udGFpbmVyIC5ub01hcmdpbkxlZnQge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");









var AppComponent = /** @class */ (function () {
    function AppComponent(matIconRegistry, domSanitizer, themeService, mediaObserver, store) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.themeService = themeService;
        this.mediaObserver = mediaObserver;
        this.store = store;
        this.isVisible = true; //
        this.visibility = 'shown';
        this.sideNavOpened = true; // 1
        this.matDrawerOpened = false; // 0
        this.matDrawerShow = true; // 1
        this.sideNavMode = 'side';
        this.shouldHide = false;
        this.$subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addIcons();
        this.auth$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])('auth'));
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])('router')).subscribe(function (state) {
            if (!state)
                return;
            var url = state.state.url;
            var whitelist = ['/auth/login', '/auth/signup', '/login', '/logout', '/signup'];
            _this.shouldHide = whitelist.some(function (v) { return v === url; });
            _this.url = url;
        });
        this.auth$.subscribe(function (auth) {
            var isDoctor = Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_7__["determineIfUserIsDoctor"])(auth);
            _this.isDarkTheme = isDoctor;
        });
        this.$subs = this.mediaObserver.asObservable().subscribe(function (change) {
            _this.toggleView();
        });
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    AppComponent.prototype.addIcons = function () {
        this.addSvg('facebook');
        this.addSvg('instagram');
        this.addSvg('twitter');
    };
    AppComponent.prototype.addSvg = function (nombre) {
        this.matIconRegistry.addSvgIcon(nombre, this.domSanitizer.bypassSecurityTrustResourceUrl('..assets/data-icons/' + nombre + '.svg'));
    };
    AppComponent.prototype.toggleView = function () {
        if (this.mediaObserver.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true; // 1
            this.matDrawerOpened = false; // 0
            this.matDrawerShow = true; // 1
        }
        else if (this.mediaObserver.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false; // 0
            this.matDrawerOpened = true; // 1
            this.matDrawerShow = true; // 1
        }
        else if (this.mediaObserver.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false; // 0
            this.matDrawerOpened = false; // 0
            this.matDrawerShow = false; // 0
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] },
        { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "isVisible", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _theme_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _panadoc_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @panadoc/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_sidenav_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.item.component */ "./src/app/navigation/sidenav/sidenav.item.component.ts");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "./src/app/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _communications_communications_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./communications/communications.module */ "./src/app/communications/communications.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/auth/auth.effects.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "./src/app/components/my-profile/my-profile.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/public-profile/public-profile.component */ "./src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _navigation_sidenav_sidenav_item_component__WEBPACK_IMPORTED_MODULE_9__["SidenavItemComponent"],
                _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__["SidenavListComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_22__["MyProfileComponent"],
                _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_24__["PublicProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _panadoc_ui__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _communications_communications_module__WEBPACK_IMPORTED_MODULE_14__["CommunicationsModule"],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_25__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_18__["reducers"], {
                    metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_18__["metaReducers"],
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true
                    }
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].production
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsModule"].forRoot([_auth_auth_effects__WEBPACK_IMPORTED_MODULE_20__["AuthEffects"]]),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].production })
            ],
            providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_25__["RouterStateSerializer"], useClass: _reducers__WEBPACK_IMPORTED_MODULE_18__["CustomSerializer"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.actions.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/*! exports provided: login, signup, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");


var login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Auth] Start Login', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
var signup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Auth] Start Signup', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
var logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Auth] Start Logout');


/***/ }),

/***/ "./src/app/auth/auth.effects.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.effects.ts ***!
  \**************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");



var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$) {
        this.actions$ = actions$;
    }
    AuthEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }
    ]; };
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth, store) {
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.isAuth = false;
        /*    this.store.pipe(select('auth')).subscribe(auth => {
             this.isAuth = (auth && auth.uid && [UserType.DOCTOR, UserType.PATIENT].some(v => v === auth.type))
           }); */
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.isAuth = this.auth.isAuthenticated();
        if (this.isAuth) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ "../../node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var libs_ui_src_lib_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! libs/ui/src/lib/material.module */ "../../libs/ui/src/lib/material.module.ts");
/* harmony import */ var _panadoc_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @panadoc/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout.component */ "./src/app/auth/logout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");














var routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
    { path: 'signup/:tipo', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'logout', component: _logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"] },
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _panadoc_ui__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["AngularSvgIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__["TextMaskModule"],
                libs_ui_src_lib_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");



var _authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(undefined, 
//@ts-ignore
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["login"], function (state, _a) {
    var payload = _a.payload;
    return (payload);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["signup"], function (state, _a) {
    var payload = _a.payload;
    return (payload);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"], function () { return Object(); }));
function authReducer(state, action) {
    return _authReducer(state, action);
}


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "../../node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);








var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.endpoint = '/auth';
    }
    AuthService.prototype.login = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var body = {
            username: data.username,
            password: data.password
        };
        var address = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localServer + this.endpoint + '/';
        return this.http.post(address, body, { headers: headers })
            .pipe(
        //@ts-ignore
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var user = _a.user, token = _a.token;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { token: token, uid: user._id }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
            console.log(v);
            var isDoctor = Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_6__["determineIfUserIsDoctor"])(v);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, isDoctor ? _panadoc_data__WEBPACK_IMPORTED_MODULE_6__["mockDoctor"] : _panadoc_data__WEBPACK_IMPORTED_MODULE_6__["mockPatient"], v);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false); }));
    };
    AuthService.prototype.decode = function () {
        try {
            var token = localStorage.getItem('token');
            return jwt_decode__WEBPACK_IMPORTED_MODULE_7__(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.storeData = function (storeData) {
        localStorage.setItem('token', storeData.token);
        localStorage.setItem('loggedIn', storeData.auth);
    };
    AuthService.prototype.isAuthenticated = function () {
        var loggedIn = localStorage.getItem('loggedIn');
        var isLogged = (loggedIn == 'true');
        return isLogged;
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        return token;
    };
    AuthService.prototype.signup = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].localServer + "/auth/signup", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) { return v; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false); }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth, store) {
        this.router = router;
        this.auth = auth;
        this.store = store;
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        this.$loading = this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_6__["loadingSelector"]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.$loading = this.store.select(From.ui.getIsLoading);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    };
    /*   login() {
        const username = this.form.value.username;
        const password = this.form.value.password;
        const data = ({ username, password });
        this.store.dispatch(startLoading());
        this.http.login(data)
          .subscribe(data => {
            this.store.dispatch(stopLoading());
            if (data) {
              this.store.dispatch(login({ payload: <User>data }))
              this.router.navigateByUrl('/agenda')
            } else {
              this.form.setErrors({ 'invalid': true });
              this.form.reset();
            }
          }, (e) => { debugger })
      } */
    LoginComponent.prototype.login = function () {
        var _this = this;
        var data = this.form.value;
        this.auth.login(data)
            .subscribe(function (logData) {
            if (logData.auth) {
                _this.auth.storeData(logData);
                _this.router.navigateByUrl('/agenda');
            }
            else {
                _this.form.setErrors({ 'invalid': true });
                _this.form.reset();
            }
        }, function (e) { debugger; });
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout.component.ts":
/*!******************************************!*\
  !*** ./src/app/auth/logout.component.ts ***!
  \******************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.store.dispatch(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logout"])());
        this.router.navigateByUrl('/login');
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "",
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/extra */ "./src/app/reducers/extra/index.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.actions */ "./src/app/auth/auth.actions.ts");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");











var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, route, http, store) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.store = store;
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        this.$subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.isDoctor = false;
        this.$loading = this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_5__["loadingSelector"]);
        this.numberMask = [
            '+',
            /[1-9]/,
            /\d/,
            ' ',
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/
        ];
        this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    }
    SignupComponent.prototype.setUser = function (isDoctor) {
        this.isDoctor = isDoctor;
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$subs.add(this.route.paramMap.subscribe(function (p) {
            _this.isDoctor = true;
            console.log('Cuenta de Doctor');
        }));
    };
    SignupComponent.prototype.getAvatarFile = function (files) {
        this.avatarSrc = files.pop();
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.store.dispatch(Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_7__["startLoading"])());
        var _a = form.value, name = _a.name, username = _a.username, mail = _a.email, phone = _a.phone, password = _a.password, speciality = _a.speciality, addrInput = _a.addrInput, summary = _a.summary, experience = _a.experience;
        var payload = {
            name: name,
            username: username,
            mail: mail,
            phone: phone,
            password: password,
            type: _panadoc_data__WEBPACK_IMPORTED_MODULE_9__["UserType"].PATIENT,
            avatarSrc: this.avatarSrc,
        };
        if (this.isDoctor)
            payload = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, payload, { type: _panadoc_data__WEBPACK_IMPORTED_MODULE_9__["UserType"].DOCTOR, addr: addrInput, speciality: speciality,
                summary: summary,
                experience: experience });
        this.http.signup(payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () { return _this.http.login({ username: username, password: password }); }))
            .subscribe(function (data) {
            _this.store.dispatch(Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_7__["stopLoading"])());
            if (data) {
                _this.store.dispatch(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_8__["login"])({ payload: data }));
                _this.router.navigateByUrl('/agenda');
            }
            else {
            }
        });
    };
    SignupComponent.prototype.login = function () {
        this.router.navigateByUrl('/mguide');
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.$subs.unsubscribe();
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "../../node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/communications/call/call-webrtc.service.ts":
/*!************************************************************!*\
  !*** ./src/app/communications/call/call-webrtc.service.ts ***!
  \************************************************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "../../node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");

//@ts-nocheck




var SERVERS = {
    iceServers: [
        { urls: "stun:stun.services.mozilla.com" },
        { urls: "stun:stun.l.google.com:19302" },
        { 'urls': 'turn:numb.viagenie.ca', 'credential': 'sonvoito', 'username': 'p4rkogno@gmail.com' }
    ],
};
var DEFAULT_CONSTRAINTS = {
    optional: []
};
var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
var calcUID = function () { return "" + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4(); };
var CallService = /** @class */ (function () {
    function CallService(afDb) {
        this.afDb = afDb;
    }
    CallService.prototype.setupWebRtc = function (onTrackHandler, chatId) {
        var _this = this;
        this.senderId = calcUID();
        this.chatId = chatId;
        var channelName = "/webrtc";
        this.channel = this.afDb.list(channelName);
        this.database = this.afDb.database.ref(channelName);
        this.database.on("child_added", this.readMessage.bind(this));
        this.pc = new RTCPeerConnection(SERVERS, DEFAULT_CONSTRAINTS);
        this.pc.onicecandidate = function (event) {
            return event.candidate
                ? _this.sendMessage(_this.senderId, JSON.stringify({ ice: event.candidate, chatId: chatId }))
                : console.log("Sent All Ice");
        };
        this.pc.ontrack = onTrackHandler; // use ontrack
    };
    CallService.prototype.sendMessage = function (senderId, data) {
        var msg = this.channel.push({
            sender: senderId,
            message: data
        });
        msg.remove();
    };
    CallService.prototype.readMessage = function (data) {
        var _this = this;
        if (!data)
            return;
        var msg = JSON.parse(data.val().message);
        var isSameMsg = msg.chatId === this.chatId;
        var sender = data.val().sender;
        if (sender != this.senderId && isSameMsg) {
            if (msg.ice != undefined && isSameMsg)
                this.pc.addIceCandidate(new RTCIceCandidate(msg.ice));
            else if (msg.sdp && msg.sdp.type == "offer")
                this.pc
                    .setRemoteDescription(new RTCSessionDescription(msg.sdp))
                    .then(function () { return _this.pc.createAnswer(); })
                    .then(function (answer) { return _this.pc.setLocalDescription(answer); })
                    .then(function () {
                    return _this.sendMessage(_this.senderId, JSON.stringify({ sdp: _this.pc.localDescription, chatId: _this.chatId }));
                });
            else if (msg.sdp.type == "answer")
                this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
    };
    CallService.prototype.showRemote = function () {
        var _this = this;
        this.pc
            .createOffer()
            .then(function (offer) { return _this.pc.setLocalDescription(offer); })
            .then(function () {
            return _this.sendMessage(_this.senderId, JSON.stringify({ sdp: _this.pc.localDescription, chatId: _this.chatId }));
        });
    };
    CallService.prototype.hangUp = function () { };
    CallService.prototype.getUserMedia = function (audio, video) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            navigator.mediaDevices
                .getUserMedia({ audio: audio, video: video })
                .then(function (stream) {
                observer.next(stream);
            })
                .catch(function (error) {
                observer.error(error);
            });
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (stream) {
            console.log(stream);
            _this.pc.addStream(stream);
        }));
    };
    CallService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    CallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CallService);
    return CallService;
}());



/***/ }),

/***/ "./src/app/communications/call/call.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/communications/call/call.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid grey;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple div:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n\nmat-card {\n  height: 85vh;\n}\n\nmat-card .audio-call {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nmat-card .audio-call .avatar {\n  border-radius: 50%;\n  max-width: 15vw;\n}\n\nmat-card .video-container {\n  position: relative;\n}\n\n@media screen and (min-width: 1280px) {\n  mat-card .video-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  mat-card .call {\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  mat-card .call video {\n    width: 100%;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 1280px) and (min-width: 599px) and (max-width: 1280px) {\n  mat-card .call .user-container {\n    position: absolute;\n    width: 12rem;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  mat-card .call .user-container {\n    right: 10px;\n    bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvYXBwcy9wYW5hZG9jL3NyYy9hcHAvY29tbXVuaWNhdGlvbnMvY2FsbC9jYWxsLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9wYW5hZG9jL3NyYy9hcHAvY29tbXVuaWNhdGlvbnMvY2FsbC9jYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtBQ0FGOztBREVBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxTQXBCTztJQXFCUCxVQXJCTztJQXNCUCxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNFRjtFREFBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxXQTVCTztJQTZCUCxZQTdCTztJQThCUCxVQUFBO0VDRUY7QUFDRjs7QURoQkE7RUFDRTtJQUNFLFNBcEJPO0lBcUJQLFVBckJPO0lBc0JQLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0VGO0VEQUE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFdBNUJPO0lBNkJQLFlBN0JPO0lBOEJQLFVBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0UsWUFBQTtBQ0VGOztBRERFO0VBS0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7QUNESjs7QURKSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ01OOztBREFFO0VBQ0Usa0JBQUE7QUNFSjs7QURESTtFQUZGO0lBR0ksb0JBQUE7SUFBQSxvQkFBQTtJQUFBLGFBQUE7RUNJSjtBQUNGOztBREZFO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUNJSjtFREhJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNLTjtBQUNGOztBREpNO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUNNUjtBQUNGOztBRG5CRTtFQWdCSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDTU47QUFDRiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9jb21tdW5pY2F0aW9ucy9jYWxsL2NhbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWluLXNpemU6IDI4cHg7XG4kbWF4LXNpemU6IDU4cHg7XG4ubGRzLXJpcHBsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogJG1heC1zaXplICsgNjtcbiAgaGVpZ2h0OiAkbWF4LXNpemUgKyA2O1xufVxuLmxkcy1yaXBwbGUgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDRweCBzb2xpZCBncmV5O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xufVxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xuICAwJSB7XG4gICAgdG9wOiAkbWluLXNpemU7XG4gICAgbGVmdDogJG1pbi1zaXplO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogLTFweDtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHdpZHRoOiAkbWF4LXNpemU7XG4gICAgaGVpZ2h0OiAkbWF4LXNpemU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxubWF0LWNhcmQge1xuICBoZWlnaHQ6IDg1dmg7XG4gIC5hdWRpby1jYWxsIHtcbiAgICAuYXZhdGFyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1heC13aWR0aDogMTV2dztcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgfVxuICAudmlkZW8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAuY2FsbCB7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgICAudXNlci1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnVzZXItY29udGFpbmVyIHtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5sZHMtcmlwcGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5sZHMtcmlwcGxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JleTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcbn1cblxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XG4gIDAlIHtcbiAgICB0b3A6IDI4cHg7XG4gICAgbGVmdDogMjhweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogLTFweDtcbiAgICB3aWR0aDogNThweDtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxubWF0LWNhcmQge1xuICBoZWlnaHQ6IDg1dmg7XG59XG5tYXQtY2FyZCAuYXVkaW8tY2FsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxubWF0LWNhcmQgLmF1ZGlvLWNhbGwgLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWF4LXdpZHRoOiAxNXZ3O1xufVxubWF0LWNhcmQgLnZpZGVvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICBtYXQtY2FyZCAudmlkZW8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgbWF0LWNhcmQgLmNhbGwge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIG1hdC1jYXJkIC5jYWxsIHZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkgYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIG1hdC1jYXJkIC5jYWxsIC51c2VyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIG1hdC1jYXJkIC5jYWxsIC51c2VyLWNvbnRhaW5lciB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/communications/call/call.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/communications/call/call.component.ts ***!
  \*******************************************************/
/*! exports provided: CallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _call_webrtc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-webrtc.service */ "./src/app/communications/call/call-webrtc.service.ts");





var CallComponent = /** @class */ (function () {
    function CallComponent(call, route) {
        var _this = this;
        this.call = call;
        this.$stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        this.IS_VIDEO_CALL = true;
        this.isMutedAudio = false;
        this.isMutedMic = false;
        this.callActive = false;
        this.hasVideo = true;
        this.supportVideoSwitch = true;
        var constraints = navigator.mediaDevices.getSupportedConstraints();
        if (constraints['facingMode'] === true) {
            this.supportVideoSwitch = false;
        }
        else {
            this.supportVideoSwitch = true;
        }
        route.paramMap.subscribe(function (v) {
            if (v.has('videoId')) {
                _this.chatId = v.get('videoId');
                _this.IS_VIDEO_CALL = true;
            }
            if (v.has('audioId')) {
                _this.chatId = v.get('audioId');
                _this.IS_VIDEO_CALL = false;
            }
        });
    }
    CallComponent.prototype.ngOnInit = function () {
        var _this = this;
        var onTrackHandler = function (event) { _this.remote.nativeElement.srcObject = event.streams[0]; };
        this.call.setupWebRtc(onTrackHandler, this.chatId);
        this.$stream = this.call.getUserMedia(!this.isMutedMic, this.hasVideo)
            .subscribe(function (stream) {
            (_this.me.nativeElement.srcObject = stream);
        });
    };
    CallComponent.prototype.showMe = function () {
    };
    CallComponent.prototype.hangUp = function () { };
    CallComponent.prototype.switchVideoSrc = function () {
    };
    CallComponent.prototype.switchMicState = function () { };
    CallComponent.prototype.switchAudioState = function () { };
    CallComponent.prototype.ngOnDestroy = function () {
        this.$stream.unsubscribe();
    };
    CallComponent.ctorParameters = function () { return [
        { type: _call_webrtc_service__WEBPACK_IMPORTED_MODULE_4__["CallService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("me", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CallComponent.prototype, "me", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("remote", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CallComponent.prototype, "remote", void 0);
    CallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./call.component.html */ "../../node_modules/raw-loader/index.js!./src/app/communications/call/call.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./call.component.scss */ "./src/app/communications/call/call.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_call_webrtc_service__WEBPACK_IMPORTED_MODULE_4__["CallService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CallComponent);
    return CallComponent;
}());



/***/ }),

/***/ "./src/app/communications/chat/chat-socket.service.ts":
/*!************************************************************!*\
  !*** ./src/app/communications/chat/chat-socket.service.ts ***!
  \************************************************************/
/*! exports provided: ChatSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSocketService", function() { return ChatSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "../../node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






var ChatSocketService = /** @class */ (function () {
    function ChatSocketService(socket) {
        this.socket = socket;
    }
    ChatSocketService.prototype.emit = function (pkg, cb) {
        if (cb === void 0) { cb = function (v) { debugger; }; }
        switch (pkg.type) {
            // NOTE: If socketio callback needed implement here.  
            default:
                this.socket.emit(pkg.type, pkg.payload, cb);
                break;
        }
    };
    ChatSocketService.prototype.connect = function () {
        this.socket.connect();
    };
    ChatSocketService.prototype.listen = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.socket.fromEvent(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["SocketEventType"].CHAT_TYPING), this.socket.fromEvent(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["SocketEventType"].CHAT_NO_TYPING), this.socket.fromEvent(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["SocketEventType"].CHAT_USER_JOINED), this.socket.fromEvent(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["SocketEventType"].CHAT_USER_LEFT), this.socket.fromEvent(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["SocketEventType"].CHAT_NEW_MESSAGE), this.socket.fromEvent(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["SocketEventType"].CHAT_LOGIN), this.socket.fromEvent(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["SocketEventType"].N_USERS)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (v) { debugger; }));
    };
    ChatSocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    ChatSocketService.ctorParameters = function () { return [
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
    ]; };
    ChatSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], ChatSocketService);
    return ChatSocketService;
}());



/***/ }),

/***/ "./src/app/communications/chat/chat.container.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/communications/chat/chat.container.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-conversation {\n  height: 100%;\n}\n.empty-conversation h1 {\n  margin: 0;\n}\n#chat-component .conversation-header h2,\n#chat-component .conversation-header p {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n#chat-component mat-toolbar {\n  position: fixed;\n  z-index: 10;\n  padding-right: 5rem;\n  width: -webkit-fill-available;\n}\n#chat-component .conversation-history.mat-list {\n  height: calc(100% - 180px);\n  overflow-x: hidden;\n  position: absolute;\n  width: 100%;\n}\n#chat-component .conversation-history.mat-list p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvYXBwcy9wYW5hZG9jL3NyYy9hcHAvY29tbXVuaWNhdGlvbnMvY2hhdC9jaGF0LmNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsImFwcHMvcGFuYWRvYy9zcmMvYXBwL2NvbW11bmljYXRpb25zL2NoYXQvY2hhdC5jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURDRTtFQUNFLFNBQUE7QUNDSjtBREtJOztFQUVFLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0FDRk47QURLRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0hKO0FES0U7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSEo7QURLSTtFQUNFLFNBQUE7QUNITiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9jb21tdW5pY2F0aW9ucy9jaGF0L2NoYXQuY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcHR5LWNvbnZlcnNhdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcblxuICBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbiNjaGF0LWNvbXBvbmVudCB7XG4gIC5jb252ZXJzYXRpb24taGVhZGVyIHtcbiAgICBoMixcbiAgICBwIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuICBtYXQtdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIH1cbiAgLmNvbnZlcnNhdGlvbi1oaXN0b3J5Lm1hdC1saXN0IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE4MHB4KTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4iLCIuZW1wdHktY29udmVyc2F0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmVtcHR5LWNvbnZlcnNhdGlvbiBoMSB7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NoYXQtY29tcG9uZW50IC5jb252ZXJzYXRpb24taGVhZGVyIGgyLFxuI2NoYXQtY29tcG9uZW50IC5jb252ZXJzYXRpb24taGVhZGVyIHAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2NoYXQtY29tcG9uZW50IG1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG4jY2hhdC1jb21wb25lbnQgLmNvbnZlcnNhdGlvbi1oaXN0b3J5Lm1hdC1saXN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxODBweCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbiNjaGF0LWNvbXBvbmVudCAuY29udmVyc2F0aW9uLWhpc3RvcnkubWF0LWxpc3QgcCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/communications/chat/chat.container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/communications/chat/chat.container.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _chat_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-socket.service */ "./src/app/communications/chat/chat-socket.service.ts");
/* harmony import */ var _communications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../communications.service */ "./src/app/communications/communications.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");








var ChatComponent = /** @class */ (function () {
    function ChatComponent(store, route, http, router, socket) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.http = http;
        this.router = router;
        this.socket = socket;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.typing = false;
        this.receiverConnected = false;
        this.loading = true;
        this.subs.add(this.route.paramMap.subscribe(function (params) {
            if (params.has('chatId')) {
                _this.chatId = params.get('chatId');
            }
            else {
                _this.goBack();
            }
        }));
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.connect();
        this.subs.add(this.socket.listen().subscribe(function (v) { return _this.listen(v); }));
        this.subs.add(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])('auth')).subscribe(function (user) {
            _this.isDoctor = Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["determineIfUserIsDoctor"])(user);
            _this.user = user;
            _this.emit(new _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketPackage"](_panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_ADD_USER, {
                user: user,
                chatUid: (_this.chat && _this.chat.uid) || undefined,
            }));
        }));
    };
    ChatComponent.prototype.communicate = function (v) {
        switch (v) {
            case 'CALL':
                this.router.navigateByUrl('/audio/' + this.chatId);
                break;
            case 'VIDEO':
                this.router.navigateByUrl('/video/' + this.chatId);
                break;
            default:
                break;
        }
    };
    ChatComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/mensajeria');
    };
    ChatComponent.prototype.appointDate = function () {
        this.router.navigateByUrl('/agenda/nueva-cita/' + (this.receiver).uid);
    };
    ChatComponent.prototype.updateLog = function (pkg) {
        var _this = this;
        if ([
            pkg.payload.receiverId,
            pkg.paylod.senderId
        ]
            .some(function (id) { return id === _this.user.uid; }))
            this.chat.log.push(pkg.payload);
    };
    ChatComponent.prototype.emit = function (pkg) {
        switch (pkg.type) {
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_NEW_MESSAGE:
                this.updateLog(pkg);
                break;
            default:
                break;
        }
        this.socket.emit(pkg);
    };
    ChatComponent.prototype.listen = function (pkg) {
        var _this = this;
        switch (pkg.type) {
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_LOGIN:
                this.chat = pkg.payload;
                this.receiver = pkg.payload.members.find(function (_a) {
                    var uid = _a.uid;
                    return uid !== _this.user.uid;
                });
                this.loading = false;
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].N_USERS:
                this.receiverConnected = (pkg.payload >= 2);
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_USER_JOINED:
                this.receiverConnected = true;
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_USER_LEFT:
                this.receiverConnected = false;
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_NEW_MESSAGE:
                this.updateLog(pkg);
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_NO_TYPING:
                this.typing = false;
                break;
            case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].CHAT_TYPING:
                this.typing = true;
                break;
            default:
                break;
        }
        console.log(pkg);
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.socket.disconnect();
        this.subs.unsubscribe();
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _communications_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _chat_socket_service__WEBPACK_IMPORTED_MODULE_5__["ChatSocketService"] }
    ]; };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.container.component.html */ "../../node_modules/raw-loader/index.js!./src/app/communications/chat/chat.container.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.container.component.scss */ "./src/app/communications/chat/chat.container.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _communications_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _chat_socket_service__WEBPACK_IMPORTED_MODULE_5__["ChatSocketService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/communications/communications-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/communications/communications-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CommunicationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationsRoutingModule", function() { return CommunicationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.container.component */ "./src/app/communications/chat/chat.container.component.ts");
/* harmony import */ var _list_chat_list_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/chat-list.container.component */ "./src/app/communications/list/chat-list.container.component.ts");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call/call.component */ "./src/app/communications/call/call.component.ts");






var routes = [
    {
        path: '',
        component: _list_chat_list_container_component__WEBPACK_IMPORTED_MODULE_4__["ChatListComponent"]
    },
    {
        path: 'chat/:chatId',
        component: _chat_chat_container_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
    },
    {
        path: 'video/:videoId',
        component: _call_call_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"]
    },
    {
        path: 'audio/:audioId',
        component: _call_call_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"]
    },
];
var CommunicationsRoutingModule = /** @class */ (function () {
    function CommunicationsRoutingModule() {
    }
    CommunicationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CommunicationsRoutingModule);
    return CommunicationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/communications/communications.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/communications/communications.module.ts ***!
  \*********************************************************/
/*! exports provided: CommunicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationsModule", function() { return CommunicationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _communications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communications-routing.module */ "./src/app/communications/communications-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var libs_ui_src_lib_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! libs/ui/src/lib/material.module */ "../../libs/ui/src/lib/material.module.ts");
/* harmony import */ var _panadoc_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @panadoc/ui */ "../../libs/ui/src/index.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "../../node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _chat_chat_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.container.component */ "./src/app/communications/chat/chat.container.component.ts");
/* harmony import */ var _list_chat_list_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/chat-list.container.component */ "./src/app/communications/list/chat-list.container.component.ts");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./call/call.component */ "./src/app/communications/call/call.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "../../node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/database */ "../../node_modules/@angular/fire/database/index.js");















var config = { url: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].socketioServer, options: {} };
var CommunicationsModule = /** @class */ (function () {
    function CommunicationsModule() {
    }
    CommunicationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat_chat_container_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"], _list_chat_list_container_component__WEBPACK_IMPORTED_MODULE_10__["ChatListComponent"], _call_call_component__WEBPACK_IMPORTED_MODULE_11__["CallComponent"]],
            imports: [
                _panadoc_ui__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                libs_ui_src_lib_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _communications_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommunicationsRoutingModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot(config),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig)
            ]
        })
    ], CommunicationsModule);
    return CommunicationsModule;
}());



/***/ }),

/***/ "./src/app/communications/communications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/communications/communications.service.ts ***!
  \**********************************************************/
/*! exports provided: CommunicationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationsService", function() { return CommunicationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_service_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service-base.service */ "./src/app/http-service-base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].httpServer + '/communications';
var CommunicationsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommunicationsService, _super);
    function CommunicationsService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CommunicationsService.prototype.fetchChatList = function (myId) {
        var _this = this;
        this.myId = myId;
        //@ts-ignore
        return this.http.get(baseUrl + "/chatsERRROR/" + myId, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            console.error(e);
            var me = _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockPatient"].uid === _this.myId ? _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockPatient"] : _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"];
            var other = _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockPatient"].uid === _this.myId ? _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"] : _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockPatient"];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockChatPreview"])(me, other));
        }));
    };
    CommunicationsService.prototype.getUser = function (id) {
        if (_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"].uid === id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"]);
        }
        if (_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockPatient"].uid === id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockPatient"]);
        }
    };
    CommunicationsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    CommunicationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], CommunicationsService);
    return CommunicationsService;
}(_http_service_base_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]));



/***/ }),

/***/ "./src/app/communications/list/chat-list.container.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/communications/list/chat-list.container.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9jb21tdW5pY2F0aW9ucy9saXN0L2NoYXQtbGlzdC5jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/communications/list/chat-list.container.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/communications/list/chat-list.container.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _communications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../communications.service */ "./src/app/communications/communications.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");







var ChatListComponent = /** @class */ (function () {
    function ChatListComponent(http, router, store) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.store = store;
        this.chats = [];
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(false);
        this.$loading = this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_5__["loadingSelector"]);
        this.store.select('auth').subscribe(function (user) {
            return _this.user = user;
        });
    }
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.fetchChatList(this.user.uid)
            .subscribe(function (v) {
            _this.chats = v;
        });
    };
    ChatListComponent.prototype.select = function (chatId) {
        this.router.navigateByUrl('/mensajeria/chat/' + chatId);
    };
    ChatListComponent.ctorParameters = function () { return [
        { type: _communications_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-list.container.component.html */ "../../node_modules/raw-loader/index.js!./src/app/communications/list/chat-list.container.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-list.container.component.scss */ "./src/app/communications/list/chat-list.container.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communications_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-error',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/error/error.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/components/error/error.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9jb21wb25lbnRzL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/my-profile/my-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _reducers_extra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/extra */ "./src/app/reducers/extra/index.ts");









var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(store, _formBuilder) {
        var _this = this;
        this.store = store;
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.UserType = _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["UserType"];
        this.disabled = false;
        this.formState = _reducers_extra__WEBPACK_IMPORTED_MODULE_8__["FORM_STATE"].INIT;
        this.stepperIndex = 0;
        this.$loading = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        this.$loading = this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_6__["loadingSelector"]);
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])('auth')).subscribe(function (user) {
            _this.user = user;
            _this.userType = user.type;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])('extra')).subscribe(function (_a) {
            var formState = _a.formState, isFormDisabled = _a.isFormDisabled;
            _this.formState = formState;
            _this.disabled = isFormDisabled;
            switch (formState) {
                case _reducers_extra__WEBPACK_IMPORTED_MODULE_8__["FORM_STATE"].START_SAVE:
                    _this.store.dispatch(_reducers_extra__WEBPACK_IMPORTED_MODULE_8__["saveForm"]({ formData: 'modifiedData' }));
                    return;
                case _reducers_extra__WEBPACK_IMPORTED_MODULE_8__["FORM_STATE"].INIT:
                    _this.stepperIndex = 0;
                    return;
                case _reducers_extra__WEBPACK_IMPORTED_MODULE_8__["FORM_STATE"].SECOND_PAGE:
                    _this.stepperIndex = 1;
                    return;
                case _reducers_extra__WEBPACK_IMPORTED_MODULE_8__["FORM_STATE"].SAVED:
                    _this.stepperIndex = 0;
                    return;
            }
        });
    }
    MyProfileComponent.prototype.changed = function (_a) {
        var selectedIndex = _a.selectedIndex;
        if (selectedIndex === 1) {
            this.store.dispatch(_reducers_extra__WEBPACK_IMPORTED_MODULE_8__["nextForm"]());
        }
        if (selectedIndex === 0) {
            this.store.dispatch(_reducers_extra__WEBPACK_IMPORTED_MODULE_8__["initForm"]());
        }
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    MyProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepper"])
    ], MyProfileComponent.prototype, "myStepper", void 0);
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-my-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-profile.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/my-profile/my-profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/components/my-profile/my-profile.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/public-profile/public-profile.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9jb21wb25lbnRzL3B1YmxpYy1wcm9maWxlL3B1YmxpYy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/public-profile/public-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: PublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function() { return PublicProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mguide_mguide_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mguide/mguide.service */ "./src/app/mguide/mguide.service.ts");






var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(store, route, router, http) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.router = router;
        this.http = http;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('auth')).subscribe(function (auth) {
            _this.user = auth;
            _this.http.token = auth.token;
        });
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            if (params.has('doctorId')) {
                //TODO: DOCTOR PROFILE SHOW;
                var doctorId = params.get('doctorId');
                _this.http.getDoctor(doctorId).subscribe(function (v) {
                    _this.profile = v;
                });
            }
            else if (Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["determineIfUserIsDoctor"])(_this.user)) {
                _this.profile = (_this.user);
            }
            else {
                _this.router.navigateByUrl('/');
            }
        });
    };
    PublicProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _mguide_mguide_service__WEBPACK_IMPORTED_MODULE_5__["MguideService"] }
    ]; };
    PublicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-public-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./public-profile.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/public-profile/public-profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./public-profile.component.scss */ "./src/app/components/public-profile/public-profile.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _mguide_mguide_service__WEBPACK_IMPORTED_MODULE_5__["MguideService"]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(store) {
        this.store = store;
        this.auth$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('auth'));
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-welcome',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/components/welcome/welcome.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/http-service-base.service.ts":
/*!**********************************************!*\
  !*** ./src/app/http-service-base.service.ts ***!
  \**********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");


var HttpService = /** @class */ (function () {
    function HttpService() {
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
    }
    Object.defineProperty(HttpService.prototype, "token", {
        set: function (token) {
            this._headers = this._headers.append('Authorization', "Bearer " + token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpService.prototype, "headers", {
        get: function () {
            return { headers: this._headers };
        },
        enumerable: true,
        configurable: true
    });
    return HttpService;
}());

;


/***/ }),

/***/ "./src/app/mguide/mguide.service.ts":
/*!******************************************!*\
  !*** ./src/app/mguide/mguide.service.ts ***!
  \******************************************/
/*! exports provided: MguideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MguideService", function() { return MguideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_service_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../http-service-base.service */ "./src/app/http-service-base.service.ts");








var baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].httpServer + '/mguide';
var MguideService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MguideService, _super);
    function MguideService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    MguideService.prototype.getSymptoms = function () {
        console.log('get symptoms');
        return this.http.get(baseUrl + '/symptoms', this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            console.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(['Fiebre']);
        }));
    };
    MguideService.prototype.postSymptoms = function (newSymptoms) {
        console.log('post doctors', newSymptoms);
        return this.http.post(baseUrl + '/symptoms', newSymptoms, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (v) { return !!v; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            console.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }));
    };
    MguideService.prototype.getDoctors = function (params) {
        if (params === void 0) { params = undefined; }
        console.log('get doctors', params);
        if (params) {
            //TODO: Specify Type of Doctor;
        }
        return this.http.get(baseUrl + '/doctors', this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            console.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"], _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"], _panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"]]);
        }));
        ;
    };
    MguideService.prototype.getDoctor = function (doctorId) {
        console.log('get doctor', doctorId);
        return this.http.get(baseUrl + '/doctor/' + doctorId, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            console.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_panadoc_data__WEBPACK_IMPORTED_MODULE_3__["mockDoctor"]);
        }));
    };
    MguideService.prototype.deleteAppointment = function (appointmentId) {
        console.log('delete appointment', appointmentId);
        return this.http.delete(baseUrl + '/appointment/' + appointmentId, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (v) { return !!v; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
            console.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }));
    };
    MguideService.prototype.getAppointment = function () { };
    MguideService.prototype.postAppointment = function (appointment) {
        console.log('post appointment', appointment);
        return this.http.post(baseUrl + '/appointment/', appointment, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (v) { return !!v; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (v) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true); }));
    };
    MguideService.prototype.putAppointment = function (appointment) {
        console.log('put appointment', appointment);
        var appointmentId = appointment.uid;
        return this.http.put(baseUrl + '/appointment/' + appointmentId, appointment, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (v) { return !!v; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (v) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true); }));
    };
    MguideService.prototype.postReview = function (review) {
        console.log('review', review);
        return this.http.post(baseUrl + '/review/', review, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (v) { return !!v; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (v) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true); }));
    };
    MguideService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    MguideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MguideService);
    return MguideService;
}(_http_service_base_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]));



/***/ }),

/***/ "./src/app/navigation/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header a {\n  text-decoration: none;\n  color: white;\n}\n#header a:hover,\n#header a:active {\n  color: lightgray;\n}\n#header .navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#header .nav-caption {\n  display: inline-block;\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvYXBwcy9wYW5hZG9jL3NyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9wYW5hZG9jL3NyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFRTs7RUFFRSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDREo7QURJRTtFQUNFLHFCQUFBO0VBQ0osaUJBQUE7QUNGQSIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgYTpob3ZlcixcclxuICBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIH1cclxuXHJcbiAgLm5hdmlnYXRpb24taXRlbXMge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubmF2LWNhcHRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG59XHJcblxyXG4iLCIjaGVhZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNoZWFkZXIgYTpob3ZlcixcbiNoZWFkZXIgYTphY3RpdmUge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuI2hlYWRlciAubmF2aWdhdGlvbi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiNoZWFkZXIgLm5hdi1jYXB0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_extra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/extra */ "./src/app/reducers/extra/index.ts");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");






// import { Extra}
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(themeService, store) {
        var _this = this;
        this.themeService = themeService;
        this.store = store;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drawerToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.url = "";
        this.title = "Panadoc";
        this.formState = _reducers_extra__WEBPACK_IMPORTED_MODULE_4__["FORM_STATE"].INIT;
        this.isFormDisabled = true;
        this.forceHide = false;
        this.showBackArrow = false;
        this.showFrontArrow = false;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('extra')).subscribe(function (v) {
            _this.formState = v.formState;
            _this.showBackArrow = v.formState === _reducers_extra__WEBPACK_IMPORTED_MODULE_4__["FORM_STATE"].SECOND_PAGE;
            if (_this.auth) {
                _this.showFrontArrow = !(_this.formState === _reducers_extra__WEBPACK_IMPORTED_MODULE_4__["FORM_STATE"].SECOND_PAGE && _this.isDoctor);
            }
        });
        // this.store.pipe(select('router')).pipe(map(v => v && v.state && (<string>v.state.url).replace('/', ''))).subscribe(url=>);
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('auth')).subscribe(function (v) {
            _this.auth = v;
            _this.isDoctor = Object(_panadoc_data__WEBPACK_IMPORTED_MODULE_5__["determineIfUserIsDoctor"])(v);
            _this.showFrontArrow = _this.formState === _reducers_extra__WEBPACK_IMPORTED_MODULE_4__["FORM_STATE"].INIT && _this.isDoctor;
        });
    }
    HeaderComponent.prototype.toggleDarkTheme = function (checked) {
        this.themeService.setDarkTheme(checked);
    };
    HeaderComponent.prototype.goBack = function () {
        this.store.dispatch(Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_4__["initForm"])());
    };
    HeaderComponent.prototype.cta = function () {
        switch (this.formState) {
            case _reducers_extra__WEBPACK_IMPORTED_MODULE_4__["FORM_STATE"].INIT:
                if (this.isDoctor) {
                    this.store.dispatch(Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_4__["nextForm"])());
                }
                else {
                    this.store.dispatch(Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_4__["startSaveForm"])());
                }
                return;
            case _reducers_extra__WEBPACK_IMPORTED_MODULE_4__["FORM_STATE"].SECOND_PAGE:
                this.store.dispatch(Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_4__["nextForm"])());
                return;
        }
    };
    HeaderComponent.prototype.switchEditingState = function () {
        this.isFormDisabled = !this.isFormDisabled;
        this.store.dispatch(this.isFormDisabled ? Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_4__["setProfileEditable"])() : Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_4__["setProfileEditable"])());
    };
    HeaderComponent.prototype.handleToggle = function () {
        this.onToggleSidenav();
        this.onToggleDrawer();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.isDarkTheme = this.themeService.isDarkTheme;
        this.setupTitle();
    };
    HeaderComponent.prototype.ngOnChanges = function (changes) {
        var url = changes.url;
        if (url && url.currentValue) {
            this.setupTitle(url.currentValue);
        }
    };
    HeaderComponent.prototype.setupTitle = function (_url) {
        if (_url === void 0) { _url = this.url; }
        if (!_url)
            return;
        var params = _url.split("/").filter(function (v, i) { return i % 2; });
        var url = params[0];
        switch (url) {
            case 'perfil':
                this.title = 'Editar Perfil de Usuario';
                break;
            case 'preguntas':
                this.title = 'Panadoc Preguntas';
                break;
            case 'mensajeria':
                var subParam = params[1];
                if (subParam) {
                    this.forceHide = true;
                    return;
                }
                ;
            default:
                this.title = "Panadoc";
        }
        this.forceHide = false;
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    HeaderComponent.prototype.onToggleDrawer = function () {
        this.drawerToggle.emit();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(Object(_reducers_extra__WEBPACK_IMPORTED_MODULE_4__["setProfileDisable"])());
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "drawerToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "matDrawerShow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/navigation/header/header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav/menu.elements.ts":
/*!*****************************************************!*\
  !*** ./src/app/navigation/sidenav/menu.elements.ts ***!
  \*****************************************************/
/*! exports provided: Menu, AnonMenu, BasicMenu, UserMenu, AdminMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonMenu", function() { return AnonMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicMenu", function() { return BasicMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenu", function() { return UserMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMenu", function() { return AdminMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var Menu = /** @class */ (function () {
    function Menu(i) {
        this.name = i.name;
        this.link = i.link;
        this.icon = i.icon ? i.icon : 'input';
        this.svgIcon = i.svgIcon ? i.svgIcon : '';
        this.isUser = i.isUser ? i.isUser : true;
        this.chip = i.chip ? i.chip : false;
        this.open = i.open ? i.open : false;
        this.sub = i.sub ? i.sub : [];
        this.isAdmin = i.isAdmin ? i.isAdmin : false;
    }
    return Menu;
}());
var AnonMenu = [
    {
        name: 'Iniciar Sesión',
        link: '/login',
        icon: 'exit_to_app',
        chip: false,
        open: false,
        isAdmin: false
    },
    {
        name: 'Regitrarse',
        link: '/signup',
        icon: 'person_add',
        chip: false,
        open: false,
        isAdmin: false
    }
];
var AdminMenu = [
    {
        name: 'Mi Perfil Publico',
        link: '/mi-perfil',
        icon: 'person',
        isUser: true,
        chip: false,
        open: false,
        isAdmin: true
    }
];
var UserMenu = [];
var BasicMenu = [
    {
        name: 'Preguntas',
        link: '/preguntas',
        icon: 'help',
        isUser: true,
        chip: false,
        open: false,
        isAdmin: true
    },
    {
        name: 'Agenda',
        link: '/agenda',
        icon: 'event',
        isUser: true,
        chip: false,
        open: false,
        isAdmin: true
    },
    {
        name: 'Mis consultas',
        //TODO: Actualizar a consutlas
        link: '/mensajeria',
        icon: 'chat_bubble',
        isUser: true,
        chip: false,
        open: false,
        isAdmin: true
    },
    {
        name: 'Perfil',
        link: '/perfil',
        icon: 'settings',
        isUser: true,
        chip: false,
        open: false,
        isAdmin: true
    },
    {
        name: 'Cerrar Sesion',
        link: '/logout',
        icon: 'exit_to_app',
        isUser: true,
        chip: false,
        isAdmin: false,
        open: false
    }
];



/***/ }),

/***/ "./src/app/navigation/sidenav/menu.mapper.ts":
/*!***************************************************!*\
  !*** ./src/app/navigation/sidenav/menu.mapper.ts ***!
  \***************************************************/
/*! exports provided: mapMenuByUserType, mapMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMenuByUserType", function() { return mapMenuByUserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMenu", function() { return mapMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _menu_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.elements */ "./src/app/navigation/sidenav/menu.elements.ts");
/* harmony import */ var _panadoc_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panadoc/data */ "../../libs/data/src/index.ts");



// const findSub = (m: IMenu) => m.name === 'Musica';
function mapMenuByUserType(user) {
    switch (user.type) {
        case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["UserType"].DOCTOR:
            return _menu_elements__WEBPACK_IMPORTED_MODULE_1__["AdminMenu"].concat(_menu_elements__WEBPACK_IMPORTED_MODULE_1__["BasicMenu"]);
        case _panadoc_data__WEBPACK_IMPORTED_MODULE_2__["UserType"].PATIENT:
        default:
            return _menu_elements__WEBPACK_IMPORTED_MODULE_1__["UserMenu"].concat(_menu_elements__WEBPACK_IMPORTED_MODULE_1__["BasicMenu"]);
    }
}
function mapMenu(user, subs, menu) {
    if (user.name !== '') {
        return menu.reduce(function (arr, m) {
            //   m.sub = (findSub(m)) ? subs : [];
            return arr.concat(m);
        }, []);
    }
    else {
        return menu;
    }
}


/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.column div {\n  margin: 10px 0px;\n  width: -webkit-fill-available;\n}\ndiv.column div img {\n  display: block;\n  border-radius: 50%;\n  width: 100%;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: auto;\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvUGFuYURvYy9QYW5hZG9jTngvYXBwcy9wYW5hZG9jL3NyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZRTtFQUNFLGdCQUFBO0VBQ0UsNkJBQUE7QUNYTjtBREZFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNJSiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBzaWRlSW1nKCkge1xyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcbmRpdi5jb2x1bW57XHJcbiAgZGl2e1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgIEBpbmNsdWRlIHNpZGVJbWcoKTtcclxuICB9XHJcbiAgLy8ge1xyXG4gICAgXHJcbiAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gIC8vICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAvLyAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIC8vICAgQGluY2x1ZGUgc2lkZUltZygpXHJcbiAgLy8gfVxyXG4gIC8vIC5jb21wbGV0ZSB7XHJcbiAgLy8gICB3aWR0aDogNTBweDtcclxuICAgIFxyXG4gIC8vIG1hcmdpbi10b3A6IDFlbTtcclxuICAvLyAgIEBpbmNsdWRlIHNpZGVJbWcoKVxyXG4gIC8vIH1cclxufVxyXG4iLCJkaXYuY29sdW1uIGRpdiB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuZGl2LmNvbHVtbiBkaXYgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _menu_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.elements */ "./src/app/navigation/sidenav/menu.elements.ts");
/* harmony import */ var _menu_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.mapper */ "./src/app/navigation/sidenav/menu.mapper.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");







var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(store) {
        this.store = store;
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.anonMenu = _menu_elements__WEBPACK_IMPORTED_MODULE_4__["BasicMenu"];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        this.$user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])('auth'));
        this.$menus = this.$user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (iUser) { return Object(_menu_mapper__WEBPACK_IMPORTED_MODULE_5__["mapMenuByUserType"])(iUser); }));
    };
    SidenavListComponent.prototype.onClose = function () {
        this.closeSidenav.emit();
    };
    SidenavListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SidenavListComponent.prototype.onLogout = function () {
        this.onClose();
        //TODO: Logout;
    };
    SidenavListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavListComponent.prototype, "iconOnly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavListComponent.prototype, "closeSidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SidenavListComponent.prototype, "userSubs", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-sidenav-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "../../node_modules/raw-loader/index.js!./src/app/navigation/sidenav/sidenav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/navigation/sidenav/sidenav.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.item.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.item.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BhbmFkb2Mvc3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYvc2lkZW5hdi5pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.item.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavItemComponent", function() { return SidenavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SidenavItemComponent = /** @class */ (function () {
    function SidenavItemComponent() {
        this.secondaryMenu = false;
    }
    SidenavItemComponent.prototype.ngOnInit = function () {
    };
    SidenavItemComponent.prototype.openLink = function () {
        this.menu.open = this.menu.open;
    };
    SidenavItemComponent.prototype.chechForChildMenu = function () {
        return this.menu && this.menu.sub ? true : false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavItemComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SidenavItemComponent.prototype, "iconOnly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavItemComponent.prototype, "secondaryMenu", void 0);
    SidenavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panadoc-sidenav-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.item.component.html */ "../../node_modules/raw-loader/index.js!./src/app/navigation/sidenav/sidenav.item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.item.component.scss */ "./src/app/navigation/sidenav/sidenav.item.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavItemComponent);
    return SidenavItemComponent;
}());



/***/ }),

/***/ "./src/app/reducers/extra/extra.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/reducers/extra/extra.reducer.ts ***!
  \*************************************************/
/*! exports provided: extraReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraReducer", function() { return extraReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/reducers/extra/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");



var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(_index__WEBPACK_IMPORTED_MODULE_1__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["nextForm"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { formState: _index__WEBPACK_IMPORTED_MODULE_1__["FORM_STATE"].SECOND_PAGE })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["startSaveForm"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { formState: _index__WEBPACK_IMPORTED_MODULE_1__["FORM_STATE"].START_SAVE })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["saveForm"], function (state, _a) {
    var formData = _a.formData;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { formState: _index__WEBPACK_IMPORTED_MODULE_1__["FORM_STATE"].SAVED, formData: formData }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["initForm"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { formState: _index__WEBPACK_IMPORTED_MODULE_1__["FORM_STATE"].INIT })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["initForm"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { formState: _index__WEBPACK_IMPORTED_MODULE_1__["FORM_STATE"].INIT })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["startLoading"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["stopLoading"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["setProfileDisable"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isFormDisabled: true })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_index__WEBPACK_IMPORTED_MODULE_1__["setProfileEditable"], function (state) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isFormDisabled: false })); }));
function extraReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/extra/index.ts":
/*!*****************************************!*\
  !*** ./src/app/reducers/extra/index.ts ***!
  \*****************************************/
/*! exports provided: FORM_STATE, nextForm, saveForm, startSaveForm, initForm, startLoading, stopLoading, setProfileEditable, setProfileDisable, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_STATE", function() { return FORM_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextForm", function() { return nextForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveForm", function() { return saveForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSaveForm", function() { return startSaveForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initForm", function() { return initForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLoading", function() { return startLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLoading", function() { return stopLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfileEditable", function() { return setProfileEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfileDisable", function() { return setProfileDisable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");


var FORM_STATE;
(function (FORM_STATE) {
    FORM_STATE["INIT"] = "INIT";
    FORM_STATE["START_SAVE"] = "START_SAVE";
    FORM_STATE["SECOND_PAGE"] = "SECOND_PAGE";
    FORM_STATE["SAVED"] = "SAVED";
    FORM_STATE["START_LOADING"] = "Started Loading";
    FORM_STATE["STOP_LOADING"] = "Stop Loading";
    FORM_STATE["SET_PROFILE_EDITABLE"] = "User editable";
    FORM_STATE["SET_PROFILE_DISABLE"] = "User not editable";
})(FORM_STATE || (FORM_STATE = {}));
var nextForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.SECOND_PAGE);
var saveForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.SAVED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
var startSaveForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.START_SAVE);
var initForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.INIT);
var startLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.START_LOADING);
var stopLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.STOP_LOADING);
var setProfileEditable = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.SET_PROFILE_EDITABLE);
var setProfileDisable = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(FORM_STATE.SET_PROFILE_DISABLE);
;
var initialState = {
    formData: {},
    isFormDisabled: true,
    formState: FORM_STATE.INIT,
    loading: false,
};


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, localStorageSyncReducer, CustomSerializer, metaReducers, selectAuthFeature, selectReducerState, getRouterInfo, selectExtraFeature, loadingSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthFeature", function() { return selectAuthFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectReducerState", function() { return selectReducerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterInfo", function() { return getRouterInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectExtraFeature", function() { return selectExtraFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingSelector", function() { return loadingSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.reducer */ "./src/app/auth/auth.reducer.ts");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngrx-store-localstorage */ "../../node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _extra_extra_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra/extra.reducer */ "./src/app/reducers/extra/extra.reducer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");








var reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_4__["authReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["routerReducer"],
    extra: _extra_extra_reducer__WEBPACK_IMPORTED_MODULE_6__["extraReducer"],
};
function localStorageSyncReducer(reducer) {
    var config = {
        keys: ['auth'],
        rehydrate: true,
        removeOnUndefined: true,
    };
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_5__["localStorageSync"])(config)(reducer);
}
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url: url, params: params, queryParams: queryParams };
    };
    CustomSerializer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])()
    ], CustomSerializer);
    return CustomSerializer;
}());

var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production
    ? [localStorageSyncReducer]
    : [localStorageSyncReducer];
var selectAuthFeature = function (state) { return state.auth; };
var selectReducerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("router");
var getRouterInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectReducerState, function (state) { return state.state; });
var selectExtraFeature = function (state) { return state.extra; };
var loadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectExtraFeature, function (state) { return state.loading; });


/***/ }),

/***/ "./src/app/theme/theme.service.ts":
/*!****************************************!*\
  !*** ./src/app/theme/theme.service.ts ***!
  \****************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this._darkTheme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isDarkTheme = this._darkTheme.asObservable();
    }
    ThemeService.prototype.setDarkTheme = function (isDarkTheme) {
        this._darkTheme.next(isDarkTheme);
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var environment = {
    production: true,
    httpServer: 'http://localhost:3000',
    socketioServer: 'http://localhost:3000',
    firebaseConfig: {
        apiKey: "AIzaSyBY_-Ba6L4hSazN5qsLqXs-2sCiXNBxuFk",
        authDomain: "panadoc-demo.firebaseapp.com",
        databaseURL: "https://panadoc-demo.firebaseio.com",
        projectId: "panadoc-demo",
        storageBucket: "",
        messagingSenderId: "640274153384",
        appId: "1:640274153384:web:e66e6a140005710700a79d"
    }
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    localServer: 'http://localhost:3000',
    httpServer: 'http://localhost:3400',
    socketioServer: 'http://localhost:4200',
    test: {
        patientUID: '5d9f1bd4f88b1c68015629cf',
        doctorUID: '5d9f1af4f88b1c68015629cc',
    },
    firebaseConfig: {
        apiKey: "AIzaSyBY_-Ba6L4hSazN5qsLqXs-2sCiXNBxuFk",
        authDomain: "panadoc-demo.firebaseapp.com",
        databaseURL: "https://panadoc-demo.firebaseio.com",
        projectId: "panadoc-demo",
        storageBucket: "",
        messagingSenderId: "640274153384",
        appId: "1:640274153384:web:e66e6a140005710700a79d"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/angeloacr/Proyectos/PanaDoc/PanadocNx/apps/panadoc/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map