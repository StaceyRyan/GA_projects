class WeatherController < ApplicationController
  include HTTParty
  def retrieve
    user = User.find(session[:user_id])
    weather = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?q=#{user[:postcode]},au&APPID=88c9c78962c8f55c3cec2717c3aadf1b&units=metric");
    resHash = JSON.parse(weather.body)
    @forecast = resHash['weather'][0]['main']
  end

end
