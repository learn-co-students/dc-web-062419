require "pry"
class Tweet 
    attr_reader :message, :user

    @@all = []    
    #message is a string, user is an instace of the class User
    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def self.all 
        @@all
    end 

    def username 
        @user.username
    end
end