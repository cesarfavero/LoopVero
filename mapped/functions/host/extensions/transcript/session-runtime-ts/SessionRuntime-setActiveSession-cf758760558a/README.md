# `SessionRuntime.setActiveSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738270-738296](../../../../../../../reference/runtime/host-main.cjs#L738270-L738296) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738270-738296](../../../../../../../reference/runtime/host-main.cjs#L738270-L738296) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:738270

Chamadas escritas diretamente neste corpo: `this.liveSessions.set`, `this.tm.automationRuntime.enqueueAutomationLifecycleMutation`, `this.tm.roster.invalidateActiveOutline`, `this.tm.sessionStore.writeActiveAgentId`.

Alvos de atribuição ou incremento: `this.activeSession`.

SHA-256 do trecho: `47b45d88831bc172fb8a1265cd99e95ac82c63d9fa4625764429df2c130eddf9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
