import {Await, useLoaderData, Link} from 'react-router';
import {Suspense} from 'react';
import {Image} from '@shopify/hydrogen';
import {ProductItem} from '~/components/ProductItem';
import Hero from '~/components/Hero';
import ServicesSection from '~/components/ServicesSection';
import AboutSection from '~/components/AboutSection';
import ContactSection from '~/components/ContactSection';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Food Truck Parts | Custom Food Trucks Built to Your Vision Since 1999'}];
};

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {Route.LoaderArgs}
 */
async function loadCriticalData({context}) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {Route.LoaderArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div className="home">
      <Hero />
      <ProductsSection products={data.recommendedProducts} />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function ProductsSection({products}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] sm:text-4xl">
            Parts & Equipment
          </h2>
          <p className="mt-4 text-lg text-[#8A8A8A]">
            Browse our complete inventory of food truck parts, equipment, and accessories
          </p>
        </div>

        {/* Products Grid */}
        <Suspense fallback={<div className="mt-12 text-center text-[#8A8A8A]">Loading products...</div>}>
          <Await resolve={products}>
            {(response) => (
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {response
                  ? response.products.nodes.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.handle}`}
                        className="group overflow-hidden rounded-xl border border-[#EDEDED] bg-white transition-all hover:border-[#8A8A8A]/30 hover:shadow-lg"
                      >
                        {product.featuredImage && (
                          <div className="relative aspect-square overflow-hidden bg-[#EDEDED]">
                            <Image
                              data={product.featuredImage}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <h4 className="text-lg font-semibold text-[#2F2F2F] group-hover:text-[#D6452F]">
                            {product.title}
                          </h4>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-lg font-bold text-[#D6452F]">
                              ${product.priceRange.minVariantPrice.amount}
                            </span>
                            <span className="rounded-lg bg-[#EDEDED] px-4 py-2 text-sm font-medium text-[#2F2F2F] transition-colors group-hover:bg-[#D6452F] group-hover:text-white">
                              View Details
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  : null}
              </div>
            )}
          </Await>
        </Suspense>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('./+types/_index').Route} Route */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
