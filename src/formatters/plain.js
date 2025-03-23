export default (object) => {
    const getValue = (value) => {
        if (typeof value === 'string') {
            return `'${value}'`;
        } else if (typeof value !== 'object' || value === null) {
            return value;
        }
        return `[complex value]`;
    };
    const result = [];

    const iter = (object, path) => {
        Object.keys(object).forEach((key) => {
            const { type, value, newValue, oldValue } = object[key]
            if (type === 'object') {
                iter(value, path + `${key}.`);
            } else if (type === 'delete') {
                result.push(`Property '${path}${key}' was removed`);
            } else if (type === 'add') {
                result.push(`Property '${path}${key}' was added with value: ${getValue(value)}`);
            } else if (type === 'change') {
                result.push(`Property '${path}${key}' was updated. From ${getValue(oldValue)} to ${getValue(newValue)}`);
            }
        });
    };

    iter(object, '');
    return result.join('\n');
};