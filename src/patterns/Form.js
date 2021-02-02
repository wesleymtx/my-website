import ContainerForm from '../components/form/ContainerForm';
import FormComponent from '../components/form/FormComponent';
import InputText from '../components/form/InputText';
import InputEmail from '../components/form/InputEmail';
import InputSubmit from '../components/form/InputSubmit';
import H2 from '../components/h2/index.js'
import TextArea from '../components/TextArea/index.js'

export default function Form(){
    const handleForm = (event)=>{
        event.preventDefault()
        const inputs = document.getElementsByTagName('input')
        const textArea = document.getElementsByTagName('textarea')
        const formData = {
            nome: inputs[1].value,
            email: inputs[2].value,
            assunto: inputs[3].value,
            mensagem: textArea[0].value
        }
        if(formData.email=="" || FormData.textarea==""){
            alert('Preencha todos os campos')
            return
        }
        console.log(formData)

        fetch('https://formspree.io/f/xyybbbne', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: JSON.stringify(formData),
        })
        .then((response)=>{
            if(response.status==200){
                alert('Enviado com sucesso!')
            }
            else{
                alert("Erro ao enviar o email!")
            }
            for (let i=0; i<=3; i++){
                console.log(i)
                inputs[i].value=""
            }
            textArea[0].value=""
            
        })
        .catch((e)=>{
            console.error('erro')
        })
       
    }
    return (
    <>
        <ContainerForm>
            <FormComponent onSubmit={handleForm}>
                <H2>Entre em contato</H2>      
                <InputText placeholder="Seu Nome"/>   
                <InputEmail placeholder="Seu Email"/>   
                <InputText placeholder="Assunto"/>   
                <TextArea placeholder="Mensagem"></TextArea>
                
                <InputSubmit/>
            </FormComponent>
        </ContainerForm>
    </>
    )
}