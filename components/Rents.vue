<template>
  <div class="dvd-main">
    <div v-for="dvd in dvds" :key="dvd.Id">
      <div class="dvd-item">
        <div class="dvd-title">{{ dvd.Movie.Name }}</div>
        <img class="dvd-image" :src="dvd.Movie.Image" />
        <button 
          :style="dvd.IsRented == 'disponível' ? 'background-color: #61bd4f;' : 'background-color: #eb5a46;'" 
          class="dvd-button">
            {{dvd.IsRented == 'disponível' ? 'Alugar' : 'Devolver' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.dvd-main {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.dvd-item {
  width: 200px;
  border: 1px solid lightgray;
  margin: 20px 10px;
  border-radius: 5%;
}

.dvd-title {
  padding: 5px;
}

.dvd-image {
  height: 200px;
  width: 100%;
}

.dvd-button {
  height: 50px;
  width: 100%;
  margin: 0;
  color: white;
}
</style>

<script lang="ts">
import { DvdDto } from "~/model/rent.dto";
import { WiproService } from "../services/index";

export default {
  data: () => ({
    dvds: new Array<DvdDto>(),
  }),
  mounted() {
    const Service = new WiproService();

    Service.dvd.list().then((response) => {
      
      console.log(JSON.stringify(response.data.Data))

      this.dvds = response.data.Data;
      
    });
  },
};
</script>