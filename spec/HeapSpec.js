describe("A Heap", function() {
  var heap;

  beforeEach(function () {
    heap = new JSHeap.Heap([1,2,3,4,5]);
  });

  it("has a data field holding the array", function() {
    expect(heap.data).toBeTruthy();
  });

  describe("it has private functions for computing indices", function () {

    beforeEach(function () {
      heap = new JSHeap.Heap([1,2,3,4,5]);
    });

    it("has a _left function", function () {
      expect(heap._left(0)).toEqual(1);
      expect(heap._left(1)).toEqual(3);
      expect(heap._left(2)).toEqual(5);
    });

    //          0
    //     1         2
    //  3    4    5     6
    // 7 8 9 10 11 12 13 14

    it("has a _right function", function () {
      expect(heap._right(0)).toEqual(2);
      expect(heap._right(1)).toEqual(4);
      expect(heap._right(2)).toEqual(6);
      expect(heap._right(4)).toEqual(10);
      expect(heap._right(5)).toEqual(12);
    });

    it("has a _parent function", function () {
      expect(heap._parent(4)).toEqual(1);
      expect(heap._parent(1)).toEqual(0);
      expect(heap._parent(2)).toEqual(0);
      expect(heap._parent(6)).toEqual(2);
      expect(heap._parent(7)).toEqual(3);
      expect(heap._parent(8)).toEqual(3);
      expect(heap._parent(9)).toEqual(4);
      expect(heap._parent(10)).toEqual(4);
      expect(heap._parent(12)).toEqual(5);
    })
  });

  describe("#swap(i,j)", function () {
    it("exchanges elements of the data array at locations i and j", function () {
      heap.swap(0,3);
      expect(heap.data).toEqual([4,2,3,1,5]);
    })

    it("throws an error if one or more indices are invalid", function () {
      expect(function () {heap.swap(0,100)}).toThrow();
    })
  })
});