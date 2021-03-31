export class OrderItem {
    id:number;
    addressid:number;
    userid:number;
    amt:number;
    status:String;
    mode:String;
    constructor(){
        this.id=0;
        this.addressid=0;
        this.userid=0;
        this.amt=0;
        this.status="";
        this.mode="";
    }
}
