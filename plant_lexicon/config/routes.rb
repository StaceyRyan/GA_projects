Rails.application.routes.draw do
  get 'users/new'
  get 'users/create'

  root to: 'pages#welcome'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
get '/register' => 'users#new'
  post '/users' => 'users#create'
end
