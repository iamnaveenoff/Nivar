import {Component, OnInit} from '@angular/core';
import {WeatherApiService} from '../services/weather-api.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    constructor(private apiService: WeatherApiService) {
    }

    ngOnInit() {
        /*this.apiService.getCurrentWeather().subscribe((faq) => {

            console.log(faq);

        });*/
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                // this.callApi(longitude, latitude);
                console.log(' Latitude: ' + latitude + ' longitude: ' + longitude);
            });
        } else {
            console.log('No support for geolocation')
        }

    }

}
