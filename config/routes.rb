NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index, :show]
  end


  root to: "feeds#index"
end
