class SessionsController < ApplicationController
  
  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
        cookies[:user_id] = @user.id
        redirect_to snacks_path
    else
        flash[:notice] = "No User found with that name / password"
        render :new
    end
  end

  def logout
    cookies.delete(:user_id)
    redirect_to login_path
  end

end
