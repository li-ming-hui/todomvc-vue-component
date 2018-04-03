;
(function (window, AppFooter, TodoHeader, TodoMain, TodoFooter) {
	const template = `
    <div>
      <section class="todoapp">
        <todo-header></todo-header>
        <!-- This section should be hidden by default and shown when there are todos -->
        <todo-main></todo-main>
        <!-- This footer should hidden by default and shown when there are todos -->
        <todo-footer></todo-footer>
      </section>
      <app-footer></app-footer>
    </div>
  `

	const App = {
		template,
		components: {
			AppFooter,
			TodoHeader,
			TodoMain,
			TodoFooter
		}
	}

	window.App = App
})(window, AppFooter, TodoHeader, TodoMain, TodoFooter);
