import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {
  namee = 'manasvi';
  namevalue:string='prinksha ';
  value: number=0;
  todaydate = new Date()
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();
  dataObj = {
    name: 'Test',
    value: 'data'
  }
  dateToday: string='';
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  userList: string[] = ["User 1", "User 101", "User 1011","User 2", "User 11", "User 3", "User 4", "User 5","User 110000", "User 6", "Test", "TT"];
  includeText = "1";

   name = 'Angular';
  
  persons = [
    {
      id: 1,
      name: 'manasvi Savani',
      gender: 'Female',
      website: 'vision.com',
      desc: 'Your Info: ',
    },
    {
      id: 2,
      name: 'sonali Patel',
      gender: 'Female',
      website: 'vision.com',
      desc: 'Your Info: ',
    },
    {
      id: 3,
      name: 'parth Makawana',
      gender: 'Male',
      website: 'vision.com',
      desc: 'Your Info: ',
    }
  ]

  nameSearch = '';
  emailSearch = '';
  roleSearch = '';
  accountSearch = '';

  data1 = [
    { displayName: '101', name: 'Name 1', email: 'name1@example.com', role: 'Developer', account: 'ABC', description: 'This is description 1' },
    { displayName: '102', name: 'Name 2', email: 'name2@example.com', role: 'Tester', account: 'ABC', description: 'This is description 2' },
    { displayName: '103', name: 'Name 3', email: 'name3@example.com', role: 'BRM', account: 'ABC', description: 'This is description 3' },
    { displayName: '104', name: 'Name 4', email: 'name4@example.com', role: 'Account Manager', account: 'ABC', description: 'This is description 4' },
    { displayName: '105', name: 'Name 5', email: 'name5@example.com', role: 'UX Designer', account: 'ABC', description: 'This is description 5' },
    { displayName: '106', name: 'Name 6', email: 'name6@example.com', role: 'Architect', account: 'ABC', description: 'This is description 6' },
    { displayName: '107', name: 'Name 7', email: 'name7@example.com', role: 'Developer', account: 'ABC', description: 'This is description 7' },
    { displayName: '108', name: 'Name 8', email: 'name8@example.com', role: 'Developer', account: 'ABC', description: 'This is description 8' },
    { displayName: '109', name: 'Name 9', email: 'name9@example.com', role: 'Developer', account: 'ABC', description: 'This is description 9' },
    { displayName: '110', name: 'Name 10', email: 'name10@example.com', role: 'Tech Lead', account: 'BCD', description: 'This is description 10' },
  ];

  constructor() { }

  ngOnInit(): void {
  this.dateToday = new Date().toDateString();

  }

}
