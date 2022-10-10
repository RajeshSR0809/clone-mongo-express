import fs from 'node:fs';
import https from 'node:https';
import clc from 'cli-color';
import commander from 'commander';
import csrf from 'csurf';
import express from 'express';

import parser from  'mongodb-query-parser';
import EJSON from  'mongodb-extended-json';
var query = '{_id: ObjectId("58c33a794d08b991e3648fd2")}';
var queryAsAnObjectWithTypes = parser.parseFilter(query);
var a = EJSON.stringify(queryAsAnObjectWithTypes);

console.log(a);
