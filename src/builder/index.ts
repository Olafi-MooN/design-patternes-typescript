import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeBeverage().makeMeal().getMeal();
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
