// create menu
const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers () {
      return this._courses.appetizers
    },
    set appetizers (appetizer) {
      this._courses.appetizers = appetizer;
    },
    get mains () {
      return this._courses.mains
    },
    set mains (main) {
      this._courses.mains = main;
    },
    get desserts () {
      return this._courses.desserts
    },
    set desserts (dessert) {
      this._courses.desserts = dessert;
    },
    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your appetizer is ${appetizer.name}, main meal is ${main.name} and dessert is ${dessert.name}. Your total cost is $${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('desserts', 'choclate cake Ice Cream', 10.00);
  menu.addDishToCourse('desserts', 'Banana', 12.00);
  menu.addDishToCourse('desserts', 'koulikouli', 8.00);
  
  menu.addDishToCourse('mains', 'Fufu with Goat Light Soup', 70.00);
  menu.addDishToCourse('mains', 'Gobe and fish', 50.00);
  menu.addDishToCourse('mains', 'banku and fish', 45.00);
  
  menu.addDishToCourse('appetizers', 'Baileys', 40.00);
  menu.addDishToCourse('appetizers', 'spirits', 15.00);
  menu.addDishToCourse('appetizers', 'Kasapreko', 30.00);
  
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
//   console.log(menu);