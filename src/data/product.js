const domain = process.env.SHOPIFY_STORE_DOMAIN || 'bruno-md-europe.myshopify.com'
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN || 'a51b71098dff9f7cfd68456c464991bb'
async function ShopifyData(query) {
  console.log({ storefrontAccessToken, domain, process: process.env });
  if (storefrontAccessToken && domain) {
    const URL = `https://${domain}/api/2023-04/graphql.json`
    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query })
    }
    try {
      const data = await fetch(URL, options).then(response => {
        return response.json()
      })
      return data
    } catch (error) {
      console.error({ error });
      throw new Error("Products not fetched")
    }
  } else {
    return ".local not configed"
  }
}
export async function getAllProducts() {
  const query = `
    {
      products(first: 50) {
        edges {
          cursor
          node {
            id
            title
            description
            
          }
        }
      }
    }
  `
  const response = await ShopifyData(query)
  const allProducts = response.data?.products?.edges ? response.data.products.edges : []
  // console.log({ allProducts });
  return allProducts
}