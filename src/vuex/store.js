// 状态管理
'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//创建VueX对象
const store = new Vuex.Store({
    //state记录状态，建议不要在组件内更改，因为这里是监听不到更改的
    state:{
        carouselVisible:false,//轮播图显示
    },
    //mutations是操作state数据的方法的集合，比如对该数据的修改、增加、删除等等。
    mutations:{
        updateCarousel(state){
            state.carouselVisible = true
        }
    },
    //可以对state中的成员加工后传递给外界
    getters:{
        carouselVisible(state){
            return state.carouselVisible
        }
    },
    //由于直接在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法。
    actions:{
        updateCarousel(context){
            context.commit('updateCarousel');
            return this.state.carouselVisible;
        }
    }
});

export default store;