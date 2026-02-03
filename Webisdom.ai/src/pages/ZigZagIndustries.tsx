import { useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export interface IndustryItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  status?: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  category?: string;
}

const ZigZagIndustries: React.FC = () => {
  const location = useLocation();
  const stateIndustry = location.state?.industry;

  const items: IndustryItem[] = Array.isArray(stateIndustry)
    ? stateIndustry
    : stateIndustry
    ? [stateIndustry]
    : [];

  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Industry not found</h2>
        <p>Please navigate from the industries page.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="py-12 space-y-12">
        <h2 className="text-4xl font-bold mb-4 mt-10 text-center">{items[0].category}</h2>
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const bgColor = index % 2 === 0 ? "bg-gray-50" : "bg-white";

          return (
            <div
              key={item.id}
              className={`${bgColor} flex flex-col md:flex-row gap-8 items-center py-12 px-4 md:px-16 rounded-lg shadow-sm`}
            >
              {/* Image */}
              <div
                className={`flex w-full md:w-1/3 justify-center ${
                  !isLeft ? "md:order-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                {item.status && (
                  <Badge variant="outline" className="mb-2">
                    {item.status}
                  </Badge>
                )}
                <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
                {item.subtitle && (
                  <h3 className="text-lg text-primary">{item.subtitle}</h3>
                )}
                <p className="text-gray-600 mt-2">{item.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Features:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.features.map((f) => (
                        <Badge key={f} variant="secondary">
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold">Technologies:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.technologies.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold">Benefits:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.benefits.map((b) => (
                        <Badge key={b} variant="secondary">
                          {b}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6 flex-wrap">
                  <Button asChild>
                    <Link to={`/products/${item.id}`} state={{ product: item }}>
                      Explore Platform
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default ZigZagIndustries;
