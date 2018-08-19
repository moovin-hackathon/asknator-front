import Vue from 'vue';
import Router from 'vue-router';

import layout from "@/components/layout";
import Ask from '@/components/ask';
import Home from '@/components/home';
import Chat from '@/components/chat';
import Profile from '@/components/profile';
import Register from '@/components/register';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "layout",
      component: layout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "ask",
          name: "ask",
          component: Ask
        },
        {
          path: "chat",
          name: "chat",
          component: Chat
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "register",
          name: "register",
          component: Register
        }
      ]
    }
  ]
});
