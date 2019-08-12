class HobbiesController < ApplicationController
    def index 
        render json: Hobby.all
    end 

    def secret
        render json: {message: "you found me"}
    end

end
