# Contrato local de delegação para subagentes

## Base de evidência original

O bundle `GrokBotResearch/sand/sand-host/host-main.cjs` tem SHA-256 `d9dcf2550d6e033fc752852dffc044d34622edfbe9a7421476199761c0ce0946`. A análise REA retida para o host (`ev_2a6cedd1bf7c798ababa0c2d4ff579828a8286a1a6f15a3912c1efa101b24fa2`) parseou 3.403.514 nós AST e 1.544 módulos, sem falhas de parse, mas expirou após 15 minutos e deixou o grafo semântico parcial. Isso limita as relações que o grafo prova; não indica ausência no código.

Leitura estática dos bytes desse mesmo bundle confirma o caminho abaixo:

- `prepareSubagent` tem caminho próprio e exige `tool.prepareSubagent`, distinto de `executeToolCall` (`host-main.cjs`, offset 24.642.115).
- `prepareTaskSubagentForLaunch` resolve tipo/configuração, chama `prepareTaskSubagent` e obtém `taskToolConfig` com `agentConfig`, `promptSession` e `summarizationHandler` (offsets 25.009.929–25.010.364).
- O lançamento constrói `AnysphereAgent` com configuração, sessão, listener, accessor de recursos, blob store e handler de sumarização (offset 25.032.770).
- `createSandTaskTool` fornece uma sessão própria baseada em `turn.toolSession` e uma configuração de executor com toolset vazio (offset 29.228.858). Isso é evidência de um caminho de subagente do Sand Host, não do schema completo do backend remoto nem de execução observada.

## Contrato independente implementado

O Primary Agent recebe `delegate_to_agent` somente quando há outros perfis locais elegíveis. A chamada exige `agentId` e tarefa limitada a 6.000 caracteres. O filho recebe suas instruções de perfil, o modelo selecionado pelo pai e somente a tarefa delegada, sem histórico do pai. Cada turno pai pode iniciar até dois filhos em série; filhos não recebem a ferramenta de delegação, limitando a profundidade a um nível. Cancelar o sinal do pai cancela a inferência filha e o turno pai.

Eventos preservam a identidade do agente e do turno. Main persiste a tarefa e a resposta no histórico do perfil filho com `parentTaskId`; o resultado estruturado do filho volta ao pai como `function_call_output`, para o Primary Agent sintetizar a resposta final. O limite de processo atual não é sandbox de recursos, e não há recuperação de execução filha após reinício.

Esse contrato local não afirma reproduzir o schema proprietário da ferramenta original, sessão remota, seleção de subagente, isolamento por agente ou protocolo `WakeParent`. O app local não altera configuração global nem serviço do CodexRouter.

## Verificação integrada local (2026-10-19)

Um Electron iniciado pelo launcher do workspace com `--user-data-dir=/tmp/thegrok-agent-e2e-profile` e CDP limitado a `127.0.0.1:9239` executou uma tarefa `delegate_to_agent` através do CodexRouter local. O perfil `researcher` recebeu a tarefa, respondeu `SUBAGENT_OK`, e o Primary recebeu a saída e devolveu `SUBAGENT_OK`. Eventos de início/fim e resposta usaram o mesmo `taskId` filho e conservaram o `parentTaskId`; o JSON do perfil temporário reteve a entrada `user` e a resposta `assistant` como mensagens distintas. Essa verificação encontrou e corrigiu uma colisão anterior entre o ID de mensagem e o ID de tarefa.

A verificação comprova esse fluxo local nesse host, com um provider ativo e dois perfis. Ela não comprova isolamento de ferramentas, serialização do perfil filho com outras fontes de trabalho, retomada após reinício, schema ou semântica do serviço original. A análise REA das seis fontes locais selecionadas (`ev_d4284cf7b282ef27aa654f0bb7ce28ad417d434da4de0181805c0637184c9d72`) parseou os seis arquivos sem falha; 38 arquivos relevantes ficaram fora da seleção e as relações semânticas permanecem parciais.
