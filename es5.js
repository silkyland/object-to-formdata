'use strict';

Object.defineProperty(exports, "__esModule", {value: true});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function (obj) {
        return typeof obj;
    }
    : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
    };

/**
 * @param {any} obj
 * @param {any} form
 * @param {any} namespace
 * @returns
 */
var obj2fd = function obj2fd(obj, form, namespace) {
    var fd = form || new FormData();
    var formKey = void 0;

    for (var property in obj) {
        //if (obj.hasOwnProperty(property) && obj[property]) {
        if (obj.hasOwnProperty(property)) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            if (obj[property]instanceof Date) {
                fd.append(formKey, obj[property].toISOString());
            } else if (_typeof(obj[property]) === 'object' && !(obj[property]instanceof File)) {
                obj2fd(obj[property], fd, formKey);
            } else {
                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }
    }

    return fd;
};

// Truthy version
/**
 *
 * @param {any} obj
 * @param {any} form
 * @param {any} namespace
 */
var Truthy = function Truthy(obj, form, namespace) {
    var fd = form || new FormData();
    var formKey = void 0;
    for (var property in obj) {
        if (obj.hasOwnProperty(property) && obj[property]) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            if (obj[property]instanceof Date) {
                fd.append(formKey, obj[property].toISOString());
            } else if (_typeof(obj[property]) === 'object' && !(obj[property]instanceof File)) {
                Truthy(obj[property], fd, formKey);
            } else {
                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }
    }
    return fd;
};

exports.Truthy = Truthy
exports.default = obj2fd