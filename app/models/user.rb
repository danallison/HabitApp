class User < ActiveRecord::Base
  
  has_many :habits
  
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.twitter_handle = auth["info"]["nickname"]

    end
  end
  
  
end
