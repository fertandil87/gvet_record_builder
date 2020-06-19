<template>
    <div>
        <pre>
            {{ newOne }}
        </pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newOne: [],
            postDataUrl: '',
        }
    },
    created() {
        Bus.$on('saveData', (response)  => {
            let obj = {};
            var a= {}
            a.fields = []
            response.forEach(function(item) {
                switch(item.fieldType) {
                    case "TextInput": {
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "text";
                        a.fields.push(obj)
                        break;
                    }
                    case "LongTextInput":{
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "textarea";
                        a.fields.push(obj)

                        break;
                    }
                    case "NumberInput":{
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "number";
                        a.fields.push(obj)
                        break;
                    }
                    case "RadioInput":{
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "radio";
                        obj['options'] = item.options;
                        a.fields.push(obj)
                        break;  
                    }
                    case "SelectList":{
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "select";
                        obj.options = [];
                        item.options.forEach((option) => {
                            obj['options'].push(option.optionValue)
                        })
                        a.fields.push(obj)
                        break;
                    }
                    case "Checkbox":{
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "checkbox";
                        obj.options = [];
                        item.options.forEach((option) => {
                            obj['options'].push(option.optionValue)
                        })
                        a.fields.push(obj)
                        break;
                    }
                    case "RadioButton": {
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "radio";
                        obj.options = [];
                        item.options.forEach((option) => {
                            obj['options'].push(option.optionValue)
                        })
                        a.fields.push(obj)
                        break;
                    }
                    case "DatePicker":{
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "date";
                        a.fields.push(obj)
                        break;
                    }
                    case "TimePicker": {
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "timepicker";
                        a.fields.push(obj)
                        break;
                    }
                    case "DatetimePicker": {
                        let obj = {}
                        obj['label'] = item.label;
                        obj['type'] = "DatetimePicker";
                        a.fields.push(obj)
                        break;
                    }
                }
            });
            this.newOne = a,

            axios.post(this.postDataUrl, this.newOne)
                .then((response) => {
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
        })
    },
}
</script>

<style>

</style>