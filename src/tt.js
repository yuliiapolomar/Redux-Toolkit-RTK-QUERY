  
    const deleteTask = (id) => {
        setTodos([...todos.filter(todo => todo.id !== id)])
      }
    
      const handleToggle = (id) => {
        setTodos([...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
      }