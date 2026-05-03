

import AnimalData from "@/components/AnimalData";
import Banner from "@/components/Banner";
import GuideQuarbani from "@/components/GuideQuarbani";
import Marque from "@/components/Marque";
import WantoSell from "@/components/WantToSell";
import WhyChoseUS from "@/components/WhyChoseUS";


import Image from "next/image";

export default function Home() {
  return (
   <>

   <Banner/>
   <Marque/>
   <AnimalData/>
   <GuideQuarbani/>
   <WhyChoseUS/>
   <WantoSell/>
   
   
   </>
  );
}
