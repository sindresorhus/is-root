import {expectType} from 'tsd';
import isRoot = require('.');

expectType<boolean>(isRoot());
