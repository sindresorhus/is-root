import {expectType} from 'tsd';
import isRoot from './index.js';

expectType<boolean>(isRoot());
