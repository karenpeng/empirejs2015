   function TaskManager() {
    this.tasks = [];
  }

  TaskManager.prototype.executeTasks = function (tasks, callback) {
    this.tasks = tasks;
    this.taskCallback = callback;
    this._execute();
  };

  TaskManager.prototype._execute = function () {
    if (!this.tasks.length) {
      endExecution();
      return;
    } else {
      beginExecution();
      var ta = this.tasks.shift();
      var direction = ta[0];
      this.move(direction);
    }
  };

  TaskManager.prototype.move = function (direction) {
    var that = this;
    for (var i = 0; i < 50 / UNIT + 1; i++) {
      if (i < 50 / UNIT) {
        setTimeout(function () {
          switch (direction) {
          case 'f':
            you.position.z -= UNIT;
            break;
          case 'b':
            you.position.z += UNIT;
            break;
          }
        }, i);
      } else {
        setTimeout(function () {
          that._execute();
        }, 50 / UNIT + 1000);
      }
    }
  };

