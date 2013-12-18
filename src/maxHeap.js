(function (win) {
  var JSHeap = win.JSHeap = (win.JSHeap || {});

  var MaxHeap = JSHeap.MaxHeap = function(dataArr) {
    if (!(dataArr instanceof Array)) {
      throw "MaxHeap cannot be initialized without array argument";
    }
    this.data = dataArr;
    this.buildMaxHeap();      
  }

  MaxHeap.prototype = new JSHeap.Heap();
  MaxHeap.prototype.constructor = JSHeap.MaxHeap;

  MaxHeap.prototype._checkChildIsSmaller = function (item, index, childIndexFunc) {
    var childIndex = childIndexFunc(index);
    if (childIndex < this.data.length) {
      var childItem = this.data[childIndex];
      return item >= childItem;      
    } else {
      throw "MaxHeap: Invalid comparison index";
    }
  }

  MaxHeap.prototype.isValid = function () {
    if (this.data.length == 0) return false;
    var valid = true;
    for (var i = 0; i < Math.floor(this.data.length/2)-1; i++) {
      var item = this.data[i];
      leftValid = this._checkChildIsSmaller(item, i, this._left);
      rightValid = this._checkChildIsSmaller(item, i, this._right);
      if (!leftValid || !rightValid) { 
        valid = false; 
        break;
      }
    };
    return valid;
  }

  MaxHeap.prototype.buildMaxHeap = function () {
    for (var i = Math.floor(this.data.length/2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  MaxHeap.prototype._findLargest = function (i) {  
    var left = this._left(i);
    var right = this._right(i);  
    var largest = i;
    if (this.data[left] > this.data[largest]) {
      largest = left;
    }

    if (this.data[right] > this.data[largest]) {
      largest = right;
    }
    return largest;
  }

  MaxHeap.prototype.maxHeapify = function (i) {
    if (!this._isValidIndex(i)) {
      throw "Cannot maxheapify invalid index"
    }

    var largest = this._findLargest(i);

    if (largest !== i) {
      this.swap(largest, i);
      this.maxHeapify(largest);
    }
    return true;
  }

  MaxHeap.prototype._upheap = function (i) {
    if (i==0) { return true; }
    var parentIndex = this._parent(i);
    var parent = this.data[parentIndex];
    var child = this.data[i];

    if (parent < child) {
      this.swap(parentIndex, i)
      this._upheap(parentIndex);
    }
  }

  MaxHeap.prototype.insert = function (x) {
    this.data.push(x);
    this._upheap(this.data.length-1);
    return x;
  }

  MaxHeap.prototype.delete = function (i) {
    if (!this._isValidIndex(i)) {
      return false;
    }
    this.swap(i, this.data.length-1);
    var deleted = this.data.pop();
    this.maxHeapify(i);
    return deleted;
  }

  MaxHeap.prototype.max = function () {
    if (this.data.length) {
      return this.data[0];
    }
    return false;
  }
})(this);