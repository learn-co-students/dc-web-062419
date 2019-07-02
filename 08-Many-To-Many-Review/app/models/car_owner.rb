class CarOwner

  attr_reader :name

  @@all = []
  
  def initialize(name)
    @name = name
    @@all << self
  end

  # Get a list of all owners
  def self.all
    @@all
  end

  # Get a list of all the cars that an instance of owner has
  def cars_owned
    Car.all.select do |car|
      car.car_owner == self
    end
  end


  # Get the average amount of cars owned for all owners
  
  # Get a list of all the mechanics that a specific owner goes to
  def buy_car(car)
    car.car_owner = self
  end

end
