use my_db
db.createUser({ user: 'mongo_user', pwd: 'mongo_user', roles: [{ role: 'dbOwner', db: 'my_db' }, { role: 'dbOwner', db: 'test' }] })
