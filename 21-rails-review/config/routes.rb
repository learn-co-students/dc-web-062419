Rails.application.routes.draw do
  resources :ports
  resources :ships, only: [:show, :new, :create]
end
