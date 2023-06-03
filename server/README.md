#initial setup
git clone 
cd zomato-clone
mkdir server
cd server
npm i


<!-- dependecies-->
npm install express mongoose dotenv


<!-- dev dependecies -->\
npm i --save-dev nodemon @babel/cli, @babel/core and @babel/preset-env @bable/node
 
#API planning 
- Food (Food items and their details)
- Restraunt (Restraunt and their deatils)
- Menu (Menu and their details)
- order (Order and their details)
- Image (storing all the images related to the zomato)
- Review (storing all the list o reviews)
- user (user related details ,username , email n password)


jwt - jsonweb token 
session based appln
>>tokens 
>> for the 1st time when we visit the appln we login or create acc
>> and if we revisit the appln after 1 day || 10 day || 10 months [we don't need to pass any credentials]
            instead while making a req the generated JWT Token ill be sent to the server
    >>jwt will be stored in client or end user browser (cookies , localstorage)
    >> jwt also has expiration it depends on bussiness prospective (1 day |10 day | 10 years)

    hash and salting
        hash() => Priyanshu@123 =>  *#rqgh%67 => salt(5) => //hash function 5 times lag jaega
        