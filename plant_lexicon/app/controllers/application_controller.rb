class ApplicationController < ActionController::Base

  # protect_from_forgery with: :exception

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def authorize
    redirect_to login_path unless current_user
  end

  def weather
    if session[:user_id]
      user = User.find(session[:user_id])
      weather = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?q=#{user[:postcode]},au&APPID=#{ENV['APIKEY']}&units=metric");
      resHash = JSON.parse(weather.body)
      sky = resHash['weather'][0]['main']
      temperature = resHash['main']['temp']
      max_t = resHash['main']['temp_max']
      min_t = resHash['main']['temp_min']
      {sky: sky, temperature: temperature, min_t: min_t, max_t: max_t}
    end
  end
  helper_method :weather
  # Use the helper_method to make this method accessible to other controllers
end
