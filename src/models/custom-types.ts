export type Card = {
    set:string,
    card1:string,
    card2:string
  }

  export type ColorpatchDto = {
    r:number,
    g:number,
    b:number,
    a:number,
    name:string,
    id:number
  }
  
  export class ContactInfo {
    subject:string = '';
    message:string = '';
    email:string = '';
    dateOfBirth:Date = new Date();
   }