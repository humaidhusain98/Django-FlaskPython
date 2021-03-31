export class Address {
    id:number;
	
	userid:number;
	name:string;
	phonenumber:string; 
	landmark:string;
	addrLine1:string;
	addrLine2:string;
	city:string;
	state:string;
	country:string;
    pincode:number;
    
    constructor(){
        this.userid=0;
        this.name="";
        this.phonenumber="";
        this.landmark="";
        this.addrLine1="";
        this.addrLine2="";
        this.city="";
        this.state="";
        this.country="";
        this.pincode=0;
    }
}