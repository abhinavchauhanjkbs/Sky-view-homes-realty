import btnDownload from "@/assets/btn-download-auction-list.png";

const auctions = [
  { property: "3BHK Apartm...", city: "Gurgaon", bank: "SBI", price: "₹42,00,000", date: "28 Feb 2026", status: "Upcoming", statusColor: "text-primary" },
  { property: "Retail Shop", city: "Karol Bagh, D...", bank: "SBI", price: "₹42,00,000", date: "28 Feb 2026", status: "Open", statusColor: "text-orange-400" },
  { property: "Office Space", city: "Greater Noida", bank: "HDFC", price: "₹62,00,000", date: "28 Feb 2026", status: "Upcoming", statusColor: "text-primary" },
  { property: "2BHK Builder...", city: "Andheri East,...", bank: "PNB", price: "₹42,00,000", date: "28 Feb 2026", status: "Upcoming", statusColor: "text-primary" },
  { property: "Industrial Shed", city: "Dwarka, Delhi", bank: "Bank of Baroda", price: "₹31,00,000", date: "28 Feb 2026", status: "New", statusColor: "text-orange-400" },
  { property: "Residential Pl...", city: "Faridabad", bank: "ICICI", price: "₹22,00,000", date: "28 Feb 2026", status: "Upcoming", statusColor: "text-primary" },
];

const AuctionSchedule = () => (
  <section className="bg-primary py-12 sm:py-16 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-10">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <h2 className="section-heading text-primary-foreground">
            Upcoming Auction Schedule
          </h2>
          <p className="text-primary-foreground/75 mt-4 max-w-[600px] text-[15px] leading-relaxed">
            Stay updated with verified bank auction dates, reserve pricing, prime locations, and participation deadlines across major cities.
          </p>
        </div>
        <img src={btnDownload} alt="Download Auction List" className="hidden lg:block h-12 cursor-pointer hover:opacity-90 transition-opacity" />
      </div>

      <div className="bg-primary-foreground rounded-2xl overflow-x-auto shadow-lg p-6">
        <table className="w-full min-w-[1050px] text-[15px] whitespace-nowrap border-separate" style={{ borderSpacing: '0 10px' }}>
          <thead>
            <tr className="bg-[#F9F9F9]">
              <th className="text-left py-4 px-8 font-semibold text-muted-foreground text-[14px] rounded-l-lg border border-r-0 border-[#B0B0B0]">Property</th>
              <th className="text-center py-4 px-6 font-semibold text-muted-foreground text-[14px] border-y border-[#B0B0B0]">City</th>
              <th className="text-center py-4 px-6 font-semibold text-muted-foreground text-[14px] border-y border-[#B0B0B0]">Bank</th>
              <th className="text-center py-4 px-6 font-semibold text-muted-foreground text-[14px] border-y border-[#B0B0B0]">Reserve Price</th>
              <th className="text-center py-4 px-6 font-semibold text-muted-foreground text-[14px] border-y border-[#B0B0B0]">Auction Date</th>
              <th className="text-center py-4 px-6 font-semibold text-muted-foreground text-[14px] border-y border-[#B0B0B0]">Status</th>
              <th className="text-center py-4 px-6 font-semibold text-muted-foreground text-[14px] rounded-r-lg border border-l-0 border-[#B0B0B0]">Action</th>
            </tr>
          </thead>
          <tbody>
            {auctions.map((a, i) => (
              <tr key={i} className="bg-primary-foreground">
                <td className="py-5 px-8 text-foreground font-medium text-[14px] rounded-l-lg border border-r-0 border-[#B0B0B0]">{a.property}</td>
                <td className="py-5 px-6 text-center text-muted-foreground border-y border-[#B0B0B0]">{a.city}</td>
                <td className="py-5 px-6 text-center text-muted-foreground border-y border-[#B0B0B0]">{a.bank}</td>
                <td className="py-5 px-6 text-center text-muted-foreground border-y border-[#B0B0B0]">{a.price}</td>
                <td className="py-5 px-6 text-center text-muted-foreground border-y border-[#B0B0B0]">{a.date}</td>
                <td className={`py-5 px-6 text-center font-semibold text-[15px] border-y border-[#B0B0B0] ${a.statusColor}`}>{a.status}</td>
                <td className="py-5 px-6 text-center rounded-r-lg border border-l-0 border-[#B0B0B0]">
                  <button className="text-muted-foreground underline text-[14px] hover:no-underline">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default AuctionSchedule;
