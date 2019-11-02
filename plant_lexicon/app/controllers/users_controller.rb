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

  def deregister

  end

  def destroy
    @u1 = User.find(session[:user_id])
    @u1.destroy
    session[:user_id] = nil
    redirect_to register_path
  end
end
