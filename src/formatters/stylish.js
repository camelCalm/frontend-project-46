const stylish = (object) => {
  const space = (depth, spaceBeforeKey = 2) => " ".repeat((depth * 4) - (spaceBeforeKey));

  const getChild = (value, depth) => {
    if (typeof value !== 'object' || value === null) {
      return value;
    }
    const result = [];
    Object.keys(value).forEach((key) => {
      result.push(`${space(depth)}  ${key}: ${getChild(value[key], depth + 1)}`);
    });
    return `{\n${result.join('\n')}\n${space(depth, 4)}}`;
  };

  const iter = (object, depth) => {
    const result = [];
    Object.keys(object).forEach((key) => {
      const { type, value, oldValue, newValue } = object[key];
      if (type === "object") {
        result.push(`${space(depth)}  ${key}: {\n${iter(value, depth + 1)}\n${space(depth, 0)}}`);
      } else if (type === "delete") {
        result.push(`${space(depth)}- ${key}: ${getChild(value, depth + 1)}`);
      } else if (type === "add") {
        result.push(`${space(depth)}+ ${key}: ${getChild(value, depth + 1)}`);
      } else if (type === "no-change") {
        result.push(`${space(depth)}  ${key}: ${getChild(value, depth + 1)}`);
      } else if (type === "change") {
        result.push(`${space(depth)}- ${key}: ${getChild(oldValue, depth + 1)}`);
        result.push(`${space(depth)}+ ${key}: ${getChild(newValue, depth + 1)}`);
      }
    });
    return result.join('\n');
  };

  return `{\n${iter(object, 1)}\n}`;
};

export default stylish;
