import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() {
  }

  ngOnInit(): void {
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490486400000,
      children: null
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{name: 'Ted', age: 12}, {name: 'Cloe', age: 15}]
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1485388800000,
      children: null
    }, {
      id: 4,
      fullname: 'Todd',
      checkedIn: true,
      checkInDate: 1488067200000,
      children: [{name: 'Jacqueline', age: 3}]
    }, {
      id: 4,
      fullname: 'Christian',
      checkedIn: false,
      checkInDate: 1487721600000,
      children: [{name: 'Tom', age: 17}]
    }];
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}
