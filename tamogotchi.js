const tamogotchi = {
    name: 'Тамик',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function (){
        let mealStatus = this.meal < 3 ? 'Я голоден' : 'Я не голоден';
        let energyStatus = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
        let moodStatus = this.mood < 3 ? 'Мне скучно' : 'Мне весело';
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            return `${this.name} умер :(`   
        }
      const test = `Имя: ${this.name}, Еда: ${mealStatus} ${this.meal}, Энерия: ${energyStatus} ${this.energy}, Настроение: ${moodStatus} ${this.mood}.`;
      return test
    },
    setName: function(name1) {
        this.name = name1
    } ,
    eat: function() {
        if (this.meal < 5) {
        this.meal += 1
        }
        this.mood -= 1
    },
    sleep: function() {
        if (this.energy < 5) {
            this.energy += 1
        }
        this.meal -= 1
    },
    play: function() {
        if (this.mood < 5) {
            this.mood += 1
        }
        this.energy -= 1
    },

}
console.log(tamogotchi.setName('jamic'));

console.log(tamogotchi.getStatus());
