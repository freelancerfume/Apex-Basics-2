public class Dinner {
    public Integer numberOfJuice;
    public String mealName;
    
    public class Meal {
        
        public void starterMethod(){
            system.debug('Fried Calamari');
        }
    }
    
    public Dinner(){
        numberOfJuice = 2;
        mealName = 'Pizza';
    }
    
    public Dinner(string otherMeal, integer newNumberOfJuice){
        numberOfJuice = newNumberOfJuice;
        mealName = otherMeal;
    }
    
    public Dinner(string otherMeal, integer newNumberOfJuice, integer afterDinnerNumberOfJuice){
        numberOfJuice = newNumberOfJuice + afterDinnerNumberOfJuice;
        mealName = otherMeal;
    }

    public void DinnerMethod(){
        system.debug('I ate '+mealName+' and drunk '+numberOfJuice+' glass of juice');
    }
    
}