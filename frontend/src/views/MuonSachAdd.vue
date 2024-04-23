<template>
    <div v-if="check_book" class="page">
        <h4>Thêm sách</h4>
        <ContactForm
            :book = "book"
            :muonsach_valua="muonsach"
            @submit:contact="addReader"
        />
    </div>
    
    <div v-else class="mt-5 alert alert-custom" >
        <h5 class="mt-2 mr-2">Vui lòng lựa chọn sách trước !</h5>
        <router-link
                    :to="{
                    name: 'contactbook', 
                    }"
                >
                    <span class="mt-2 badge badge-warning">
                    <i class="fas fa-edit"></i>Chọn</span>
        </router-link>
    </div>
    <p>{{ message }}</p>
</template>
<script>
import ContactForm from "@/components/MuonSachForm.vue";
import MuonSachService from "@/services/muonsach.service";
import ContactService from "@/services/contact.service";

export default{
    components:{
        ContactForm,
    },
    props:{
        id:{type: String, required: true}
    },
    data(){
        return {
            check_book: false,
            id: this.id,
            book: null,
            message: "",
            muonsach:{}

        }
    },
    methods: {
        async addReader(data){
            try{
                await MuonSachService.create(data);
                confirm("Sách đã được thêm thành công!")
                this.$router.push({ name: "contactbook" });
            }catch(error){
                 console.log(error);
            }
        },

        async getBook(id){
           if(id != null){
            try{
                this.book = await ContactService.get(id);
                
                if(this.book.soquyen == 0){
                    confirm("Không thể thực hiện");
                    this.$router.push({ name: "contactbook" });
                }
                this.check_book = true;
            }catch(error){
                console.log(error)
            }
            }
        }
        
    },
    created() {
        this.getBook(this.id);
        this.message = "";
    },
}
</script>

<style>
    .alert-custom{
        display: flex;
        justify-content: center;
    }
</style>