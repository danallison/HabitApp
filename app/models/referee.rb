class Referee < ActiveRecord::Base
  
  has_many :habits, :through => :habit_referee
  
end
