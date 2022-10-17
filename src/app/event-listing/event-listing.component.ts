import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventListService } from 'src/services/eventListService.service';

export interface eventList{
  city:string;
  date:string;
  genere:string;
  image:string;
  name:string;
}

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {
  
  selectedCity:any;
  selectedMonth:any;
  eventList:any;
  cityList:any;
  
  monthList = ['January','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']

  constructor(private evevtService:EventListService) { }

  ngOnInit(): void {
     
    this.evevtService.getEvents().subscribe(res=>{
      this.eventList = res ;
      this.cityList = this.eventList.filter((el:{ city:any}, index:any, array:any[]) =>
        index === array.findIndex((findTest) =>
          findTest.city === el.city
      ));
     
     })
  }

  onChangeCity(event:any) {
    this.eventList = this.eventList.filter((item:any) => {
      if(item.city == this.selectedCity){
        return item;
      }
     
    }) 
  }
 
}

