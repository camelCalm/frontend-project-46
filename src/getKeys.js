import _ from 'lodash';

export default (object1, object2) => _.sortedUniq(_.sortBy([...Object.keys(object1), ...Object.keys(object2)]));