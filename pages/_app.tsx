import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createClient, Provider as GraphQLProvider } from "urql";
import { Auth0Provider } from "@auth0/auth0-react";


export async function getStaticProps() {
  return {
      props: {
        hasuraAdminSecret: process.env.HASURA_ADMIN_SECRET,

      }
  }
}

const client = createClient({
  url: "https://konan.hasura.app/v1/graphql",
  fetchOptions : () => {
    // const token = getToken();
    const token = "";
    return {
      headers: { 
        "authorization": token ? `Bearer ${token}` : '',
        "x-hasura-admin-secret": "zyIzIlXz1uMeZYIRqJBDxTwZs3D15ofcKZEgwFDdjyo3fMYoyl1uM5GVNT1V0wed"
        // "x-hasura-role": "user",
      },
    };
  },
});
// exchanges: [dedupExchange, cacheExchange, authExchange, fetchExchange],


function Konan({ Component, pageProps }: AppProps) {
  return <Auth0Provider
  domain="dev-rf-25xpb.us.auth0.com"
  clientId="ZgTP2eIbzUrtL0FhrqKDAlOlcXHDBloj"
  redirectUri="https://localhost:3000/"
  // redirectUri={window.location.origin}
>
  <GraphQLProvider value={client}>
    <Component {...pageProps} />
  </GraphQLProvider>
</Auth0Provider>
  
}

export default Konan
