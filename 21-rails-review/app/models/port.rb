class Port < ApplicationRecord
    has_many :dockings
    has_many :ships, through: :dockings



end
