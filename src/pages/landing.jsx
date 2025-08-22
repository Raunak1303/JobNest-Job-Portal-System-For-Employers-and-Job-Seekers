import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
          Building Futures Together
          <span className="flex items-center gap-2 sm:gap-6">
            here at
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="JobNest Logo"
            />
          </span>
        </h1>
        <p className="text-indigo-500 sm:mt-4 text-xs sm:text-xl">
          Find skilled professionals or your next career move - all in one place
        </p>
      </section>

      {/* CTA Buttons */}
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button
            size="xl"
            className="bg-gradient-to-r from-rose-500 to-indigo-500 text-white shadow-lg hover:opacity-90"
          >
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button
            size="xl"
            className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white shadow-lg hover:opacity-90"
          >
            Post a Job
          </Button>
        </Link>
      </div>

      {/* Companies Carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain transition"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner Image */}
      <img src="/Banner.png" className="w-full rounded-xl shadow-xl" />

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-indigo-600 to-rose-600 border border-indigo-400/50 hover:border-rose-400/70 shadow-lg transition">
          <CardHeader>
            <CardTitle className="font-bold bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
              Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            Discover opportunities tailored to your skills, apply with ease, and follow your career journey in one place.
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-600 to-rose-600 border border-indigo-400/50 hover:border-rose-400/70 shadow-lg transition">
          <CardHeader>
            <CardTitle className="font-bold bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
              Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            Share openings, review applications, and connect with the right talent to grow your team faster.
          </CardContent>
        </Card>
      </section>

      {/* FAQ Accordion */}
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
