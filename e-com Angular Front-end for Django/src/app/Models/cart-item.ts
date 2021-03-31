export class CartItem {
    id:number;
    productId:number;
    productName:string;
    userId:number;
    price:number;
    orderId:number
    qty:number;

    constructor(){
        this.id=0;
        this.productId=0;
        this.productName="";
        this.userId=0;
        this.price=0;
        this.qty=0;
        this.orderId=0;
    }

}
