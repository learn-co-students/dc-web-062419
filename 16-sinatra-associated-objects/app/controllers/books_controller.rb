class BooksController < Sinatra::Base

    set :views, "app/views/books"

    get "/books" do 
        # show a list of all the books  (index)
        @books = Book.all    
        erb :index
    end

    get "/books/new" do 
        # loads blank form for creating new book
        erb :new
    end

    post "/books" do 
        # creates a new book based on form parameters
        author = Author.find_or_create_by(name: params[:author])
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "/books/#{book.id}"

    end

    get "/books/:id" do
        # shows a detail page for an individual book (show)
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    get "/books/:id/edit" do 
        @book = Book.find(params[:id])
        erb :edit
    end

    put "/books/:id" do 
        @book = Book.find(params[:id])
        author = Author.find_or_create_by(name: params[:author])
        title = params[:title]
        snippet = params[:snippet]
        @book.update(author: author, title: title, snippet: snippet)
        redirect "/books/#{@book.id}"
    end

    delete "/books/:id" do 
        @book = Book.find(params[:id])
        @book.destroy
        redirect "/books"
    end


end