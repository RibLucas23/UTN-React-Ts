export interface IRegisterForm {
	nombre: string;
	apellido: string;
	email: string;
	telefono: number;
	password: string;
	confirmPw: string;
}

export interface IRegisterFormErrors {
	nombre?: string;
	apellido?: string;
	email?: string;
	telefono?: string;
	password?: string;
	confirmPw?: string;
}

export interface ILoginForm {
	email: string;
	password: string;
}
export interface ILoginFormErrors {
	email?: string;
	password?: string;
}
