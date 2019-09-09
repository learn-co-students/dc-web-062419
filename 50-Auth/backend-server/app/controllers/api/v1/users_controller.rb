require "byebug"

class Api::V1::UsersController < ApplicationController

  def show
    token = request.headers["Authentication"].split(" ")[1]
    render json: User.find(decode(token)["user_id"]), status: :accepted
  end

end
