fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      let collectionKeys = Object.keys(collection);
      for (let i = 0; i < collectionKeys.length; i++) {
        callback(collection[collectionKeys[i]], collectionKeys[i], collection);
      }
      return collection;
    },

    map: function (collection, callback) {
      let newCollection = [];
      let collectionKeys = Object.keys(collection);
      for (let i = 0; i < collectionKeys.length; i++) {
        let result = callback(collection[collectionKeys[i]], collectionKeys[i], collection);
        newCollection.push(result);
      }
      return newCollection;
    },

    reduce: function (collection, callback, acc = 0) {
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function (collection, predicate) {
      let result;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result = collection[i];
          break;
        }
      }
      return result;
    },

    filter: function (collection, predicate) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function (collection) {
      let i = 0;
      for (el in collection) {
        i++;
      }
      return i;
    },

    first: function (array, n = 1) {
      let results = [];
      if (n === 1) {
        results = array[0];
      } else {
        for (let i = 0; i < n; i++) {
          results.push(array[i]);
        }
      }
      return results;
    },

    last: function (array, n = 1) {
      let results = [];
      if (n === 1) {
        results = array[array.length - 1];
      } else {
        let start = array.length - n;
        for (let i = start; i < array.length; i++) {
          results.push(array[i]);
        }
      }
      return results;
    },

    compact: function (array) {
      let results = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) { results.push(array[i]); }
      }
      return results;
    },

    sortBy: function (array, callback) {
      let newArray = [...array];
      newArray.sort(function (a, b) {
        return callback(a) - callback(b);
      });
      return newArray;
    },

    flatten: function (array, shallow = false) {
      let newArray = [];
      let findNew = function (array) {
        for (let element in array) {
          if (Array.isArray(array[element]) && !shallow) {
            findNew(array[element]);
          } else {
            newArray = newArray.concat(array[element]);
          }
        }
        return newArray;
      };
      findNew(array);
      return newArray;
    },

    uniq: function (array, isSorted = false, callback = false) {
      let results = [];
      for (var element in array) {
        let match = false;
        if (!results.length) {
          results.push(array[element]);
        } else {
          for (var i = 0; i < results.length; i++) {
            if (callback && callback(results[i]) === callback(array[element])) {
              match = true;
              break;
            } else if (results[i] === array[element]) {
              match = true;
              break;
            }
          }
          if (!match) { results.push(array[element]); }
        }
      }
      return results;
    },

    keys: function (object) {
      let results = [];
      for (let x in object) {
        results.push(x);
      }
      return results;
    },

    values: function (object) {
      let results = [];
      for (let x in object) {
        results.push(object[x]);
      }
      return results;
    },

    functions: function (object) {
      let descriptors = Object.getOwnPropertyDescriptors(object);
      let results = [];
      for (let x in descriptors) {
        if (descriptors[x][`value`]) {
          results.push(x);
        }
      }
      return results.sort();
    },

    // :)
    giveMeMore: function () {
      return true;
    }
  };
})();

fi.libraryMethod();
