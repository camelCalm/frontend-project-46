import _ from "lodash";

const iter = (obj1, obj2) => {
  const result = {};

  const commonKeys = _.sortedUniq(
    [...Object.keys(obj1), ...Object.keys(obj2)].sort()
  );

  commonKeys.forEach((key) => {
    if (
      typeof obj1[key] === "object" &&
      obj1[key] !== null &&
      typeof obj2[key] === "object" &&
      obj2[key] !== null
    ) {
      result[key] = iter(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== undefined && obj2[key] !== undefined) {
        if (obj1[key] === obj2[key]) {
          result[key] = {
            status: "no-change",
            value: obj1[key],
          };
        }
        if (obj1[key] !== obj2[key]) {
          result[key] = {
            status: "change",
            oldValue: obj1[key],
            newValue: obj2[key],
          };
        }
      }

      if (obj1[key] !== undefined && obj2[key] === undefined) {
        result[key] = {
          status: "remove",
          value: obj1[key],
        };
      }

      if (obj1[key] === undefined && obj2[key] !== undefined) {
        result[key] = {
          status: "add",
          value: obj2[key],
        };
      }
    }
  });

  return result;
};

export default iter;