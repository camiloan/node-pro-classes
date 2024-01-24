import { regularExps } from '../../../config';

export class LoginUserDto {
  public constructor(
    public readonly email: string,
    public readonly password: string
  ) {}
  static create(objet: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = objet;
    if (!email) return ['Missing email'];
    if (!regularExps.email.test(email)) return ['Email is not valid'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password too short'];
    return [undefined, new LoginUserDto(email, password)];
  }
}
