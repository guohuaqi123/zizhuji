<template>
         <div class="bg">
                <img src="../../assets/renwenlaoshan/huanjuan-bg.png" />
                <div class="content" :class="[{ Exhibition:zhangkai == 1},{ Exhibition2:zhangkai == 2}]">
                        <div class="content-box01">
                          <img src="../../assets/renwenlaoshan/bt-01.png" >
                          <div @click="ttt()">{{msg[message]}}</div>
                        </div>
                        <div v-if="message==0||message==2">
                          <div class="content-box02">                        
                            <el-row :gutter="20">
                              <el-col :span="24" v-for="list in Nber">
                                <router-link :to="{path:'/FourLevelPage',query:{id:list.id}}">
                                  <div class="grid-content bg-purple">
                                    &nbsp; • &nbsp;{{list.title}}
                                    <span>2018-12-11 &nbsp;&nbsp;  </span>
                                    </div>
                                </router-link>
                              </el-col>
                            </el-row>                         
                          </div>
                          <div class="content-box03" >
                                    <el-pagination
                                      layout="prev, pager, next"
                                      :page-size="16"
                                      @current-change='currentPage'
                                      :total="pages">
                                    </el-pagination>
                          </div>
                        </div>
                        <div class="content-box04" v-else-if="message==1">
                          <div>
                                    &nbsp;&nbsp; &nbsp;&nbsp; 崂山，位于青岛市东部的崂山区，距市中心40余公里。它耸立于黄海之滨，气势雄伟，山海紧错，岚光变幻，云气离合，是闻名遐迩的海上名山，国务院确定的第一
                                    批国家重点风景名胜区之一。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山地处北纬36°05′～36°19′，东经120°24′～120°42′，东、南两面濒临黄海，西部与青岛市区接壤，北部与即墨市相邻，总面积446平方公里。海岸线长87.3公里，
                                    主峰“巨峰”海拔1132.7米。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山形成于亿年前的白垩纪，经过漫长岁月的沧桑巨变，天工造化，在大自然的雕凿中，形成了雄伟、壮观、奇特、秀丽的地貌形态。山脉以巨峰为中心，向四方延伸。
                                    按自然走向分为巨峰支脉、三标山支脉、石门山支脉和午山支脉。崂山东部和南部紧逼大海，形成山海相连的独特景观。蜿蜒曲折的海岸，形成了许多岬角和海湾，
                                    大小岛屿星罗棋布。海上看山，群峰攒簇，云雾缭绕;登山观海，烟波浩渺，水天一色。每当风疾波涌之时，惊涛裂岸，浊浪排空，迸珠溅玉，咆哮轰鸣。古往今来，
                                    皆以“山海奇观”称颂崂山。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山地处暖温带，气候温暖湿润，冬无严寒，夏无酷暑。突出表现为“春凉回暖晚，夏温热雨多，秋爽降温迟，冬暖少雨雪”的气候特征。由于山势陡峻和地形复杂，
                                    形成了上下不同、内外迥异的小气候，山南麓的太清宫一带名为“小江南”，巨峰北侧的北九水则称“小关东”。崂山的气象景观颇具特色，夏秋之际，如絮似缕、变幻无穷的
                                    云海，春来夏初，溟蒙飘渺、弥漫翻腾的海雾，为崂山平添了无限风光。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山古为东夷地，春秋时属齐国。秦统一中国后，置琅琊郡，汉设不其县，隋开皇十六年(公元596年)置即墨县，崂山皆属之。1898年，德国强迫清政府签订
                                    《胶澳租借条约》，将白沙河以南、砖塔岭以西的崂山山区大部，由即墨县仁化乡划入胶澳租借地。1914年，日本取代德国侵占胶澳。
                                    1922年中国政府收回青岛后改设胶澳商埠，崂山属胶澳商埠李村区。1929年南京国民政府接管青岛后，李村区隶属青岛特别市。1935年，
                                    将白沙河以北、砖塔岭以东的崂山另一半山区，再次由即墨县划入青岛市。中华人民共和国成立后，崂山山区相继属于青岛市所辖的崂山办事处、
                                    崂山郊区、崂山县和崂山区。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山在历史上曾有劳山、牢山、不其山、劳盛山、大劳山和小劳山、辅唐山、鳌山、崂山等名称。“劳山”之名最早见于《后汉书〈逄萌传〉》，《魏书〈释老志〉》、
                                    《魏书〈高祖纪〉》、南朝梁陶弘景《名医别录》和唐代成书的《元和郡县志》皆沿用之。“牢山”之名首见于晋代法显的《佛国记》，《魏书〈地形志〉》、
                                    《新唐书〈姜抚传〉》、《宋史〈甄栖真传〉》、《金史〈地理志〉》、《元史〈释老志〉》及元代成书的《齐乘》皆沿用之。“不其山”之名见于
                                    《汉书〈武帝纪〉》和《三国志〈崔琰传〉》。“劳盛山”之名发轫于东汉王充的《论衡》，但在宋代的《太平寰宇记》中改为牢盛山，顾炎武在《劳山考》中又写为劳盛山。
                                    “大劳山和小劳山”之名始见唐代章怀太子李贤的《后汉书注》，杜佑《通典》沿用之。“辅唐山”之名乃见于《纪闻》中王8的事迹，该故事辑存于《太平广记》。
                                    “鳌山”是全真道著名道人邱处机为崂山更改的名称，仅见于元、明两代之碑记。“崂山”之名最早见于《南史〈明僧绍传〉》，另在《神农本草》和《本草图经》
                                    中也记有此山名，明代黄宗昌亦用此名写成《崂山志》。总之，山之本名应为“劳”或“崂”，汉代称“不其”，晋及南北朝称“牢”，唐代又有“大劳、小劳”和“辅唐”之称，
                                    明、清两代使用较乱，以“劳”、“崂”为主，“牢”、“鳌”兼而用之，至近代才专用“崂”字。<br/>
                                    <img src="../../assets/gk.jpg"/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山资源丰富。境内有主要河流23条，以崂顶为中心向四面八方流淌。其多直流入海，源短、流急，属季节性河。崂山水无污染，纯净清冽，水质良好。著名的崂山矿泉水
                                    清纯甘冽，含有多种有益于健康的矿物质，经常饮用，可使人强身祛病、益寿延年，遐迩闻名的青岛啤酒就以其为水源。崂山域内还蕴藏大量的花岗岩石，质地优良，
                                    驰名中外，北京人民英雄纪念碑主体和南极长城科学考察站纪念碑均取材于此。崂山种植水果的历史悠久，现有7种、14属、377个品种。崂山有“天然药库”之称，
                                    药材资源量多质优，有681种，其中小叶石苇和黑石华尤为著名。崂山沿海有丰富的海产品，其中鲍鱼和西施舌是驰名的海珍品。崂山仰口湾盛产绿石，又名海底玉，
                                    色泽翠绿，润滑光洁，可雕琢各种文具、饰物及制做盆景。还出产其他土特名产拳头菜、崂山棍、仙胎鱼和寒露蜜桃等。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山，历史悠久，文化灿烂，遍布山区的许多古遗址和古庙宇，从一个侧面折射出中华民族的文明史。元、明、清三代刻石满山，宫观寺院碑碣林立，高山古洞摩崖连壁，
                                    蔚为大观。崂山山区现有27处文物保护单位，其中省级文物保护单位3处、市级文物保护单位14处、县级文物保护单位10处。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山是道教名山。自春秋战国至秦汉时期，就有方士、巫师在崂山餐霞修炼，唐、宋两代崂山道教肇兴，元、明两代达到鼎盛，至清代不衰。
                                    崂山道教由于王重阳所创全真派的入统，开创了全新的局面。全真道北七真涉足崂山，邱处机三次来崂山说法阐教，影响深远。嗣后，北七真在崂山各创宗派，
                                    争建道观，至明代达到鼎盛时期，遂有“九宫八观七十二庵”之繁荣，使崂山成为道教全真天下第二丛林。在崂山道教发展的漫长过程中，
                                    有李哲玄、刘若拙、邱处机、刘处玄、李志明、徐复阳、张三丰、孙玄清、耿义兰、齐本守等著名道人受过皇帝敕封。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;“山不在高，有仙则名”。崂山历有“神窟仙宅”、“洞天福地”之美誉，备受帝王将相、文人墨客之推崇，深为隐者高士、名道高僧所垂青。
                                    传说秦始皇曾登崂山以望蓬莱，徐福由此出海寻求仙药;汉武帝驾临不其祀神人;东汉大学问家逄蒙、郑玄以及南北朝的明僧绍先后于崂山建书院，
                                    著书授徒，开创村学之风;唐代大诗人李白留下了“我昔东海上，劳山餐紫霞”的千古名句。宋、元之后，文人墨客更是纷至沓来。
                                    元代礼部尚书王思诚和大学士张起岩、文人戴良，明代大学士高弘图、御史黄宗昌、山东提学邹善与陈沂、巡抚赵贤，清代著名学者顾炎武、
                                    王士郲、翰林尹琳基等人，都曾在崂山留下了文彩斐然的诗文墨宝。尤其是大文学家蒲松龄将崂山视为第二故乡，写成了脍炙人口的《崂山道士》、
                                    《香玉》等名篇，使崂山名满天下。近代改良思想家康有为，伟大的民主革命先行者孙中山，现代著名学者蔡元培、闻一多、沈从文、梁实秋、郁达夫等，
                                    都慕名游览过崂山。这些游崂名人留下了大量的诗文、游记、专著，或传诵于世、或镌刻于石，不仅丰富了崂山的文化内涵，而且使崂山盛名远播。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;崂山，自然景观、人文景观交相辉映，各类景点遍布全山。南线的太清宫景区，东线的仰口景区，中线的南、北九水景区，西线的华楼景区，
                                    北线的鹤山景区，中部的巨峰景区，皆各具特色，异彩纷呈。崂山与内地名山相比，自然景观独具一格，它兼有山海林泉之胜，囊括奇险秀朴之姿，
                                    到处奇峰异石、深谷幽洞、古树名花、飞瀑鸣泉，加之山海相映、沐日浴月、明霞云涛、烟雾升腾，组成一幅雄奇、秀美的立体画卷。
                                    南燕地理家晏谟《齐记》称:“泰山虽云高，不如东海崂”。邱处机在遨游天下名山大川后，也十分动情地写道:“五岳曾经四岳游，
                                    群山未必可相俦”。 崂山，千百年来，历经岁月的风雨沧桑，到解放前夕道观寺院凋蔽残零，羽士僧徒流离散落。仅有十几处宫观庙宇保存尚好。
                                    解放后，人民政府十分重视对崂山旅游资源的保护和开发。尤其是改革开放以后，多次调整充实了崂山风景区管理机构，
                                    制定并实施《青岛崂山风景区管理暂行办法》，建立健全各项专业管理制度。同时，根据“严格保护，统一管理，合理开发，
                                    永续利用”的风景名胜区工作方针，组织人员对崂山进行了大规模的规划建设，制定了长期和近期规划目标，实行了有计划、有深度、开发与保护并举的发展战略，
                                    并投资近2亿元对景区内的旅游资源、设施进行维护、开发和建设。昔日的海上名山，更增添了无穷魅力。<br/>

                                    &nbsp;&nbsp; &nbsp;&nbsp;今日之崂山，以其优美的山海风光和博大的文化内涵，成为青岛市建设国际化大城市的组成部分。崂山将成为欣赏风景、度假休养、游览观光和开展科学文化
                                    活动的国家重点名胜区域，屹立于黄海之滨，为中华大地增添风采。<br/>

                          </div>
                        </div>
                        <div class="content-box04" v-else-if="message==3">
                          <div>
                             <img src="../../assets/20170424014322_58fce7bae041c.jpg"/>
                             <br/>
                             <b> 一、景区门票价格</b> <br/>

                              （一）旺季（4月1日至10月31日） <br/>

                              巨峰 <br/>

                              门票价格：120元/人（含景区进山门票80、观光车40） <br/>

                              儿童半价票：60元/人（含景区进山门票40、观光车20） <br/>

                              学生票：80元/人（含景区进山门票40、观光车40） <br/>

                              南线（流青—太清—华严—仰口）<br/>

                              门票价格：130元/人（含景区进山门票90、观光车40）<br/> 

                              儿童半价票：65元/人（含景区进山门票45、观光车20） <br/>

                              学生票：85元/人（含景区进山门票45、观光车40） <br/>

                              九水<br/>

                              门票价格：95元/人（含景区进山门票65、观光车30） <br/>

                              儿童半价票：47元/人（含景区进山门票32、观光车15）<br/>

                              学生票：62元/人（含景区进山门票32、观光车30） <br/>

                              （二）淡季（11月1日至次年3月31日） <br/>

                              巨峰 <br/>

                              门票价格：90元/人（含景区进山门票50、观光车40） <br/>

                              儿童半价票：45元/人（含景区进山门票25、观光车20） <br/>

                              学生票：65元/人（含景区进山门票25、观光车40） <br/>

                              南线（流青—太清—华严—仰口） <br/>

                              门票价格：100元/人（含景区进山门票60、观光车40） <br/>

                              儿童半价票：50元/人（含景区进山门票30、观光车20） <br/>

                              学生票：70元/人（含景区进山门票30、观光车40） <br/>

                              九水 <br/>

                              门票价格：70元/人（含景区进山门票40、观光车30） <br/>

                              儿童半价票：35元/人（含景区进山门票20、观光车15） <br/>

                              学生票：50元/人（含景区进山门票20、观光车30） <br/>

                              华楼游览区仍常年执行10元/人的门票价格 <br/>

                              （三）索道 <br/>

                              巨峰索道价格：40元/人（单程票） <br/>

                              太清索道价格：45元/人（单程票） 80元/人（双程票） <br/>

                              仰口索道价格：35元/人（单程票） 60元/人（双程票）<br/>

                              二、崂山风景区特殊群体优惠政策的通知 <br/>

                              （一）60周岁以上（含60周岁）老年人持有效证件享受景区门票免费优惠，观光车票无优惠。 有效证件为：身份证、户口薄、
                              离（退）休证、老年人优待证、新版社保卡（含个人照片及身份证信息）、护照、驾照、港澳台同胞通行证（周岁按照公历的年、
                              月、日计算，从周岁生日的第二天算起）。 <br/>

                              （二）残疾人凭残疾人证享受景区门票和停车免费优惠，观光车票无优惠。重度残疾人（重度残疾人是指残疾证中残疾程度为一级、
                              二级的残疾人）和视力残疾人的一名陪护人员享受同等优惠。 <br/>

                              （三）中国人民解放军和武警部队现役军人持军官证、文职干部证、士兵证，军队院校学员持学员证，退伍红军老战士持退伍证，
                              残疾军人持残疾军人证，军队离退休干部持军队离退休干部证等有效证件享受景区门票免费，观光车票无优惠。<br/> 

                              （四）6周岁（含6周岁）以下或身高1.2米（含1.2米）以下的儿童享受景区门票、观光车票、索道票免费优惠；
                              身高1.2—1.4米的儿童享受景区门票、观光车票半价优惠。 <br/>

                              （五）6周岁（不含6周岁）～18周岁（含18周岁）未成年人持有效证件、全日制大学本科及以下学历学生持有效学生证享受景
                              区门票半价优惠，观光车票无优惠。 有效证件为：身份证、户口薄、新版社保卡（含个人照片及身份证信息）、护照、港澳台同
                              胞通行证或学生证等。 <br/>

                              （六）具有青岛市常住户口且享受政府定期抚恤补助的重点优抚对象,包括烈士遗属、因公牺牲军人遗属、病故军人遗属、
                              带病回乡退伍军人、参战退役人员、参加核试验军队退役人员凭有效证件享受景区门票半价优惠，观光车票无优惠。 有效证件为：
                              烈士遗属凭《山东省烈士遗属定期抚恤证》, 因公牺牲军人遗属凭《山东省因公牺牲军人遗属定期抚恤证》, 病故军人遗属凭
                              《山东省病故军人遗属定期抚恤证》, 带病回乡退伍军人凭《山东省带病回乡退伍军人生活补助证》,参战退役人员凭
                              《山东省参战退役人员生活补助证》, 参加核试验军队退役人员凭《山东省参加核试验军队退役人员生活补助证》。 <br/>

                              （七）新闻记者凭国家新闻出版总署颁发的记者证享受景区门票免费优惠，观光车票无优惠。 <br/>

                              （八）带团导游凭有效导游证享受景区门票、观光车票免费优惠。 <br/>
                          </div>
                        </div>
                        <!-- <mycomponent></mycomponent> -->
                  </div>
          </div>
 
</template>

<script>

export default {
  //name: 'HelloWorld',
  data () {
    return {          
      zhangkai:0,
      only:3,
      //msg:["人文古迹","名人文苑","刻石碑记","崂山传说"],
      // lists:[["本籍人物","记山人物","侨居人物","著名道士","著名僧人","游山名人","著名道士","著名僧人","游山名人","著名道士","著名僧人","游山名人"],
      //  ["本籍人物","记山人物","侨居人物","著名道士","著名僧人","游山名人"],
      //  ["刻石","碑记"],
      //  ["崂山传说"]
      // ],  
      lists:'', 
      pages:0,
      Numbers:[],
      Nber:[],
      //currentPage:1,
    }
  },
   computed: {
     msg: function () {
      return [this.$t("message.renwen0"),this.$t("message.renwen1"),this.$t("message.renwen2"),this.$t("message.renwen3")]
      }
   },
   props: ['message','msgurl'],
  mounted() {
            //alert(this.msgurl);
            var This = this;
            var Params = '';
            if(This.message==0){
                Params = This.msg[0]
            }else if(This.message==2){
                Params = This.msg[2]
            }

            $.ajax({
                type: "post",
                dataType: "json",
                url: This.msgurl.getAllList,
                data: {
                    params: Params,
                },
                success: function(data) {
                    console.log(data);
                    This.Numbers= data;
                    //console.log(This.Numbers[This.message]);
                    This.Nber = This.Numbers.slice(0, 12);
                    This.pages = data.length
                }
            })
  },
  methods:{
    zhankaiFun:function(index){
          this.zhangkai = index;
    }, 
    ttt:function(){
        console.log('val');
      }, 
    handleSizeChange:function(val) {
        console.log(val);
      },
    currentPage: function(a) {
                 var b = (a - 1) * 12;
                 var c = a * 12;
                 //alert(b + ':' + c)
                 this.Nber = this.Numbers.slice(b, c)
                 //alert(a)
     },
     

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video{width: 74rem;
    height: 31rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
   overflow: hidden;
   animation: vid 2s;
   animation-timing-function:cubic-bezier(0.45,0.35,0.20,0.00);
      }
.video>div{
  float: left;
}
.video .huanjuan01{
  width: 8rem;
  margin-right: 2rem;
  height: 31rem;
  position: relative;
}
.video .huanjuan01>div{
  float: left;
}

.video .huanjuan01 .huanjuan01-boxL{
 width: 4rem;
}
.video .huanjuan01 .huanjuan01-boxL img{
     width: 4rem;
    height: 31rem;
}
.video .huanjuan01 .huanjuan01-boxR{
 width: 4rem;
}
.video .huanjuan01 .huanjuan01-boxR img{
     width: 4rem;
    height: 31rem;
}
.video .huanjuan01 .bt{
        width: 4rem;
    height: 16rem;
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.video .huanjuan01 .bt img{
        width: 4rem;
    height: 16rem;}
.video .huanjuan01 .nobt{
  display: none
}
.video .no{
  margin-right: 0rem;
}
.video .huanjuan01 .bg{display: none}
.video .special .bg{display: block;width: 40rem;
    height: 25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    overflow: hidden;
     animation: huanjuanBg 2s;}
.video .special .bg img{width: 40rem;
   height: 25rem;}
.video .special{
  width: 44rem;
}



.video .special .bg .content{position:absolute;top: 0rem;padding:1.5rem 2rem;width: 36rem;height: 21rem;}
.video .special .bg .content .content-box01{     width: 36rem;height: 4rem; position:relative}
.video .special .bg .content .content-box01 img{width: 12rem;height: 3rem;  position: absolute; 
top: 50%; left: 50%;  transform: translate(-50%, -50%);}
.video .special .bg .content .content-box01>div{width: 12rem;height: 3rem; text-align: center;line-height: 3rem; position: absolute; 
top: 50%; left: 50%;  transform: translate(-50%, -50%);font-size: 1.1rem}
.video .special .bg .content .content-box01 p{  position: absolute; top: 50%; left: 50%;  
transform: translate(-50%, -50%);color: #fff;font-size: 0.8rem;width:12rem;height: 4rem;line-height: 4rem}
.kuangzi{width: 35rem;height: 14rem;overflow: hidden}
.video .special .bg .content .content-box02{ width: 34rem;height: 14rem;overflow-x: auto;padding:1rem;padding-bottom: 0rem;}
.video .special .bg .content .content-box03{ width: 36rem;height: 2rem;display: flex;}
.content-box03 .el-pagination{margin: 0 auto;align-items: center;justify-content:center;}
.content-box04{width: 34rem;height: 17rem;overflow:hidden;margin: 0 auto}
.content-box04>div{width: 34rem;height: 17rem;overflow-y: scroll;overflow-x: hidden;margin: 0 auto;padding-right: 17px;}

.hede{width: 34rem;height: 15rem;}



.box{
    height: 40px;
    background: cyan;
  }
.nav{
   line-height: 40px;
   display: inline-block;
   margin-left: 100px;
   cursor: pointer;
  }
.red{
   color: red;
  }

  .el-row {
    margin-bottom: 20px;
   
  }
  .el-row:last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
    margin-bottom: 0.5rem;
   
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
    
  }
  .grid-content {
    border-radius: 4px;
    min-height: 1.5rem;
    background: #fff;
    background-size: 100% 100%;
    line-height: 1.5rem;

  }
.grid-content span{
    min-height: 1.5rem;  
    line-height: 1.5rem;
    float: right;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

@keyframes huanjuanBg{
0%   { width: 3rem; }
100% { width: 40rem;}
}

</style>
