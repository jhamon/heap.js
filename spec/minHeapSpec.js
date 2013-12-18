describe("MinHeap", function () {
  var minHeap;

  beforeEach(function () {
    minHeap = new JSHeap.MinHeap([1,2,3,4,5,6]);
  });

  it("inherits #_left from Heap", function () {
    expect(minHeap._left).toBeTruthy();
  });

  it("inherits #_right from Heap", function () {
    expect(minHeap._right).toBeTruthy();
  });

  it("inherits #_parent from Heap", function () {
    expect(minHeap._parent).toBeTruthy();
  });

  it("cannot be initialized without an array argument", function () {
    expect(function () { new JSHeap.MinHeap() }).toThrow();
  })

  describe("#isValid", function () {
    it("has an #isValid function", function () {
      expect(minHeap.isValid).toBeTruthy;
    });

    it("returns true if minheap property maintained", function () {
      minHeap.data = [1,2,3,4,5,6,7];
      expect(minHeap.isValid()).toBe(true);
    });

    it("returns false if minheap property is not maintained", function () {
      minHeap.data = [5,4,3,2,1];
      expect(minHeap.isValid()).toBe(false);
    });

    it("works correctly for any size heap", function () {
      minHeap.data = [1,2,3,4,5,6,7];
      expect(minHeap.isValid()).toBe(true);
      minHeap.data = [1,2,3,4,5,6];
      expect(minHeap.isValid()).toBe(true);
      minHeap.data = [1,2,3,4,5];
      expect(minHeap.isValid()).toBe(true);
      minHeap.data = [1,2,3,4];
      expect(minHeap.isValid()).toBe(true);
      minHeap.data = [1,2,3];
      expect(minHeap.isValid()).toBe(true);
      minHeap.data = [1,2];
      expect(minHeap.isValid()).toBe(true);
      minHeap.data = [1];
      expect(minHeap.isValid()).toBe(true);
      minHeap.data = [];
      expect(minHeap.isValid()).toBe(true);
    })

    it("examines every element to ensure it's smaller than the parent", function () {
      minHeap.data = [10,1,2,3,4,5];
      expect(minHeap.isValid()).toBe(false);
    })
  })

  describe("#minHeapify(i)", function () {
    it("has a #minHeapify function", function () {
      expect(minHeap.minHeapify).toBeTruthy();
    });

    it("performs a swap at i if one is needed", function () {
      minHeap.data = [2,1,3,4,5,6];
      minHeap.minHeapify(0);
      expect(minHeap.data).toEqual([1,2,3,4,5,6]);
      expect(minHeap.isValid()).toBe(true)
    });

    it("does nothing if no swap is needed", function () {
      minHeap.data = [1,2,3,4,5,6];
      minHeap.minHeapify(0);
      expect(minHeap.data).toEqual([1,2,3,4,5,6]);
    });
  })

  describe("#buildMinHeap()", function () {
    it("arranges the data items into a valid min-heap", function () {
      minHeap.data = [5,4,3,2,1];
      minHeap.buildMinHeap();
      expect(minHeap.isValid()).toBe(true);
    });

    it("works on even length arrays", function () {
      minHeap.data = [10,5,4,2,3,4,5,1,4,-1];
      minHeap.buildMinHeap();
      expect(minHeap.isValid()).toBe(true);
    });

    it("works on odd length arrays", function () {
      minHeap.data = [10,5,-44,3,4,5,1,4,-1];
      minHeap.buildMinHeap();
      expect(minHeap.isValid()).toBe(true);
    });

    it("works on an array with negative numbers", function () {
      minHeap.data = [-4,5,6,-10,-110,100,12,1];
      minHeap.buildMinHeap();
      expect(minHeap.isValid()).toBe(true);
    });
  });

    describe("#insert(x)", function () {
    it("has an insert function", function () {
      expect(minHeap.insert).toBeTruthy();
    });

    it("increases the length of the data array", function () {
      var startLength = minHeap.data.length;
      minHeap.insert(5);
      expect(minHeap.data.length).toEqual(startLength+1);
    });

    it("maintains the minheap property", function () {
      minHeap.insert(10);
      expect(minHeap.isValid()).toBe(true);
    });

    it("returns the inserted value", function () {
      expect(minHeap.insert(100)).toEqual(100);
    })
  });

  describe("#delete(i)", function () {
    it("decreases the length of the data array", function () {
      startLength = minHeap.data.length;
      minHeap.delete(2);
      expect(minHeap.data.length).toEqual(startLength-1);
    });

    it("maintains the min heap property", function () {
      minHeap.delete(2);
      expect(minHeap.isValid()).toBe(true);
    });

    it("returns false when given an invalid index", function () {
      minHeap.data = []
      expect(minHeap.delete(1000)).toBe(false);
    });

    it("returns the deleted value", function () {
      expect(minHeap.delete(0)).toEqual(1);
    });
  })

  describe("#min()", function () {
    it("returns the minimum value in the array", function () {
      expect(minHeap.min()).toEqual(1);
    });

    it("returns false when array is empty", function () {
      minHeap.data = [];
      expect(minHeap.min()).toBe(false);
    });
  });

})