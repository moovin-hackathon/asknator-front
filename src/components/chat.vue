<template>
<div id="box-chat" class="offset-md-2  col-md-10">
    <header>
        <p> Assunto: <span>Node</span></p>
        <input type="text" name="usuario" v-model="userId" v-if="true">
    </header>
    <div id="box-messages" v-chat-scroll="{always: false, smooth: true}">
    <!-- v-bind:class="{ CurrentUser: message.user == this.applicant }" -->
        <div class="message" v-for="message in this.messages" :key="message" v-bind:class="{ currentuser: message.user == applicant,  visituser: message.user != applicant}">
            {{message.message}}
        </div>
        <!--div class="message current-user">
            testestestes
        </div>
        <div class="message current-user">
            testestestestestestestestestestestes
        </div>
        <div class="message visit-user">
            testes
        </div-->

    </div>
    <div class="box-send-message">
        <form action="" method="post" v-on:submit.prevent="onSubmit">
            <input type="text" name="send-message" class="send-message" v-model="textSendMessage" />
            <button class="btn-send" v-on:click="clickButton(textSendMessage, userId)">Enviar</button>
        </form>
    </div>

</div>
</template>
<script>

import axios from "axios";

export default {
  data: function() {
      return {
            info:  null,
            loading: null,
            applicant: null,
            requested: null,
            textSendMessage: null,
            userId: null,
            messages: null
      }
  },

    methods:{
        getMessages: function(){
            //console.log(event)
            axios
            .get('http://192.168.1.75:8080/conversation/-LKFC3_6qbqSOJ_EUsPd')
            .then(response => {
                this.info = response.data.messages;
                this.applicant = response.data.users.applicant;
                this.requested = response.data.users.requested;
                this.messages = response.data.messages;
            })
            .catch(error => {
            console.log(error)
            this.errored = true
            })
            .finally(() => this.loading = false)
        },
         clickButton: function(val, id){
            // $socket is socket.io-client instance
            var send = {
                userId: id,
                message: val,
                conversationId: "-LKFC3_6qbqSOJ_EUsPd"
            }
            this.$socket.emit('chat_message', JSON.stringify(send));
            this.getMessages()
           this.textSendMessage = ""
        }
    },
    sockets:{
        connect: function(){
            console.log('socket connected')
            this.getMessages()
        },
        return_message: function(val){
            if(typeof val !== 'undefined'){
                this.messages = val.messages
            }
        }
    },
    created(){
        this.getMessages();

    },
  mounted(){
     let objDiv = document.getElementById("box-messages");
        objDiv.scrollTop = objDiv.scrollHeight;
  },
  watch: {
      info (newValue, oldValue) {
          console.log(newValue)
      },
      textSendMessage(newVal, oldVal) {
            clickButton(newVal);
      }
  }
}
</script>
<style>
body{
    background-color: rgba(121, 85, 72, 0.12156862745098039);
}
#box-chat{
    height: 92.5vh;
    padding: 0;
}
#box-chat header{
    background-color: #aaa;
    padding: 5px 0;
}
#box-chat header p{
    margin: 0;
}
#box-chat #box-messages{
    height: 77vh;
    min-height: 465px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
#box-chat #box-messages .message{
    margin: 5px 31px;
    padding: 0 20px;
    border-radius: 7px;
    box-shadow: 3px 2px 6px rgba(101, 99, 99, 0.5490196078431373);
}

#box-chat #box-messages .message.currentuser {
    align-self: flex-start;
    text-align: left;
    background-color: #c1defd;
}
#box-chat #box-messages .message.visituser {
    align-self: flex-end;
    text-align: right;
    background-color: #FFF;
}
#box-chat .box-send-message{
    height: 13.5vh;
    position: relative;
    padding-top: 3vh;
}
#box-chat .box-send-message input{
    height: 7vh;
    min-height: 67.19px;
    width: 92%;
    font-size: 21px;
    padding-left: 21px;
    outline: 0 none;
}
#box-chat .box-send-message button{
    width: 110px;
    height: 7vh;
    min-height: 67.19px;
    position: absolute;
    top: 3vh;
    z-index: 1;
    right: 13px;
}
</style>
