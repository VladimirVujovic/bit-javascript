


function CulinareRecipe(typeCousine, complexity, ingredients, time, preparing) {
  this.typeCousine = typeCousine;
  this.complexity = complexity;
  this.ingredients = ingredients;
  this.time = time;
  this.preparing = preparing;


  this.printIngredients = function() {
    console.log(this.ingredients);
}
}  this.checkTimePrepare = function(){
        if(this.time < 15){
          console.log("Yes!")
      
}       else{
          console.log("No!")
        }
      this.whatTypeCousine=function (){
      if(this.typeCousine !== "Chinese"){
            this.typeCousine = "Chinese"
      }
    this.deleteIngredients=function(element){ 
          for(var i = 0; i<ingredients.length; i++){
            if(element !== ingredients[i]){
                 delete element;
            }
        }
          
    }
}

var recipe = new CulinareRecipe("Chinese",[0,1,2,3,4,5],["banana", "orange","mango"],5,"easy");
recipe.printIngredients();

var element = "babana";

console.log(CulinareRecipe);
