
<template>
    <Form
        @submit ='submitContact'
        :validation-schema = 'contactFormSchema'
    >
    <div class="form-group">
        <label for="name">Tên Sách</label>
        <Field
        name="tensach"
        type="text"
        class="form-control"
        v-model="contactLocal.tensach"
        />
        <ErrorMessage name="tensach" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="email">Đơn giá</label>
        <Field
        name="dongia"
        type="number"
        class="form-control"
        v-model="contactLocal.dongia"
        />
        <ErrorMessage name="dongia" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="address">Số lượng</label>
        <Field
        name="soquyen"
        type="number"
        class="form-control"
        v-model="contactLocal.soquyen"
        />
        <ErrorMessage name="soquyen" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="phone">Năm xuất bản</label>
        <Field
        name="namxuatban"
        type="tel"
        class="form-control"
        v-model="contactLocal.namxuatban"
        />
        <ErrorMessage name="namxuatban" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="phone">Tác giả</label>
       <Field
        name="tacgia"
        type="text"
        class="form-control"
        v-model="contactLocal.tacgia"
        />
        <ErrorMessage name="tacgia" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="phone">Hình ảnh</label>
       <Field
        name="image"
        type="text"
        class="form-control"
        v-model="contactLocal.image"
        />
        <ErrorMessage name="tacgia" class="error-feedback" />
    </div>


    <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
        <button
        v-if="contactLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteContact"
        >
        Xóa
        </button>
    </div>

    </Form>
</template>
<script>
import * as yup from "yup";
import {Form, Field, ErrorMessage} from "vee-validate";

export default{
    components:{
        Form,
        Field,
        ErrorMessage,
    },

    emits: ["submit:contact","delete:contact"],
    props: {
        contact: {type: Object, required: true}
    },
    data(){
        const contactFormSchema = yup.object().shape({
            tensach: yup
            .string()
            .required("Vui lòng điền tên sách!"),
            dongia: yup
            .number()
            .required("Đơn giá không được để trống!"),
            soquyen: yup
            .number()
            .required("Vui lòng nhập số lượng!")
            .min(0,"Không hợp lệ"),
            namxuatban: yup
            .number()
            .required("Vui lòng nhập năm xuất bản!")
            .min(0,"Năm xuất bản không hợp lệ")
            .max(2024,"Năm xuất bản không hợp lệ"),
            tacgia: yup
            .string()
            .required("Vui lòng nhập tên tác giả")


            
        })
        return {
        // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
        // contactLocal để liên kết với các input trên form
        contactLocal: this.contact,
        contactFormSchema
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>