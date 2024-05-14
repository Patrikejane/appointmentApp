import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent  implements OnInit {


  appointments: Appointment[] = [
    {
      id: Date.now(),
      title: 'Take a Dog to walk',
      date: new Date('2024-03-25'),
    },
    {
      id: Date.now(),
      title: 'Take a Dog to walk',
      date: new Date('2024-03-25'),
    },
  ];

  appointmentTitle: string = '';
  appointmentDate: Date = new Date();



  ngOnInit(): void {

    let savedAppointments = localStorage.getItem("appointment");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments):[];
    
  }




  addAppointment() {
    if (this.appointmentTitle.trim().length && this.appointmentDate) {
      let newAppontment = {
        id: Date.now(),
        title: this.appointmentTitle,
        date: this.appointmentDate,
      };

      this.appointments.push(newAppontment);

      this.appointmentTitle = '';
      this.appointmentDate = new Date();

      localStorage.setItem("appointment",JSON.stringify(this.appointments));
      // alert(this.appointments.length);
      // console.log(appointments.length);
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);

    localStorage.setItem("appointment",JSON.stringify(this.appointments));
  }
}
