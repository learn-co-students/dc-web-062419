class Docking < ApplicationRecord
    belongs_to :ship
    belongs_to :port
end
