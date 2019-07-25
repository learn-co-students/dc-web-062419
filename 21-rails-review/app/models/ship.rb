class Ship < ApplicationRecord
    has_many :dockings
    has_many :ports, through: :dockings
    validates :name, presence: true

    accepts_nested_attributes_for :ports

    def current_docking
        self.dockings.select do |docking|
            docking.docked == true
        end.last
    end
end
