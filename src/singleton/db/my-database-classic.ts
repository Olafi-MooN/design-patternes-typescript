export interface user {
	name: string;
	age: number;
}

export class Singleton {
	private static _instance: Singleton | null = null;
	private users: user[] = [];

	private constructor() {}

	public static get instance() {
		if (Singleton._instance === null) {
			Singleton._instance = new Singleton();
		}
		return Singleton._instance;
	}

	add(user: user) {
		this.users.push(user);
	}

	remove(user: user) {
		this.users.splice(this.users.indexOf(user), 1);
	}

	show() {
		console.log(this.users);
	}
}
