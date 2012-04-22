class Datapointgroup < ActiveRecord::Base
  
  has_many :datapoints
  belongs_to :habit
  
end
