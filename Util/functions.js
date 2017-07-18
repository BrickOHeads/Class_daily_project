function massBuild(quantity, options){
this.quantity = quantity;
this.color = color;
return {
  console.log("Building " + this.quantity + this.color + this.trimModels"'s")
}
}

customerBuild(color, options){
  this.color = color;
  this.options = options;
  return {
    console.log("Building one " + this.color + this.trimModels + "with the following options: " + this.options);
  }
}

export {massBuild, customerBuild}
