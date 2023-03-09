import PageTitle from "@/components/PageTitle/PageTitle";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PageTitle title="Hakkımda" />
      <br />
      <article>
        <p>
          Adım Ömer Serdar Şerifoğlu. 25.08.1991 tarihinde, Şişli / İstanbul’da
          doğmuşum. Marmara Üniversitesi İstatistik bölümünden 2014 yılında
          mezun oldum. Anadolu Üniversitesi açıköğretim olarak Yönetim Bilişim
          Sistemleri okumaktayım. İstatistik bölümünde okurken Türkiye Basketbol
          Federasyonunda kursa giderek Basketbol Antrenörlük lisansımı aldım.
          Okul ile birlikte ve sonrasında toplam 4 yıla yakın bir süre
          altyapılarda bütün yaş gruplarında çalıştım. Beykozspor, Ortaçeşmespor
          ve Paşabahçe Ahmet Ferit İnal Lisesi kulüp ve okul takımlarında
          basketbol antrenörü olarak çalıştım. Bu süreçte yüzlerce çocukla,
          gençle ve onların aileleriyle çalışma fırsatım oldu, herbiri eşsiz
          deneyimler elde etmemi sağladı bu süreçte temasta olduğum herkese
          minnettarım. Basketbolu çok sevmeme rağmen maddi yetersizlikler
          sebebiyle devam etmeme kararı aldım.
        </p>
        <br />
        <p>
          Askerlikten sonra Bahçeşehir Üniversitesi Wissen Akademie’de İŞKUR
          destekli 6 aylık, tam zamanlı bir yazılım eğitimi programına katılma
          fırsatı buldum. Yazılımla bu eğitimde tanıştım diyebilirim. Sadece bir
          bilgisayar ve akıl ile bir şeyler üretebilmek çok hoşuma gitti.
          Derslerin dışındada kendimi geliştirmeye yeni şeyler öğrenmeye devam
          ettim. Kurstaki harika hocalarıma, beni yazılımla tanıştırdıkları ve
          kurs bittikten sonra dahi, ilk iş tecrübelerimde, yapamayacakmışım
          gibi hissettiğim günlerde bile desteklerini esirgemedikleri için
          şükran borçluyum.
        </p>
        <br />
        <p>
          Kurstan mezun olduğum Mart 2018 tarihinden bugüne yazılım sektöründe
          farklı firmalarda kah full stack developer, kah backend developer, kah
          frontend developer olarak çalışmaktayım.{" "}
          <Link href="/is-deneyimlerim">
            İş deneyimlerimi detaylı olarak görmek isterseniz buraya
            tıklayabilirsiniz.
          </Link>
        </p>
        <br />
        <p>
          Kariyerime Frontend Developer olarak devam etmek istiyorum. Geçmiş
          tecrübelerimden sonra uygulamalarda Frontend alanının benim için daha
          uygun olduğunu gördüm. Yaptığım bir geliştirmenin doğrudan kullanıcıya
          temas etmesi ve bunun hakkında geri dönüş alabilmek hoşuma gidiyor. Bu
          doğrultuda hedefimin Frontend alanında uzmanlaşmak olduğunu
          söyleyebilirim. Frontend dışında UI/UX konularında da kendimi
          geliştirmeye gayret ediyorum. Kullanıcıya iyi bir görsel ve deneyim
          sunamadıktan sonra kullanılan teknolojinin veya dilin herhangi bir
          öneminin olmadığını düşünüyorum.
        </p>
        <br />
        <p>
          İş dışındaki vakitlerimde; öğrendiğim farklı şeyleri pekiştirmek hemde
          kendim kullanabileceğim yan projeler geliştiriyorum{" "}
          <Link href="/projelerim">
            Projelerim hakkında detaylara ulaşmak için buraya tıklayabilirsiniz
          </Link>
          , yazılımla alakalı hazırlanmış video eğitimler izliyorum, blog
          yazıları okuyorum. Yazılım haricindede ingilizcemi geliştirmek için
          çalışıyorum. Translate yardımı olmadan okuduğum bir İngilizce metni
          tam olarak anlayabilmeyi kendime hedef olarak belirledim, umarım
          gerçekleştirebilirim.
        </p>
        <br />
        <p>
          Bu websitesini, eğitimlerde veya kendi bireysel denemelerimde aldığım
          notlarımı insanların kullanımına açmak, kendime dair iş görüşmelerinde
          paylaşmaya vakit kalmayan bilgileri ve yazdığım yazılarımı
          paylaşabilmek amacıyla geliştirdim. Ömer Serdar Şerifoğlu hakkında
          kısa bir özet okudunuz. Buraya kadar okuduysanız çok teşekkür ederim.
          Eğer bir tavsiyeniz veya sorunuz olursa{" "}
          <Link href="mailto:serdarserifoglu@gmail.com">
            serdarserifoglu@gmail.com
          </Link>{" "}
          veya{" "}
          <Link
            href="https://www.linkedin.com/in/omer-serdar-serifoglu/"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
          yoluyla iletişim sağlayabilirsiniz.
        </p>
      </article>
    </>
  );
}
