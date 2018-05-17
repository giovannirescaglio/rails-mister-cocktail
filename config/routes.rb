Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# # read
# get 'cocktails' to: 'cocktails#index'
# post 'cocktails/:id' to: 'cocktails#show'


# # create
# get 'cocktails/new' to: 'cocktails#new'
# post 'cocktails' to: 'cocktails/create'

  resources :cocktails, only: [:index, :show, :new, :create]  do
    resources :doses, only: [:new, :create, :destroy]
  end
end
