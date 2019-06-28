require "pry"

class Tweet 
    attr_reader :message, :user
    @@all = []    
    
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

    def likers
        #return all users that liked this tweet
        Like.all.select{|like| 
            like.tweet == self
        }.collect{|like|
            like.user
        }
    end 
end