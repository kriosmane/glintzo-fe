<template>
    <div class="mx-10 sm:mx-20 py-10">

        <Title>{{ title }}</Title>

        <div class="flex flex-col space-y-10">

            <div>
                <h1 class="text-4xl font-bold">Login</h1>
            </div>



        </div>

    </div>
</template>


<script setup>

definePageMeta({
    middleware: ['guest']
});

const title = useState('title');

/**
 * 
 */
async function login() {

    await csrf();

    try {

        await useNuxtApp().$apiFetch('/login', {

            method: 'POST',

            body: {
                email: state.email,
            }

        });


        const user = await useNuxtApp().$apiFetch('/api/user');

        const { setUser } = useAuth();

        setUser(user.first_name);

    } catch (error) {

    }
}

</script>