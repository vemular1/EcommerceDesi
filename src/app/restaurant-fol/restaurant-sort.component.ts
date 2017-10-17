import { Component, OnInit } from '@angular/core';
import { LocationPipe } from './category.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-restaurants-sort',
  templateUrl: './restaurant-sort.component.html',
  styleUrls: ['./restaurant-sort.component.css'],
 
})
export class RestaurantsSortComponent implements OnInit {
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'locationName';
 
  constructor() { }

  ngOnInit() {
    this.records= [
      { Name: "Dwaraka",  locationName: "frisco 75034", ZipCode:"75034"  ,img:"http://is1.mzstatic.com/image/thumb/Purple5/v4/bb/16/a2/bb16a247-76fb-5a18-e07f-761346b86aba/mzl.rkduhchj.jpg/0x0ss-85.jpg" },
      { Name: "Al-maidah",  locationName: "plano 75023", Zipcode:"75023"  ,img:"https://s3-media2.fl.yelpcdn.com/bphoto/rNF6K2OYtzXAJgfadH-QcA/ls.jpg" },
      { Name: "Chennai Cafe",  locationName: "frisco 75034", Zipcode:"c" ,img:"https://res.cloudinary.com/grubhub/image/upload/w_400,h_300,f_auto,fl_lossy,q_80,c_fit/z27xxmbhzml6zt28tybx" },
      { Name: "Saaina",  locationName: "plano 75025",Zipcode:"75025" ,img:"https://cdn.restaurantguru.com/restaurants/small/w312/h280/166629226.jpg" },
      { Name: "mumbai grill",  locationName: "dallas 75252",Zipcode:"75252" ,img:"https://desidine2go.com/wp-content/uploads/2017/09/mumbaigrill-min.png" },
      { Name: "madurai thattu",  locationName: "Irving 75063",Zipcode:"75063", img:"https://s3-media3.fl.yelpcdn.com/bphoto/RJP1ytOyKz9vInuYIZuI8g/ls.jpg" },
      { Name: "hilltop",  locationName: "Irving 75038",Zipcode:"75038", img:"https://s3-media4.fl.yelpcdn.com/bphoto/fInpZ0m_O0RkIQTB56EvrA/ls.jpg" },
      { Name: "Hyderabad House",  locationName: "Irving 75038",Zipcode:"75038", img:"https://media-cdn.tripadvisor.com/media/photo-s/05/4d/2f/ed/hyderabad-house.jpg" },
      { Name: "Bheemas",  locationName: "frisco 75034", img:"https://desidine2go.com/wp-content/uploads/2017/03/bheemas_logo-min.png" },
      { Name:"Wild Mirchi", locationName:"plano 75075", img:"https://cdn.doordash.com/media/restaurant/cover/WildMirchiIndianGrill_31315_Plano_TX.png"},
      // { Name:"Madurai thattu",locationName :"Irving 75063", img:"https://www.placelookup.net/photos/590829.jpg"},
      { Name:"Bawarchi Swagruha",locationName :"Frisco 75034",img:"https://pringleapi.com/Documents/aedb69ae-03c6-48a0-9129-195f64248cdb/bawarchi_swagruha.png"},   
      { Name:"O'Desi Aroma",locationName :"Frisco 75024",img:"https://s3-media1.fl.yelpcdn.com/bphoto/bHHDSA5_eDTPbHMMg0-VZg/348s.jpg"},
      { Name:"Anjappar",locationName :"Irving 75063",img:"http://rinaz.net/images/2008/10/anjappar1.jpg"},     
      { Name:"Bombay Chop Stix", locationName :"Plano 75025",img:"https://res.cloudinary.com/grubhub/image/upload/w_400,h_300,f_auto,fl_lossy,q_80,c_fit/quetmbeuh1xoz6fz8dah"},
      { Name:"Basera Biriyani Grill",locationName :"Plano 75024",img:"https://res.cloudinary.com/grubhub/image/upload/w_400,h_300,f_auto,fl_lossy,q_80,c_fit/v3jdea1j2cumfcrxeoe2"},
      { Name:"hyderabad House",locationName :"irving 75038",img:"https://s3-media4.fl.yelpcdn.com/bphoto/oxizLPJNQVZO1ZxonQqG6w/ls.jpg" },
      { Name:"Lahori Kabab",locationName :"Frisco",img:"https://desidine2go.com/wp-content/uploads/2017/04/Lahori1.png"},
      { Name:"Saregama",locationName :"irving,75038",img:"https://www.indianfoodsguide.com/media/com_mtree/images/listings/m/297.jpg" },
      { Name:"saravana Bhavan",locationName :"irving,75063",img:"https://s3-media4.fl.yelpcdn.com/bphoto/oxizLPJNQVZO1ZxonQqG6w/ls.jpg"},
      { Name:"Sai Gayatri",locationName :"frisco 75035 ",img:"https://s3-media3.fl.yelpcdn.com/bphoto/rTHF1FIA7fF7wJf-lnm8pA/ls.jpg"},
      { Name:"Hyderabad House",locationName :"plano 75093 ",img:"https://s3-media4.fl.yelpcdn.com/bphoto/oxizLPJNQVZO1ZxonQqG6w/ls.jpg"},
      { Name:"godavari",locationName :"irving",img:"https://desidine2go.com/wp-content/uploads/2017/03/godavari_logo.png"},
      { Name:"chameli",locationName:"richardson 75081",img:"https://desidine2go.com/wp-content/uploads/2017/09/chameli-e1459919558499-min.jpg"},
      { Name:"Manchale",locationName:"flower mound",img:"https://desidine2go.com/wp-content/uploads/2017/03/Manchel_logo-min.png"},
       
   ];
 }

}