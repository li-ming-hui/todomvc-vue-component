;
(function (window) {
	const template = `
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
  `

	const TodoHeader = {
		template
	}

	window.TodoHeader = TodoHeader
})(window)
