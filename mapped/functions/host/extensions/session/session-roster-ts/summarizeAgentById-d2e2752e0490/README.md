# `summarizeAgentById`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-roster.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-roster-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722990-723012](../../../../../../../reference/runtime/host-main.cjs#L722990-L723012) | `FunctionDeclaration` | sim | `host, agentId, activeAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722990-723012](../../../../../../../reference/runtime/host-main.cjs#L722990-L723012) | 3 | 0 | 4 | 4 | 0 | 0 |

### host:722990

Chamadas escritas diretamente neste corpo: `buildSummary`, `getAgentDbPath`, `host.isAgentBeingDeleted`, `host.loadCachedExtras`, `host.recoverAgentWithMissingDb`, `statIfExists`.

SHA-256 do trecho: `09e4e968dc215aff75957d294b1f17ab52237578af33fdcff199e97d95bac35f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
