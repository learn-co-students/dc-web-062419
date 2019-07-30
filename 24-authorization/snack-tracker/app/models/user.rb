class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_many :favorites
    has_many :snacks, through: :favorites
    has_secure_password
end
