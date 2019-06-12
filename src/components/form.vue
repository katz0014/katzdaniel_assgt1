<template>
  <div>
    <!-- This creates the form -->
    <!-- Show the form when the dialog box is not visible -->
    <el-form
      v-show="!dialogVisible"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="First Name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="lastname">
        <el-input v-model="ruleForm.lastname"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

        <div v-show="subject30">This field cannot be more than 30 words</div>  
      <el-form-item label="Subject" prop="subject">
        <el-input v-model="ruleForm.subject"></el-input>
      </el-form-item>
      <el-form-item label="Claim" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item prop="checked">
        <el-checkbox v-model="ruleForm.checked">I agree</el-checkbox>
        <div v-show="error">you must check the box to submit</div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Submit</el-button
        >
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
    <!-- // This creates the dialog box -->
    <el-dialog
      title="Form information"
      :visible.sync="dialogVisible"
      width="35%"
      :before-close="closeDialog"
    >
      <span>Thank you for submitting a claim</span></br>
      <!-- This connects the data to the dialogue box -->
      <p>Name: {{ ruleForm.name }}</p>
      <p>Last Name: {{ ruleForm.lastname }}</p>
      <p>Email:
      {{ ruleForm.email }} </p>
      <p>Subject: {{ ruleForm.subject }}</p>
      <p>Claim: {{ ruleForm.desc }}</p>
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      error: false,
      subject30: false, 
      ruleForm: {
        name: "",
        lastname: "",
        email: "",
        subject: "",
        desc: "",
        checked: false
      },
      rules: {
        // creates first name input rule
        name: [
          {
            required: true,
            message: "Please input first name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 30,
            message: "Length should be between 3 and 30 characters",
            trigger: "blur"
          }
        ],
        // creates last name input field rule
        lastname: [
          {
            required: true,
            message: "Please input last name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 30,
            message: "Length should be between 3 and 30 characters",
            trigger: "blur"
          }
        ],
        // creates email input field rule
        email: [
          {
            required: true,
            message: "Please type your email",
            trigger: "blur"
          }
        ],
        // creates rule for subject title
        subject: [
          {
            required: true,
            message: "Please type your subject title",
            trigger: "blur"
          }
        ],
        // creates comment input field rule
        desc: [
          {
            required: true,
            message: "Please type a description of your claim",
            trigger: "blur"
          }
        ],
        checked: [
          {
            required: true,
            message: "You must check the box before submitting"
          }
        ]
      }
    };
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // Sets the rule that if the subject title is less than 30 words, then show an error message
        if (this.ruleForm.subject.split(' ').length <= 30) {
          this.subject30 = false; 
        } else {
          this.subject30 = true; 
        }
        // Checks that the checkbox is not selected before checking if everything else is filled in
        if (!this.ruleForm.checked) {
          this.error = true;
        } else {
          this.error = false;
        }
        // Checks all the other input fields are true
        if (valid && this.subject30) {
          this.dialogVisible = true;
          // alert("You have submitted a claim!");
        } else {
          console.log("You have made errors in your claim form!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.el-checkbox {
  padding: 15px;
}
</style>
