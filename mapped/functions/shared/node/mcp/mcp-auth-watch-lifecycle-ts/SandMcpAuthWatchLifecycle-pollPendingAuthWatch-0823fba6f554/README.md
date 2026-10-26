# `SandMcpAuthWatchLifecycle.pollPendingAuthWatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686095-686114](../../../../../../../reference/runtime/host-main.cjs#L686095-L686114) | `method` | sim | `watchKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686095-686114](../../../../../../../reference/runtime/host-main.cjs#L686095-L686114) | 4 | 0 | 1 | 4 | 0 | 1 |

### host:686095

Chamadas escritas diretamente neste corpo: `this.deps.clock.now`, `this.expirePendingAuthWatch`, `this.pendingAuthWatches.get`, `this.settleLandedAuthWatch`.

Alvos de atribuição ou incremento: `watch4.isPolling`, `watch4.suppressFirstPoll`.

SHA-256 do trecho: `f26f5aa0248c2e590791131ceb4c0e7f08de01fc40c7a65dff79635f26857d26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
