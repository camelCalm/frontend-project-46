import _ from 'lodash';

export default (path1, path2) => {
    let result = [];

    let object1 = JSON.parse(path1);
    let object2 = JSON.parse(path2);

    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    let commonKeys = [...keys1, ...keys2];
    commonKeys.sort();

    let sortedComKeys = _.sortedUniq(commonKeys);

    sortedComKeys.forEach((key) => {
        if (object1[key] !== undefined && object2[key] !== undefined) {
            if (object1[key] === object2[key]) {
                result.push(`    ${key}: ${object1[key]}\n`)
            } else if (object1[key] !== object2[key]) {
                result.push(`  - ${key}: ${object1[key]}\n`)
                result.push(`  + ${key}: ${object2[key]}\n`)
            }
        }

        if (object1[key] !== undefined && object2[key] === undefined) {
            result.push(`  - ${key}: ${object1[key]}\n`)
        }

        if (object1[key] === undefined && object2[key] !== undefined) {
            result.push(`  + ${key}: ${object2[key]}\n`)
        }
    });

    return `{\n${result.join('')}}`
};