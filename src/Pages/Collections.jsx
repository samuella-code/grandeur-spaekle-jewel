import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import AppLayout from "../Components/layouts/AppLayout";
import {
  ChevronDownIcon,
  FunnelIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
      id: 1,
      name: "Organize Basic Set (Walnut)",
      price: "$149",
      rating: 5,
      reviewCount: 38,
      imageSrc:
         "../../public/assets/images/rings1.jpg",
      imageAlt: "TODO",
      href: "/collections/3",
  },
  {
      id: 2,
      name: "Organize Pen Holder",
      price: "$15",
      rating: 5,
      reviewCount: 18,
      imageSrc:   "../../public/assets/images/ring-5.jpg",
      imageAlt: "TODO",
      href: "/collections/3",
  },
  {
      id: 3,
      name: "Organize Sticky Note Holder",
      price: "$15",
      rating: 5,
      reviewCount: 14,
      imageSrc:
      "../../public/assets/images/posing.jpg",
      imageAlt: "TODO",
      href: "/collections/3",
  },
  {
      id: 4,
      name: "Organize Phone Holder",
      price: "$15",
      rating: 4,
      reviewCount: 21,
      imageSrc:
      "../../public/assets/images/pens.jpg",
      imageAlt: "TODO",
    href: "/collections/3",
  },
  // More products...
];

const filters = {
  price: [
      { value: "0-25", label: "$0 - $25", checked: false },
      { value: "25-50", label: "$25 - $50", checked: false },
      { value: "50-100", label: "$50 - $100", checked: false },
      { value: "100+", label: "$100+", checked: false },
  ],
  fragranceType: [
      { value: "floral", label: "Floral", checked: false },
      { value: "woody", label: "Woody", checked: false },
      { value: "citrus", label: "Citrus", checked: false },
      { value: "oriental", label: "Oriental", checked: false },
      { value: "fresh", label: "Fresh", checked: false },
      { value: "spicy", label: "Spicy", checked: false },
  ],
  size: [
      { value: "30ml", label: "30ml", checked: false },
      { value: "50ml", label: "50ml", checked: false },
      { value: "75ml", label: "75ml", checked: false },
      { value: "100ml", label: "100ml", checked: false },
  ],
  category: [
      { value: "all", label: "All Products", checked: false },
      { value: "for-men", label: "For Men", checked: false },
      { value: "for-women", label: "For Women", checked: false },
      { value: "unisex", label: "Unisex", checked: false },
      { value: "luxury", label: "Luxury Collection", checked: false },
  ],
   color: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
  ],
};


const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Collections = () => {
  return (
    <AppLayout>
      <div>
          <main className="pb-24">
              <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                      Our JEWELLERY Collection
                  </h1>
                  <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                      Discover a selection of captivating JEWELLERY, crafted to
                      complement your elegance and personality.
                  </p>
              </div>

              {/* Filters */}
              <Disclosure
                  as="section"
                  aria-labelledby="filter-heading"
                  className="grid items-center border-t border-b border-gray-200"
              >
                  <h2 id="filter-heading" className="sr-only">
                      Filters
                  </h2>
                  <div className="relative col-start-1 row-start-1 py-4">
                      <div className="mx-auto flex max-w-7xl divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                          <div className="pr-6">
                              <DisclosureButton className="group flex items-center font-medium text-gray-700">
                                  <FunnelIcon
                                      aria-hidden="true"
                                      className="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
                                  />
                                  2 Filters
                              </DisclosureButton>
                          </div>
                          <div className="pl-6">
                              <button type="button" className="text-gray-500">
                                  Clear all
                              </button>
                          </div>
                      </div>
                  </div>
                  <DisclosurePanel className="border-t border-gray-200 py-10">
                      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                          <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                              <fieldset>
                                  <legend className="block font-medium">
                                      Price
                                  </legend>
                                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                      {filters.price.map(
                                          (option, optionIdx) => (
                                              <div
                                                  key={option.value}
                                                  className="flex gap-3"
                                              >
                                                  <div className="flex h-5 shrink-0 items-center">
                                                      <div className="group grid size-4 grid-cols-1">
                                                          <input
                                                              defaultValue={
                                                                  option.value
                                                              }
                                                              defaultChecked={
                                                                  option.checked
                                                              }
                                                              id={`price-${optionIdx}`}
                                                              name="price[]"
                                                              type="checkbox"
                                                              className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                          />
                                                          <svg
                                                              fill="none"
                                                              viewBox="0 0 14 14"
                                                              className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                          >
                                                              <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-checked:opacity-100"
                                                              />
                                                              <path
                                                                  d="M3 7H11"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                                              />
                                                          </svg>
                                                      </div>
                                                  </div>
                                                  <label
                                                      htmlFor={`price-${optionIdx}`}
                                                      className="text-base text-gray-600 sm:text-sm"
                                                  >
                                                      {option.label}
                                                  </label>
                                              </div>
                                          )
                                      )}
                                  </div>
                              </fieldset>
                              <fieldset>
                                  <legend className="block font-medium">
                                      Color
                                  </legend>
                                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                      {filters?.color.map(
                                          (option, optionIdx) => (
                                              <div
                                                  key={option.value}
                                                  className="flex gap-3"
                                              >
                                                  <div className="flex h-5 shrink-0 items-center">
                                                      <div className="group grid size-4 grid-cols-1">
                                                          <input
                                                              defaultValue={
                                                                  option.value
                                                              }
                                                              defaultChecked={
                                                                  option.checked
                                                              }
                                                              id={`color-${optionIdx}`}
                                                              name="color[]"
                                                              type="checkbox"
                                                              className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                          />
                                                          <svg
                                                              fill="none"
                                                              viewBox="0 0 14 14"
                                                              className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                          >
                                                              <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-checked:opacity-100"
                                                              />
                                                              <path
                                                                  d="M3 7H11"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                                              />
                                                          </svg>
                                                      </div>
                                                  </div>
                                                  <label
                                                      htmlFor={`color-${optionIdx}`}
                                                      className="text-base text-gray-600 sm:text-sm"
                                                  >
                                                      {option.label}
                                                  </label>
                                              </div>
                                          )
                                      )}
                                  </div>
                              </fieldset>
                          </div>
                          <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                              <fieldset>
                                  <legend className="block font-medium">
                                      Size
                                  </legend>
                                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                      {filters.size.map(
                                          (option, optionIdx) => (
                                              <div
                                                  key={option.value}
                                                  className="flex gap-3"
                                              >
                                                  <div className="flex h-5 shrink-0 items-center">
                                                      <div className="group grid size-4 grid-cols-1">
                                                          <input
                                                              defaultValue={
                                                                  option.value
                                                              }
                                                              defaultChecked={
                                                                  option.checked
                                                              }
                                                              id={`size-${optionIdx}`}
                                                              name="size[]"
                                                              type="checkbox"
                                                              className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                          />
                                                          <svg
                                                              fill="none"
                                                              viewBox="0 0 14 14"
                                                              className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                          >
                                                              <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-checked:opacity-100"
                                                              />
                                                              <path
                                                                  d="M3 7H11"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                                              />
                                                          </svg>
                                                      </div>
                                                  </div>
                                                  <label
                                                      htmlFor={`size-${optionIdx}`}
                                                      className="text-base text-gray-600 sm:text-sm"
                                                  >
                                                      {option.label}
                                                  </label>
                                              </div>
                                          )
                                      )}
                                  </div>
                              </fieldset>
                              <fieldset>
                                  <legend className="block font-medium">
                                      Category
                                  </legend>
                                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                      {filters.category.map(
                                          (option, optionIdx) => (
                                              <div
                                                  key={option.value}
                                                  className="flex gap-3"
                                              >
                                                  <div className="flex h-5 shrink-0 items-center">
                                                      <div className="group grid size-4 grid-cols-1">
                                                          <input
                                                              defaultValue={
                                                                  option.value
                                                              }
                                                              defaultChecked={
                                                                  option.checked
                                                              }
                                                              id={`category-${optionIdx}`}
                                                              name="category[]"
                                                              type="checkbox"
                                                              className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                          />
                                                          <svg
                                                              fill="none"
                                                              viewBox="0 0 14 14"
                                                              className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                          >
                                                              <path
                                                                  d="M3 8L6 11L11 3.5"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-checked:opacity-100"
                                                              />
                                                              <path
                                                                  d="M3 7H11"
                                                                  strokeWidth={
                                                                      2
                                                                  }
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                                              />
                                                          </svg>
                                                      </div>
                                                  </div>
                                                  <label
                                                      htmlFor={`category-${optionIdx}`}
                                                      className="text-base text-gray-600 sm:text-sm"
                                                  >
                                                      {option.label}
                                                  </label>
                                              </div>
                                          )
                                      )}
                                  </div>
                              </fieldset>
                          </div>
                      </div>
                  </DisclosurePanel>
                  <div className="col-start-1 row-start-1 py-4">
                      <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                          <Menu as="div" className="relative inline-block">
                              <div className="flex">
                                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                      Sort
                                      <ChevronDownIcon
                                          aria-hidden="true"
                                          className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                      />
                                  </MenuButton>
                              </div>

                              <MenuItems
                                  transition
                                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                              >
                                  <div className="py-1">
                                      {sortOptions.map((option) => (
                                          <MenuItem key={option.name}>
                                              <a
                                                  href={option.href}
                                                  className={classNames(
                                                      option.current
                                                          ? "font-medium text-gray-900"
                                                          : "text-gray-500",
                                                      "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                                                  )}
                                              >
                                                  {option.name}
                                              </a>
                                          </MenuItem>
                                      ))}
                                  </div>
                              </MenuItems>
                          </Menu>
                      </div>
                  </div>
              </Disclosure>

              {/* Product grid */}
              <section
                  aria-labelledby="products-heading"
                  className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
              >
                  <h2 id="products-heading" className="sr-only">
                      Products
                  </h2>

                  <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                      {products.map((product) => (
                          <div
                              key={product.id}
                              className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
                          >
                              <img
                                  alt={product.imageAlt}
                                  src={product.imageSrc}
                                  className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                              />
                              <div className="pt-10 pb-4 text-center">
                                  <h3 className="text-sm font-medium text-gray-900">
                                      <a href={product.href}>
                                          <span
                                              aria-hidden="true"
                                              className="absolute inset-0"
                                          />
                                          {product.name}
                                      </a>
                                  </h3>
                                  <div className="mt-3 flex flex-col items-center">
                                      <p className="sr-only">
                                          {product.rating} out of 5 stars
                                      </p>
                                      <div className="flex items-center">
                                          {[0, 1, 2, 3, 4].map((rating) => (
                                              <StarIcon
                                                  key={rating}
                                                  aria-hidden="true"
                                                  className={classNames(
                                                      product.rating > rating
                                                          ? "text-yellow-400"
                                                          : "text-gray-200",
                                                      "size-5 shrink-0"
                                                  )}
                                              />
                                          ))}
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                          {product.reviewCount} reviews
                                      </p>
                                  </div>
                                  <p className="mt-4 text-base font-medium text-gray-900">
                                      {product.price}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
              </section>

           
          </main>
      </div>
      </AppLayout>
  );
};

export default Collections;
