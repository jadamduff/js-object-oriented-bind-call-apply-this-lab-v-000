//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, args) {
  this.call(fn);
}
