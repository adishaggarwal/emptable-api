

export interface CRUD<T>
{
    getdata():void;
}

export enum ROLES{
    DEVELOPER,
    QA,
    DEVOPS
}

export class emp
{
    FirstName: string;
  MiddleName: string;
  LastName: string;
  Email: string;
  phoneno: any;
  role: ROLES;
  Address: string;
  id:number;

  constructor(firstName:string,middleName:string,lastName:string,email:string,phoneNo:number,address:string,id:number,role:ROLES)
  {
    this.FirstName = firstName;
    this.MiddleName = middleName;
    this.LastName = lastName;
    this.Email= email;
    this.phoneno=phoneNo;
    this.Address = address;
    this.id=id;
    this.role=  role;
  }
}

export class fetchjsondata{
    async fetch()
    {
        let browserdata= await fetch("http://localhost:3000/fetchjsondata");
        let data = await browserdata.json();
        return(data);
    }
}
