require './config/environment.rb'

puts "Who is your favorite Author?"
user_input = gets.chomp

author = Author.find_or_create_by(name: user_input)

puts "You chose #{author.name}.  What a great author."