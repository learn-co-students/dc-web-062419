require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

binding.pry
require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

### Cars ###
#Car.new(make, model, classification )
racecar = Car.new("Audi", "Zoomie", "exotic")
clowncar = Car.new("VW", "Beatle", "clunker")
knightrider = Car.new("Pontiac", "1982 Firebird", "exotic")
antique = Car.new("Ford", "Model T", "antique")

### Mechanics ###
# Mechanic.new(name, specialty)
christian_slater = Mechanic.new("Christian Slater", "exotic")
fonzie = Mechanic.new("Fonzie", "antique")
baracus = Mechanic.new("B.A. Baracus", "exotic")
ronald = Mechanic.new("Ronald McDonald", "clunker")

### Car Owners ###
chine = CarOwner.new("Chine")
kolton = CarOwner.new("Kolton")
ashley = CarOwner.new("Ashley")

### NOTES ###
# Class files should be named using snake_case
# Class definitions should be named using CamelCase and ...
# ... compound words should be one word
# Binding.pry will not run if it is the last line of Ruby code executed
# Class variables could be written as @@all, ALL, or self.class.all, but they...
# ... are not interchangable
# Shared attributes may have different names across one or more seperate classes



binding.pry
0
