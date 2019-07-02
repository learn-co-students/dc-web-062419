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
christian_slater = Mechanic.new("Christian Slater")
fonzie = Mechanic.new("Fonzie")
baracus = Mechanic.new("B.A. Baracus")
ronald = Mechanic.new("Ronald McDonald")

### Car Owners ###
chine = CarOwner.new("Chine")
kolton = CarOwner.new("Kolton")
ashley = CarOwner.new("Ashley")

### Car Methods ###
# puts "Chine buys a car"
puts chine.buy_car(clowncar)
puts chine.buy_car(knightrider)

# puts "Get array of all car instances"
# print Car.all

# puts "Return an array of all car classifications (as strings)"
# print Car.get_classifications

## Mechanic Methods ###
ronald.fix_car(clowncar)
ronald.fix_car(knightrider)
fonzie.fix_car(antique)
baracus.fix_car(racecar)


# puts clowncar.mechanic.name

### NOTES ###
# Class files should be named using snake_case
# Class definitions should be named using CamelCase and ...
# ... compound words should be one word
# Binding.pry will not run if it is the last line of Ruby code executed
# Class variables could be written as @@all, ALL, or self.class.all, but they...
# ... are not interchangable
# Shared attributes may have different names across one or more seperate classes

# chine.cars_owned
ronald.call_owners


