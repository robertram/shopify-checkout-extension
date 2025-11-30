import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  return (
    <s-page heading="Checkout Extension">
      <s-section heading="Product Recommendations Extension">
        <s-paragraph>
          This checkout UI extension enhances the checkout experience by showing
          customers recommended products they might also like. The extension
          appears in the checkout flow and helps increase average order value by
          suggesting complementary products.
        </s-paragraph>
      </s-section>

      <s-section heading="How It Works">
        <s-stack direction="block" gap="base">
          <s-paragraph>
            <s-text type="strong">1. Product Discovery</s-text>
          </s-paragraph>
          <s-paragraph>
            When a customer reaches the checkout page, the extension automatically
            fetches the first 5 products from your store using the Storefront API.
            It retrieves product information including title, images, variants, and
            pricing.
          </s-paragraph>

          <s-paragraph>
            <s-text type="strong">2. Smart Filtering</s-text>
          </s-paragraph>
          <s-paragraph>
            The extension intelligently filters out products that are already in
            the customer&apos;s cart. This ensures customers only see products they
            haven&apos;t added yet, providing relevant recommendations.
          </s-paragraph>

          <s-paragraph>
            <s-text type="strong">3. Product Display</s-text>
          </s-paragraph>
          <s-paragraph>
            If there are available products to recommend, the extension displays a
            &quot;You might also like&quot; section showing:
          </s-paragraph>
          <s-unordered-list>
            <s-list-item>Product image (with fallback placeholder)</s-list-item>
            <s-list-item>Product title</s-list-item>
            <s-list-item>Formatted price in the customer&apos;s currency</s-list-item>
            <s-list-item>Add to cart button</s-list-item>
          </s-unordered-list>

          <s-paragraph>
            <s-text type="strong">4. Add to Cart</s-text>
          </s-paragraph>
          <s-paragraph>
            Customers can directly add the recommended product to their cart with
            a single click. The extension handles the cart update and provides
            visual feedback during the process.
          </s-paragraph>

          <s-paragraph>
            <s-text type="strong">5. Error Handling</s-text>
          </s-paragraph>
          <s-paragraph>
            If there&apos;s an issue adding a product to the cart, the extension
            displays a clear error message that automatically disappears after 3
            seconds, ensuring a smooth user experience.
          </s-paragraph>
        </s-stack>
      </s-section>

      <s-section heading="Technical Details">
        <s-stack direction="block" gap="base">
          <s-paragraph>
            <s-text type="strong">Extension Type:</s-text> Checkout UI Extension
          </s-paragraph>
          <s-paragraph>
            <s-text type="strong">Target:</s-text>{" "}
            <code>purchase.checkout.block.render</code>
          </s-paragraph>
          <s-paragraph>
            <s-text type="strong">Framework:</s-text> Preact with Shopify UI
            Extensions
          </s-paragraph>
          <s-paragraph>
            <s-text type="strong">API Access:</s-text> Storefront API enabled for
            product queries
          </s-paragraph>
          <s-paragraph>
            <s-text type="strong">Features:</s-text>
          </s-paragraph>
          <s-unordered-list>
            <s-list-item>
              Real-time cart line monitoring to filter recommendations
            </s-list-item>
            <s-list-item>
              Loading skeleton states for better perceived performance
            </s-list-item>
            <s-list-item>
              Internationalization support for currency formatting
            </s-list-item>
            <s-list-item>
              Responsive grid layout with product image, details, and action button
            </s-list-item>
          </s-unordered-list>
        </s-stack>
      </s-section>

      <s-section heading="Extension Configuration">
        <s-paragraph>
          The extension is configured in{" "}
          <code>extensions/checkout-validation/shopify.extension.toml</code>.
          Key settings include:
        </s-paragraph>
        <s-unordered-list>
          <s-list-item>
            <code>api_version = "2025-10"</code> - Uses the latest API version
          </s-list-item>
          <s-list-item>
            <code>api_access = true</code> - Enables Storefront API queries
          </s-list-item>
          <s-list-item>
            <code>target = "purchase.checkout.block.render"</code> - Renders in
            the checkout block
          </s-list-item>
        </s-unordered-list>
      </s-section>

      <s-section slot="aside" heading="Learn More">
        <s-unordered-list>
          <s-list-item>
            <s-link
              href="https://shopify.dev/docs/api/checkout-ui-extensions"
              target="_blank"
            >
              Checkout UI Extensions Documentation
            </s-link>
          </s-list-item>
          <s-list-item>
            <s-link
              href="https://shopify.dev/docs/api/checkout-ui-extensions/latest/extension-targets-overview"
              target="_blank"
            >
              Extension Targets Overview
            </s-link>
          </s-list-item>
          <s-list-item>
            <s-link
              href="https://shopify.dev/docs/api/checkout-ui-extensions/latest/configuration#api-access"
              target="_blank"
            >
              API Access Configuration
            </s-link>
          </s-list-item>
        </s-unordered-list>
      </s-section>

      <s-section slot="aside" heading="Extension Features">
        <s-unordered-list>
          <s-list-item>Product recommendations</s-list-item>
          <s-list-item>Cart-aware filtering</s-list-item>
          <s-list-item>One-click add to cart</s-list-item>
          <s-list-item>Error handling & feedback</s-list-item>
          <s-list-item>Loading states</s-list-item>
          <s-list-item>Internationalization</s-list-item>
        </s-unordered-list>
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
