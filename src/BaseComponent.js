import { Vue, Component} from 'vue-property-decorator'

@Component
export default class BaseComponent extends Vue {
  beforeCreate() {}

  created() {}

  beforeMount() {}

  mounted() {}

  beforeUpdate () {}

  updated() {}

  beforeDestroy() {}

  destroyed() {}
}
