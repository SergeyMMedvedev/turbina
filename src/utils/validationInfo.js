export default function validationInfo(evt) {
    let errors = {};

    const target = evt.target;
    // const name = target.name;
    // const value = target.value;
    const validity = target.validity;

    if(validity.valueMissing) {
        errors.name = "Это поле обязательно";
    } 
    // else if (values.name.length < 2) {
    //     errors.name = "Имя и фамилия должны быть длинее 2 символов"
    // } 

    // if(!values.email) {
    //     errors.email = "Это поле обязательно";
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = "Неверный Email"
    // } 

    // if(!values.tel) {
    //     errors.tel = "Это поле обязательно";
    // } else if (values.tel.length < 6) {
    //     errors.tel = "Имя и фамилия должны быть длинее 2 символов"
    // } 

    // if(!values.text) {
    //     errors.text = "Это поле обязательно";
    // } else if (values.text.length < 50) {
    //     errors.text = "Длина стихотворения должна быть больше 50 символов"
    // } 

    // if(!values.offer) {
    //     errors.offer = "Это поле обязательно";
    // }

    return errors;
}
