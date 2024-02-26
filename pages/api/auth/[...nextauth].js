import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
  providers: [
    CredentialsProvider({

      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        const res = await fetch("https://gestion-wheat.vercel.app/auth/jwt/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email : credentials?.email,
            //username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const token = await res.json()
        const auth = token.access
      
      const re = await fetch('https://gestion-wheat.vercel.app/auth/users/me/', {
        credentials:'include',
        method: 'GET',
        headers: {  'Authorization': 'JWT '+auth },
      })

      const user = await re.json()
      console.log(user)
      if(re.status != 200){
        throw new Error('No user found')
      }     
      else{
       return user 
      }
      },
    }),
  ],

  
secret:process.env.JWTSECRET,

/**process.env.JWT_SECRET,*/
pages: {
  signIn: '/',
  signOut:'/',
  error: '/404',
},
callbacks: {
  async jwt({ token, user , trigger, session}) {
    if(trigger ==="update"){
      return{ ...token, ...session.user}
    }
    return { ...token, ...user };
  },
  async session({ session, token, user }) {
      session.user = token
      return session;
  },
},

});


