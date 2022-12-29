class User{
    constructor(name, surname,){
        this.name = name;
        this.surname= surname;
    }
}
 const today = new Date();
 today.setFullYear(today.getFullYear() +5);

 class Student extends User{
    constructor( name, surname,year){
        super(name, surname)
        this.year = year;
    }
    getFullName(){
       return `И.Ф.: ${this.name + " " + this.surname}`;
     };
     getCourse(){
        return `Kурс: ${today.getFullYear() - this.year}`;
     };
 }
 


 let student = new Student ("Айгерим","Алашева", 2023)
 console.log(student.getFullName());
 console.log(`Год поступление: ${ student.year}`);
 console.log(`Текущий год: ${today.getFullYear()}`);
 console.log(student.getCourse());