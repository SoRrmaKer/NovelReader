<template>
  <div class="container">
    <div class="body">
      <div class="noveltitle">
        <div class="title">
          <i class="el-icon-arrow-left"></i>
          <h2>十日终焉</h2>
        </div>
        <div class="function">
          <div class="listen">
            <i class="el-icon-video-play" id="listen" @click="PlayAudio"></i>
            <p>听书</p>
          </div>
          <div class="star">
            <i class="el-icon-star-off" id="star"></i>
            <p>收藏</p>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="chaptername">
        <h3>
          第{{ noveldetail[this.currentPage-1].chapter }}章 {{ noveldetail[this.currentPage-1].chaptername }}
        </h3>
      </div>
      <!-- <p class="novelcontent" v-html="content"></p> -->
      <pre class="novelcontent">
        {{ noveldetail[this.currentPage-1].content }}
      </pre>
      <div class="pagedivide">
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleChange"
          :current-page.sync="currentPage"
          :page-count="53"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NovelRead",
  data() {
    return {
      currentPage: 1,
      noveldetail: [
        {
          chapter: "1",
          chaptername: "空屋",
          content: `
    大漠孤烟直，长河落日圆。
    一望无垠的大漠，空旷而高远，壮阔而雄浑，当红日西坠，地平线尽头一片殷红，磅礴中亦有种苍凉感。
    上古的烽烟早已在岁月中逝去，黄河古道虽然几经变迁，但依旧在。
    楚风一个人在旅行，很疲惫，他躺在黄沙上，看着血色的夕阳，不知道还要多久才能离开这片大漠。
    数日前他毕业了，同时也跟校园中的女神说再见，或许见不到了吧，毕竟他曾被委婉的告知，从此天各一方，该分手了。
    离开学院后，他便出来旅行。
    落日很红，挂在大漠的尽头，在空旷中有一种宁静的美。
    楚风坐起来喝了一些水，感觉精力恢复了不少，他的身体属于修长强健那一类型，体质非常好，疲惫渐消退。
    站起来眺望，他觉得快要离开大漠了，再走一段路程或许就会见到牧民的帐篷，他决定继续前行。
    一路西进，他在大漠中留下一串很长、很远的脚印。
    无声无息，竟起雾了，这在沙漠中非常罕见。
    楚风惊讶，而这雾竟然是蓝色的，在这深秋季节给人一种凉意。
    不知不觉间，雾霭渐重，蓝色缭绕，朦朦胧胧，笼罩了这片沙漠。
    大漠尽头，落日都显得有些诡异了，渐渐化成一轮蓝日，有种魔性的美，而火云也被染成了蓝色。
    楚风皱眉，虽然他知道，沙漠的天气最是多变，但眼前实在不太正常。
    一片寂静，他停下脚步。
    在进大漠前，他曾听当地的老牧民讲过，一个人走在沙漠中，有时会听到一些古怪的声音，会见到一些奇异的东西，要格外谨慎。
    当时他并未在意。
    依旧宁静，沙漠中除却多了一层朦胧的蓝雾，并没有其他变故发生，楚风加快脚步，他想尽快离开这里。
    大漠的尽头，落日蓝的妖异，染蓝了西部的天空，不过它终究快要消失在地平线上了。
    楚风的速度越来越快，开始奔跑，他不想呆在这种诡异、充满不确定性的地方。
    在沙漠中，海市蜃楼那样的奇景多发生在烈日当空下，眼下不相符，这不像是什么蜃景。
    突然，前面传来轻响，像是有什么东西破沙而出，而且声音很密集，此起彼伏。
    楚风倏地停下脚步，盯着沙漠，前方地面蓝光星星点点，像是散落一地蓝钻，晶莹透亮，在落日的余晖中闪耀着。
    那是一棵又一棵嫩苗，不足一寸高，自沙漠中破土而出，带着美丽的光泽，剔透而妖异，遍地皆是。
    短暂的停滞，随后沙沙声成片，蓝色灿灿，所有嫩苗都快速拔高，一瞬间生长起来。
    天边，蓝日下沉，即将消失，雾气弥漫，浩瀚的大漠如同披上了一层诡异的蓝色薄纱。
    “啵！”
    花朵绽放的声音传出，沙漠中一片湛蓝，在夕阳即将消失的刹那，这些植物开始绽放出成片的花朵。
    大量的蓝花，晶莹点点，犹若梦幻，有些醉人，遍开在沙漠中，非常不真实。
    这种植物一尺多高，通体如蓝珊瑚般透亮，花瓣一条条，妖艳而迷人，宛若盛放在另一片国度，带着魔性，吸引人的心神。
    楚风退后一步，然而，身后也已满是这种植物，蓝光流动，一眼望不到边。
    他很吃惊，仔细的看着，努力辨认，这像极了彼岸花，一条条花瓣展开，又向后弯曲，极其美丽。
    不过，彼岸花红的鲜艳，而它却是蓝色的，从未听闻有蓝色彼岸花。
    彼岸花真实存在，带着浓烈的宗教色彩，关于它有太多的传说，但楚风不信这些，只为眼前的景象而惊。
    沙漠干燥、缺水，只有极其稀少的耐旱植物偶尔可见，零星散落着。而彼岸花喜欢阴森、潮湿的环境，无论如何也不该在这里出现，还如此的妖艳。
    这里遍地都是，一眼望不到尽头。
    大漠浩瀚，薄雾染蓝了落日，浸透了天边，而整片空旷无垠的沙漠都生出蓝色的彼岸花，说不出的奇异、神秘！
    一缕淡淡的芬芳飘漾，让人沉迷。
    楚风用力摇头，小心的迈步，避开这些花，他发现只有一个地带没有这种植物，那就是———黄河古道。
    在岁月中多次变迁，几经改道，它贯穿这片大漠，如今已近干涸，蓝色彼岸花开遍两岸，拥簇着它。
    花开两岸，彼此遥见。
    终于，太阳沉下去了，而也正是在此时，这些植物盛放，花开到极致，化作蓝色的海洋，流光溢彩。
    虽然暮色降临，但这里蓝色光泽缭绕，极致炫目，艳丽的出奇。
    楚风站在黄河古道上，心中无法宁静，但是他却不作停留，沿河道快速前进。
    天色渐暗，最后的落日余晖也已不见了。
    蓝色的大漠光彩点点，而后突然间，砰然一声，所有蓝色彼岸花怒放后，竟然在一瞬间同时凋零。
    妖艳的花瓣枯萎，接着整株的植物开始干枯，它们失去色彩，耗尽生机，迅速发黄，而后碎裂，像是在一瞬间失去了数十年。
    “砰！” 最后的刹那，遍地干枯的蓝色彼岸花寸寸断裂，化成了粉末。
    这诡异的景象，很难解释。
    它们如同烟花般，短暂的绚烂，美丽到极致，而后便凋零，成为灰烬。
    枯黄的粉末落在沙地间，在暮色中很难辨出，而此时蓝雾也早已消失，大漠恢复了原样，像是什么都不曾发生过，再次宁静。
    楚风没有驻足，大步前行，在暮色中，他翻过许多座沙丘，终于见到了地平线上的山影，要离开大漠了。
    天色渐黑，他终于走出来了，清晰的看到了山地，也隐约间看到了山脚下牧民的帐篷。
    再回头时，身后大漠浩瀚，很寂静，跟平日没什么两样。
    山地前方，灯火摇曳，离山脚下还较远时就听到了一些嘈杂声，那里不平静，像是有什么事情正在发生。
    此外，还有牛羊等牲畜惶恐的叫声，以及藏獒沉闷的低吼声。
    有异常之事吗？楚风加快脚步，赶到山脚下，临近牧民的栖居地。`,
        },
        {
          chapter: "2",
          chaptername: "测试2",
          content: `驻西班牙使馆注意到，近日皇家马德里俱乐部个别球迷在采访中发表辱华言论，言辞低俗，性质恶劣。我馆对此深感震惊和愤怒，第一时间向皇家马德里俱乐部提出严正交涉。皇马俱乐部对上述个别球迷不当言行表示反对，强调皇马俱乐部拒绝并谴责任何形式的种族歧视、排外仇外言行，认为这是个别球迷的孤立行为，有违皇马俱乐部的价值和原则，绝不代表皇马俱乐部以及广大皇马球迷的态度。皇马俱乐部重视并热爱中国球迷，重视与伟大的中国的友好联系，感谢中国球迷的垂爱，希望为西中友好继续发挥积极作用。`
        }
      ],
    };
  },
  methods: {
    handleChange(val) {
      this.currentPage = val;
      console.log(this.noveldetail);
    },
    PlayAudio() {
      this.word = this.noveldetail[this.currentPage-1].content;
      if (!this.word) {
        this.$message("请输入文本");
        return;
      }

      if (this.isPaused) {
        window.speechSynthesis.resume();
        this.isPaused = false;
        this.$message("当前已有正在播放的语音!");
        return;
      } else if (window.speechSynthesis.speaking) {
        this.$message("当前语音已暂停,请点击继续!");
        window.speechSynthesis.pause();
        this.isPaused = true;
        return;
      }
      // 为了防止在暂停状态下转语音，调用前设置继续播放
      window.speechSynthesis.resume();
      // 设置播放
      var speech = new SpeechSynthesisUtterance();
      speech.text = this.word; // 内容
      speech.lang = "zh-cn"; // 语言
      speech.voiceURI = "Microsoft Huihui - Chinese (Simplified, PRC)"; // 声音和服务
      // eslint-disable-next-line no-irregular-whitespace
      speech.volume = 0.7; // 声音的音量区间范围是​​0​​​到​​1默认是​​1​​
      // eslint-disable-next-line no-irregular-whitespace
      speech.rate = 1; // 语速，数值，默认值是​​1​​​，范围是​​0.1​​​到​​10​​​，表示语速的倍数，例如​​2​​表示正常语速的两倍
      // eslint-disable-next-line no-irregular-whitespace
      speech.pitch = 1; // 表示说话的音高，数值，范围从​​0​​​（最小）到​​2​​​（最大）。默认值为​​1​​。
      window.speechSynthesis.speak(speech);
      var highlight = document.createElement("span");
      highlight.style.backgroundColor = "red";
      // range.surroundContents(highlight);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.08);
}
.body {
  width: 60%;
  /* overflow: hidden; */
  margin: 0 auto;
  background-color: #f0f0f0;
}

.noveltitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 50px;
  font-weight: 400;
}

.noveltitle i {
  font-size: 26px;
  margin-right: 10px;
}

.title {
  display: flex;
  align-items: center;
}

.function {
  display: flex;
}

.listen {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
}

.listen #listen:hover {
  cursor: pointer;
}

.star {
  margin-right: 100px;
  display: flex;
  flex-direction: column;
}

.star #star:hover {
  cursor: pointer;
}

.chaptername {
  margin-left: 50px;
}

.novelcontent {
  width: 90%;
  overflow: hidden;
  white-space: pre-wrap;
  margin: 20px 50px;
  font-size: 18px;
}

.pagedivide {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
</style>