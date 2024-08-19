import { Component, Input, OnInit } from '@angular/core';
import { weatherDatas } from 'src/app/models/interfaces/weatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatasInput!: weatherDatas;

  ngOnInit(): void {
    console.log('DADOS RECEBIDOS DO COMPONENTE PAI - WEATHER-CARD: ', this.weatherDatasInput);
  }
}
