<template>
  <div>
    <Header>
      <h2>みなさん</h2>
    </Header>
    <Home></Home>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <label for="maxNumber">最大数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>
      <label for="host">代表者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <label for="detail">内容</label>
      <textarea name="" id="" v-model="eventData.detail"></textarea>
      <p>{{ eventData.detail }}</p>
      <input type="checkbox" id="isPriv" v-model="eventData.isPriv">
      <label for="isPriv">ああああ</label>
      <p>{{ eventData.isPriv }}</p>
      <p>条件</p>
      <input type="checkbox" id="10" value="10" v-model="eventData.target">
      <label for="20">10</label>
      <input type="checkbox" id="20" value="20" v-model="eventData.target">
      <label for="20">20</label>
      <input type="checkbox" id="30" value="30" v-model="eventData.target">
      <label for="20">30</label>
      <p>{{eventData.target}}</p>
      <p>費用</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="payed" value="有料" v-model="eventData.price">
      <label for="payed">有料</label>
      <p>{{ eventData.price }}</p>
      <p>場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      currentComponent: "",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: 'hhhhhhh',
        maxNumber: 0,
        host: 't',
        detail: '',
        isPriv: false,
        target: [],
        price: "無料",
        location: "東京"
      }
    };
  },
  components: {
    Header,
    Home,
    About,
    EventTitle
  }
}
</script>

