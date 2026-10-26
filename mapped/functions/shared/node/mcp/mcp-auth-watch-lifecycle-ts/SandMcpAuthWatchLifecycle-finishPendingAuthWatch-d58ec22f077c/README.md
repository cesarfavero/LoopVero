# `SandMcpAuthWatchLifecycle.finishPendingAuthWatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686271-686290](../../../../../../../reference/runtime/host-main.cjs#L686271-L686290) | `method` | sim | `watch4, watchKey, via` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686271-686290](../../../../../../../reference/runtime/host-main.cjs#L686271-L686290) | 3 | 0 | 1 | 1 | 0 | 1 |

### host:686271

Chamadas escritas diretamente neste corpo: `this.clearPendingAuthWatch`, `this.deps.reload`, `this.deps.settleSignedInServer`, `this.notifyAuthCompleted`, `this.pendingAuthWatches.get`.

SHA-256 do trecho: `bfb43b19bb701dee33562b5b1a18abb794804453133eeb879873ca734044b5ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
