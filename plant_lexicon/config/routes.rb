Rails.application.routes.draw do
  root to: 'pages#index', as: 'home'

  # The resources route maps actions to the controller.
  # By default it maps all seven - index, show, new, create, edit, update, destroy
  # To restrict which actions are mapped, use only.
  # resources :sessions, only: [:new, :create, :destroy]

  get 'pages/index', as: 'basic_view'

  get 'users/register' => 'users#register', :as => 'register'
  post 'users/register' => 'users#create', :as => 'create'

  get 'users/login' => 'sessions#new', :as => 'login'
  get 'users/logout' => 'sessions#destroy', :as => 'logout'


  get 'plants/full' => 'plants#full', :as => 'loggedin_index'
  get 'plants/:id' => 'plants#detailed', :as => 'loggedin_detailed'
end
