import {registerUser,loginUser} from './mutations/auth.mutations';

const authResolvers = {
    Mutation:{
        registerUser,
        loginUser
    }

}

export default authResolvers;