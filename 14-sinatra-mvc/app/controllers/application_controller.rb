require 'date'

class ApplicationController < Sinatra::Base

    set :views, "app/views"

    get "/" do 
        @date = Date.today.to_s(:long)
        erb :home
    end

    get "/about" do
        erb :about
    end 

    get "/books" do 
        # show a list of all the books
        @books = Book.all    
        erb :index
    end

    get "/books/:id" do
        # shows a detail page for an individual book 
        id = params[:id]
        @book = Book.find(id)
        erb :show

    end

end
