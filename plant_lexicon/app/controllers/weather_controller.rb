class WeatherController < ApplicationController
  include HTTParty
  def retrieve
    weather = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?q={zip code},au&APPID=88c9c78962c8f55c3cec2717c3aadf1b&units=metric");
    resHash = JSON.parse(weather.body)
    forecast = resHash['weather'][1]['main'][0]
    {forecast: weather}
  end
end
