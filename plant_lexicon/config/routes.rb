Rails.application.routes.draw do
  root to: 'pages#index', as: 'home'

  get 'pages/index', as: 'basic_view'

  get 'users/new'
  get 'users/create'

  get 'users/register' => 'users#new', :as => 'register_new_user'
  post 'users/create' => 'users#create', :as => 'create_user'

  get 'plants/full' => 'plants#full', :as => 'loggedin_index'
  get 'plants/:id' => 'plants#detailed', :as => 'loggedin_detailed'
end
