class FeedSubscriptions < ActiveRecord::Base
  attr_accessible :feed_id, :user_id

  belongs_to :feed
  belongs_to :user
end
