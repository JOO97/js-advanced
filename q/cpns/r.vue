<template>
  <div class="city-select">
    <select v-model="selectedProvince" name="province" style="width: 200px">
      <template v-for="item in provinces">
        <option :value="item.code" :key="item.name">
          {{ item.name }}
        </option>
      </template>
    </select>
    {{ selectedCity }}
    <select v-model="selectedCity" name="city" style="width: 200px">
      <option v-for="item in cities" :value="item.code" :key="item.name">
        {{ item.name }}
      </option>
    </select>
    <!-- <select v-model="selectedBlock" name="block">
      <option v-for="item in blocks" :value="item" :key="item.name">
        {{ item.name }}
      </option>
    </select> -->
  </div>
</template>
<script>
/**
 * 省 市 区/县城 三联动选择器
 */
import provinces from './provinces.json'
import Vue from 'vue'
export default {
  name: 'app',
  created() {
    // 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
    this.cities = this.provinces[0].children
    this.selectedCity = this.cities[0].code
  },
  watch: {
    selectedProvince(newVal, oldVal) {
      const { children = [] } = this.provinces.some(
        (item) => item.id === newVal
      )
      this.cities = children
      console.log(this.cities)
      var _this = this
      // 此时在渲染DOM,渲染结束之后再选中第一个
      Vue.nextTick(() => {
        _this.selectedCity = _this.cities[0]
        _this.$emit('input', _this.info)
      })
    },
    selectedBlock() {
      var _this = this
      Vue.nextTick(() => {
        _this.$emit('input', _this.info)
      })
    },
    selectedCity(newVal) {
      // 选择了一个市,要选择区了 di是城市的代表,sheng
      if (
        newVal.sheng === '71' ||
        newVal.sheng === '81' ||
        newVal.sheng === '82'
      ) {
        this.blocks = [newVal]
        this.cities = [newVal]
      } else {
        this.blocks = this.provinces.filter((item) => {
          if (
            item.level === 3 &&
            item.sheng &&
            item.sheng == newVal.sheng &&
            item.di === newVal.di &&
            item.name !== '市辖区'
          ) {
            return true
          }
        })
      }
      var _this = this
      Vue.nextTick(() => {
        _this.selectedBlock = _this.blocks[0]
        // 触发与 v-model相关的 input事件
        _this.$emit('input', _this.info)
      })
    }
  },
  computed: {
    info() {
      return {
        province: this.selectedProvince,
        city: this.selectedCity,
        block: this.selectedBlock
      }
    }
  },
  data() {
    return {
      selectedProvince: provinces[0].code,
      selectedCity: 0,
      selectedBlock: 0,
      cities: 0,
      provinces,
      blocks: 0
    }
  }
}
</script>
<style scoped>
.city-select select {
  outline: 0;
}
</style>
