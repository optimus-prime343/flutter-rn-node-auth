import jsonwebtoken from 'jsonwebtoken'

export const decodeJWT = <TPayload>(token: string): TPayload => {
  const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY)
  return decoded as TPayload
}
