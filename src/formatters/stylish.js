import _ from 'lodash';

const stylish = (object) => {

  const getSpace = (count) => ' '.repeat(count);

  const getChild = (value, depth) => {
    const countSpace = ((depth * 4) - 2);

    if (_.isObject(value) === true) {
      const result = [];
      Object.keys(value).forEach((key) => {
        result.push(`${getSpace(countSpace)}  ${key}: ${getChild(value[key], depth + 1)}`);
      });
      return `{\n${result.join('\n')}\n${getSpace(countSpace - 2)}}`;
    } else {
      return value;
    }
  };

  const iter = (object, depth) => {
    const result = [];
    const countSpace = ((depth * 4) - 2);
    Object.keys(object).forEach((key) => {
      const { type, value, newValue, oldValue } = object[key];
  
      if (type === 'object') {
        result.push(`${getSpace(countSpace)}  ${key}: {\n${iter(value, depth + 1)}`);
        result.push(`${getSpace(countSpace)}  }`);
      } else if (type === 'delete') {
        result.push(`${getSpace(countSpace)}- ${key}: ${getChild(value, depth + 1)}`);
      } else if (type === 'add') {
        result.push(`${getSpace(countSpace)}+ ${key}: ${getChild(value, depth + 1)}`);
      } else if (type === 'no-change') {
        result.push(`${getSpace(countSpace)}  ${key}: ${getChild(value, depth + 1)}`);
      } else if (type === 'change') {
        result.push(`${getSpace(countSpace)}- ${key}: ${getChild(oldValue, depth + 1)}`);
        result.push(`${getSpace(countSpace)}+ ${key}: ${getChild(newValue, depth + 1)}`);
      }
    });

    return result.join('\n');
  };

  return `{\n${iter(object, 1)}\n}`;
};

export default stylish;