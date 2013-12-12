(function (win) {
  var JSHeap = win.JSHeap = ( win.JSHeap || {} );

  var Heap = JSHeap.Heap = function (dataArr) {
    this.data = dataArr;
  };

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
    } 
    return Math.floor(i/2) - 1;
  }
})(this)
