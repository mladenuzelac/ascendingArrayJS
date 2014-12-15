 function solution (A) {

	var result = [];
    var max_counter = counter = 0;
    var position = 0;

    for (var i = 0; i < A.length; i++) {

        if (i === 0) {
          counter = 1;
          position = i;
        }

        if (i > 0) {
          current = A[i];
          previous = A[i-1];

          if (current <= previous){
            counter = 1;
            position = i;
          }

          if (current > previous) {
            counter += 1;
          }
        }

        if (counter > max_counter) {
          result = [];
        }

        max_counter = Math.max(counter, max_counter);

        if (counter === max_counter) {
          result.push(position);
        }
      };

      return result;

}