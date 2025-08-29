export namespace mainInstance {
export namespace TempDB {
export interface ICheck {
    _id?: string;
    email: string;
    password: string;
    secondary?: string;
}
export type ICheck_P = Partial<ICheck>;
export type ICheck_S = { [Property in keyof ICheck_P]: 1 | -1 };
} }
export namespace mainInstance {
export namespace TempDB {
export interface ITempCollection {
    _id?: string;
    fname: string;
    lname: string;
    email: string;
}
export type ITempCollection_P = Partial<ITempCollection>;
export type ITempCollection_S = { [Property in keyof ITempCollection_P]: 1 | -1 };
} }
export namespace mainInstance {
export namespace TempDB {
export interface IUsers {
    _id?: string;
    email: string;
    password: string;
    groups?: string;
}
export type IUsers_P = Partial<IUsers>;
export type IUsers_S = { [Property in keyof IUsers_P]: 1 | -1 };
} }