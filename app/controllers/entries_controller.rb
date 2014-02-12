class EntriesController < ApplicationController
  def index
    feed = Feed.includes(:entries).find(params[:feed_id])
    feed.entries.create({guid: Time.now.to_s, title: "asdfasfsdf", link: "http"})

    render :json => feed.entries
  end

  def show
    entry = Entry.find(params[:id])

    render json: entry
  end
end
