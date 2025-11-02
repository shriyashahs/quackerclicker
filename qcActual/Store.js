/**
 * Class Store 
 */
class Store{
   constructor(name, price){
      this.name;
      this.price*getMultiplier();
   }

   buy(){
      removeQuacks(this.price);
      QPS();
   }


}