import jsonwebtoken from 'jsonwebtoken'

export const signJWT = <TPayload extends string | object | Buffer>(
  payload: TPayload,
): string => {
  const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET_KEY as string)
  return token
}
