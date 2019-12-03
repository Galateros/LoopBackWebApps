import {Entity, model, property} from '@loopback/repository';

@model()
export class UserSession extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  user: string;

  @property({
    type: 'string',
    required: true,
  })
  session: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  status: boolean;


  constructor(data?: Partial<UserSession>) {
    super(data);
  }
}

export interface UserSessionRelations {
  // describe navigational properties here
}

export type UserSessionWithRelations = UserSession & UserSessionRelations;
