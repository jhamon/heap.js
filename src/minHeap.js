(function (win) {
  var JSContainers = win.JSContainers = (win.JSContainers || {});

  var MinHeap = JSContainers.MinHeap = function (dataArr) {
    if (!(dataArr instanceof Array)) {
      throw "MinHeap cannot be initialized without array argument";
    }
    this.data = dataArr;
    this.buildMinHeap();
  }

  MinHeap.prototype = new JSContainers._Heap();

  MinHeap.prototype.constructor = MinHeap;

  MinHeap.prototype.isValid = function () {
    var valid = true;
    for (var i = this.data.length; i > 0; i--) {
      if (this.data[this._parent(i)] > this.data[i]) {
        valid = false;
      }
    }
    return valid;
  }

  MinHeap.prototype._findSmallest = function (i) {
    var smallest = i;
    var left = this._left(i);
    var right = this._right(i);
    if (this.data[left] < this.data[smallest]) {
      smallest = left;
    }

    if (this.data[right] < this.data[smallest]) {
      smallest = right;
    }

    return smallest;
  }

  MinHeap.prototype.minHeapify = function (i) {
    if (!this._isValidIndex(i)) {
      throw "MinHeap#minHeapify called with invalid index"
    }

    var smallest = this._findSmallest(i);

    if (smallest !== i) {
      this.swap(i, smallest);
      this.minHeapify(smallest);
    }
  }

  MinHeap.prototype.buildMinHeap = function () {
    for(var i = Math.floor(this.data.length/2); i >= 0; i--) {
      this.minHeapify(i);
    }
  }

  MinHeap.prototype._upheap = function (i) {
    var item = this.data[i];
    var itemParentIndex = this._parent(i);
    var itemParent = this.data[itemParentIndex];

    if (item < itemParent) {
      this.swap(i, itemParentIndex);
      this._upheap(itemParentIndex);
    }
  }

  MinHeap.prototype.insert = function (itemToInsert) {
    this.data.push(itemToInsert);
    this._upheap(this.data.length-1);
    return itemToInsert;
  }

  MinHeap.prototype.delete = function (i) {
    if (!this._isValidIndex(i)) { return false }
    this.swap(i, this.data.length-1);
    var deleted = this.data.pop();
    this.minHeapify(i);
    return deleted;
  }

  MinHeap.prototype.min = function () {
    if (this.data.length) {
      return this.data[0];
    }
    return false;
  }
})(this);