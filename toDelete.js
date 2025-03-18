const object = {
  common: {
    value: {
     follow: { value: false, type: 'add' },
     setting1: { value: 'Value 1', type: 'no-changed' },
     setting2: { value: 200, type: 'delete' },
     setting3: { oldValue: true, newValue: null, type: 'changed' },
     setting4: { value: 'blah blah', type: 'add' },
     setting5: { value: { key5: 'value5' }, type: 'add' },
     setting6: {
          value: {
               doge: { value: [Object], type: 'object' },
               key: { value: 'value', type: 'no-changed' },
               ops: { value: 'vops', type: 'add' }
          },
          type: 'object'
     }
    },
    type: 'object'
  },
  group1: {
       value: {
            baz: { oldValue: 'bas', newValue: 'bars', type: 'changed' },
            foo: { value: 'bar', type: 'no-changed' },
            nest: { oldValue: [Object], newValue: 'str', type: 'changed' }
    },
    type: 'object'
  },
     group2: {
          value: { abc: 12345, deep: { id: 45 } },
          type: 'delete'
     },
     group3: {
          value: { deep: { id: { number: 45 } }, fee: 100500 },
          type: 'add'
     }
}