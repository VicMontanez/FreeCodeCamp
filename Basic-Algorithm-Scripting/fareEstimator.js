function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  // var total1 = [];
  // var total2 =[];
  var sum = [];

  for (var i = 0; i < cost_per_minute.length; i++) {
    var totals =
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;
    sum.push(totals);
    console.log(totals);
  }
  return sum;
  //     for (var i = 0; i < cost_per_mile.length; i++){
  //         total2.push(ride_distance * cost_per_mile[i])

  //     }
  // for (var i = 0; i < total1.length; i++) {
  //     for (var j = 0; j < total2.length; j++) {
  //         sum.push(total1[i] + total2[j])
  //     }
  // }
}
