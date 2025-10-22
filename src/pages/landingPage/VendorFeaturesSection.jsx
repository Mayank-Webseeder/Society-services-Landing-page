import {
  MdWork,
  MdPeople,
  MdPayment,
  MdGroups,
  MdAnalytics,
} from "react-icons/md";
import vendorImg from "../../assets/vendorImg.jpeg";

const VendorFeaturesSection = () => {
  const vendorFeatures = [
    { id: "jobs", icon: MdWork, title: "Job Management & Scheduling", color: "#f59e0b" },
    { id: "clients", icon: MdPeople, title: "Client Relationship Management", color: "#3b82f6" },
    { id: "payments", icon: MdPayment, title: "Payment & Billing Solutions", color: "#10b981" },
    { id: "workforce", icon: MdGroups, title: "Workforce Management", color: "#8b5cf6" },
    { id: "analytics", icon: MdAnalytics, title: "Business Analytics & Insights", color: "#ef4444" },
  ];

  return (
    <section className="py-12 px-4 md:px-20 ">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-slate-900 mb-2 text-lg md:text-3xl font-bold">
         Empower your Business with our Vendor Platform
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
Scale your business operations, improve your performance and deliver exceptional results to Societies for their various needs of Services and Material. 

        </p>

            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto pt-5">
If you are one of vendor fulfilling any Housing Society requirements then this platform will get your business recognised and zoom your business to new heights of success and performance

        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12  ">
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
          {vendorFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex items-center gap-4 p-4 md:p-6 rounded-xl border bg-white hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: `${feature.color}20`, height: "80px", width: "100%" }}
              >
                <div
                  className="flex items-center justify-center rounded-lg min-w-[48px] min-h-[48px]"
                  style={{ backgroundColor: `${feature.color}15`, padding: "0.25rem" }}
                >
                  <IconComponent style={{ color: feature.color, fontSize: 28 }} />
                </div>
                <h3 className="text-slate-900 text-sm md:text-base font-medium">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
        {/* Left Image */}
        <div className="flex-1 mx-auto">
          <div className="w-full h-72 md:h-[500px] rounded-xl overflow-hidden border border-slate-200">
            <img
              src="/img-1.jpg"
              alt="Vendor Management Dashboard Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Features */}
    
      </div>
    </section>
  );
};

export default VendorFeaturesSection;
