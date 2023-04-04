import Cookies from 'js-cookie'; 

export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig();
    
    nuxtApp.provide('apiFetch', $fetch.create({ 

        baseURL: config.public.BASE_URL,
        credentials: 'include',
        headers : {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            //Authorization: 'Basic Z2xpbnR6bzp3MzR0aGVyNTZ1cjYsag=='
        }
    }));

});