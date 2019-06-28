require "pry"

class Backer
    attr_reader :name
    def initialize(name)
      @name = name
    end
  
    def back_project(project)
      Backer_Project.new(self, project)
    end

    def backed_projects
      #Ex: get all projects backed by chine 
      #Look at Backer_Project
      #Find all instances that have chine as @backer
      #Form those instances, we have to collect the @project
      Backer_Project.all.select{|bp| 
        bp.backer == self
      }.map{|bp| 
        bp.project
      }
    end
  end

class Project
    attr_reader :title
    def initialize(title)
        @title = title
    end

    def add_backer(backer)
      Backer_Project.new(backer, self)
    end

    def backers 
      Backer_Project.all.select{|bp|
        bp.project == self
      }.collect{|bp|
        bp.backer
      }
    end 
end

class Backer_Project
  attr_reader :backer, :project
  @@all = []
  def initialize(backer, project)
    @backer = backer 
    @project = project 
    @@all << self
  end 

  def self.all 
    @@all
  end
end

trevor = Backer.new("Trevor")
chine = Backer.new("Chine")
karaoke = Project.new("Karaoke Machine")
iron = Project.new("Iron Board")
snacks = Project.new("Snack Bar")

trevor.back_project(snacks)
trevor.back_project(iron)
chine.back_project(karaoke)
snacks.add_backer(chine)

p chine.backed_projects

binding.pry
