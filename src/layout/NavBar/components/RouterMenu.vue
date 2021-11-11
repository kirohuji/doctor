<template>
  <div>
    <Button
      type="text"
      v-for="(route, index) in routes"
      :key="index"
      @click="$router.push(route.path)"
      >{{ route.meta.name }}</Button
    >
  </div>
</template>

<script>
import { Button } from "element-ui";
import { routes } from "@/router";
import _ from "lodash";
export default {
  components: {
    Button,
  },
  data() {
    return {
      routes: [],
    };
  },
  mounted() {
    this.routes = _.filter(routes, "meta").map((item) =>
      _.pick(item, ["meta", "path"])
    );
  },
};
</script>

<style></style>
