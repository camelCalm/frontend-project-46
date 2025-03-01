export default (firFile, secFile) => {
    let json1 = JSON.parse(firFile);
    let json2 = JSON.parse(secFile);

    let keys1 = Object.keys(json1);
    let keys2 = Object.keys(json2);

    let result = [];

    let allKeys = [...keys1.sort(), ...keys2.sort()];
    let sortedKeys = [];
    for (let i = 0; i < allKeys.length; i += 1) {
        if (allKeys.indexOf(allKeys[i]) === i) {
            sortedKeys.push(allKeys[i]);
        }
    }

    sortedKeys.forEach((key) => {
        if (json1[key] !== undefined && json2[key] !== undefined) {
            if (json1[key] !== json2[key]) {
                result.push(`  - ${key}: ${json1[key]}`);
                result.push(`  + ${key}: ${json2[key]}`);
            } if (json1[key] === json2[key]) {
                result.push(`    ${key}: ${json1[key]}`);
            }
        } 
        
        if (json1[key] !== undefined && json2[key] === undefined) {
            result.push(`  - ${key}: ${json1[key]}`);
        }

        if (json1[key] === undefined && json2[key] !== undefined) {
            result.push(`  + ${key}: ${json2[key]}`);
        }
    })

    console.log(
        `{\n${result.join('\n')}\n}`
    );
};
