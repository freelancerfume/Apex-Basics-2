integer dayNumber = 1;
for (integer i = 0; i < 20; i++) {
  DateTime courseBeginingDate = DateTime.newInstance(2023, 1, 9).addDays(i);
  if (courseBeginingDate.format('EEEE') == 'Saturday' || courseBeginingDate.format('EEEE') == 'Sunday') {
    System.debug('Weekend' + + ' (' + courseBeginingDate.format('MMMM d, yyyy') + ')');
      continue;
  } else {
    System.debug(dayNumber + '. day of Flow Course Plan' + ' (' + courseBeginingDate.format('MMMM d, yyyy') + ')');
    dayNumber++;
  }
  if (courseBeginingDate == DateTime.newInstance(2023, 1, 20)) {
    break;
  }
}