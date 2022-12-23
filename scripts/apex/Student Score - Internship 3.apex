decimal score = math.random()*100;
integer studentScore = integer.valueOf(score);
system.debug(studentScore);

if (studentScore >=90){
    system.debug('A');
} else if (studentScore >=80){
    system.debug('B');
} else if (studentScore >=70){
    system.debug('C');
} else if (studentScore >=60){
    system.debug('D');
} else if (studentScore >=50){
    system.debug('E');
} else {
    system.debug('F');}