# `SendPipeline.sendPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/send-pipeline.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740170-740188](../../../../../../../reference/runtime/host-main.cjs#L740170-L740188) | `method` | sim | `prompt, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740170-740188](../../../../../../../reference/runtime/host-main.cjs#L740170-L740188) | 5 | 0 | 1 | 1 | 2 | 0 |

### host:740170

Chamadas escritas diretamente neste corpo: `.some`, `new AgentGoneError`, `new SandBoxHarnessRetiredError`, `new SandServerRoomSendError`, `prompt.trim`, `this.refuseBoxTurn`, `this.tm.boxHarnessRefusals.reportServerHostedSkipped`, `this.tm.groupChat.isGroupAgentId`, `this.tm.sessions.ensureActionTarget`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.isServerHostedAgent`.

Alvos de lançamento explícito: `AgentGoneError`, `ConditionalExpression`.

SHA-256 do trecho: `e8a5f64a47f8448a35de345b637e87eda01da2ff212d35e08cac9ca0df1bd207`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
