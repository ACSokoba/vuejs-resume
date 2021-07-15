import { ref, defineComponent } from "vue";
import Experience from "./accordions/Accordions.vue"
export default {
  name: "Body",
  //   props: {
  //     title: {
  //       type: String,
  //       required: true,
  //     },
  //   }
  components:{
    "experience-section": Experience
  },
  props: {
  }
}