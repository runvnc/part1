exports.pr = function(func) {
  return new Promise( res => {
    func();
    res();
  });
}
