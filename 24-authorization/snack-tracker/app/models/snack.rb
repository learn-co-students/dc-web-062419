class Snack < ApplicationRecord
    belongs_to :retailer, optional: true
    has_many :favorites
    has_many :users, through: :favorites
end
