require_relative "./user.rb"
require_relative "./tweet.rb"
require "pry"

puts "Welcome to Twitter"
coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")
tweet1 = Tweet.new("i love coffee", coffee_dad)
tweet2 = Tweet.new("i love tea", tea_uncle)
tweet3 = Tweet.new("drinking coffee", coffee_dad)
tweet4 = Tweet.new("I hate everything", coffee_dad)

puts "Get username of any user?"
puts coffee_dad.username == "Coffee Dad"
puts tea_uncle.username == "Tea Uncle"

puts "Get message of a tweet?"
puts tweet1.message == "i love coffee"

puts "Get user of a tweet?"
puts tweet1.user == coffee_dad
puts tweet2.user == tea_uncle

puts "Get all Tweets?"
puts Tweet.all.include?(tweet1)
puts Tweet.all.include?(tweet2)

puts "Get the username of a tweet?"
puts tweet1.username == "Coffee Dad"
puts tweet2.username == "Tea Uncle"

puts "Get all tweets for a user?"
puts coffee_dad.tweets.include?(tweet1)
puts coffee_dad.tweets.include?(tweet3)
puts coffee_dad.tweets.include?(tweet4)
puts !coffee_dad.tweets.include?(tweet2)
puts tea_uncle.tweets.include?(tweet2)

puts "Can Post a new tweet?"
tweet5 = coffee_dad.post_tweet("drinking more coffee")
puts coffee_dad.tweets.include?(tweet5)


binding.pry