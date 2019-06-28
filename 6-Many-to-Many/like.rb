class Like 
    attr_reader :user, :tweet
    @@all = []
    #user is an instance 
    #tweet is an instance 
    def initialize(user, tweet)
        @user = user 
        @tweet = tweet
        self.class.all << self
    end

    def self.all
        @@all
    end
end 