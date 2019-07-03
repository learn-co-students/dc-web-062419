class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def self.create(name)
        # instantiate new author and save to database
        # Author.create("J.K. Rowling") 
        author = Author.new(name)

        sql = "INSERT INTO authors (name) VALUES (?);"
        DB.execute(sql, author.name)
        id_sql = "SELECT last_insert_rowid()"
        id = DB.execute(id_sql)[0][0]
        author.id = id
        return author
    end

    def self.make_object_from_row(row)
        Author.new(row[1], row[0])
    end

    def self.find(id)
        sql = "SELECT * FROM authors where id = (?)"
        author_info = DB.execute(sql, id)[0]
        Author.make_object_from_row(author_info)
    end

    def self.all 
        # [[1, "Frederick Douglass"],
        #  [2, "Ann M. Martin"],
        #  [3, "Isaac Asimov"]]
        sql = "SELECT * FROM authors"
        author_info = DB.execute(sql)
        author_info.map {|row| Author.make_object_from_row(row)}
    end

end
