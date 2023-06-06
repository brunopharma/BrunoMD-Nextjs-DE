import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';

const shopify = shopifyApi({
    apiKey: 'aa872e7e0b7e64038c17650fbe793fec',
    apiSecretKey: '22c5c7f7366b5b8b54d226582087a0ad',
    scopes: ['read_products'],
    hostName: 'bruno-md-europe',
  });

  const client = new shopify.clients.Storefront({
    domain: 'bruno-md-europe.myshopify.com',
    storefrontAccessToken:'a51b71098dff9f7cfd68456c464991bb',
  });

  export default loginForm = await client.query({
    data: `mutation customerAccessTokenCreate {
      customerAccessTokenCreate(input: {email: "ghaida@example.com", password: "7dx2gx2Z"}) {
        customerAccessToken {
          accessToken
        }
        customerUserErrors {
          message
        }
      }
    }`,
  });