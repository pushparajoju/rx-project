
import { timer, interval } from 'rxjs';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';

//emit value every 1s
const source = interval(1000);

const mydata = source.pipe(
  map(val => {
    console.log("val: ", val)
    if (val > 5) {
      //error will be picked up by retryWhen
      throw val;
    }
    return val;
  }),
  retryWhen(errors =>
    errors.pipe(
      //log error message
      tap(val => console.log(`Value ${val} was too high!`)),
      //restart in 6 seconds
      delayWhen(val => timer(val * 1000))
    )
  )
);

// console.log(mydata);
const subscribe = mydata.subscribe(val => console.log("subscribed val: ",  val));
