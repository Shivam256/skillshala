import {mergeTypeDefs} from '@graphql-tools/merge';

import userTypes from './user.type';

const types = [userTypes];


export default mergeTypeDefs(types);