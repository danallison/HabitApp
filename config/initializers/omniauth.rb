Rails.application.config.middleware.use OmniAuth::Builder do
  
  if Rails.env == "production"
    provider :twitter, ENV['HABITAPP_TWITTER_CONSUMER_KEY'], ENV['HABITAPP_TWITTER_CONSUMER_SECRET']
  else
    provider :twitter, API_KEYS['HABITAPP_TWITTER_CONSUMER_KEY'], API_KEYS['HABITAPP_TWITTER_CONSUMER_SECRET']
  end
  
end