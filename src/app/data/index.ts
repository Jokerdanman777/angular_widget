import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const data: Hotel[]  = [
    {
    address: '35 Boston Street',
    phone:  543876,   // дополнительно задание pipe для форматирования
    weather: {
       title: 'Boston',
       water: 19,
       temperatur: 33
    },
    social_info: {
       title: '@Boston',
       followers: 25000,
       following: 32000
    },
    id: 1
  },
  {
    address: 'Hollywood Boulevard‎',
    phone:  876832,   // дополнительно задание pipe для форматирования
    weather: {
       title: 'LA',
       water: 30,
       temperatur: 36
    },
    social_info: {
       title: '@LA',
       followers: 100000,
       following: 250000
    },
    id: 2
  },
  {
    address: '150 California Street',
    phone:  867287,   // дополнительно задание pipe для форматирования
    weather: {
       title: 'California',
       water: 29,
       temperatur: 35
    },
    social_info: {
       title: '@California',
       followers: 99000,
       following: 19900
    },
    id: 3
  },
  {
    address: '1312 Delaware St',
    phone:  867592,   // дополнительно задание pipe для форматирования
    weather: {
       title: 'Delaware',
       water: 25,
       temperatur: 33
    },
    social_info: {
       title: '@Delaware',
       followers: 15000,
       following: 9000
    },
    id: 4
  }
];

export const hotels$: Observable<Hotel[]> =
  Observable.of(data);