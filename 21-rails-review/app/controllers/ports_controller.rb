class PortsController < ApplicationController
    def new
        @port = Port.new
    end

    def show 
        @port = Port.find(params[:id])
    end 

    def create
        byebug
        @port = Port.new(port_params)
        @port.save
        redirect_to @port
    end

    private
    def port_params
        params.require(:port).permit(:docks, :location, :name, :category, :ship_ids )
    end
end
