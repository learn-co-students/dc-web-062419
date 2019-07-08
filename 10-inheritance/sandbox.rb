module Swimmable

    def swim 
        return "Going for a dip"
    end

    def can_swim?
        return true
    end

end

class Animal

    attr_accessor :name

    def initialize(name)
        @name = name
    end


    def speak
        puts "I am an animal named #{self.name}"
    end

end

class Mammal < Animal 

    def walk
        "I am taking a walk"
    end
end

class Cat < Mammal

    def speak
        puts "Meow I am the best animal."
        super()
    end
end

class Dog < Mammal
    DOG_YEARS = 7

    attr_accessor :age

    def initialize(name, age)
        @age = age
        super(name)
    end

    def say_human_age
        if human_years > 30
            puts "I am an adult dog"
        else 
            puts "I am a puppy"
            puts human_years
        end
    end

    private

    def human_years
        self.age * DOG_YEARS
    end


end


raven = Dog.new("Raven", 8)
raven.say_human_age
