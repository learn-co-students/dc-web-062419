class FavoritesController < ApplicationController
  def new
  end

  def create
    snack_ids = params[:snack_ids]
    current_user.snacks = []
    snack_ids.each do |id|
        new_favorite = Snack.find(id)
        current_user.snacks << new_favorite
    end
    redirect_to user_path(current_user)
  end
end
