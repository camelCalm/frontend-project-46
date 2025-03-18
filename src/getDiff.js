import _ from "lodash";
import getKeys from "./getKeys.js";

const getDiff = (obj1, obj2) => {
  const result = {};
  getKeys(obj1, obj2).forEach((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      result[key] = {
        type: "object",
        value: getDiff(obj1[key], obj2[key]),
      };
    } else if (
      _.isUndefined(obj1[key]) === false &&
      _.isUndefined(obj2[key]) === true
    ) {
      result[key] = {
        type: "delete",
        value: obj1[key],
      };
    } else if (
      _.isUndefined(obj1[key]) === true &&
      _.isUndefined(obj2[key]) === false
    ) {
      result[key] = {
        type: "add",
        value: obj2[key],
      };
    } else if (
      _.isUndefined(obj1[key]) === false &&
      _.isUndefined(obj2[key]) === false
    ) {
      if (obj1[key] === obj2[key]) {
        result[key] = {
          type: "no-change",
          value: obj2[key],
        };
      } else if (obj1[key] !== obj2[key]) {
        result[key] = {
          type: "change",
          oldValue: obj1[key],
          newValue: obj2[key],
        };
      }
    }
  });
  return result;
};

export default getDiff;
