export var ROLES;
(function (ROLES) {
    ROLES[ROLES["DEVELOPER"] = 0] = "DEVELOPER";
    ROLES[ROLES["QA"] = 1] = "QA";
    ROLES[ROLES["DEVOPS"] = 2] = "DEVOPS";
})(ROLES || (ROLES = {}));
export class emp {
    constructor(firstName, middleName, lastName, email, phoneNo, address, id, role) {
        this.FirstName = firstName;
        this.MiddleName = middleName;
        this.LastName = lastName;
        this.Email = email;
        this.phoneno = phoneNo;
        this.Address = address;
        this.id = id;
        this.role = role;
    }
}
export class fetchjsondata {
    async fetch() {
        let browserdata = await fetch("http://localhost:3000/fetchjsondata");
        let data = await browserdata.json();
        return (data);
    }
}
