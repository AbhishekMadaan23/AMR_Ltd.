import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Streamlined Operations",
    description:
      "With our cutting-edge technology and streamlined processes, we ensure fast and efficient scrap metal collection and processing. Our state-of-the-art facilities are equipped to handle various types of metal, optimizing our operations for maximum productivity.",
    icon: ArrowRightIcon,
  },
  {
    name: "Environmental Responsibility",
    description:
      "We understand the importance of environmental stewardship in the metal recycling industry. That's why we adhere to strict environmental standards and practices throughout our operations. By recycling scrap metal, we help reduce the need for new raw materials, conserving natural resources and minimizing carbon emissions.",
    icon: ArrowRightIcon,
  },
  {
    name: "Client-Centric Approach",
    description:
      "At AMR, our clients are at the heart of everything we do. We prioritize customer satisfaction by offering flexible solutions tailored to their specific needs. Whether you're a small business or a large industrial facility, we're committed to providing exceptional service and support at every step of the process.",
    icon: ArrowRightIcon,
  },
];

export default function AboutUsPageComp() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-700">
                Our Commitment to Efficiency and Sustainability
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better future
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At AMR, we are dedicated to revolutionizing the scrap metal
                industry. With a focus on efficiency and sustainability, we
                strive to provide top-notch services to our clients while
                contributing to a greener future.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-green-700"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://s3.amazonaws.com/editorial.ceg/1000px/s3-36347-N-RE-DOOS-PHIL-METAL-RPRNT.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
