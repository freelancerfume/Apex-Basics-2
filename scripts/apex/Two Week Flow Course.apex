integer i=0;
integer x=0;

while(i<100){
    i++;
    if(i<8 && i>5){
        x++;
        system.debug('weekend');
        continue;
    }
    if(i==13){
        break;
    }
    system.debug((i-x)+'. Day of Flow Course Plan');
}