class UsersController < ApplicationController

  def new
  end

  def index
    @plants = Plant.all
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to login_path
    else
      redirect_to '/users/register'
    end
  end

  def user_params
    params.require(:user).permit(:user_name, :email, :postcode, :password, :password_confirmation)
  end

  include HTTParty
  def retrieve
    user = User.find_by(:id)
    weather = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?q=#{user[:postcode]},au&APPID=88c9c78962c8f55c3cec2717c3aadf1b&units=metric")
    resHash = JSON.parse(weather.body)
    @forecast = resHash['weather'][0]['main']
  end
end
