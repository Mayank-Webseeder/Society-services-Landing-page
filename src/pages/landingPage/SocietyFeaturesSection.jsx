import {
  MdBusiness,
  MdBuild,
  MdAccountBalance,
  MdForum,
  MdSecurity,
} from "react-icons/md";
import societyImg from '../../assets/societyImg.jpg';

const SocietyFeaturesSection = () => {
  const societyFeatures = [
    { id: "management", icon: MdBusiness, title: "Handover from Builder ", color: "#3b82f6" },
    { id: "maintenance", icon: MdBuild, title: "Facility Management ", color: "#f59e0b" },
    { id: "financial", icon: MdAccountBalance, title: "Repair Maintenance ", color: "#10b981" },
    { id: "communication", icon: MdForum, title: "Procurement", color: "#8b5cf6" },
    { id: "security", icon: MdSecurity, title: "Staff Management ", color: "#ef4444" },
    { id: "Legal", icon: MdSecurity, title: "Legal requirements", color: "#ef4444" },
    { id: "Committee", icon: MdSecurity, title: "Committee Education and Training,", color: "#ef4444" },
  ]; 

  return (
    <section className="py-5 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-slate-900 mb-2 text-lg md:text-3xl ">
          Combine all your Society Needs under one platform
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
          Streamline operations, enhance communication, and create a seamless experience for your society members
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 ">
        {/* Left Image */}
        <div className="flex-1">
          <div className="min-w-full h-72 md:h-[706px] rounded-xl overflow-hidden border border-slate-200">
            <img
              src="img-2.jpg"
              alt="Society Management Dashboard Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Features */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6">
          {societyFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex items-center gap-4 p-4 md:p-6 rounded-xl border bg-white"
                style={{ borderColor: `${feature.color}20`, height: "80px" }}
              >
                <div
                  className="flex items-center justify-center rounded-lg min-w-[48px] min-h-[48px]"
                  style={{ backgroundColor: `${feature.color}15`, padding: "0.25rem" }}
                >
                  <IconComponent style={{ color: feature.color, fontSize: 20 }} />
                </div>
                <h3 className="text-slate-900 text-sm md:text-base font-medium">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocietyFeaturesSection;
