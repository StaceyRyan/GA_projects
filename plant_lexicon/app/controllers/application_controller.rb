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
      weather = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?q=#{user[:postcode]},au&APPID=88c9c78962c8f55c3cec2717c3aadf1b&units=metric");
      resHash = JSON.parse(weather.body)
      resHash['weather'][0]['main']
    end
  end
  helper_method :weather
  # Use the helper_method to make this method accessible to other controllers
end
