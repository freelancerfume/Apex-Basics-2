public class client {
    
    public string name = 'Elyesa';
    public integer age = 30;

    public void clientDataMethod(){

        String ageToText = String.valueOf(age);
        system.debug('The name of the client is ' + name + ' and the age is ' + ageToText);
    }
}