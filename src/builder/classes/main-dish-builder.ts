import { MealBuilderProtocol } from '../interface/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans, Meat, Beverage, Dessert } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
	private _meal: MealBox = new MealBox();

	reset() {
		this._meal = new MealBox();
	}
	makeMeal(): this {
		const rice = new Rice('Rice', 10);
		const beans = new Beans('Beans', 10);
		const meat = new Meat('Meat', 10);

		this._meal.add(rice, beans, meat);

		return this;
	}
	makeBeverage(): this {
		const beverage = new Beverage('Beverage', 10);
		this._meal.add(beverage);
		return this;
	}
	makeDessert(): this {
		const dessert = new Dessert('Dessert', 10);
		this._meal.add(dessert);
		return this;
	}
	makeRice(): this {
		const rice = new Beverage('Rice', 10);
		this._meal.add(rice);
		return this;
	}

	getMeal(): MealBox {
		return this._meal;
	}

	getPrice() {
		return this._meal.getPrice();
	}
}
