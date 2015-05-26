class Project {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log("Project " + this.name + " starting");
  }
}

// All methods are included in class prototype
var project = new Project("Tripda");
project.start();
