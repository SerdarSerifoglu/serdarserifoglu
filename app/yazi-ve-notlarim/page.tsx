import type { Metadata } from "next";
import { metadataStandartKeywords } from "@/utils/statics";

//data çekilerek meta tagler oluşturulacaksa bu fonksiyon üzerinden oluşturulacak
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}): Promise<Metadata> {
  // const product = await getData();

  //normal metadata objesi dönüyor
  return {
    title: "Ömer Serdar",
    description:
      "Yazılıma dair yazılarım ve notlarımın bulduğu sayfa. İyi okumalar dilerim.",
    authors: [{ name: "Ömer Serdar Şerifoğlu" }],
    keywords: [...metadataStandartKeywords],
  };
}

export default async function Page() {
  // var data = await getData();

  return (
    <>
      <h2>Bu sayfa yapım aşamasındadır.</h2>
    </>
  );
}
