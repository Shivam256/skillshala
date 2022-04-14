import {mergeResolvers} from '@graphql-tools/merge';

import userResolvers from './user.resolver';

const resolversArray = [userResolvers];


export default mergeResolvers(resolversArray);
