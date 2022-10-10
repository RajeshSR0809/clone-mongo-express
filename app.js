import fs from 'node:fs';
import https from 'node:https';
import clc from 'cli-color';
import commander from 'commander';
import csrf from 'csurf';
import express from 'express';

// import parser from  'mongodb-query-parser';
// import EJSON from  'mongodb-extended-json';
// var query = '{_id: ObjectId("58c33a794d08b991e3648fd2")}';
// var queryAsAnObjectWithTypes = parser.parseFilter(query);
// var a = EJSON.stringify(queryAsAnObjectWithTypes);

// console.log(a);


commander
  .version(pkg.version)
  .option('-U, --url <url>', 'connection string url')
  .option('-H, --host <host>', 'hostname or address of the db(deprecated)')
  .option('-P, --dbport <host>', 'port of the db(deprecated)')
  .option('-u, --username <username>', 'username for authentication(deprecated)')
  .option('-p, --password <password>', 'password for authentication(deprecated)')
  .option('-a, --admin', 'enable authentication as admin')
  .option('-d, --database <database>', 'authenticate to database')
  .option('--port <port>', 'listen on specified port')
  .parse(process.argv);