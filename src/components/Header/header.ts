import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  //   props: {
  //     title: {
  //       type: String,
  //       required: true,
  //     },
  //   }
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {}
  }
});
