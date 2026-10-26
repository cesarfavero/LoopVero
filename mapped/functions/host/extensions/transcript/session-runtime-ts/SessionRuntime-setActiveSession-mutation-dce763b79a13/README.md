# `SessionRuntime.setActiveSession/mutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738275-738287](../../../../../../../reference/runtime/host-main.cjs#L738275-L738287) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738275-738287](../../../../../../../reference/runtime/host-main.cjs#L738275-L738287) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:738275

Chamadas escritas diretamente neste corpo: `previous.automations.listDefinitions`, `this.deletedAgentIds.has`, `this.tm.automationRuntime.lastKnownAutomations.delete`, `this.tm.automationRuntime.recordInactiveAutomationChanges`, `this.tm.sessionStore.agentExists`.

SHA-256 do trecho: `2e8aaeb545eb04e09c614db04501e4ab7d2e6d5531007579c8c53c5313b05f92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
