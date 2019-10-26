class SessionsController < ApplicationController

  def new

  end

    def destroy
      session[:user_id] = nil
      redirect_to root_home, notice: "You are logged out"
    end

  end
end