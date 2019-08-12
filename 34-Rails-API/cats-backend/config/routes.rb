Rails.application.routes.draw do
  get '/hobbies', to: 'hobbies#index'
  get '/secret_message', to: 'hobbies#secret'
  get '/cats', to: 'cats#index'
  get '/cats/:id', to: 'cats#show'
  post '/cats', to: 'cats#create'
  delete '/cats/:id', to: 'cats#destroy'
  patch '/cats/:id', to: 'cats#update' 
end
