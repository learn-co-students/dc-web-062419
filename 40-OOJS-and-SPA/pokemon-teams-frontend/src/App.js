// console.log("app")
class App {
  constructor(data){
    //forEach trainer object, we are going to make a trainer instance
    this.trainers = data.map(trainerObj => new Trainer(trainerObj))
    //Before: trainers: [{}, {}, {}, ...]
    //After: trainers: [Trainer{}, Trainer{}, Trainer{}, ...]
  }

  render(){
    return `<main>
      ${this.trainers.map(trainerInstance => trainerInstance.render()).join("")}
    </main>`
  }
  //this.trainers = [Trainer{}, Trainer{}, Trainer{}, ...]
  // ['<div></div>', '<div></div>', '<div></div>', '<div></div>']

}
