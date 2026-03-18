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
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-[150px] -mt-[52px] sm:-mt-[60px] md:-mt-[68px] mb-6 sm:mb-8 md:mb-10 relative z-20">
    <div className="bg-card rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-[240px_240px_1fr_auto] gap-4 md:gap-6">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">City / Location</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delhi-ncr">Delhi NCR</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="bengaluru">Bengaluru</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
              <SelectItem value="kolkata">Kolkata</SelectItem>
              <SelectItem value="pune">Pune</SelectItem>
              <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="jaipur">Jaipur</SelectItem>
              <SelectItem value="surat">Surat</SelectItem>
              <SelectItem value="lucknow">Lucknow</SelectItem>
              <SelectItem value="kanpur">Kanpur</SelectItem>
              <SelectItem value="nagpur">Nagpur</SelectItem>
              <SelectItem value="indore">Indore</SelectItem>
              <SelectItem value="bhopal">Bhopal</SelectItem>
              <SelectItem value="patna">Patna</SelectItem>
              <SelectItem value="chandigarh">Chandigarh</SelectItem>
              <SelectItem value="kochi">Kochi</SelectItem>
              <SelectItem value="coimbatore">Coimbatore</SelectItem>
              <SelectItem value="visakhapatnam">Visakhapatnam</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Property Type</label>
          <Select>
            <SelectTrigger className="w-full h-10 rounded-[4px] border border-input px-[10px] py-2">
              <SelectValue placeholder="Select property type" />
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

      {/* Row 2 removed per request */}
    </div>
  </div>
);

export default SearchFilter;
