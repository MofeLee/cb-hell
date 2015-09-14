var fn1 = function(data, cb) {
    // some async operation.
    setTimeout(function() {
        var r1 = "result of fn1";
        cb(r1);
    }, 1000);
};

var fn2 = function(data, cb) {
    // some async operation.
    setTimeout(function() {
        var result = "result of fn2";
        cb(result);
    }, 1000);
};

var fn3 = function(data, cb) {
    // some async operation.
    cb("result of fn3");
};

var fn4 = function(data, cb) {
    // some async operation.
    cb("result of fn4");
};


// how to eliminate the nesting.
//fn1("begin", function(r1) {
//    fn2(r1, function(r2) {
//        fn3(r2, function(r3) {
//            fn4(r3, function(r4) {
//                console.log(r4);
//            });
//        });
//    });
//});

// warp(fn1, 'begin')
//   .then(fn2)
//   .then(fn3)
//   .then(fn4);

var tasks = [
  fn1,
  fn2,
  fn3,
  fn4
];

function next(data, cb){

  var currentTask = tasks.shift();

  if(currentTask){
    currentTask(data, next);
  }
}

tasks.push(function(r4){
  console.log(r4);
});

next('begin');