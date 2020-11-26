import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WeatherApiService {

    // Using City Name
    private openWeatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=4dddf97e6f90b62bc10e2131897f15cc';
    private apiKey = '4dddf97e6f90b62bc10e2131897f15cc';

    constructor(private http: HttpClient) {
    }

    getCurrentWeather(lat, long) {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + this.apiKey + '&lang=en&units=metric').pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert('Please check your internet connection!.');
        return throwError(errorMessage);
    }
}
