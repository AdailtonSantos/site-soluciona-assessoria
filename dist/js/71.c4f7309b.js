"use strict";(self["webpackChunksite_soluciona"]=self["webpackChunksite_soluciona"]||[]).push([[71],{8319:function(e,o,t){t.d(o,{A:function(){return v}});var n=t(6768),a=t(5130),i=t(4232);const s={style:{"text-align":"center"}},l={key:0},r={key:2};function u(e,o,t,u,m,c){return(0,n.uX)(),(0,n.CE)("section",null,[o[14]||(o[14]=(0,n.Lk)("h1",{style:{"text-align":"center"}},"ENTRE EM CONTATO",-1)),(0,n.Lk)("form",{onSubmit:o[7]||(o[7]=(0,a.D$)((()=>{}),["prevent"]))},[(0,n.Lk)("p",s,[(0,n.Lk)("b",null,(0,i.v_)(m.infoMessage),1)]),o[10]||(o[10]=(0,n.Lk)("label",null,"Nome",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>m.name=e),type:"text"},null,512),[[a.Jo,m.name]]),o[11]||(o[11]=(0,n.Lk)("label",null,"E-mail",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>m.email=e),type:"email"},null,512),[[a.Jo,m.email]]),o[12]||(o[12]=(0,n.Lk)("label",null,"Como deseja enviar esta mensagem?",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":o[2]||(o[2]=e=>m.sendWith=e),required:""},o[8]||(o[8]=[(0,n.Lk)("option",null,"Selecione uma opção",-1),(0,n.Lk)("option",{value:"selfNumber"},"Enviar a partir do meu whatsapp",-1),(0,n.Lk)("option",{value:"byForm"},"Enviar via formulário e aguardar contato",-1)]),512),[[a.u1,m.sendWith]]),"byForm"===this.sendWith?((0,n.uX)(),(0,n.CE)("label",l,"Telefone / Celular")):(0,n.Q3)("",!0),"byForm"===this.sendWith?(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:1,"onUpdate:modelValue":o[3]||(o[3]=e=>m.phone=e),type:"tel"},null,512)),[[a.Jo,m.phone]]):(0,n.Q3)("",!0),o[13]||(o[13]=(0,n.Lk)("label",null,"Qual serviço gostaria de solicitar?",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":o[4]||(o[4]=e=>m.service=e)},o[9]||(o[9]=[(0,n.Fv)('<option data-v-e0a2e0dc>Selecione uma opção</option><option value="Servidores Particulares" data-v-e0a2e0dc>Servidores particulares</option><option value="Telefonia Voip" data-v-e0a2e0dc>Telefonia Voip</option><option value="Monitoramento de ativos" data-v-e0a2e0dc>Monitoramento de ativos</option><option value="Desenvolvimento de sistemas" data-v-e0a2e0dc>Desenvolvimento de sistemas</option><option value="Sistema de multi-atendimento whatsapp (chatbot)" data-v-e0a2e0dc>Sistema de multi-atendimento whatsapp (chatbot) </option><option value="Suporte Técnico" data-v-e0a2e0dc>Suporte Técnico</option><option value="Outro" data-v-e0a2e0dc>Outro</option>',8)]),512),[[a.u1,m.service]]),"Outro"===this.service?((0,n.uX)(),(0,n.CE)("label",r,"Digite o serviço que gostaria de solicitar")):(0,n.Q3)("",!0),"Outro"===this.service?(0,n.bo)(((0,n.uX)(),(0,n.CE)("textarea",{key:3,"onUpdate:modelValue":o[5]||(o[5]=e=>m.customService=e),type:"tel"},null,512)),[[a.Jo,m.customService]]):(0,n.Q3)("",!0),(0,n.Lk)("button",{onClick:o[6]||(o[6]=(...e)=>c.submitForm&&c.submitForm(...e))},"Enviar")],32)])}var m=t(4373),c={name:"FormOrcamentoComponent",data(){return{name:null,email:null,sendWith:null,phone:null,service:null,customService:null,infoMessage:null}},methods:{submitForm(){const e=`\nMensagem recebida através do formulário de serviços do site\n\nNome: ${this.name}\nE-mail: ${this.email}\nTelefone: ${this.phone}\nServiço solicitado: ${this.service}\n${this.customService?"Servico Personalizado: "+this.customService:""}\n      `,o=`\nOlá, gostaria de solicitar um serviço! %0A%0A\nMeu nome é: ${this.name}%0A\nMeu e-mail é: ${this.email}%0A\nTenho interesse em: ${this.service}%0A\n${this.customService?"Servico Personalizado: "+this.customService:""}\n      `;"byForm"===this.sendWith?this.sendMessageWithApi(e):"selfNumber"===this.sendWith&&this.sendMessageWithWhatsWeb(o)},sendMessageWithApi(e){m.A.post("https://soluciona.inf.br/api/sendEvol.php",{message:e},{headers:{"Content-Type":"application/json"}}).then((e=>{console.log(e),this.infoMessage="Mensagem enviada com sucesso, logo entraremos em contato!"})).catch((e=>{console.error("Erro na requisição:",e)}))},sendMessageWithWhatsWeb(e){window.open(`https://wa.me/5511939282555?text=${e}`,"_blank")}}},d=t(1241);const p=(0,d.A)(c,[["render",u],["__scopeId","data-v-e0a2e0dc"]]);var v=p},2071:function(e,o,t){t.r(o),t.d(o,{default:function(){return u}});var n=t(6768);function a(e,o,t,a,i,s){const l=(0,n.g2)("FormOrcamentoComponent");return(0,n.uX)(),(0,n.Wv)(l)}var i=t(8319),s={name:"BlogView",components:{FormOrcamentoComponent:i.A},data(){return{}}},l=t(1241);const r=(0,l.A)(s,[["render",a]]);var u=r}}]);
//# sourceMappingURL=71.c4f7309b.js.map