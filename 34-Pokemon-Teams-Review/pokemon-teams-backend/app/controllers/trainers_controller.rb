class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        render json: trainers.to_json(trainers_serializer)
    end

private

    def trainers_serializer
        {
            :except => [:created_at, :updated_at],
            :include =>  {
                :pokemons => {
                    :only => [:nickname, :species, :id]
                }
            }
        }
    end

end
