export class Customer {

    constructor(private _firstName: string,private _lastName: string){
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

