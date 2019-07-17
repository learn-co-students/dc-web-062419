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

    
end
