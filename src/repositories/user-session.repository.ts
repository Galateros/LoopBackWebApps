import {DefaultCrudRepository} from '@loopback/repository';
import {UserSession, UserSessionRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserSessionRepository extends DefaultCrudRepository<
  UserSession,
  typeof UserSession.prototype.user,
  UserSessionRelations
> {
  constructor(
    @inject('datasources.mongoConn') dataSource: MongoConnDataSource,
  ) {
    super(UserSession, dataSource);
  }
}
