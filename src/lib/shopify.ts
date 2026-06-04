import { createStorefrontClient } from "@shopify/hydrogen-react";

const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || "bascharant.myshopify.com";
const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || "";

export const shopifyClient = createStorefrontClient({
  storeDomain: domain,
  publicStorefrontToken: token,
  storefrontApiVersion: "2024-01",
});

export const getStorefrontApiUrl = shopifyClient.getStorefrontApiUrl;
export const getPublicTokenHeaders = shopifyClient.getPublicTokenHeaders;
