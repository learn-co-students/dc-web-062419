class CatsController < ApplicationController
    def index
        render json: Cat.all.to_json(cat_serializer_options)
    end 

    def show
        cat = Cat.find(params[:id])
        render json: cat.to_json(cat_serializer_options)
    end 

    def create
        cat = Cat.create(cat_params)
        render json: cat
    end

    def destroy
        cat = Cat.find(params[:id])
        cat.destroy
        render json: cat
    end

    def update
        Cat.find(params[:id]).update(cat_params)
        render json: Cat.find(params[:id])
    end 

    private
    def cat_params
        params.require(:cat).permit(:name, :breed, :image, :fluffiness, :gender)
    end 

    def cat_serializer_options()
        {
            :include => {
                :hobbies => {
                    :except => [:created_at, :updated_at]
                }
            },
            :except => [:created_at, :updated_at]
        }
    end 
end


