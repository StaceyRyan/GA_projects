Rails.application.routes.draw do
  root to: 'pages#index', as: 'home'

  # The resources route maps actions to the controller.
  # By default it maps all seven - index, show, add, create, edit, update, destroy
  # To restrict which actions are mapped, use only.
  resources :sessions, only: [:new, :create, :destroy]

  get 'users/index', as: 'basic_view'

  get 'users/register' => 'users#register', :as => 'register'
  post 'users/register' => 'users#create', :as => 'create'

  get 'users/login' => 'sessions#new', :as => 'login'
  get 'users/alert', as: 'alert'
  post 'users/login' => 'sessions#create', :as => 'active'

  get 'users/logout' => 'sessions#destroy', :as => 'logout'

  get 'plants/full' => 'plants#full', :as => 'loggedin_index'
  get 'plants/add' => 'plants#add', :as => 'add_plant'

  get 'plants/edit/:id' => 'plants#edit', :as => 'edit'
  post '/plants/:id/update' => 'plants#update', :as => 'update_plant'

  get 'plants/:id' => 'plants#detailed', :as => 'loggedin_detailed'

  post 'plants/create' => 'plants#create', :as => 'create_plant'
  #Needs to redirect back to loggedin_index
  #
  get 'weather/index' => 'weather#retrieve', :as => 'forecast'

end
