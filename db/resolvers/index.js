import {mergeResolvers} from '@graphql-tools/merge';

import userResolvers from './user.resolver';
import authResolvers from './auth.resolver';

const resolversArray = [userResolvers,authResolvers];


export default mergeResolvers(resolversArray);
