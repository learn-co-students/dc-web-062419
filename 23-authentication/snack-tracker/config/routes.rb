Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/superfunhome", to: "snacks#home", as: :home # Snack Controller; 'home' action/method
  # get "/snacks", to: "snacks#index"
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#logout"
  resources :users, only: [:new, :create]

end
