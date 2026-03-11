import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllContactsSortedByEmail(): Promise<Array<ContactSubmission>>;
    getAllContactsSortedByName(): Promise<Array<ContactSubmission>>;
    getContactById(id: bigint): Promise<ContactSubmission>;
    submitMessage(name: string, email: string, phone: string, message: string): Promise<void>;
}
