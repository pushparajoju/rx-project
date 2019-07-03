import { Observable, from } from "rxjs";
import { map} from 'rxjs/operators';


var observable = Observable.create((observer:any) => {
    try {
        observer.next('Rxjs is cool')
        observer.next('Liking it?')
        setInterval(() => {
            observer.next('delayed msg')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

var subscription = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);


// continues infinitely ...
var subscription2 = observable.subscribe(
    (x:any) => addItem(x)  
);

function addItem(val:any) {console.log(val); }


setTimeout(() => {
    console.log("time over.....");
    subscription.unsubscribe();
    subscription2.unsubscribe();
}, 6001);

/// doubling a value
var numbers = [3, 9, 7];
var source = from(numbers).pipe(map((value: any) => {
    return 2 * value;
}));

source.subscribe((value: any) => {
    console.log("doubled value: ", value);
})
