class HabitReferee < ActiveRecord::Base
  
  belongs_to :habit
  belongs_to :referee
  
end
