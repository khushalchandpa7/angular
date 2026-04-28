import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = signal([
    {
      id: 'USR7369',
      firstName: 'Khushal',
      lastName: 'Chandpa',
      city: 'Porbandar',
      profession: 'Software Developer',
    },
    {
      id: 'USR1048',
      firstName: 'Aditya',
      lastName: 'Verma',
      city: 'Bengaluru',
      profession: 'Software Engineer',
    },
    {
      id: 'USR2931',
      firstName: 'Kavita',
      lastName: 'Reddy',
      city: 'Hyderabad',
      profession: 'Data Analyst',
    },
    {
      id: 'USR8842',
      firstName: 'Arjun',
      lastName: 'Patel',
      city: 'Ahmedabad',
      profession: 'Business Consultant',
    },
    {
      id: 'USR5019',
      firstName: 'Neha',
      lastName: 'Sharma',
      city: 'New Delhi',
      profession: 'Product Manager',
    },
    {
      id: 'USR7734',
      firstName: 'Siddharth',
      lastName: 'Iyer',
      city: 'Chennai',
      profession: 'UX Designer',
    },
    {
      id: 'USR8421',
      firstName: 'Ishaan',
      lastName: 'Kapoor',
      city: 'Mumbai',
      profession: 'Product Manager',
    },
    {
      id: 'USR3152',
      firstName: 'Anjali',
      lastName: 'Menon',
      city: 'Kochi',
      profession: 'UI/UX Designer',
    },
    {
      id: 'USR9067',
      firstName: 'Rohan',
      lastName: 'Deshmukh',
      city: 'Pune',
      profession: 'DevOps Engineer',
    },
    {
      id: 'USR4410',
      firstName: 'Meera',
      lastName: 'Chatterjee',
      city: 'Kolkata',
      profession: 'Content Strategist',
    },
    {
      id: 'USR6289',
      firstName: 'Siddharth',
      lastName: 'Malhotra',
      city: 'Delhi',
      profession: 'Financial Analyst',
    },
    {
      id: 'USR1174',
      firstName: 'Priya',
      lastName: 'Bansal',
      city: 'Gurugram',
      profession: 'HR Specialist',
    },
    {
      id: 'USR5532',
      firstName: 'Arjun',
      lastName: 'Nair',
      city: 'Thiruvananthapuram',
      profession: 'Backend Developer',
    },
    {
      id: 'USR7704',
      firstName: 'Vikram',
      lastName: 'Singh',
      city: 'Jaipur',
      profession: 'Cloud Architect',
    },
    {
      id: 'USR3925',
      firstName: 'Diya',
      lastName: 'Joshi',
      city: 'Ahmedabad',
      profession: 'QA Engineer',
    },
  ]);
}
