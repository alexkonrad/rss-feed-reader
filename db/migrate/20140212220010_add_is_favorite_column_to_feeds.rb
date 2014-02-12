class AddIsFavoriteColumnToFeeds < ActiveRecord::Migration
  def change
    add_column :feeds, :is_favorite, :boolean, default: false
  end
end
