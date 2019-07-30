class UsersController < ApplicationController

  before_action :authorized, only: [:show]
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
        @user.save
        cookies[:user_id] = @user.id
        redirect_to snacks_path
    else
        render :new
    end

  end 

  def show

    @user = User.find(params[:id])
    if @user.id != current_user.id
      redirect_to user_path(current_user)
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
