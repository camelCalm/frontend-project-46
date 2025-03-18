import _ from "lodash";
import getKeys from "./getKeys.js";
const getDiff = (obj1, obj2) => {
  const commonKeys = [...Object.keys(obj1), ...Object.keys(obj2)].sort();
  const sortKeys = commonKeys.filter((key, i) => commonKeys.indexOf(key) === i);
  const result = {};
  sortKeys.forEach((key) => {
    if (typeof obj1[key] === 'object' && obj1[key] !== null &&
        typeof obj2[key] === 'object' && obj2[key] !== null)
      {
        result[key] = {
          type: 'object',
          value: getDiff(obj1[key], obj2[key])
        }
      } else if (obj1[key] !== undefined && obj2[key] === undefined) {
        result[key] = {
          type: 'delete',
          value: obj1[key],
        };
      } else if (obj1[key] === undefined && obj2[key] !== undefined) {
        result[key] = {
          type: 'add',
          value: obj2[key],
        };
      } else {
        if (obj1[key] === obj2[key]) {
        result[key] = {
          type: 'no-change',
          value: obj2[key],
        };
      } if (obj1[key] !== obj2[key]) {
        result[key] = {
          type: 'change',
          oldValue: obj1[key],
          newValue: obj2[key],
        };
      }
      }
  });
  return result;
};

export default getDiff;
