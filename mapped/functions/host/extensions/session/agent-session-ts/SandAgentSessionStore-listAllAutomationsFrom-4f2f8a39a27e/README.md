# `SandAgentSessionStore.listAllAutomationsFrom`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723720-723746](../../../../../../../reference/runtime/host-main.cjs#L723720-L723746) | `method` | sim | `{     definitionsOnly   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723720-723746](../../../../../../../reference/runtime/host-main.cjs#L723720-L723746) | 4 | 2 | 1 | 2 | 1 | 2 |

### host:723720

Chamadas escritas diretamente neste corpo: `entry.isDirectory`, `parseAgentId`, `result.push`, `store.list`, `store.listDefinitions`, `this.automationStoreFor`.

Alvos de atribuição ou incremento: `automations`, `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `a8291ba412ca4cfcdb20fd1e42c78647c6ca9bec8dbd1d617e9a23cd7de64c23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
