<template>
  <main>
    <h1 class="text-3xl font-bold mb-6 text-center text-white bg-blue-500 p-2 rounded">
            🏫 School Birthdays 🏫
        </h1>

        <ul v-if="filteredList.length && !loading" class="mt-4">
            <li v-for="person in filteredList"
                class="birthday-card bg-gradient-to-r from-yellow-200 via-red-100 to-pink-100 p-4 rounded-lg mb-4 fade-in-up flex items-center justify-between"
                :style="{animationDelay: (0.2 * (filteredList.indexOf(person) + 1)) + 's'}">
                <div>
                    <span class="text-lg font-semibold">{{ person.name }}</span>
                    <small class="text-gray-500 block">{{ person.class }}</small>
                    <small class="text-gray-500 block mt-1">Born {{ person.birthday }}</small>
                </div>
                <span class="text-blue-500 font-semibold">{{ calculateAge(person.birthday) }} yrs 🎂</span>
            </li>
        </ul>

        <div v-if="filteredList.length === 0 && !loading" class="text-center mt-10">
            <span class="text-gray-600">😞 No one has a birthday today.</span>
        </div>

        <div v-if="loading" class="flex justify-center items-center mt-10">
            <span class="text-gray-600">⏳ Loading...</span>
        </div>
  </main>
</template>
<script>
import { Client, Databases,Query  } from "appwrite";
export default{
  data(){ return {
                people: [],
                today: new Date().toISOString().slice(5, 10),
                
                loading: true
            }},
            computed: {
                filteredList() {
                    return this.people.filter(person => {
                        const personMonthDay = person.birthday.slice(5, 10);
                        return personMonthDay === this.today;
                    });
                }
            },
           
            mounted()
            {
              this.selfloading();
            },
            methods:{
              async selfloading()
              {
              const client = new Client();
              const databases = new Databases(client);

              client.setEndpoint('https://appwrite.kasoft.co.uk/v1') // Your API Endpoint
              client.setProject('653bb473ee7f6a6074e7');
              //client.setJWT('029521b6ef63e900c25ae158edfeff36da0d8c1d380b2ee1e063cf7ba6662dbcf2939627931b79dfb4631482ba8a4cac5f9f7228ca070d583780248b80bae20f0f61804c14b4488fd5d018254543431c55b7eea16a209d7267309e77930d7acecab07385f482b0e14bc0c3be5b62cd643298c68415197820d36818a75fcabae0')

              let promise=await databases.listDocuments('653bb50bcd9f2b052636', '653bb5217be2f68181cb',
              [
                Query.endsWith('birthday',this.today)
              ]);
              
              console.log(promise.documents);
              this.people = promise.documents;
              this.loading = false; // Success
          
              },calculateAge(birthday) {
                    const birthYear = parseInt(birthday.slice(0, 4));
                    const currentYear = new Date().getFullYear();
                    return currentYear - birthYear;
                }
            }
            /*
            async created() {
                try {
                    let collection="653bb5217be2f68181cb";
                    let database="653bb50bcd9f2b052636";
                    const response = await axios.get(`https://appwrite.kasoft.co.uk/v1/databases/${database}/collections/${collection}/documents`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Appwrite-Project':'653bb473ee7f6a6074e7',
                            'X-Appwrite-Key': '029521b6ef63e900c25ae158edfeff36da0d8c1d380b2ee1e063cf7ba6662dbcf2939627931b79dfb4631482ba8a4cac5f9f7228ca070d583780248b80bae20f0f61804c14b4488fd5d018254543431c55b7eea16a209d7267309e77930d7acecab07385f482b0e14bc0c3be5b62cd643298c68415197820d36818a75fcabae0'
                        }
                    });

                    this.people = response.data.documents;
                    this.loading = false;
                } catch (error) {
                    console.error(error);
                    this.loading = false;
                }
            }*/
        
}
</script>
