const cafe = {
  name: "NICOLI PASTICCERIA",
  location: "40-26/1-3A, Kollipara Rd, Vijayawada, Andhra Pradesh",
  contact: "091219 00777",
  ratings: {
    food: 0,
    ambience: 0,
    service: 0
  },
  menu: [
    {
      section: "Soups / La Minestra",
      dishes: [
        { name: "Cream of Mushroom", price: 190, ratings: { quality: 0, quantity: 0 } },
        { name: "Cream of Mushroom w/ Chicken", price: 220, ratings: { quality: 0, quantity: 0 } },
        { name: "Cream of Broccoli", price: 190, ratings: { quality: 0, quantity: 0 } },
        { name: "Cream of Broccoli w/ Chicken", price: 220, ratings: { quality: 0, quantity: 0 } },
        { name: "Tomato Basil", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Tomato Basil w/ Chicken", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Leek & Potato", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Cream of Chicken", price: 220, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Salads / Le Insalata",
      dishes: [
        { name: "Veg Caesar Salad", price: 290, ratings: { quality: 0, quantity: 0 } },
        { name: "Chicken Caesar Salad", price: 290, ratings: { quality: 0, quantity: 0 } },
        { name: "Veg Mediterranean Salad", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Chicken Mediterranean Salad", price: 320, ratings: { quality: 0, quantity: 0 } },
        { name: "Veg Greek Salad", price: 380, ratings: { quality: 0, quantity: 0 } },
        { name: "Chicken Greek Salad", price: 320, ratings: { quality: 0, quantity: 0 } },
        { name: "Russian Salad (Veg/Chicken)", price: [280, 340], ratings: { quality: 0, quantity: 0 } },
        { name: "Broken Wheat Salad (Veg/Chicken)", price: [270, 340], ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Sandwiches",
      dishes: [
        { name: "Pepperika & Creamy Veg", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Mushroom & Cheese", price: 300, ratings: { quality: 0, quantity: 0 } },
        { name: "Baguette (Veg/Chicken)", price: [280, 340], ratings: { quality: 0, quantity: 0 } },
        { name: "Club Sandwich (Veg/Chicken)", price: [260, 320], ratings: { quality: 0, quantity: 0 } },
        { name: "Egg Sandwich", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Pulled Chicken Burger/Sandwich (BBQ/PERI-PERI)", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Pulled Lamb Sandwich/Burger", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Veg Coleslaw Burger", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Chicken Coleslaw Burger", price: 340, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Iced Tea",
      dishes: [
        { name: "Classic Lemon Iced Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Strawberry Iced Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Peach Iced Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Lemon Basil Iced Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Raspberry Basil Iced Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Chai Tea Frappé", price: 230, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Hot Tea",
      dishes: [
        { name: "Chai Tea Latte (with Milk)", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Lemon Tea", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Green Tea", price: 180, ratings: { quality: 0, quantity: 0 } },
        { name: "Peppermint Tea", price: 210, ratings: { quality: 0, quantity: 0 } },
        { name: "Lemon Ginger Tea", price: 220, ratings: { quality: 0, quantity: 0 } },
        { name: "Kashmiri Kawah Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Jasmine Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Chamomile Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Hot Pot (Any One Flavor)", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Darjeeling Tea", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Masala Chai", price: 230, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Hot Coffee",
      dishes: [
        { name: "Cappuccino", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Hazelnut Cappuccino", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Irish Cappuccino", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Caramel Cappuccino", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Vanilla Cappuccino", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Caffè Latte", price: 210, ratings: { quality: 0, quantity: 0 } },
        { name: "Irish Coffee", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Black Coffee", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Espresso (Single Shot)", price: 140, ratings: { quality: 0, quantity: 0 } },
        { name: "Mocha", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Hot Chocolate", price: 200, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Cold Coffee & Frappé",
      dishes: [
        { name: "Mocha Frappé", price: 260, ratings: { quality: 0, quantity: 0 } },
        { name: "Almond Frappé", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Cookie Frappé", price: 300, ratings: { quality: 0, quantity: 0 } },
        { name: "Caramel Macchiato", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Tiramisu", price: 290, ratings: { quality: 0, quantity: 0 } },
        { name: "Iced Black Coffee", price: 280, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Shakes",
      dishes: [
        { name: "Strawberry Shortcake", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Oreo-Vanilla", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Red Velvet", price: 300, ratings: { quality: 0, quantity: 0 } },
        { name: "Brownie", price: 300, ratings: { quality: 0, quantity: 0 } },
        { name: "Cookie Dough", price: 290, ratings: { quality: 0, quantity: 0 } },
        { name: "Nutty Butterscotch", price: 280, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Pastas & Spaghetti",
      dishes: [
        { name: "Spaghetti Aglio e Olio", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Spaghetti Aglio e Olio w/ Chicken", price: 380, ratings: { quality: 0, quantity: 0 } },
        { name: "Penne Al' Rosa", price: 340, ratings: { quality: 0, quantity: 0 } },
        { name: "Penne Al' Rosa w/ Chicken", price: 380, ratings: { quality: 0, quantity: 0 } },
        { name: "Penne Al' Pesto", price: 340, ratings: { quality: 0, quantity: 0 } },
        { name: "Penne Al' Pesto w/ Chicken", price: 380, ratings: { quality: 0, quantity: 0 } },
        { name: "Spaghetti Carbonara", price: 460, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Big Plates",
      dishes: [
        { name: "All Day Breakfast", price: 440, ratings: { quality: 0, quantity: 0 } },
        { name: "Pesto Marinated Grilled Veggies w/ Mash Potato", price: 380, ratings: { quality: 0, quantity: 0 } },
        { name: "Grilled Chicken w/ Mash Potato", price: 440, ratings: { quality: 0, quantity: 0 } },
        { name: "Stuffed Chicken Tuba", price: 460, ratings: { quality: 0, quantity: 0 } },
        { name: "Braised Lamb Stew w/ Rice/Mash Potato", price: 460, ratings: { quality: 0, quantity: 0 } },
        { name: "Grilled Fish w/ Lemon Butter Sauce & Mash Potato", price: 480, ratings: { quality: 0, quantity: 0 } },
        { name: "Cajun Grilled Fish w/ Mash Potato", price: 480, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Non-Veg Appetizers",
      dishes: [
        { name: "Egg Fritters", price: 280, ratings: { quality: 0, quantity: 0 } },
        { name: "Chicken Nachos", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Chicken Tacos", price: 340, ratings: { quality: 0, quantity: 0 } },
        { name: "BBQ Wings", price: 340, ratings: { quality: 0, quantity: 0 } },
        { name: "Peri-Peri Chicken Sticks", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Cajun Chicken Sticks", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Chicken Bruschetta", price: 320, ratings: { quality: 0, quantity: 0 } },
        { name: "Jamaican Chicken Ganjus", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Malai Chicken", price: 390, ratings: { quality: 0, quantity: 0 } },
        { name: "Fish Fingers", price: 380, ratings: { quality: 0, quantity: 0 } },
        { name: "Crispy Fried Shrimp", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Cajun Shrimp", price: 440, ratings: { quality: 0, quantity: 0 } },
        { name: "Chipotle Shrimp", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Prawn Popcorn", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Butter Garlic Shrimp", price: 420, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Pizza Menu",
      dishes: [
        { name: "White Pizza (Palublancu)", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Classic Margherita", price: 350, ratings: { quality: 0, quantity: 0 } },
        { name: "Patapazza", price: 360, ratings: { quality: 0, quantity: 0 } },
        { name: "Bufala Mozzarella", price: 410, ratings: { quality: 0, quantity: 0 } },
        { name: "Casa Nostra", price: 350, ratings: { quality: 0, quantity: 0 } },
        { name: "Carduni", price: 450, ratings: { quality: 0, quantity: 0 } },
        { name: "Forestale", price: 400, ratings: { quality: 0, quantity: 0 } },
        { name: "Stromboli", price: 410, ratings: { quality: 0, quantity: 0 } },
        { name: "Quattro Formaggi", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Pesto", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Peri-Peri Paneer", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Siciliano", price: 400, ratings: { quality: 0, quantity: 0 } },
        { name: "Calzone (Veg)", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "BboChicken", price: 420, ratings: { quality: 0, quantity: 0 } },
        { name: "Peri-Peri Chicken", price: 500, ratings: { quality: 0, quantity: 0 } },
        { name: "Double Cheese Pepperoni", price: 540, ratings: { quality: 0, quantity: 0 } },
        { name: "ProstoHam", price: 560, ratings: { quality: 0, quantity: 0 } },
        { name: "Philadelphia Chicken", price: 560, ratings: { quality: 0, quantity: 0 } },
        { name: "Grilled Chicken", price: 540, ratings: { quality: 0, quantity: 0 } },
        { name: "Cajun Shrimp Pizza", price: 620, ratings: { quality: 0, quantity: 0 } },
        { name: "Calzone (Non-Veg)", price: [480, 620], ratings: { quality: 0, quantity: 0 } },
        { name: "House Special", price: 540, ratings: { quality: 0, quantity: 0 } },
        { name: "Nicoli Special Veg Pizza", price: 540, ratings: { quality: 0, quantity: 0 } }
      ]
    },
    {
      section: "Mocktails",
      dishes: [
        { name: "Virgin Mojito", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Raspberry Mint Mojito", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Strawberry Mint Mojito", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Jolly Rancher Mojito", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Cranberry Mint Mojito", price: 230, ratings: { quality: 0, quantity: 0 } },
        { name: "Green Apple Fizz", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Lemon Basil Fizz", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Lemon & Ginger Fizz", price: 200, ratings: { quality: 0, quantity: 0 } },
        { name: "Watermelon & Black Salt Fizz", price: 300, ratings: { quality: 0, quantity: 0 } }
      ]
    }
  ]
};

console.log("Cafe Info:", cafe.name);
console.log("Contact:", cafe.contact);
console.log("Location:", cafe.location);
console.log("Cafe Ratings:", cafe.ratings);
console.log("Menu Sections:", cafe.menu.map(section => section.section));

document.getElementById("cafe-name").innerText = cafe.name;
const menuDiv = document.getElementById("menu");

cafe.menu.forEach(section => {
  const sectionDiv = document.createElement("div");
  sectionDiv.innerHTML = `<h2>${section.section}</h2>`;

  section.dishes.forEach(dish => {
    const price = Array.isArray(dish.price)
      ? dish.price.join(" / ")
      : dish.price;

    sectionDiv.innerHTML += `
      <p><strong>${dish.name}</strong> - ₹${price}</p>
    `;
  });

  menuDiv.appendChild(sectionDiv);
});
