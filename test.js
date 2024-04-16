const readFileThunk = (url) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(url)
    }, 1000)
  })
}
const run = (g) => {
  const it = g()

  const init = () => {
    let result = it.next()
    if (result.done) return;
    result.value.then((url) => {
      console.log(url);
      init()
    })
  }
  init()
}
var g = function* () {
  var f1 = yield readFileThunk('fileA');
  var f2 = yield readFileThunk('fileB');
  // ...
  var fn = yield readFileThunk('fileN');
};

run(g);