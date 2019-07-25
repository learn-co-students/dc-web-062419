class ShipsController < ApplicationController
    before_action :find_ship, only: :show

    def show
    end

    def new
        @ship = Ship.new
        @categories = [ "Ghost Ship", "Pirate Ship", "Cargo Ship", "Cruise Ship" ]
        @ship.ports.build()
    end

    def create
        byebug
        @ship = Ship.new(ship_params)
        if @ship.save
            redirect_to @ship
        else
            render :new
        end
    end



    private

    def ship_params
        params.require(:ship).permit(:name, :category, :crew_size, 
            ports_attributes: [:location, :name, :category, :docks])
    end

    def find_ship
        @ship = Ship.find(params[:id])
    end
end
