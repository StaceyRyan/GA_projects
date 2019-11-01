class SessionsController < ApplicationController

  def new
    # redirect_to active_path
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to loggedin_index_path
    else
      redirect_to alert_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to home_path
  end
end