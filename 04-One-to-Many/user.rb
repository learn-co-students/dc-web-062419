class User 
    attr_reader :username
    #initialize which takes a username and have a reader method for the username
    def initialize(username)
        @username = username
    end

    #returns an array of Tweet instances for a User
    def tweets
        #Looked at all tweets
        #select only the tweets that match the User
        Tweet.all.select{|tweet| tweet.user == self }
    end 

    #post_tweet that takes a message, 
    #creates a new tweet
    #adds it to the user's tweet collection
    def post_tweet(message)
        Tweet.new(message, self)
    end
end