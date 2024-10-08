import{u as r,j as i}from"./index-ReHRceEJ.js";const l={title:"Verifying Stone Proof Using the Binary",description:"undefined"};function n(s){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.header,{children:i.jsxs(e.h1,{id:"verifying-stone-proof-using-the-binary",children:["Verifying Stone Proof Using the Binary",i.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verifying-stone-proof-using-the-binary",children:i.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,i.jsx(e.p,{children:"This guide will walk you through how to verify a Stone proof using the provided binaries. It includes steps for both setting up the environment using Docker and manually installing the required dependencies."}),`
`,i.jsxs(e.h2,{id:"creating-and-verifying-a-test-proof-using-binaries",children:["Creating and Verifying a Test Proof Using Binaries",i.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-and-verifying-a-test-proof-using-binaries",children:i.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Clone the repository:"}),`
`]}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/dipdup-io/stone-packaging.git"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp/stone-packaging"})]})})}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Navigate to the example test directory"}),`
`]}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp/stone-packaging/test_files/"})]})})}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Download the Binary Files:"}),`
`]}),`
`,i.jsxs(e.p,{children:["To download binaries, please refer to the ",i.jsx(e.a,{href:"/home/runner/work/stone-packaging/stone-packaging/docs/pages/install/binaries",children:"Installation Guide"})]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Run the prover:"}),`
`]}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsxs(e.code,{children:[i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cpu_air_prover"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --out_file=fibonacci_proof.json"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --private_input_file=fibonacci_private_input.json"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --public_input_file=fibonacci_public_input.json"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --prover_config_file=cpu_air_prover_config.json"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,i.jsx(e.span,{className:"line",children:i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --parameter_file=cpu_air_params.json"})})]})}),`
`,i.jsxs(e.p,{children:["The proof will be available at ",i.jsx(e.code,{children:"fibonacci_proof.json"}),"."]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Run the verifier to verify the proof:"}),`
`]}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cpu_air_verifier"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --in_file=fibonacci_proof.json"}),i.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" && "}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"echo"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Successfully verified example proof."'})]})})}),`
`,i.jsxs(e.h2,{id:"download-minimal-docker-images-for-x86_64",children:["Download Minimal Docker Images for x86_64",i.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#download-minimal-docker-images-for-x86_64",children:i.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,i.jsxs(e.p,{children:["Download the Docker image. The stone-prover package includes both ",i.jsx(e.code,{children:"cpu_air_prover"})," and ",i.jsx(e.code,{children:"cpu_air_verifier"}),":"]}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"docker"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pull"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ghcr.io/dipdup-io/stone-packaging/stone-prover:latest"})]})})}),`
`,i.jsxs(e.h2,{id:"creating-and-verifying-a-test-proof-using-docker",children:["Creating and Verifying a Test Proof Using Docker",i.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-and-verifying-a-test-proof-using-docker",children:i.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Ensure Docker is installed on your machine. You can refer to ",i.jsx(e.a,{href:"https://docs.docker.com/get-docker/",children:"Docker’s official documentation"})," for installation instructions."]}),`
`]}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsx(e.li,{children:"Clone the Repository:"}),`
`]}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/dipdup-io/stone-packaging.git"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp/stone-packaging"})]})})}),`
`,i.jsxs(e.ol,{start:"2",children:[`
`,i.jsx(e.li,{children:"Run the Docker Container to Create the Proof"}),`
`]}),`
`,i.jsx(e.p,{children:"Run the container with a volume mounted to the local repository directory:"}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsxs(e.code,{children:[i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"docker"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --entrypoint"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /bin/bash"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -v"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp/stone-packaging/test_files:/app/prover"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ghcr.io/dipdup-io/stone-packaging/stone-prover"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -c"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "cd /app/prover && exec cpu_air_prover '}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    --out_file=fibonacci_proof.json "}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    --private_input_file=fibonacci_private_input.json "}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    --public_input_file=fibonacci_public_input.json "}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    --prover_config_file=cpu_air_prover_config.json "}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,i.jsx(e.span,{className:"line",children:i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    --parameter_file=cpu_air_params.json"'})})]})}),`
`,i.jsxs(e.p,{children:["The proof will be created at ",i.jsx(e.code,{children:"test_files/fibonacci_proof.json."}),"."]}),`
`,i.jsxs(e.ol,{start:"3",children:[`
`,i.jsx(e.li,{children:"Verify the Proof Using Docker"}),`
`]}),`
`,i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"docker"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --entrypoint"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /bin/bash"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -v"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp/stone-packaging/test_files:/app/prover"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ghcr.io/dipdup-io/stone-packaging/stone-prover"}),i.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -c"}),i.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:` "cd /app/prover && exec cpu_air_verifier --in_file=fibonacci_proof.json && echo 'Successfully verified example proof.'"`})]})})})]})}function o(s={}){const{wrapper:e}={...r(),...s.components};return e?i.jsx(e,{...s,children:i.jsx(n,{...s})}):n(s)}export{o as default,l as frontmatter};
