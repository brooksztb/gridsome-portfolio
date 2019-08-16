<template>
  <Layout>
    <div>
      <h1 class='font-weight-bold'>{{$page.contentPage.intro}}</h1>
      <v-card class='card mx-auto' color='secondary' raised='true'>
        <v-card-text class='headline'>
          {{$page.contentPage.description}}
        </v-card-text>
      </v-card>
      <v-timeline light='false'>
        <v-timeline-item class='text-right' v-for='(item, index) in $page.contentPage.history' :key='index' color='white'>
          <v-card class='card mx-auto' color='secondary' raised='true'>
            <v-card-title>
              {{item.timeline}}
            </v-card-title>
            <v-card-text>
              <div>
                <span>
                  {{item.title}} | {{item.descriptor}}
                </span>
                <span v-for='(infoItem, index) in item.infoItems' :key='index'>
                   - {{infoItem}}
                </span>
              </div>
            </v-card-text>
          </v-card>
          
        </v-timeline-item>
      </v-timeline>
    </div>
  </Layout>
</template>

<page-query>
query About {
  contentPage(path: "/src/content/pages/about") {
    title,
    intro,
    description,
    history {
      descriptor,
      infoItems,
      timeline,
      title
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About Me"
  }
};
</script>

<style lang='scss' scoped>
.theme--dark.v-card > .v-card__text, 
.theme--dark.v-card > .v-card__title {
  color: #ffffff;
}

.card {
  padding: 15px;
}
</style>