class Mechanic

  attr_reader :name, :specialty

def initialize(name)
  @name = name
  # @specialty = specialty
end

def fix_car(car)
  car.mechanic = self
end

def cars_in_shop
  Car.all.select do |car|
    car.mechanic == self
  end
end

# Puts out a phone message for each owner whose car is in the mechanic's shop
def call_owners
  self.cars_in_shop.each do |car|
    puts "Hey fool #{car.car_owner.name} your car was stolen! Do you have insurance?"
  end
end

# Get a list of all mechanics
# Get a list of all cars that a mechanic services
# Get a list of all the car owners that go to a specific mechanic
# Get a list of the names of all car owners who go to a specific mechanic


end
