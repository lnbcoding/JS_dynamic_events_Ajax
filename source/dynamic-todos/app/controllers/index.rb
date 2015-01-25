get '/' do
  @todos = Todo.all
  erb :index
end

post '/add_todo' do
  new_todo = Todo.new(todo_content: params[:content_info])
  { todo_content: params[:content_info] }.to_json if new_todo.save
end

delete '/todos/:id' do
  todo = Todo.find(params[:id])
  todo.destroy
end

put '/todos/:id' do
  todo = Todo.find(params[:id])
  todo.update_attributes(completed: true)
end
