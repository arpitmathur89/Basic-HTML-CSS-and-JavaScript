var mod = angular.module("todoApp",[]);

mod.controller("TodoCtrl", TodoCtrl);

		function TodoCtrl() {
			
			this.editMode = false;
			this.taskList = [];
			

			this.AddTask = function() {
	
				this.taskList.push(this.task);
				this.task = "";	
			}

			this.EditTask = function() {
	
				this.editMode = !this.editMode;
				this.task = "";	
			}

			this.DeleteTask = function(index) {
				this.taskList.splice(index, 1);
			}
		}


	