export interface User {
  id: string
  name: string
  email: string
}
export interface CreateUserPayload extends Omit<User, 'id'> {
  password: string
}
export interface LoginUserPayload extends Omit<CreateUserPayload, 'name'> {
  password: string
}
