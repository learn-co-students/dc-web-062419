require 'pry'
x = 3
# puts x.odd?

y = "hello world"
z = "Ann"
# puts x.class
# puts y.class
# puts z.class
# puts y.length

# puts y.[](4) #syntactic vinegar
# puts y[4]    #syntactic sugar

# class String
#     def length
#         #return the length of the string
#     end

#     def [](index)
#         #return the charact at that given index
#     end
# end

class Cat 
    attr_reader :name
    attr_writer :fluffiness
    attr_accessor :color

    @@all = []
    
    def initialize(cat_name, color, fluffiness=10)
        @name = cat_name
        @color = color
        @fluffiness = fluffiness
        @@all << self
    end 

    def meow
        puts "#{@name} is meowing...."
    end

    def talking_cat
        #inside of an instance method, self refers to that instance of the Cat class
        puts "Hello, my name is #{@name}. My fluffiness is #{@fluffiness}. I am #{self.fluffiness}"
    end

    #Custom getter
    def fluffiness
        if @fluffiness > 5
            return "Very fluffy"
        else
            return "Not too fluffy"
        end
    end

    def self.get_all_cats
        @@all
    end

    #self in a method name changes it to be a class method
    def self.get_class_name
        #self in a class method referes to that class
        return self.name
    end 

    def self.show_all_cat_info
        @@all.each{|cat_instance|
            puts "Cat name: #{cat_instance.name}"
            puts "Cat color: #{cat_instance.color}"
            puts "Cat is fluffy? #{cat_instance.fluffiness}"
            puts "************************"

        }
    end

    #Getter method
    # def name 
    #     @name
    # end 

    #Getter methods
    # def color
    #     @color
    # end

    #Setter method
    # def color=(new_color)
    #     @color = new_color
    # end 

    #Setter method
    # def fluffiness=(new_fluff)
    #     @fluffiness=new_fluff
    # end
end

ella = Cat.new("Ella", "black", 9)
garfield = Cat.new("Garfield", "orange", 2)
tom = Cat.new("Tom", "gray")

# ella.talking_cat
Cat.show_all_cat_info
