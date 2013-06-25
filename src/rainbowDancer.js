var MakeRainbowDancer = function(top, left, timeBetweenSteps){
  return new RainbowDancer(top, left, timeBetweenSteps);
};

var RainbowDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // this.changecolor();
};
// MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;
// RainbowDancer.prototype.changecolor = function(){
//   this.$node.animate({color: 'blue'}, 'fast');
//   this.$node.animate({color: 'green'}, 'fast');
//   this.$node.animate({color: 'yellow'}, 'fast');
// };
RainbowDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  // this.$node.toggle();
  this.$node.animate({'color':'blue'}, 'slow');
  this.$node.animate({'color':'green'}, 'slow');
  this.$node.animate({'color':'yellow'}, 'slow');
  this.$node.animate({'color':'red'}, 'slow');
  this.$node.animate({'color':'purple'}, 'slow');
  this.$node.animate({'color':'orange'}, 'slow');
  this.$node.animate({'color':'peachpuff'}, 'slow');
  //

};
