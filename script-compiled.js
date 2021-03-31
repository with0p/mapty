'use strict'; // prettier-ignore

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var form = document.querySelector('.form');
var containerWorkouts = document.querySelector('.workouts');
var inputType = document.querySelector('.form__input--type');
var inputDistance = document.querySelector('.form__input--distance');
var inputDuration = document.querySelector('.form__input--duration');
var inputCadence = document.querySelector('.form__input--cadence');
var inputElevation = document.querySelector('.form__input--elevation');

var Workout = /*#__PURE__*/function () {
  function Workout(coords, distance, duration) {
    _classCallCheck(this, Workout);

    _defineProperty(this, "date", new Date());

    _defineProperty(this, "id", Math.trunc(this.date.getTime() * Math.random()).toString());

    _defineProperty(this, "clicks", 0);

    this.coords = coords; //[lat,lng]

    this.distance = distance; //km

    this.duration = duration; // min
  }

  _createClass(Workout, [{
    key: "_setDescription",
    value: function _setDescription() {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.description = "".concat(this.type[0].toUpperCase()).concat(this.type.slice(1), " on ").concat(months[this.date.getMonth()], " ").concat(this.date.getDate());
    }
  }, {
    key: "click",
    value: function click() {
      this.clicks++;
    }
  }]);

  return Workout;
}();

var Running = /*#__PURE__*/function (_Workout) {
  _inherits(Running, _Workout);

  var _super = _createSuper(Running);

  function Running(coords, distance, duration, cadence) {
    var _this;

    _classCallCheck(this, Running);

    _this = _super.call(this, coords, distance, duration);

    _defineProperty(_assertThisInitialized(_this), "type", 'running');

    _this.cadence = cadence;

    _this.calcPace();

    _this._setDescription();

    return _this;
  }

  _createClass(Running, [{
    key: "calcPace",
    value: function calcPace() {
      this.pace = this.duration / this.distance;
      return this.pace;
    }
  }]);

  return Running;
}(Workout);

var Cycling = /*#__PURE__*/function (_Workout2) {
  _inherits(Cycling, _Workout2);

  var _super2 = _createSuper(Cycling);

  function Cycling(coords, distance, duration, elevation) {
    var _this2;

    _classCallCheck(this, Cycling);

    _this2 = _super2.call(this, coords, distance, duration);

    _defineProperty(_assertThisInitialized(_this2), "type", 'cycling');

    _this2.elevation = elevation;

    _this2.calcSpeed();

    _this2._setDescription();

    return _this2;
  }

  _createClass(Cycling, [{
    key: "calcSpeed",
    value: function calcSpeed() {
      this.speed = this.distance / (this.duration / 60);
      return this.speed;
    }
  }]);

  return Cycling;
}(Workout);

var _map = new WeakMap();

var _mapEvent = new WeakMap();

var _workouts = new WeakMap();

var _markers = new WeakMap();

var _zoomLevel = new WeakMap();

var _defaultPosition = new WeakMap();

var _positionMarker = new WeakMap();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    _map.set(this, {
      writable: true,
      value: void 0
    });

    _mapEvent.set(this, {
      writable: true,
      value: void 0
    });

    _workouts.set(this, {
      writable: true,
      value: []
    });

    _markers.set(this, {
      writable: true,
      value: []
    });

    _zoomLevel.set(this, {
      writable: true,
      value: 13
    });

    _defaultPosition.set(this, {
      writable: true,
      value: {
        coords: {
          latitude: 59.938752,
          longitude: 30.315081
        }
      }
    });

    _positionMarker.set(this, {
      writable: true,
      value: void 0
    });

    this._getPosition(); // attach event handlers


    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _createClass(App, [{
    key: "_getPosition",
    value: function _getPosition() {
      var _this3 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var coords = [latitude, longitude];

        _classPrivateFieldGet(_this3, _map).flyTo(coords);

        _classPrivateFieldGet(_this3, _positionMarker).setLatLng(coords);
      }, function () {
        alert('Your position is unknown, so map is set to defailt location');
      });

      this._loadMap(_classPrivateFieldGet(this, _defaultPosition));
    }
  }, {
    key: "_loadMap",
    value: function _loadMap(position) {
      //   get current position
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var coords = [latitude, longitude];

      _classPrivateFieldGet(this, _markers).push(coords); // load map


      _classPrivateFieldSet(this, _map, L.map('map').setView(coords, _classPrivateFieldGet(this, _zoomLevel)));

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(_classPrivateFieldGet(this, _map)); // add marker for current position

      _classPrivateFieldSet(this, _positionMarker, L.marker(coords));

      _classPrivateFieldGet(this, _positionMarker).addTo(_classPrivateFieldGet(this, _map)).bindPopup('Here you are').openPopup(); // add markers from LS


      this._getLocalStorage(); // show workout form


      _classPrivateFieldGet(this, _map).on('click', this._showForm.bind(this));
    }
  }, {
    key: "_zoomToDisplayMarkers",
    value: function _zoomToDisplayMarkers() {
      var group = L.latLngBounds(_classPrivateFieldGet(this, _markers));

      _classPrivateFieldGet(this, _map).fitBounds(group, true);
    }
  }, {
    key: "_showForm",
    value: function _showForm(mapE) {
      form.classList.remove('hidden');
      inputDistance.focus();

      _classPrivateFieldSet(this, _mapEvent, mapE);
    }
  }, {
    key: "_hideForm",
    value: function _hideForm() {
      form.querySelectorAll('input').forEach(function (inpt) {
        return inpt.value = '';
      });
      form.classList.add('hidden');
    }
  }, {
    key: "_toggleElevationField",
    value: function _toggleElevationField() {
      inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }
  }, {
    key: "_newWorkout",
    value: function _newWorkout(e) {
      e.preventDefault();

      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _mapEvent).latlng,
          lat = _classPrivateFieldGet2.lat,
          lng = _classPrivateFieldGet2.lng;

      var workout; // get data from the form

      var type = inputType.value;
      var distance = Number.parseInt(inputDistance.value);
      var duration = Number.parseInt(inputDuration.value); // data validation helpers

      var validInputs = function validInputs() {
        for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
          inputs[_key] = arguments[_key];
        }

        return inputs.every(function (inp) {
          return Number.isFinite(inp);
        });
      };

      var positiveInputs = function positiveInputs() {
        for (var _len2 = arguments.length, inputs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          inputs[_key2] = arguments[_key2];
        }

        return inputs.every(function (inp) {
          return inp > 0;
        });
      }; // workout type check


      if (type === 'running') {
        var cadence = Number.parseInt(inputCadence.value);
        if (!validInputs(distance, duration, cadence) || !positiveInputs(distance, duration, cadence)) return alert('Input value should be a number');
        workout = new Running([lat, lng], distance, duration, cadence);

        _classPrivateFieldGet(this, _workouts).push(workout);
      }

      if (type === 'cycling') {
        var elevation = Number.parseInt(inputElevation.value);
        if (!validInputs(distance, duration, elevation) || !validInputs(distance, duration)) return alert('Input value should be a number');
        workout = new Cycling([lat, lng], distance, duration, elevation);

        _classPrivateFieldGet(this, _workouts).push(workout);
      } // display mark


      this._renderWorkoutMarker(workout); // render workout


      this._renderWorkout(workout); //clear inputs and hide the form


      this._hideForm(); //update local storage


      this._setLocalStorage();
    }
  }, {
    key: "_renderWorkoutMarker",
    value: function _renderWorkoutMarker(wrkt) {
      L.marker(wrkt.coords).addTo(_classPrivateFieldGet(this, _map)).bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "".concat(wrkt.type, "-popup")
      })).setPopupContent("".concat(wrkt.type === 'running' ? '🏃‍♂️' : '🚴‍♀️', " ").concat(wrkt.description)).openPopup();

      _classPrivateFieldGet(this, _markers).push(wrkt.coords);
    }
  }, {
    key: "_renderWorkout",
    value: function _renderWorkout(workout) {
      var html = "\n      <li class=\"workout workout--".concat(workout.type, "\" data-id=\"").concat(workout.id, "\">\n          <h2 class=\"workout__title\">").concat(workout.description, "</h2>\n          <div class=\"workout__details\">\n            <span class=\"workout__icon\">").concat(workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️', "\n            </span>\n            <span class=\"workout__value\">").concat(workout.distance, "</span>\n            <span class=\"workout__unit\">km</span>\n          </div>\n          <div class=\"workout__details\">\n            <span class=\"workout__icon\">\u23F1</span>\n            <span class=\"workout__value\">").concat(workout.duration, "</span>\n            <span class=\"workout__unit\">min</span>\n          </div>\n          ");

      if (workout.type === 'running') {
        html += "\n      <div class=\"workout__details\">\n      <span class=\"workout__icon\">\u26A1\uFE0F</span>\n      <span class=\"workout__value\">".concat(workout.pace.toFixed(1), "</span>\n      <span class=\"workout__unit\">min/km</span>\n    </div>\n    <div class=\"workout__details\">\n      <span class=\"workout__icon\">\uD83E\uDDB6\uD83C\uDFFC</span>\n      <span class=\"workout__value\">").concat(workout.cadence, "</span>\n      <span class=\"workout__unit\">spm</span>\n    </div>\n  </li>\n            ");
      }

      if (workout.type === 'cycling') {
        html += "\n      <div class=\"workout__details\">\n      <span class=\"workout__icon\">\u26A1\uFE0F</span>\n      <span class=\"workout__value\">".concat(workout.speed.toFixed(1), "</span>\n      <span class=\"workout__unit\">km/h</span>\n    </div>\n    <div class=\"workout__details\">\n      <span class=\"workout__icon\">\u26F0</span>\n      <span class=\"workout__value\">").concat(workout.elevation, "</span>\n      <span class=\"workout__unit\">m</span>\n    </div>\n  </li>\n");
      }

      form.insertAdjacentHTML('afterend', html);
    }
  }, {
    key: "_moveToPopup",
    value: function _moveToPopup(e) {
      var woEl = e.target.closest('.workout');
      if (!woEl) return;

      var workout = _classPrivateFieldGet(this, _workouts).find(function (w) {
        return w.id === woEl.dataset.id;
      });

      _classPrivateFieldGet(this, _map).setView(workout.coords, _classPrivateFieldGet(this, _zoomLevel), {
        animate: true,
        pan: {
          duration: 1
        }
      });
    }
  }, {
    key: "_setLocalStorage",
    value: function _setLocalStorage() {
      localStorage.setItem('workouts', JSON.stringify(_classPrivateFieldGet(this, _workouts)));
    }
  }, {
    key: "_getLocalStorage",
    value: function _getLocalStorage() {
      var _this4 = this;

      var lsData = JSON.parse(localStorage.getItem('workouts'));
      if (!lsData) return;

      _classPrivateFieldSet(this, _workouts, lsData);

      _classPrivateFieldGet(this, _workouts).forEach(function (w) {
        _this4._renderWorkout(w);

        _this4._renderWorkoutMarker(w);

        _this4._zoomToDisplayMarkers();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      localStorage.removeItem('workouts');
      location.reload();
    }
  }]);

  return App;
}();

var app = new App();
