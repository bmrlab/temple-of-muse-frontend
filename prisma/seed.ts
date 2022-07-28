import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const SPACES_DATA: [number,string,string,string,string][] = [
  [1,"0x4a3e40B76a946495a6255B521240487e71f73d2C","bmrlab","BMR Lab\'s collection","All NFTs collected by BMR Lab\'s members"],
  [2,"0x4a3e40B76a946495a6255B521240487e71f73d2C","818","Tezign 818","Tezign 818 Annual Exhibition"]
]

const MEDIA_SLOTS_DATA: [number,string,string,string,string][] = [
  [1,"NFT_Area_13","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230051_rutherford.jpg","0x0000000000000000000000000000000000000000","#0051_rutherford"],
  [1,"NFT_Area_28","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230052_rosalindFranklin.jpg","0x0000000000000000000000000000000000000000","#0052_rosalindFranklin"],
  [1,"NFT_Area_75","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230029_satoshi.jpg","0x0000000000000000000000000000000000000000","#0029_satoshi"],
  [1,"NFT_Area_70","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230001_einstein.jpg","0x0000000000000000000000000000000000000000","#0001_einstein"],
  [1,"NFT_Area_17","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230015_kepler.jpg","0x0000000000000000000000000000000000000000","#0015_kepler"],
  [1,"NFT_Area_48","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230017_hubble.jpg","0x0000000000000000000000000000000000000000","#0017_hubble"],
  [1,"NFT_Area_39","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230054_kandinsky.jpg","0x0000000000000000000000000000000000000000","#0054_kandinsky"],
  [1,"NFT_Area_16","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230039_picasso.jpg","0x0000000000000000000000000000000000000000","#0039_picasso"],
  [1,"NFT_Area_34","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230028_qinshihuang.jpg","0x0000000000000000000000000000000000000000","#0028_qinshihuang"],
  [1,"NFT_Area_40","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230004_gutenburg.jpg","0x0000000000000000000000000000000000000000","#0004_gutenburg"],
  [1,"NFT_Area_41","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230006_tesla.jpg","0x0000000000000000000000000000000000000000","#0006_tesla"],
  [1,"NFT_Area_71","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230008_mariecurie.jpg","0x0000000000000000000000000000000000000000","#0008_mariecurie"],
  [1,"NFT_Area_22","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230045_fibonacci.jpg","0x0000000000000000000000000000000000000000","#0045_fibonacci"],
  [1,"NFT_Area_38","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230020_luban.jpg","0x0000000000000000000000000000000000000000","#0020_luban"],
  [1,"NFT_Area_73","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230059_metchnikoff.jpg","0x0000000000000000000000000000000000000000","#0059_metchnikoff"],
  [1,"NFT_Area_23","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230053_faraday.jpg","0x0000000000000000000000000000000000000000","#0053_faraday"],
  [1,"NFT_Area_61","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230033_kongming.jpg","0x0000000000000000000000000000000000000000","#0033_kongming"],
  [1,"NFT_Area_14","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230010_pythagoras.jpg","0x0000000000000000000000000000000000000000","#0010_pythagoras"],
  [1,"NFT_Area_33","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230046_galileo.jpg","0x0000000000000000000000000000000000000000","#0046_galileo"],
  [1,"NFT_Area_44","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230062_shenkuo.jpg","0x0000000000000000000000000000000000000000","#0062_shenkuo"],
  [1,"NFT_Area_7","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230009_ada.jpg","0x0000000000000000000000000000000000000000","#0009_ada"],
  [1,"NFT_Area_35","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230007_turing.jpg","0x0000000000000000000000000000000000000000","#0007_turing"],
  [1,"NFT_Area_63","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230058_babbage.jpg","0x0000000000000000000000000000000000000000","#0058_babbage"],
  [1,"NFT_Area_74","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230027_gracehopper.jpg","0x0000000000000000000000000000000000000000","#0027_gracehopper"],
  [1,"NFT_Area_0","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230043_hawking.jpg","0x0000000000000000000000000000000000000000","#0043_hawking"],
  [1,"NFT_Area_77","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230012_newton.jpg","0x0000000000000000000000000000000000000000","#0012_newton"],
  [1,"NFT_Area_57","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230016_wright.jpg","0x0000000000000000000000000000000000000000","#0016_wright"],
  [1,"NFT_Area_15","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230044_hypatia.jpg","0x0000000000000000000000000000000000000000","#0044_hypatia"],
  [1,"NFT_Area_42","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230031_benjaminFranklin.jpg","0x0000000000000000000000000000000000000000","#0031_benjaminFranklin"],
  [1,"NFT_Area_32","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230055_leohmingpei.jpg","0x0000000000000000000000000000000000000000","#0055_leohmingpei"],
  [1,"NFT_Area_3","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230056_gaudi.jpg","0x0000000000000000000000000000000000000000","#0056_gaudi"],
  [1,"NFT_Area_51","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230013_jobs.jpg","0x0000000000000000000000000000000000000000","#0013_jobs"],
  [1,"NFT_Area_59","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230057_libai.jpg","0x0000000000000000000000000000000000000000","#0057_libai"],
  [1,"NFT_Area_8","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230042_liqingzhao.jpg","0x0000000000000000000000000000000000000000","#0042_liqingzhao"],
  [1,"NFT_Area_68","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230040_helenKeller.jpg","0x0000000000000000000000000000000000000000","#0040_helenKeller"],
  [1,"NFT_Area_36","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230019_confucius.jpg","0x0000000000000000000000000000000000000000","#0019_confucius"],
  [1,"NFT_Area_24","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230018_pascal.jpg","0x0000000000000000000000000000000000000000","#0018_pascal"],
  [1,"NFT_Area_45","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230021_descartes.jpg","0x0000000000000000000000000000000000000000","#0021_descartes"],
  [1,"NFT_Area_12","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230026_nightingale.jpg","0x0000000000000000000000000000000000000000","#0026_nightingale"],
  [1,"NFT_Area_56","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230004_gutenburg.jpg","0x0000000000000000000000000000000000000000","#0004_gutenburg"],
  [1,"NFT_Area_31","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230035_rachelCarson.jpg","0x0000000000000000000000000000000000000000","#0035_rachelCarson"],
  [1,"NFT_Area_58","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230036_freud.jpg","0x0000000000000000000000000000000000000000","#0036_freud"],
  [1,"NFT_Area_20","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230030_stephenson.jpg","0x0000000000000000000000000000000000000000","#0030_stephenson"],
  [1,"NFT_Area_18","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230050_poincare.jpg","0x0000000000000000000000000000000000000000","#0050_poincare"],
  [1,"NFT_Area_67","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230066_dyson.jpg","0x0000000000000000000000000000000000000000","#0066_dyson"],
  [1,"NFT_Area_69","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230024_morse.jpg","0x0000000000000000000000000000000000000000","#0024_morse"],
  [1,"NFT_Area_49","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230049_lavoisier.jpg","0x0000000000000000000000000000000000000000","#0049_lavoisier"],
  [1,"NFT_Area_19","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230003_davinci.jpg","0x0000000000000000000000000000000000000000","#0003_davinci"],
  [1,"NFT_Area_1","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230011_darwin.jpg","0x0000000000000000000000000000000000000000","#0011_darwin"],
  [1,"NFT_Area_26","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230032_mondrian.jpg","0x0000000000000000000000000000000000000000","#0032_mondrian"],
  [1,"NFT_Area_53","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230064_miro.jpg","0x0000000000000000000000000000000000000000","#0064_miro"],
  [1,"NFT_Area_66","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230038_mendel.jpg","0x0000000000000000000000000000000000000000","#0038_mendel"],
  [1,"NFT_Area_64","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230037_baekland.jpg","0x0000000000000000000000000000000000000000","#0037_baekland"],
  [1,"NFT_Area_62","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230049_lavoisier.jpg","0x0000000000000000000000000000000000000000","#0049_lavoisier"],
  [1,"NFT_Area_11","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230023_leeuwenhoek.jpg","0x0000000000000000000000000000000000000000","#0023_leeuwenhoek"],
  [1,"NFT_Area_4","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230065_ciolkowski.jpg","0x0000000000000000000000000000000000000000","#0065_ciolkowski"],
  [1,"NFT_Area_65","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230014_shannon.jpg","0x0000000000000000000000000000000000000000","#0014_shannon"],
  [1,"NFT_Area_78","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230022_planck.jpg","0x0000000000000000000000000000000000000000","#0022_planck"],
  [1,"NFT_Area_37","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230046_galileo.jpg","0x0000000000000000000000000000000000000000","#0046_galileo"],
  [1,"NFT_Area_21","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230025_engelbart.jpg","0x0000000000000000000000000000000000000000","#0025_engelbart"],
  [1,"NFT_Area_76","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230047_feynman.jpg","0x0000000000000000000000000000000000000000","#0047_feynman"],
  [1,"NFT_Area_29","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230061_bell.jpg","0x0000000000000000000000000000000000000000","#0061_bell"],
  [1,"NFT_Area_25","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230041_haytham.jpg","0x0000000000000000000000000000000000000000","#0041_haytham"],
  [1,"NFT_Area_5","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230005_watt.jpg","0x0000000000000000000000000000000000000000","#0005_watt"],
  [1,"NFT_Area_60","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230060_corbusier.jpg","0x0000000000000000000000000000000000000000","#0060_corbusier"],
  [1,"NFT_Area_47","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230063_miesVanderRohe.jpg","0x0000000000000000000000000000000000000000","#0063_miesVanderRohe"],
  [1,"NFT_Area_30","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230048_oppenheimer.jpg","0x0000000000000000000000000000000000000000","#0048_oppenheimer"],
  [1,"NFT_Area_79","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230002_archimedes.jpg","0x0000000000000000000000000000000000000000","#0002_archimedes"],
  [1,"NFT_Area_54","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230034_fleming.jpg","0x0000000000000000000000000000000000000000","#0034_fleming"],

  [2,"NFT_Area_13","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230051_rutherford.jpg","0x0000000000000000000000000000000000000000","#0051_rutherford"],
  [2,"NFT_Area_28","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230052_rosalindFranklin.jpg","0x0000000000000000000000000000000000000000","#0052_rosalindFranklin"],
  [2,"NFT_Area_54","https://dww4fzr5k5i0x.cloudfront.net/image%2F%230034_fleming.jpg","0x0000000000000000000000000000000000000000","#0034_fleming"]
]

async function main() {
  const spacesData = SPACES_DATA.map((line: [number,string,string,string,string]) => {
    const [id, ownerAddress, slug, title, description] = line
    return { id, ownerAddress, slug, title, description }
  })
  await prisma.space.createMany({
    data: spacesData
  })
  const mediaSlotsData = MEDIA_SLOTS_DATA.map((line: [number,string,string,string,string]) => {
    const [spaceId, slotKey, mediaUri, contractAddress, tokenId] = line
    return { spaceId, slotKey, mediaUri, contractAddress, tokenId }
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
