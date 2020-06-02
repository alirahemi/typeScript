class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    set firstName(value: string){
        this._firstName = value;
    }

    get firstName(){
        return this._lastName;
    }

    set lastName(value: string){
        this._lastName = value;
    }

    get lastName(){
        return this._firstName;
    }

}

let myCuctomer = new Customer("Ali", "Rahemi");
console.log(myCuctomer.firstName + myCuctomer.lastName);