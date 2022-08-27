import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const BMR_EXPO_SPACE = {
  "loaderUrl": "https://static-common.tezign.com/templeofmuse/space-bmr-expo/Build/tom_bmr_818_wegbl.loader.js",
  "dataUrl": "https://static-common.tezign.com/templeofmuse/space-bmr-expo/Build/tom_bmr_818_wegbl.data.gz",
  "frameworkUrl": "https://static-common.tezign.com/templeofmuse/space-bmr-expo/Build/tom_bmr_818_wegbl.framework.js.gz",
  "codeUrl": "https://static-common.tezign.com/templeofmuse/space-bmr-expo/Build/tom_bmr_818_wegbl.wasm.gz",
  // "streamingAssetsUrl": "StreamingAssets",
  // "companyName": "BMR LAB",
  // "productName": "Temple Of Muse",
  // "productVersion": "0.1"
}

const TEZIGN_818_SPACE = {
  "loaderUrl": "https://static-common.tezign.com/templeofmuse/space-818-expo/Build/tom_tesign_818_wegbl.loader.js",
  "dataUrl": "https://static-common.tezign.com/templeofmuse/space-818-expo/Build/tom_tesign_818_wegbl.data.gz",
  "frameworkUrl": "https://static-common.tezign.com/templeofmuse/space-818-expo/Build/tom_tesign_818_wegbl.framework.js.gz",
  "codeUrl": "https://static-common.tezign.com/templeofmuse/space-818-expo/Build/tom_tesign_818_wegbl.wasm.gz",
}

const SMALL_BMR_IP_YANSHENG = {
    "loaderUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_yssd_gz.loader.js",
    "dataUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_yssd_gz.data.gz",
    "frameworkUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_yssd_gz.framework.js.gz",
    "codeUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_yssd_gz.wasm.gz",
}

const SMALL_BMR_IP_SIMMONS = {
    "loaderUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_simmons_gz.loader.js",
    "dataUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_simmons_gz.data.gz",
    "frameworkUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_simmons_gz.framework.js.gz",
    "codeUrl": "https://static-common.tezign.com/templeofmuse/space-small-bmr-ip/Build/build_simmons_gz.wasm.gz",
}

const SPACES_DATA: [number,string,string,string,string,string][] = [
  [1,'0x4a3e40B76a946495a6255B521240487e71f73d2C','bmrlab','BMR Lab\'s collection','All NFTs collected by BMR Lab\'s members',JSON.stringify(BMR_EXPO_SPACE)],
  [2,'0x4a3e40B76a946495a6255B521240487e71f73d2C','818','Tezign 818','Tezign 818 Annual Exhibition',JSON.stringify(TEZIGN_818_SPACE)],
  [3,'0x4a3e40B76a946495a6255B521240487e71f73d2C','yansheng','BMRLAB','BMRLAB',JSON.stringify(SMALL_BMR_IP_YANSHENG)],
  [4,'0x4a3e40B76a946495a6255B521240487e71f73d2C','simmons','BMRLAB','BMRLAB',JSON.stringify(SMALL_BMR_IP_SIMMONS)],
]

const MEDIA_SLOTS_DATA: [number,string,string,string,string][] = [
  [1,'NFT_Area_13','https://assets.bmr.art/image/0051_rutherford.jpg','#0051_rutherford','#0051_rutherford'],
  [1,'NFT_Area_28','https://assets.bmr.art/image/0052_rosalindFranklin.jpg','#0052_rosalindFranklin','#0052_rosalindFranklin'],
  [1,'NFT_Area_75','https://assets.bmr.art/image/0029_satoshi.jpg','#0029_satoshi','#0029_satoshi'],
  [1,'NFT_Area_70','https://assets.bmr.art/image/0001_einstein.jpg','#0001_einstein','#0001_einstein'],
  [1,'NFT_Area_17','https://assets.bmr.art/image/0015_kepler.jpg','#0015_kepler','#0015_kepler'],
  [1,'NFT_Area_48','https://assets.bmr.art/image/0017_hubble.jpg','#0017_hubble','#0017_hubble'],
  [1,'NFT_Area_39','https://assets.bmr.art/image/0054_kandinsky.jpg','#0054_kandinsky','#0054_kandinsky'],
  [1,'NFT_Area_16','https://assets.bmr.art/image/0039_picasso.jpg','#0039_picasso','#0039_picasso'],
  [1,'NFT_Area_34','https://assets.bmr.art/image/0028_qinshihuang.jpg','#0028_qinshihuang','#0028_qinshihuang'],
  [1,'NFT_Area_40','https://assets.bmr.art/image/0004_gutenburg.jpg','#0004_gutenburg','#0004_gutenburg'],
  [1,'NFT_Area_41','https://assets.bmr.art/image/0006_tesla.jpg','#0006_tesla','#0006_tesla'],
  [1,'NFT_Area_71','https://assets.bmr.art/image/0008_mariecurie.jpg','#0008_mariecurie','#0008_mariecurie'],
  [1,'NFT_Area_22','https://assets.bmr.art/image/0045_fibonacci.jpg','#0045_fibonacci','#0045_fibonacci'],
  [1,'NFT_Area_38','https://assets.bmr.art/image/0020_luban.jpg','#0020_luban','#0020_luban'],
  [1,'NFT_Area_73','https://assets.bmr.art/image/0059_metchnikoff.jpg','#0059_metchnikoff','#0059_metchnikoff'],
  [1,'NFT_Area_23','https://assets.bmr.art/image/0053_faraday.jpg','#0053_faraday','#0053_faraday'],
  [1,'NFT_Area_61','https://assets.bmr.art/image/0033_kongming.jpg','#0033_kongming','#0033_kongming'],
  [1,'NFT_Area_14','https://assets.bmr.art/image/0010_pythagoras.jpg','#0010_pythagoras','#0010_pythagoras'],
  [1,'NFT_Area_33','https://assets.bmr.art/image/0046_galileo.jpg','#0046_galileo','#0046_galileo'],
  [1,'NFT_Area_44','https://assets.bmr.art/image/0062_shenkuo.jpg','#0062_shenkuo','#0062_shenkuo'],
  [1,'NFT_Area_7','https://assets.bmr.art/image/0009_ada.jpg','#0009_ada','#0009_ada'],
  [1,'NFT_Area_35','https://assets.bmr.art/image/0007_turing.jpg','#0007_turing','#0007_turing'],
  [1,'NFT_Area_63','https://assets.bmr.art/image/0058_babbage.jpg','#0058_babbage','#0058_babbage'],
  [1,'NFT_Area_74','https://assets.bmr.art/image/0027_gracehopper.jpg','#0027_gracehopper','#0027_gracehopper'],
  [1,'NFT_Area_0','https://assets.bmr.art/image/0043_hawking.jpg','#0043_hawking','#0043_hawking'],
  [1,'NFT_Area_77','https://assets.bmr.art/image/0012_newton.jpg','#0012_newton','#0012_newton'],
  [1,'NFT_Area_57','https://assets.bmr.art/image/0016_wright.jpg','#0016_wright','#0016_wright'],
  [1,'NFT_Area_15','https://assets.bmr.art/image/0044_hypatia.jpg','#0044_hypatia','#0044_hypatia'],
  [1,'NFT_Area_42','https://assets.bmr.art/image/0031_benjaminFranklin.jpg','#0031_benjaminFranklin','#0031_benjaminFranklin'],
  [1,'NFT_Area_32','https://assets.bmr.art/image/0055_leohmingpei.jpg','#0055_leohmingpei','#0055_leohmingpei'],
  [1,'NFT_Area_3','https://assets.bmr.art/image/0056_gaudi.jpg','#0056_gaudi','#0056_gaudi'],
  [1,'NFT_Area_51','https://assets.bmr.art/image/0013_jobs.jpg','#0013_jobs','#0013_jobs'],
  [1,'NFT_Area_59','https://assets.bmr.art/image/0057_libai.jpg','#0057_libai','#0057_libai'],
  [1,'NFT_Area_8','https://assets.bmr.art/image/0042_liqingzhao.jpg','#0042_liqingzhao','#0042_liqingzhao'],
  [1,'NFT_Area_68','https://assets.bmr.art/image/0040_helenKeller.jpg','#0040_helenKeller','#0040_helenKeller'],
  [1,'NFT_Area_36','https://assets.bmr.art/image/0019_confucius.jpg','#0019_confucius','#0019_confucius'],
  [1,'NFT_Area_24','https://assets.bmr.art/image/0018_pascal.jpg','#0018_pascal','#0018_pascal'],
  [1,'NFT_Area_45','https://assets.bmr.art/image/0021_descartes.jpg','#0021_descartes','#0021_descartes'],
  [1,'NFT_Area_12','https://assets.bmr.art/image/0026_nightingale.jpg','#0026_nightingale','#0026_nightingale'],
  [1,'NFT_Area_56','https://assets.bmr.art/image/0004_gutenburg.jpg','#0004_gutenburg','#0004_gutenburg'],
  [1,'NFT_Area_31','https://assets.bmr.art/image/0035_rachelCarson.jpg','#0035_rachelCarson','#0035_rachelCarson'],
  [1,'NFT_Area_58','https://assets.bmr.art/image/0036_freud.jpg','#0036_freud','#0036_freud'],
  [1,'NFT_Area_20','https://assets.bmr.art/image/0030_stephenson.jpg','#0030_stephenson','#0030_stephenson'],
  [1,'NFT_Area_18','https://assets.bmr.art/image/0050_poincare.jpg','#0050_poincare','#0050_poincare'],
  [1,'NFT_Area_67','https://assets.bmr.art/image/0066_dyson.jpg','#0066_dyson','#0066_dyson'],
  [1,'NFT_Area_69','https://assets.bmr.art/image/0024_morse.jpg','#0024_morse','#0024_morse'],
  [1,'NFT_Area_49','https://assets.bmr.art/image/0049_lavoisier.jpg','#0049_lavoisier','#0049_lavoisier'],
  [1,'NFT_Area_19','https://assets.bmr.art/image/0003_davinci.jpg','#0003_davinci','#0003_davinci'],
  [1,'NFT_Area_1','https://assets.bmr.art/image/0011_darwin.jpg','#0011_darwin','#0011_darwin'],
  [1,'NFT_Area_26','https://assets.bmr.art/image/0032_mondrian.jpg','#0032_mondrian','#0032_mondrian'],
  [1,'NFT_Area_53','https://assets.bmr.art/image/0064_miro.jpg','#0064_miro','#0064_miro'],
  [1,'NFT_Area_66','https://assets.bmr.art/image/0038_mendel.jpg','#0038_mendel','#0038_mendel'],
  [1,'NFT_Area_64','https://assets.bmr.art/image/0037_baekland.jpg','#0037_baekland','#0037_baekland'],
  [1,'NFT_Area_62','https://assets.bmr.art/image/0049_lavoisier.jpg','#0049_lavoisier','#0049_lavoisier'],
  [1,'NFT_Area_11','https://assets.bmr.art/image/0023_leeuwenhoek.jpg','#0023_leeuwenhoek','#0023_leeuwenhoek'],
  [1,'NFT_Area_4','https://assets.bmr.art/image/0065_ciolkowski.jpg','#0065_ciolkowski','#0065_ciolkowski'],
  [1,'NFT_Area_65','https://assets.bmr.art/image/0014_shannon.jpg','#0014_shannon','#0014_shannon'],
  [1,'NFT_Area_78','https://assets.bmr.art/image/0022_planck.jpg','#0022_planck','#0022_planck'],
  [1,'NFT_Area_37','https://assets.bmr.art/image/0046_galileo.jpg','#0046_galileo','#0046_galileo'],
  [1,'NFT_Area_21','https://assets.bmr.art/image/0025_engelbart.jpg','#0025_engelbart','#0025_engelbart'],
  [1,'NFT_Area_76','https://assets.bmr.art/image/0047_feynman.jpg','#0047_feynman','#0047_feynman'],
  [1,'NFT_Area_29','https://assets.bmr.art/image/0061_bell.jpg','#0061_bell','#0061_bell'],
  [1,'NFT_Area_25','https://assets.bmr.art/image/0041_haytham.jpg','#0041_haytham','#0041_haytham'],
  [1,'NFT_Area_5','https://assets.bmr.art/image/0005_watt.jpg','#0005_watt','#0005_watt'],
  [1,'NFT_Area_60','https://assets.bmr.art/image/0060_corbusier.jpg','#0060_corbusier','#0060_corbusier'],
  [1,'NFT_Area_47','https://assets.bmr.art/image/0063_miesVanderRohe.jpg','#0063_miesVanderRohe','#0063_miesVanderRohe'],
  [1,'NFT_Area_30','https://assets.bmr.art/image/0048_oppenheimer.jpg','#0048_oppenheimer','#0048_oppenheimer'],
  [1,'NFT_Area_79','https://assets.bmr.art/image/0002_archimedes.jpg','#0002_archimedes','#0002_archimedes'],
  [1,'NFT_Area_54','https://assets.bmr.art/image/0034_fleming.jpg','#0034_fleming','#0034_fleming'],
  /* --- */
  [2,'NFT_Area_13','https://static-common.tezign.com/templeofmuse/818/01.jpg','特赞第一个感恩节','2014/11<br>百无聊赖，感激已经开始在特赞社区活跃起来的朋友们。'],
  [2,'NFT_Area_28','https://static-common.tezign.com/templeofmuse/818/02.jpg','每当好事发生','2015/10<br>2015年10月29日特赞第一版网站上线了付费功能，支付99元可以使用特赞的对接服务。上线不久，就有人支付了第一笔费用。感受到一种意外的信任感，用这99元请全体同学庆祝，正好够买人头份的“可爱多”冰激凌。从此，每逢好事，特赞人就会吃可爱多。到现在已经吃了上千只可爱多。'],
  [2,'NFT_Area_54','https://static-common.tezign.com/templeofmuse/818/03.jpg','发现特赞海报','2014/01<br>特赞第一次线下活动，在2013年12月31日举行，居然有超过50位朋友来参加'],
  [2,'NFT_Area_75','https://static-common.tezign.com/templeofmuse/818/04.jpg','发布全球首份《设计人工智能报告》','2018/4<br>2018年，特赞与同济大学设计创意学院联合创立的‘D&AI设计与人工智能实验室’ 发布第一份《2017设计与人工智能报告》，回应纠葛在人工智能与设计的未来之间的迷思，报告发布至今已被100万+人浏览阅读。'],
  [2,'NFT_Area_39','https://static-common.tezign.com/templeofmuse/818/05.jpg','人民日报上的特赞','2019/1<br>若把人工智能和人的大脑进行类比，这些应用都是追求更高、更快、更强、更准的“左脑”范畴。但要实现人机协同，还需延展出具有空间感、形象感、想象力、创造力等方面的人工智能“右脑”，让机器更善意、更有温度。——特赞创始人范凌'],
  [2,'NFT_Area_16','https://static-common.tezign.com/templeofmuse/818/06.jpg','#用插画说感谢你#','特赞和微博动漫联合发起暖心campaign，从#感恩许愿树# 到 #用插画说感谢你# ，两周多时间，特赞召集100+优秀插画师一起发声，打造超人气话题。插画师的力量，在小小话题下被不断放大！'],
  [2,'NFT_Area_17','https://static-common.tezign.com/templeofmuse/818/07.jpg','特赞作为亚太区唯一内容科技公司上榜 Forrester MRM报告','2022/3<br>Forrester 是全球知名独立技术和市场调研公司 特赞内容科技,上榜Forrester 2022年Q1 MRM 报告 特赞入选 Forrester Now Tech MRM 报告 成为亚太区唯一被收录的内容科技厂商'],
  [2,'NFT_Area_70','https://static-common.tezign.com/templeofmuse/818/08.jpg','特赞正式成为独角兽','2021/11<br>2021年特赞完成了D1轮融资，成为估值超过10亿美金的内容科技独角兽。2015年，以科技赋能想象力为使命，特赞开始了创业之路。创业以来，我们始终专注于技术与创意的融合，致力于搭建创意内容的数字新基建。一路走来，我们要感谢400多位深度探索的特赞同学200个大型企业客户和8000个中小企业客户，50,000多个各类创意方，不断增长的上下游合作伙伴，还有每位特赞人背后不断壮大的家庭成员……感谢所有“同路人”。'],
  [2,'NFT_Area_48','https://static-common.tezign.com/templeofmuse/818/09.jpg','特赞@2050，让全世界的年青人因为科技团聚','每一年<br>未来的世界，会变成什么样？人工智能，会怎样融入我们的生活？AI 如何解放人类的生产力与想象力？每年4-5月，特赞来到杭州云栖小镇，聚集全球各地热爱科技的年青人，带来想象力的狂欢。'],
  [2,'NFT_Area_79','https://static-common.tezign.com/templeofmuse/818/10.jpg','由同济特赞设计人工智能实验室出品的「AI赞绘：金山农民画」来上海进博会啦','2018/11<br>同济大学特赞设计人工智能实验室在「遇见上海」板块打造了「AI赞绘：金山农民画」，通过 Tezign.EYE（特赞眼：创意内容的图像处理引擎），对200多张金山农民画进行解构和学习，提炼出金山农民画中的关键风格和元素，用科技赋能传统手工艺术的想象力。'],
  [2,'NFT_Area_34','https://static-common.tezign.com/templeofmuse/818/11.jpg','范老师给特物馆的寄语','用物留住特别的特赞，用心唤起特赞的特别！'],
  [2,'NFT_Area_40','https://static-common.tezign.com/templeofmuse/818/12.jpg','2020 特赞工牌','2020/06/15<br>用AI智能生成的工牌，我们也用上啦！各种脑洞大开的特赞工牌，代表了各种各样的特赞人'],
  // small room 1
  [2,'NFT_Area_4','https://static-common.tezign.com/templeofmuse/818/13.jpg','国内第一场DAM Con，一场内容科技者的狂欢','2021/03/18<br>特赞Tezign 在上海举办国内首届 DAM Con 大会（内容体验数智化大会），介绍内容体验数据资产管理系统（Digital Asset Management，DAM），并发布在多种场景下的解决方案。特赞也是中国大陆首家系统性发布内容体验数据资产管理系统（Digital Asset Management，DAM）的科技企业。'],
  [2,'NFT_Area_37','https://static-common.tezign.com/templeofmuse/818/14.jpg','200+品牌都 DAM Happy啦','截至目前<br>特赞帮助阿里巴巴、联合利华、字节跳动、百事、资生堂、宝洁、麦当劳、亨氏、可口可乐、百威、蚂蚁金服、雀巢、腾讯、欧莱雅、达能、中国平安、中金、保时捷、奥迪、Aptar等全球领先品牌搭建内容中台，升级内容战略'],
  [2,'NFT_Area_65','https://static-common.tezign.com/templeofmuse/818/15.jpg','特赞入选国家级工业设计中心','2021/11<br>特赞入选了工业和信息化部的第五批国家级工业设计中心。国家级工业设计中心自2013年起每两年认定一次，是国家引导企业重视设计创新，推动工业企业转型升级的重要手段。截止目前，全国仅有299家国家级工业设计中心获得认定。'],
  // small room 2
  [2,'NFT_Area_67','https://static-common.tezign.com/templeofmuse/818/16.mp4','特赞第一个战略发布会在梅赛德斯奔驰中心举行','2018/08/15<br>首次发布特赞数据智能产品'],  // mp4
  [2,'NFT_Area_18','https://static-common.tezign.com/templeofmuse/818/17.mp4','Musetransfer 上线啦','2022/1<br>MuseTransfer是一款极简有趣的大文件传输工具，无需下载客户端，甚至无需注册，打开网页即可全速上传或下载超大文件，还能用一个链接轻松收集多人分享的文件。你可以自由设置个性化的传输背景，定义收件人的下载体验，摆脱枯燥的传输过程，让传文件这样平凡的事也变得很有趣。'],  // mp4
  [2,'NFT_Area_20','https://static-common.tezign.com/templeofmuse/818/18.mp4','疫情期间，特赞人化身天使来送菜','2022/4<br>特赞天使们自发送菜，人在线上温情相聚，菜从线下驱车直达。最困难的时候，特赞的我们总是会在紧要关头互相帮助，特赞也总能给我们稳定的安全感。终于理解了特赞的logo特赞手的意义是什么：原来是在困难的时候给我一个拥抱啊！'],  // mp4
  // small room 3
  [2,'NFT_Area_7','https://static-common.tezign.com/templeofmuse/818/21.jpg','特赞人的温暖群像','一些每次看到都能再次开心的照片，特赞因为这群人“特赞”！'],
  [2,'NFT_Area_35','https://static-common.tezign.com/templeofmuse/818/22.jpg','特赞夏季运动会','每周五早上八点半楼下集中热身，遇上下雨的时候转到室内跳起来，顾名思义夏季运动会，冬天就结束了！'],
  [2,'NFT_Area_63','https://static-common.tezign.com/templeofmuse/818/23.jpg','特赞领导力101开课','2021年7月2日<br>特赞领导力101正式开课。恰逢中国共产党建党100周年庆，组织同学们参观了中共一大会址纪念馆。大家都被革命的激情点燃了！触景生情，做海报留作纪念。<br>--特赞101班同学银子'],
  [2,'NFT_Area_74','https://static-common.tezign.com/templeofmuse/818/24.jpg','第一届校招海报','2022年特赞开启了校招元年'],
  /* --- */
  [3,'Title_Wall', 'https://static-common.tezign.com/templeofmuse/yansheng/yansheng-wall.jpg', '共探艺术潮流的虚实边界', '8.26 ~ 11.26'],
  [3,'NFT_Area_1','https://static-common.tezign.com/templeofmuse/yansheng/img3-4.jpg',
     '拥抱','28x19cm 纸本丙烯 2022<br>⼥⼈抱着冰冷的⽯柱寻求慰藉，此刻她与暖⾊系的灯光格格不 ⼊，⼀半身体处于冷光内，⼀部分处于暖光内，形成排斥和反差感。'],
  [3,'NFT_Area_0','https://static-common.tezign.com/templeofmuse/yansheng/img3-3.jpg',
     '沙漏','28x19cm 纸本丙烯 2022<br>时光不断的流失，成为细沙留下痕迹，时间被掌握是具有难度的，但是⼈们可以去体会时间带来的意义和价值。'],
  [3,'NFT_Area_6','https://static-common.tezign.com/templeofmuse/yansheng/img1-2.jpg',
     '逆像2','15cm×23cm<br>说实话大自然不需要人类'],
  [3,'NFT_Area_4','https://static-common.tezign.com/templeofmuse/yansheng/img1-1.jpg',
     '割裂11','23cm×30cm<br>离核心越近越聚集'],
  [3,'NFT_Area_2','https://static-common.tezign.com/templeofmuse/yansheng/img0.jpg',
     '嘘','油画 100x100cm 2012<br>继《英雄》系列之后，2012年开始我创作了《包扎》系列，军人打仗容易受伤，自然过渡到《包扎》系列，想表现一种大无畏的精神，《包扎》系列没有军装，所以不单单指军人，可以代表每个人，在经历各种磨难之后，依然乐观地面对生活。'],
  [3,'NFT_Area_3','https://static-common.tezign.com/templeofmuse/yansheng/img2-2.jpg',
     'The night is wonderful','15.9*37.5cm 纸本 数码绘画 2019<br>“昔者庄周梦为蝴蝶，栩栩然蝴蝶也…不知周之梦为蝴蝶与?蝴蝶之梦为周与?周与蝴蝶则必有分矣。”避开在虚幻的思想中追求答案，从表层上来看，我想营造的却是画面中的“形”与“像”。图像是真实的，但如何去解读所捕获到的“形”与“象”却是虚幻的--这不是另一种方式的做梦吗?毕竟没有日常生活的经验(现实)，睡眠时的大脑皮层，也不会无组织无纪律吧。这是我毕业创作时期的一幅随笔创作，当时想表达的是生命与自然的关系，对重生与死亡的思考。一切都在习惯中进行，对于那时已经算是比较放松的作品了。'],
  [3,'NFT_Area_7','https://static-common.tezign.com/templeofmuse/yansheng/img2-1.jpg',
     'Fairy tale-Ⅱ','纸本，数码绘画 74.8*51cm 2020<br>借鉴新艺术运动和日本早期少女漫画的风格，<Fairytale>通过绘制具有装饰性的线条、以西方民间童话故事为主题进行的一组插画创作。每一个故事的主题都以以具有符号特征的少女或动物为主角，这些少女以自然舒适的动态在画面中呈现，弱化光影的体积塑造强调线条，借用类似雕版印刷的手法进行对线条进行刻画。同时用比较复古的平涂手法进行颜色填充。以达到复原故事瞬间发生场景的构想。'],
  /* --- */
  [4,'Title_Wall', 'https://static-common.tezign.com/templeofmuse/yansheng/simmons-wall.jpg', '探索黑科技与艺术的虚实边界', '8.31 ~ 11.30'],
  [4,'NFT_Area_1','https://static-common.tezign.com/templeofmuse/yansheng/img5.jpg',
     '"DualCool"双重酷爽科技','内置三重凉感凝胶海绵<br>融入纳米级凝胶微粒<br>提供持久、恰到好处的凉感<br>同时兼顾舒适性、支撑性和透气性<br>营造酷爽舒适睡眠体验'],
  [4,'NFT_Area_2','https://static-common.tezign.com/templeofmuse/yansheng/img5-1.jpg',
     'e-ION CRYSTAL®负离子技术','独特的矿物石纤维<br>持续释放清新负离子<br>中和使身体疲惫的正离子<br>带来整夜有氧“森”呼吸<br>深度缓解身心压力'],
  [4,'NFT_Area_3','https://static-common.tezign.com/templeofmuse/yansheng/img5-2.jpg',
     'Beautyrest®独立袋装弹簧科技','独立袋装弹簧科技<br>能够顺应人体提供像素点支撑<br>彼此独立活动互不干扰<br>减轻翻身引起的震荡传送<br>缔造彻夜无中断舒睡'],
]

async function main() {
  // clear first
  await prisma.mediaSlot.deleteMany({
    where: { spaceId: { in: [1, 2, 3, 4] } }
  })
  await prisma.space.deleteMany({
    where: { id: { in: [1, 2, 3, 4] } }
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
