class Owner
  @@all = []
  attr_reader :species, :name
  def initialize(name)
    @name = name 
    @species= "human"
    self.class.all << self
  end

  def cats  
    Cat.all.select {|cat| cat.owner == self }
  end

  def dogs
    Dog.all.select {|dog| dog.owner == self}
  end

  def buy_cat(new_cat)
    
    Cat.new(new_cat, self)

  end

  def buy_dog(new_dog)
    Dog.new(new_dog,self)
  end

  def self.all
    @@all
  end  

  def self.count
    self.all.count
  end

  def self.reset_all
    self.all.clear
  end

  def say_species
      "I am a #{self.species}."
  end

  def walk_dogs
    self.dogs.each {|dog| dog.mood = "happy"}
  end

  def feed_cats
    self.cats.each {|cat| cat.mood = "happy"}
  end

  def sell_pets
    binding.pry
    pets = self.cats + self.dogs
    pets.each do |pet| 
      pet.mood = "nervous"
      pet.owner = nil
    end
  end 

  def list_pets
    "I have #{self.dogs.size} dog(s), and #{self.cats.size} cat(s)."
  end

end