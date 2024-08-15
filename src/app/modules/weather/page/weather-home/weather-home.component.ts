import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'São Paulo';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => console.log(error),
    });
  }
}
