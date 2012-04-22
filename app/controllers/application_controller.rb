class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :logged_in

  private

  def logged_in
    if session[:user_id]
      @current_user ||= (User.find(session[:user_id]))
    else
      redirect_to :root
    end
  end
  
end
