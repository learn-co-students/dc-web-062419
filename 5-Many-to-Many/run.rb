require_relative "./user.rb"
require_relative "./tweet.rb"
require_relative "./like.rb"
require "pry"

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")
soda_mom = User.new("Soda Mom")

tweet1 = Tweet.new("i love coffee", coffee_dad)
tweet2 = Tweet.new("drinking coffee", coffee_dad)
tweet3 = Tweet.new("making coffee", coffee_dad)
tweet4 = Tweet.new("Life is meaningless", coffee_dad)
tweet5 = Tweet.new("i like tea", tea_uncle)
tweet6 = Tweet.new("need to buy tea", tea_uncle)
tweet7 = Tweet.new("Life is wonderful", tea_uncle)

puts "User can like a tweet?"
puts coffee_dad.like_tweet(tweet7).class == Like
puts coffee_dad.like_tweet(tweet6).class == Like
puts coffee_dad.like_tweet(tweet5).class == Like
puts coffee_dad.like_tweet(tweet4).class == Like
puts tea_uncle.like_tweet(tweet4).class == Like

puts "Get all liked tweet of a user?"
#should return an array of tweet instances
puts coffee_dad.liked_tweets.include?(tweet7)
puts coffee_dad.liked_tweets.include?(tweet4)
puts !coffee_dad.liked_tweets.include?(tweet2)

puts "Get all users that like a tweet"
puts tweet4.likers.include?(coffee_dad)
puts tweet4.likers.include?(tea_uncle)
puts !tweet4.likers.include?(soda_mom)


binding.pry