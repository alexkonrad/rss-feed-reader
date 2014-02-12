class FeedsController < ApplicationController
  def index
    @feeds = Feed.includes(:entries).all


    respond_to do |format|
      format.html { render :index }
      format.json { render json: @feeds, :methods => :entries }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
