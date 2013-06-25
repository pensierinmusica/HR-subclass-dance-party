// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();

//     /* toggle() is a jQuery method to show/hide the <span> tag.
//      * See http://api.jquery.com/category/effects/ for this and
//      * other effects you can use on a jQuery-wrapped html tag. */
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // this = Object.create(MakeBlinkyDancer.prototype);

  // this = new MakeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return this;
};

MakeBlinkyDancer.prototype = new MakeDancer();
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.toggle();
  };