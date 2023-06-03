import JWTPassport from "passport-jwt";
import { UserModel } from "../Database/allModules";


const JWTStrategy = JWTPassport.Strategy;
const ExtractJWT = JWTPassport.ExtractJwt;


//Authoorization : "bearer someTokenString"

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp",

};

export default (passport) => {
    passport.use(
        new JWTStrategy(options, async (jwt_payload, done) => {
            try {
                const doesUserExist = await UserModel.findById(jwt_payload.user);
                if (!doesUserExist) return done(null, false)
                return done(null, doesUserExist);
            }
            catch (error) {
                throw new Error(error);
            }
        }
        ))
}