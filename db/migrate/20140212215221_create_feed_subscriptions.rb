class CreateFeedSubscriptions < ActiveRecord::Migration
  def change
    create_table :feed_subscriptions do |t|
      t.integer :user_id
      t.integer :feed_id

      t.timestamps
    end

    add_index :feed_subscriptions, :user_id
    add_index :feed_subscriptions, :feed_id
  end
end
