(function (win) {
  var JSHeap = win.JSHeap = ( win.JSHeap || {} );

  var Heap = JSHeap.Heap = function (dataArr) {
    this.data = dataArr;
  };

  Heap.prototype._isValidIndex = function (i) {
    return (i >= 0 && i < this.data.length)
  }

  Heap.prototype._left = function (i) {
    if (i==0) {
      return 1;      
    } 
    return 2*i+1;
  }

  Heap.prototype._right = function (i) {
    if (i == 0) {
      return 2;
    }
    return 2*i + 2;
  }

  Heap.prototype._parent = function (i) {
    if (i<=2) {
      return 0;
    } else if (i % 2) {
      // odd index
      return Math.floor(i/2);
    } else {
    // even index
    return i/2-1;
    }
  }

  Heap.prototype.swap = function (i, j) {
    if (!this._isValidIndex(i) || !this._isValidIndex(j)) {
      throw "#swap called with invalid index."
    }
    
    var tmp = this.data[j];
    this.data[j] = this.data[i];
    this.data[i] = tmp;
  }
})(this)
