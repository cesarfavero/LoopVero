# `SandMcpAuthWatchLifecycle.finishLandedWatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686159-686167](../../../../../../../reference/runtime/host-main.cjs#L686159-L686167) | `method` | sim | `watch4, watchKey, via` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686159-686167](../../../../../../../reference/runtime/host-main.cjs#L686159-L686167) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:686159

Chamadas escritas diretamente neste corpo: `this.cancelWatchForWithdrawnRow`, `this.finishPendingAuthWatch`, `this.pendingAuthWatches.get`, `this.watchedRowWithdrawn`.

SHA-256 do trecho: `26101655c7ee6c744d85e9538b6cef494d4368bda90db6569dd2763219db3235`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
