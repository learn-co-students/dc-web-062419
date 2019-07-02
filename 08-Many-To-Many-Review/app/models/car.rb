class Car

  attr_reader :make, :model, :classification
  attr_accessor :car_owner, :mechanic

  @@all = []

  def initialize(make, model, classification)
    @make = make
    @model = model
    @classification = classification
    self.class.all << self
  end

  # Get a list of all cars
  def self.all
    @@all
  end


# Get a list of all car classifications
def self.get_classifications
  cars_resp = @@all.map do |car|
    car.classification
  end
end


# Get a list of mechanics that have an expertise that matches the car classification

end
