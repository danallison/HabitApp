class Habit < ActiveRecord::Base
  
  belongs_to :user
  has_many :reasons
  has_many :datapointgroups
  has_many :referees, :through => :habit_referee
  
end
