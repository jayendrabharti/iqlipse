"use client";

import useSWR from "swr";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { imageURL } from '@/sanity/utils/common.utils';
import avatar from "@/public/avatar.jpg"; 
import useIsMobile from "@/hooks/useIsMobile";

const fetcher = (url) => fetch(url).then((r) => r.json());

const MembersAnimatedTooltip = () => {
  
  const isMobile = useIsMobile();
  
  const { data: members, error, isLoading } = useSWR(`/api/team`, fetcher, {
    revalidateOnFocus: false,  // Don't refetch on tab switch
    revalidateOnReconnect: false,  // Don't refetch on reconnect
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading members</div>;
  
  if(!members)return;
  const membersData = members.filter(members=>members.image).map((member) => {
    return {
      id: member._id,
      name: member.name,
      designation: member.designation,
      image: imageURL(member.image).height(400).width(400).fit('crop').quality(100).url()
    }
  });
  

  return (
    
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {isMobile ? " " :<AnimatedTooltip items={membersData} />}
    </div>
  )
}

export default MembersAnimatedTooltip;
