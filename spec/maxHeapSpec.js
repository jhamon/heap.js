describe("MaxHeap", function () {
  var maxHeap;

  beforeEach(function () {
    maxHeap = new JSContainers.MaxHeap([1,2,3,4,5,6,7]);
  });

  it("has a data attribute", function () {
    expect(maxHeap.data).toBeTruthy();
  });

  it("cannot be initialized empty", function () {
    expect(function () { return new JSContainers.MaxHeap([])}).toThrow();
  })

  describe("#isValid", function () {
    it("has a #isValid function", function () {
      expect(maxHeap.isValid).toBeTruthy();
    });

    it("returns true when the data attribute holds a valid max heap", function () {
      maxHeap.data = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
      expect(maxHeap.isValid()).toBe(true);
    });

    it("returns false when the data is not a valid max heap", function () {
      maxHeap.data = [10, 16, 14, 8, 7, 9, 3, 2, 4, 1]
      expect(maxHeap.isValid()).toBe(false);      
    })

    it("returns true for any size valid array", function () {
      maxHeap.data = [16, 14, 10, 8, 7, 9, 3, 2, 4]
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14, 10, 8, 7, 9, 3, 2]
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14, 10, 8, 7, 9, 3]
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14, 10, 8, 7, 9]
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14, 10, 8, 7, 9]
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14, 10, 8, 7];
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14, 10, 8];
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14, 10];
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16, 14];
      expect(maxHeap.isValid()).toBe(true);
      maxHeap.data = [16];
      expect(maxHeap.isValid()).toBe(true);
    });

    it("returns false when called on an empty array", function () {
      maxHeap.data = [];
      expect(maxHeap.isValid()).toBe(false);
    })


    it("returns false when the data attribute holds an invalid max heap", function () {
      maxHeap.data = [1,2,3,4,5]
      expect(maxHeap.isValid()).toBe(false);
    })
  });

  describe("#maxHeapify(i)", function () {  
    it("has a maxHeapify function", function () {
      expect(maxHeap.maxHeapify).toBeTruthy();
    });

    describe("if a swap is needed to maintain the max heap property", function () {
      it("swaps position i with its largest child", function () {
        maxHeap.data = [14, 16, 10, 8, 7, 9, 3, 2, 4, 1]
        maxHeap.maxHeapify(0)
        expect(maxHeap.isValid()).toBe(true);
        expect(maxHeap.data).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1])
      })

    })

    it("does nothing if no swap is needed at position i", function () {
      maxHeap.data = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
      maxHeap.maxHeapify(0);
      expect(maxHeap.data).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
    })

    it("raises an error if called with an invalid index", function () {
      expect(function () { return maxHeap.maxHeapify(-1) }).toThrow();
      expect(function () { return maxHeap.maxHeapify(1000) }).toThrow();
      expect(function () { return maxHeap.maxHeapify(2) }).not.toThrow();
    })
  })


  describe("#buildMaxHeap()", function () {
    it("has a buildMaxHeap function", function () {
      expect(maxHeap.buildMaxHeap).toBeTruthy();
    });

    it("organizes the data attribute into a valid max heap", function () {
      maxHeap.buildMaxHeap();
      expect(maxHeap.isValid()).toBe(true);
    });

    it("works on an array containing negative numbers", function () {
      maxHeap = new JSContainers.MaxHeap([-5,-1,-5,4,3,2,100,11]);
      expect(maxHeap.isValid()).toBe(true);
    })
  });

  describe("#insert(x)", function () {
    it("has an insert function", function () {
      expect(maxHeap.insert).toBeTruthy();
    });

    it("increases the length of the data array", function () {
      var startLength = maxHeap.data.length;
      maxHeap.insert(5);
      expect(maxHeap.data.length).toEqual(startLength+1);
    });

    it("maintains the max-heap property", function () {
      maxHeap.insert(10);
      expect(maxHeap.isValid()).toBe(true);
    });

    it("returns the inserted value", function () {
      expect(maxHeap.insert(100)).toEqual(100);
    })
  });

  describe("#delete(i)", function () {
    it("decreases the length of the data array", function () {
      startLength = maxHeap.data.length;
      maxHeap.delete(2);
      expect(maxHeap.data.length).toEqual(startLength-1);
    });

    it("maintains the max heap property", function () {
      maxHeap.delete(2);
      expect(maxHeap.isValid()).toBe(true);
    });

    it("returns false when given an invalid index", function () {
      maxHeap.data = []
      expect(maxHeap.delete(1000)).toBe(false);
    });

    it("returns the deleted value", function () {
      expect(maxHeap.delete(0)).toEqual(7);
    });
  })

  describe("#max()", function () {
    it("returns the largest element in the array", function () {
      expect(maxHeap.max()).toEqual(7);
    });

    it("returns false if called on an empty heap", function () {
      maxHeap.data = []
      expect(maxHeap.max()).toEqual(false);
    })
  })
})