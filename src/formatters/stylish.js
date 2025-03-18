const stylish = (object) => {
    const getChild = (value, depth) => {
        if (typeof value === 'object' && value !== null) {
          let res = [];
          const space = ' '.repeat((depth * 4) - 2);
          Object.keys(value).forEach((key) => {
            res.push(`${space}  ${key}: ${getChild(value[key], depth + 1)}`);
          });
          return `{\n${res.join('\n')}\n${' '.repeat((depth * 4) - 4)}}`;
        } else {
          return value;
        }
      };
  
    const iter = (object, depth) => {
      const result = [];
      const counDepth = ((depth * 4) - 2);
      const space = ' '.repeat(counDepth);
      Object.keys(object).forEach((key) => {
        const { type, value, oldValue, newValue } = object[key];
        if (type === 'object') {
          result.push(`${space}  ${key}: {\n${iter(value, depth + 1)}`);
          result.push(`${space}  }`);
        } else if (type === 'add') {
          result.push(`${space}+ ${key}: ${getChild(value, depth + 1)}`);
        } else if (type === 'delete') {
          result.push(`${space}- ${key}: ${getChild(value, depth + 1)}`);
        } else if (type === 'no-change') {
          result.push(`${space}  ${key}: ${getChild(value, depth + 1)}`);
        } else if (type === 'change') {
          result.push(`${space}- ${key}: ${getChild(oldValue, depth + 1)}`);
          result.push(`${space}+ ${key}: ${getChild(newValue, depth + 1)}`);
        }
      });
      return result.join('\n');  
    };
    
    return `{\n${iter(object, 1)}\n}`;
  };

export default stylish;
