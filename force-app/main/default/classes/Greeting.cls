public class Greeting {
    
    public string firstName = 'Smith';
    public string fullName(){
        string lastName = 'Albert';
        string fName = firstName + ' ' + lastName;
        system.debug(fName);
        return fName;
    }
    
    public string greeting(){
        string greet = 'Hi';
        string fullGreet = greet + ' ' + fullName();
        system.debug(fullGreet);
        return fullGreet;
    }
    
    public void greetingAll(list<string> nameList){
        for(string name:nameList){
            system.debug('Hi '+ name);
        }
    }
    
    public void greetingAllButLast(list<string> nameList){
        for(integer i=0; i<nameList.size()-1; i++){
            system.debug('Hi '+ nameList.get(i));            
        }
    }
    
    public void greetingToSmith(list<string> nameList){
        for(string name:nameList){
            if(name=='Smith'){
            	system.debug('Hi '+ name);                
            } else {
            }
        }
    }
}



/*
Greeting testname = new Greeting();
system.debug(testname.greeting());
system.debug('**********************');
List<String> nameList = new List <String>();
nameList.add('Tuba');
nameList.add('Mervenur');
nameList.add('Elona');
nameList.add('Serra');
nameList.add('Gunay');
nameList.add('Elyesa');
nameList.add('Adam');
nameList.add('Destiny');
nameList.add('Tiffany');
nameList.add('Furkan');
nameList.add('Havva');
nameList.add('Max');
nameList.add('Smith');
testName.greetingAll(nameList);
system.debug('**********************');
testName.greetingAllButLast(nameList);
system.debug('**********************');
testName.greetingToSmith(nameList);
*/