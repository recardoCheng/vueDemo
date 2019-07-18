<template>

<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab v-for="(tab,index) in tabs" :title="tab.title" :key="index" :active="tab.active" @click='activateTab'>
        <b-card-text>{{tab.content}}</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>



</template>

<script>



export default {
    components: {
    },

    data() {
        return {

    	activeTab: null,
    	tabs: [
        	{
            	id: 1,
            	title: 'Tab 1',
                content: {
                	header: 'Tab 1 Header',
                    content: 'Tab 1 Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                },
                editMode: false,
                active: false
            },
            {
            	id: 2,
            	title: 'Tab 2',
                content: {
                	header: 'Tab 2 Header',
                    content: 'Tab 2 Content: Praesent feugiat aliquam odio, at dictum nibh. Ut vitae quam nec nunc rhoncus sodales. In luctus venenatis auctor'
                },
                editMode: false,
                active: true

            },
            {
            	id: 3,
            	title: 'Tab 3',
                content: {
                	header: 'Tab 3 Header',
                    content: 'Tab 3 Content:  Praesent consectetur luctus tortor vel feugiat. Vestibulum vitae tempor ipsum, quis pharetra augue. '
                },
                editMode: false,
                active: false

            }
        ]

        }
    },

    watch: {
        '$route' (to, from) {
            console.log('bootstrap route watch, ', 'to:', to, 'from:', from);
        }
    },

    methods: {
    	  activateTab: (tab) => {
          console.log("activateTab:",);

            this.activeTab = tab;
            //console.log(activeTab.header);

        },

        addNewTab: function() {
        	let newId = this.tabs[this.tabs.length - 1].id + 1;
            this.tabs.push({
            	id: newId,
                title: `Tab ${newId}`,
                content: {
                	header: 'New Tab Header',
                  content: 'New tab contents'
                },
                editMode: false
            });
            this.activateTab(this.tabs[this.tabs.length - 1]);
        },

        editTabName: function(tab){
            tab.editMode = true;
        },

        acceptEdit: function(tab) {
        	tab.editMode = false;
        },

        deleteTab: function(tab) {
        	this.tabs = this.tabs.filter(t => t.id != tab.id);
            if(this.tabs.length == 0) {
            	$('.card-block .card-title').innerHTML = "";
              $('.card-block .card-text').innerHTML = "";
            }
        }
    },

    beforeCreate() {
    },

    created() {
      this.activeTab = this.tabs[0];
    },

    beforeMount() {
    },

    async mounted() {
    },

    beforeUpdate() {
    },

    updated() {
    },

    activated() {
    },

    deactivated() {
    },

    beforeDestroy() {
    },

    destroyed() {
    },

    computed: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
