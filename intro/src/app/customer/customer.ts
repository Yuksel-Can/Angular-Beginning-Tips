export class Customer {      //başkarıda erişebilsin diye export yazılır

    id: number;
    firstName: string;
    lastName: string;
    age: number;
    constructor(id: number,firstName: string, lastName: string,age: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName=lastName;
        this.age=age;
    }
}