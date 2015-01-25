class Todo < ActiveRecord::Base
  validates :todo_content, uniqueness: true
end
