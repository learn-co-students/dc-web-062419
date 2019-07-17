require 'date'

class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        @date = Date.today.to_s(:long)
        erb :home
    end

    get "/about" do
        erb :about
    end 

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
        author = params[:author]
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
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.update(author: author, title: title, snippet: snippet)
        redirect "/books/#{@book.id}"
    end

end
