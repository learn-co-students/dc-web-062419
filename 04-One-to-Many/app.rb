class School
    attr_reader :name, :instructors
    def initialize(name)
        @name = name
        @instructors = []
    end

    #instructor_name is an Instructor instance
    def add_instructor(instructor)
        @instructors << instructor
    end
end 

class Instructor
    attr_accessor :name
    def initialize(name)
        @name = name
    end
end


flatiron = School.new("Flatiron School")
ann = Instructor.new("Ann")
chine = Instructor.new("Chinee")
trevor = Instructor.new("Trevor")
flatiron.add_instructor(ann)
flatiron.add_instructor(chine)
flatiron.add_instructor(trevor)


puts flatiron.name
puts ann.name
puts chine.name
puts trevor.name

chine.name = "Chine"

p flatiron.instructors



