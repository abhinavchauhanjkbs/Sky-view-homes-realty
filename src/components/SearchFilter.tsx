import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SearchFilter = () => (
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-[150px] -mt-[60px] sm:-mt-[80px] md:-mt-[100px] relative z-20">
    <div className="bg-card rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-[240px_240px_1fr_auto] gap-4 md:gap-6">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">City / Location</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="Buy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Property Type</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="House for Sale" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House for Sale</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">&nbsp;</label>
          <Input className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2" placeholder="Where? Place, City, ZIP, Street" />
        </div>
        <div className="flex items-end">
          <Button variant="hero" size="lg" className="w-full xl:w-[100px] rounded-full">Search</Button>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Price up to (Rs)</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="Up to Rs500,000" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500000">Up to Rs500,000</SelectItem>
              <SelectItem value="1000000">Up to Rs1,000,000</SelectItem>
              <SelectItem value="2000000">Up to Rs2,000,000</SelectItem>
              <SelectItem value="5000000">Up to Rs5,000,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Number of Rooms</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="1 Room" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Room</SelectItem>
              <SelectItem value="2">2 Rooms</SelectItem>
              <SelectItem value="3">3 Rooms</SelectItem>
              <SelectItem value="4">4+ Rooms</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Living Area in m²</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="Up to 50 m²" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50">Up to 50 m²</SelectItem>
              <SelectItem value="100">Up to 100 m²</SelectItem>
              <SelectItem value="200">Up to 200 m²</SelectItem>
              <SelectItem value="500">Up to 500 m²</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Radius / Distance</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="15Km" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5Km</SelectItem>
              <SelectItem value="15">15Km</SelectItem>
              <SelectItem value="30">30Km</SelectItem>
              <SelectItem value="50">50Km</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </div>
);

export default SearchFilter;
