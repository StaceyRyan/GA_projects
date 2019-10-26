class ApplicationController < ActionController::Base

  #Call the fetch_user method before an action is performed
  # before_action :fetch_user

  private
  def fetch_user
    if session[:user_id].present?
      @current_user = User.find_by :id => session[:user_id]

      session[:user_id] = nil unless @current_user
    end
  end

  def authorize_user
    redirect_to home_path unless @current_user.present?
  end
end
