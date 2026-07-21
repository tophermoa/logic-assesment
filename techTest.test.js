const { sortingManual, sumSubArr, sumNestedObj } = require('./techTest');

describe('techTest function', () => {

  describe('1. sortingManual', () => {
    it('sort array dari terbesar ke terkecil', () => {
      const input = [1, 2, 4, 3, 5, 3, 2, 1];
      const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
      expect(sortingManual([...input])).toEqual(expectedOutput);
    });

    it('handle empty array', () => {
      expect(sortingManual([])).toEqual([]);
    });
  });

  describe('2. sumSubArr', () => {
    it('sum sub array', () => {
      expect(sumSubArr([100, 200, 300, 400], 2)).toBe(700);
      expect(sumSubArr([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
      expect(sumSubArr([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    });

    it('harus return 0 jika array kurang dari value ke 2', () => {
      expect(sumSubArr([100, 200], 3)).toBe(0);
    });
  });

  describe('3. sumNestedObj', () => {
    it('sum all nested obj hanya bilangan genap', () => {
      const input1 = {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
          }
        }
      };
      expect(sumNestedObj(input1)).toBe(6);

      const input2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: 'car' }
      };
      expect(sumNestedObj(input2)).toBe(12);
    });

    it('handle obj yang tidak ada bilangan genap', () => {
      const input = {
        a: 1,
        b: 3,
        c: {
          d: 5,
          e: "string"
        }
      };
      expect(sumNestedObj(input)).toBe(0);
    });
  });
});
