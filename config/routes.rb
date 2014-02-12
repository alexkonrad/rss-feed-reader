NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create, :update] do
    resources :entries, only: [:index, :show]
  end

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  root to: "feeds#index"
end
