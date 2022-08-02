import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const SPACES_DATA: [number,string,string,string,string,string][] = [
  [1,'0x4a3e40B76a946495a6255B521240487e71f73d2C','bmrlab','BMR Lab\'s collection','All NFTs collected by BMR Lab\'s members','{"loaderUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-bmr-expo/Build/temple_of_muse_build_webgl.loader.js","dataUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-bmr-expo/Build/temple_of_muse_build_webgl.data.gz","frameworkUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-bmr-expo/Build/temple_of_muse_build_webgl.framework.js.gz","codeUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-bmr-expo/Build/temple_of_muse_build_webgl.wasm.gz","streamingAssetsUrl":"StreamingAssets","companyName":"BMR LAB","productName":"Temple Of Muse","productVersion":"0.1"}'],
  [2,'0x4a3e40B76a946495a6255B521240487e71f73d2C','818','Tezign 818','Tezign 818 Annual Exhibition','{"loaderUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-simple/Build/temple_of_muse_build_webgl.loader.js","dataUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-simple/Build/temple_of_muse_build_webgl.data.gz","frameworkUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-simple/Build/temple_of_muse_build_webgl.framework.js.gz","codeUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-simple/Build/temple_of_muse_build_webgl.wasm.gz","streamingAssetsUrl":"StreamingAssets","companyName":"BMR LAB","productName":"Temple Of Muse","productVersion":"0.1"}'],
  [3,'0x4a3e40B76a946495a6255B521240487e71f73d2C','simple','Simple','Simple','{"loaderUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-small-c/Build/temple_of_muse_small.loader.js","dataUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-small-c/Build/temple_of_muse_small.data.gz","frameworkUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-small-c/Build/temple_of_muse_small.framework.js.gz","codeUrl":"https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/space-small-c/Build/temple_of_muse_small.wasm.gz","streamingAssetsUrl":"StreamingAssets","companyName":"BMR LAB","productName":"Temple Of Muse","productVersion":"0.1"}'],
]

const MEDIA_SLOTS_DATA: [number,string,string,string,string][] = [
  [1,'NFT_Area_13','https://dww4fzr5k5i0x.cloudfront.net/image/%230051_rutherford.jpg','#0051_rutherford','#0051_rutherford'],
  [1,'NFT_Area_28','https://dww4fzr5k5i0x.cloudfront.net/image/%230052_rosalindFranklin.jpg','#0052_rosalindFranklin','#0052_rosalindFranklin'],
  [1,'NFT_Area_75','https://dww4fzr5k5i0x.cloudfront.net/image/%230029_satoshi.jpg','#0029_satoshi','#0029_satoshi'],
  [1,'NFT_Area_70','https://dww4fzr5k5i0x.cloudfront.net/image/%230001_einstein.jpg','#0001_einstein','#0001_einstein'],
  [1,'NFT_Area_17','https://dww4fzr5k5i0x.cloudfront.net/image/%230015_kepler.jpg','#0015_kepler','#0015_kepler'],
  [1,'NFT_Area_48','https://dww4fzr5k5i0x.cloudfront.net/image/%230017_hubble.jpg','#0017_hubble','#0017_hubble'],
  [1,'NFT_Area_39','https://dww4fzr5k5i0x.cloudfront.net/image/%230054_kandinsky.jpg','#0054_kandinsky','#0054_kandinsky'],
  [1,'NFT_Area_16','https://dww4fzr5k5i0x.cloudfront.net/image/%230039_picasso.jpg','#0039_picasso','#0039_picasso'],
  [1,'NFT_Area_34','https://dww4fzr5k5i0x.cloudfront.net/image/%230028_qinshihuang.jpg','#0028_qinshihuang','#0028_qinshihuang'],
  [1,'NFT_Area_40','https://dww4fzr5k5i0x.cloudfront.net/image/%230004_gutenburg.jpg','#0004_gutenburg','#0004_gutenburg'],
  [1,'NFT_Area_41','https://dww4fzr5k5i0x.cloudfront.net/image/%230006_tesla.jpg','#0006_tesla','#0006_tesla'],
  [1,'NFT_Area_71','https://dww4fzr5k5i0x.cloudfront.net/image/%230008_mariecurie.jpg','#0008_mariecurie','#0008_mariecurie'],
  [1,'NFT_Area_22','https://dww4fzr5k5i0x.cloudfront.net/image/%230045_fibonacci.jpg','#0045_fibonacci','#0045_fibonacci'],
  [1,'NFT_Area_38','https://dww4fzr5k5i0x.cloudfront.net/image/%230020_luban.jpg','#0020_luban','#0020_luban'],
  [1,'NFT_Area_73','https://dww4fzr5k5i0x.cloudfront.net/image/%230059_metchnikoff.jpg','#0059_metchnikoff','#0059_metchnikoff'],
  [1,'NFT_Area_23','https://dww4fzr5k5i0x.cloudfront.net/image/%230053_faraday.jpg','#0053_faraday','#0053_faraday'],
  [1,'NFT_Area_61','https://dww4fzr5k5i0x.cloudfront.net/image/%230033_kongming.jpg','#0033_kongming','#0033_kongming'],
  [1,'NFT_Area_14','https://dww4fzr5k5i0x.cloudfront.net/image/%230010_pythagoras.jpg','#0010_pythagoras','#0010_pythagoras'],
  [1,'NFT_Area_33','https://dww4fzr5k5i0x.cloudfront.net/image/%230046_galileo.jpg','#0046_galileo','#0046_galileo'],
  [1,'NFT_Area_44','https://dww4fzr5k5i0x.cloudfront.net/image/%230062_shenkuo.jpg','#0062_shenkuo','#0062_shenkuo'],
  [1,'NFT_Area_7','https://dww4fzr5k5i0x.cloudfront.net/image/%230009_ada.jpg','#0009_ada','#0009_ada'],
  [1,'NFT_Area_35','https://dww4fzr5k5i0x.cloudfront.net/image/%230007_turing.jpg','#0007_turing','#0007_turing'],
  [1,'NFT_Area_63','https://dww4fzr5k5i0x.cloudfront.net/image/%230058_babbage.jpg','#0058_babbage','#0058_babbage'],
  [1,'NFT_Area_74','https://dww4fzr5k5i0x.cloudfront.net/image/%230027_gracehopper.jpg','#0027_gracehopper','#0027_gracehopper'],
  [1,'NFT_Area_0','https://dww4fzr5k5i0x.cloudfront.net/image/%230043_hawking.jpg','#0043_hawking','#0043_hawking'],
  [1,'NFT_Area_77','https://dww4fzr5k5i0x.cloudfront.net/image/%230012_newton.jpg','#0012_newton','#0012_newton'],
  [1,'NFT_Area_57','https://dww4fzr5k5i0x.cloudfront.net/image/%230016_wright.jpg','#0016_wright','#0016_wright'],
  [1,'NFT_Area_15','https://dww4fzr5k5i0x.cloudfront.net/image/%230044_hypatia.jpg','#0044_hypatia','#0044_hypatia'],
  [1,'NFT_Area_42','https://dww4fzr5k5i0x.cloudfront.net/image/%230031_benjaminFranklin.jpg','#0031_benjaminFranklin','#0031_benjaminFranklin'],
  [1,'NFT_Area_32','https://dww4fzr5k5i0x.cloudfront.net/image/%230055_leohmingpei.jpg','#0055_leohmingpei','#0055_leohmingpei'],
  [1,'NFT_Area_3','https://dww4fzr5k5i0x.cloudfront.net/image/%230056_gaudi.jpg','#0056_gaudi','#0056_gaudi'],
  [1,'NFT_Area_51','https://dww4fzr5k5i0x.cloudfront.net/image/%230013_jobs.jpg','#0013_jobs','#0013_jobs'],
  [1,'NFT_Area_59','https://dww4fzr5k5i0x.cloudfront.net/image/%230057_libai.jpg','#0057_libai','#0057_libai'],
  [1,'NFT_Area_8','https://dww4fzr5k5i0x.cloudfront.net/image/%230042_liqingzhao.jpg','#0042_liqingzhao','#0042_liqingzhao'],
  [1,'NFT_Area_68','https://dww4fzr5k5i0x.cloudfront.net/image/%230040_helenKeller.jpg','#0040_helenKeller','#0040_helenKeller'],
  [1,'NFT_Area_36','https://dww4fzr5k5i0x.cloudfront.net/image/%230019_confucius.jpg','#0019_confucius','#0019_confucius'],
  [1,'NFT_Area_24','https://dww4fzr5k5i0x.cloudfront.net/image/%230018_pascal.jpg','#0018_pascal','#0018_pascal'],
  [1,'NFT_Area_45','https://dww4fzr5k5i0x.cloudfront.net/image/%230021_descartes.jpg','#0021_descartes','#0021_descartes'],
  [1,'NFT_Area_12','https://dww4fzr5k5i0x.cloudfront.net/image/%230026_nightingale.jpg','#0026_nightingale','#0026_nightingale'],
  [1,'NFT_Area_56','https://dww4fzr5k5i0x.cloudfront.net/image/%230004_gutenburg.jpg','#0004_gutenburg','#0004_gutenburg'],
  [1,'NFT_Area_31','https://dww4fzr5k5i0x.cloudfront.net/image/%230035_rachelCarson.jpg','#0035_rachelCarson','#0035_rachelCarson'],
  [1,'NFT_Area_58','https://dww4fzr5k5i0x.cloudfront.net/image/%230036_freud.jpg','#0036_freud','#0036_freud'],
  [1,'NFT_Area_20','https://dww4fzr5k5i0x.cloudfront.net/image/%230030_stephenson.jpg','#0030_stephenson','#0030_stephenson'],
  [1,'NFT_Area_18','https://dww4fzr5k5i0x.cloudfront.net/image/%230050_poincare.jpg','#0050_poincare','#0050_poincare'],
  [1,'NFT_Area_67','https://dww4fzr5k5i0x.cloudfront.net/image/%230066_dyson.jpg','#0066_dyson','#0066_dyson'],
  [1,'NFT_Area_69','https://dww4fzr5k5i0x.cloudfront.net/image/%230024_morse.jpg','#0024_morse','#0024_morse'],
  [1,'NFT_Area_49','https://dww4fzr5k5i0x.cloudfront.net/image/%230049_lavoisier.jpg','#0049_lavoisier','#0049_lavoisier'],
  [1,'NFT_Area_19','https://dww4fzr5k5i0x.cloudfront.net/image/%230003_davinci.jpg','#0003_davinci','#0003_davinci'],
  [1,'NFT_Area_1','https://dww4fzr5k5i0x.cloudfront.net/image/%230011_darwin.jpg','#0011_darwin','#0011_darwin'],
  [1,'NFT_Area_26','https://dww4fzr5k5i0x.cloudfront.net/image/%230032_mondrian.jpg','#0032_mondrian','#0032_mondrian'],
  [1,'NFT_Area_53','https://dww4fzr5k5i0x.cloudfront.net/image/%230064_miro.jpg','#0064_miro','#0064_miro'],
  [1,'NFT_Area_66','https://dww4fzr5k5i0x.cloudfront.net/image/%230038_mendel.jpg','#0038_mendel','#0038_mendel'],
  [1,'NFT_Area_64','https://dww4fzr5k5i0x.cloudfront.net/image/%230037_baekland.jpg','#0037_baekland','#0037_baekland'],
  [1,'NFT_Area_62','https://dww4fzr5k5i0x.cloudfront.net/image/%230049_lavoisier.jpg','#0049_lavoisier','#0049_lavoisier'],
  [1,'NFT_Area_11','https://dww4fzr5k5i0x.cloudfront.net/image/%230023_leeuwenhoek.jpg','#0023_leeuwenhoek','#0023_leeuwenhoek'],
  [1,'NFT_Area_4','https://dww4fzr5k5i0x.cloudfront.net/image/%230065_ciolkowski.jpg','#0065_ciolkowski','#0065_ciolkowski'],
  [1,'NFT_Area_65','https://dww4fzr5k5i0x.cloudfront.net/image/%230014_shannon.jpg','#0014_shannon','#0014_shannon'],
  [1,'NFT_Area_78','https://dww4fzr5k5i0x.cloudfront.net/image/%230022_planck.jpg','#0022_planck','#0022_planck'],
  [1,'NFT_Area_37','https://dww4fzr5k5i0x.cloudfront.net/image/%230046_galileo.jpg','#0046_galileo','#0046_galileo'],
  [1,'NFT_Area_21','https://dww4fzr5k5i0x.cloudfront.net/image/%230025_engelbart.jpg','#0025_engelbart','#0025_engelbart'],
  [1,'NFT_Area_76','https://dww4fzr5k5i0x.cloudfront.net/image/%230047_feynman.jpg','#0047_feynman','#0047_feynman'],
  [1,'NFT_Area_29','https://dww4fzr5k5i0x.cloudfront.net/image/%230061_bell.jpg','#0061_bell','#0061_bell'],
  [1,'NFT_Area_25','https://dww4fzr5k5i0x.cloudfront.net/image/%230041_haytham.jpg','#0041_haytham','#0041_haytham'],
  [1,'NFT_Area_5','https://dww4fzr5k5i0x.cloudfront.net/image/%230005_watt.jpg','#0005_watt','#0005_watt'],
  [1,'NFT_Area_60','https://dww4fzr5k5i0x.cloudfront.net/image/%230060_corbusier.jpg','#0060_corbusier','#0060_corbusier'],
  [1,'NFT_Area_47','https://dww4fzr5k5i0x.cloudfront.net/image/%230063_miesVanderRohe.jpg','#0063_miesVanderRohe','#0063_miesVanderRohe'],
  [1,'NFT_Area_30','https://dww4fzr5k5i0x.cloudfront.net/image/%230048_oppenheimer.jpg','#0048_oppenheimer','#0048_oppenheimer'],
  [1,'NFT_Area_79','https://dww4fzr5k5i0x.cloudfront.net/image/%230002_archimedes.jpg','#0002_archimedes','#0002_archimedes'],
  [1,'NFT_Area_54','https://dww4fzr5k5i0x.cloudfront.net/image/%230034_fleming.jpg','#0034_fleming','#0034_fleming'],

  [2,'NFT_Area_13','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/01.jpg','特赞第一个感恩节','2014/11 百无聊赖，感激已经开始在特赞社区活跃起来的朋友们。'],
  [2,'NFT_Area_28','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/02.jpg','每当好事发生','2015/10 2015年10月29日特赞第一版网站上线了付费功能，支付99元可以使用特赞的对接服务。上线不久，就有人支付了第一笔费用。感受到一种意外的信任感，用这99元请全体同学庆祝，正好够买人头份的“可爱多”冰激凌。从此，每逢好事，特赞人就会吃可爱多。到现在已经吃了上千只可爱多。'],
  [2,'NFT_Area_54','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/03.jpg','发现特赞海报','2014/01 特赞第一次线下活动，在2013年12月31日举行，居然有超过50位朋友来参加'],
  [2,'NFT_Area_75','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/04.jpg','发布全球首份《设计人工智能报告》','2018/4 2018年，特赞与同济大学设计创意学院联合创立的‘D&AI设计与人工智能实验室’ 发布第一份《2017设计与人工智能报告》，回应纠葛在人工智能与设计的未来之间的迷思，报告发布至今已被100万+人浏览阅读。'],
  [2,'NFT_Area_39','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/05.jpg','人民日报上的特赞','2019/1 若把人工智能和人的大脑进行类比，这些应用都是追求更高、更快、更强、更准的“左脑”范畴。但要实现人机协同，还需延展出具有空间感、形象感、想象力、创造力等方面的人工智能“右脑”，让机器更善意、更有温度。——特赞创始人范凌'],
  [2,'NFT_Area_16','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/06.jpg','#用插话说感谢你#','特赞和微博动漫联合发起暖心campaign，从#感恩许愿树# 到 #用插画说感谢你# ，两周多时间，特赞召集100+优秀插画师一起发声，打造超人气话题。插画师的力量，在小小话题下被不断放大！'],
  [2,'NFT_Area_17','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/07.jpg','特赞作为亚太区唯一内容科技公司上榜 Forrester MRM报告','2022/3 Forrester 是全球知名独立技术和市场调研公司 特赞内容科技,上榜Forrester 2022年Q1 MRM 报告 特赞入选 Forrester Now Tech MRM 报告 成为亚太区唯一被收录的内容科技厂商'],
  [2,'NFT_Area_70','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/08.jpg','特赞正式成为独角兽','2021/11 2021年特赞完成了D1轮融资，成为估值超过10亿美金的内容科技独角兽。2015年，以科技赋能想象力为使命，特赞开始了创业之路。创业以来，我们始终专注于技术与创意的融合，致力于搭建创意内容的数字新基建。一路走来，我们要感谢400多位深度探索的特赞同学200个大型企业客户和8000个中小企业客户，50,000多个各类创意方，不断增长的上下游合作伙伴，还有每位特赞人背后不断壮大的家庭成员……感谢所有“同路人”。'],
  [2,'NFT_Area_48','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/09.jpg','特赞@2050，让全世界的年青人因为科技团聚','每一年 未来的世界，会变成什么样？人工智能，会怎样融入我们的生活？AI 如何解放人类的生产力与想象力？每年4-5月，特赞来到杭州云栖小镇，聚集全球各地热爱科技的年青人，带来想象力的狂欢。'],
  [2,'NFT_Area_79','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/10.jpg','由同济特赞设计人工智能实验室出品的「AI赞绘：金山农民画」来上海进博会啦','2018/11 同济大学特赞设计人工智能实验室在「遇见上海」板块打造了「AI赞绘：金山农民画」，通过 Tezign.EYE（特赞眼：创意内容的图像处理引擎），对200多张金山农民画进行解构和学习，提炼出金山农民画中的关键风格和元素，用科技赋能传统手工艺术的想象力。'],
  [2,'NFT_Area_34','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/11.jpg','范老师给特物馆的寄语','用物留住特别的特赞，用心唤起特赞的特别！'],
  [2,'NFT_Area_40','https://pubtezign.oss-cn-beijing.aliyuncs.com/templeofmuse/818/12.jpg','2020 特赞工牌','2020/06/15 用AI智能生成的工牌，我们也用上啦！各种脑洞大开的特赞工牌，代表了各种各样的特赞人'],
  // [2,'NFT_Area_40','https://dww4fzr5k5i0x.cloudfront.net/temple/examples/example4.mp4','Example 4','Example 4'],
]

async function main() {
  // clear first
  await prisma.mediaSlot.deleteMany({
    where: { spaceId: { in: [1, 2] } }
  })
  await prisma.space.deleteMany({
    where: { id: { in: [1, 2] } }
  })
  // spaces
  const spacesData = SPACES_DATA.map((line: [number,string,string,string,string,string]) => {
    const [id, ownerAddress, slug, title, description, config] = line
    return { id, ownerAddress, slug, title, description, config }
  })
  await prisma.space.createMany({
    data: spacesData
  })
  // slots
  const mediaSlotsData = MEDIA_SLOTS_DATA.map((line: [number,string,string,string,string]) => {
    const [spaceId, slotKey, mediaUri, name, description] = line
    return { spaceId, slotKey, mediaUri, name, description }
  })
  await prisma.mediaSlot.createMany({
    data: mediaSlotsData
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
