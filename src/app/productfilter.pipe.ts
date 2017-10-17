import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    

  transform(some:any){
    var compressed = [];
    var original = [];

    if(some){
        for(var m = 0; m<some.length; m++){
            
            original.push(some[m].name);
            
                    }
    }
    
    // make a copy of the input array
    var copy = original.slice(0);
 
    // first loop goes over every element
    for (var i = 0; i < original.length; i++) {
 var myCount = 0;
 var quan=0;

        for (var w = 0; w < copy.length; w++) {
            if (original[i] == copy[w]) {
                // increase amount of times duplicate is found
                myCount++;
                quan += some[w].quantity;
               
                delete copy[w];
            }
        }
 
        if (myCount > 0) {

           
            var b = function(name, count, price,img){
                this.name = name;
                this.info = count;
                this.price = price;
                
                this.img = img;
            }
            var a = new b(some[i].name,quan,some[i].price,some[i].img);
           
            compressed.push(a);
           
        }
    }
     console.log("filter"+some);
 console.log(compressed);
    return compressed;
};
  
 
}