# `runSandAutomationNowInSession`

## Responsabilidade e fonte

Pede ao serviço de automações que execute uma rotina no contexto de uma sessão. É o caminho remoto identificado para esse pedido; não chama o loop BOX aposentado. [Implementação](../../../reference/runtime/host-main.cjs#L505720-L505746).

## Interface

| Entrada | Uso |
| --- | --- |
| `deps.listAutomations()` | Localizar definição por agente e ID local |
| `deps.client.testAutomation()` | RPC de execução manual |
| `args.agentId`, `args.localId` | Identidade da rotina |
| `args.sessionId` | Sessão remota de destino |

A função é assíncrona e não devolve um resultado de inferência. Conclusão do RPC não significa que o trabalho ou sua entrega ao usuário terminaram.

## Passo a passo

1. Busca a entrada com mesmo `agentId` e `automation.id`.
2. Se a entrada existe e não tem gatilho exclusivamente de agenda, lança `SandAutomationRunNowRefusedError`.
3. Calcula `stableAutomationId` para o par agente/rotina.
4. Monta `TestAutomationRequest` com `samplePayload.case = "cron"`, `CronSamplePayload` e `grokBotSessionId`.
5. Aguarda `client.testAutomation`.
6. Converte recusas Connect reconhecidas para o erro de domínio, preservando `rawMessage`; propaga os demais erros.

`isScheduleOnlyTrigger` exige ao menos uma agenda cron e nenhum gatilho de evento. Um grupo que mistura cron e evento é recusado nesse caminho, mesmo contendo uma agenda válida.

## Casos de borda

| Caso | Resultado local |
| --- | --- |
| Definição encontrada, somente agenda | Tenta o RPC |
| Definição encontrada, listener | Recusa antes do RPC |
| Definição encontrada, grupo misto | Recusa antes do RPC |
| Definição não encontrada no snapshot local | Ainda tenta o RPC com ID derivado |
| Recusa remota reconhecida | Erro de domínio com mensagem remota |
| Falha de rede ou outra exceção | Propagada |

O caso de definição ausente é importante: a função não implementa um “not found” local obrigatório. A autorização, existência final e admissão da execução pertencem ao serviço chamado.

## Ligação com a extensão

`automationsExtension` injeta o cliente e a leitura de definições do transcript no método `runNowInSession`. Seu método de suspensão afeta o polling de reconciliação. Já `AutomationRuntime.runAgentAutomationNow` chama `refuseBoxTurn` e lança; nomes semelhantes não devem ser confundidos. [Wiring remoto](../../../reference/runtime/host-main.cjs#L505990-L506026), [recusa local](../../../reference/runtime/host-main.cjs#L734296-L734298).

[Automações](../../components/automations/README.md) · [ID estável](../stableAutomationId/README.md).
