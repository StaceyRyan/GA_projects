Rails.application.routes.draw do
  root to: 'pages#index', as: 'home'

  get 'pages/index'

  get 'users/new'
  get 'users/create'

  get 'users/register' => 'users#new', :as => 'register_new_user'
  post 'users/create' => 'users#create', :as => 'create_user'
end
