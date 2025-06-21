"use client";
import { imageURL } from "@/sanity/utils/common.utils";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClubLogoGif({ clubInfo }) {
  return (
    <motion.div layoutId="logo" className="w-28">
      <Image
        src={imageURL(clubInfo.logoBig, "gif").url()}
        alt="iqlipse-logo"
        width={500}
        height={500}
        className="brightness-125 dark:brightness-100 max-w-full w-sm"
      />
    </motion.div>
  );
}
