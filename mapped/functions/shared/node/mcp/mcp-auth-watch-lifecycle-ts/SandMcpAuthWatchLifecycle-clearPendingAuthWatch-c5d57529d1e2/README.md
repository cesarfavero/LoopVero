# `SandMcpAuthWatchLifecycle.clearPendingAuthWatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686025-686032](../../../../../../../reference/runtime/host-main.cjs#L686025-L686032) | `method` | não | `serverId, accountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686025-686032](../../../../../../../reference/runtime/host-main.cjs#L686025-L686032) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:686025

Chamadas escritas diretamente neste corpo: `authWatchKey`, `this.pendingAuthWatches.delete`, `this.pendingAuthWatches.get`, `watch4.poll.dispose`.

SHA-256 do trecho: `09a73dfe4d243d32d387952e1f016cd47fb0f88509d9a9347ee5b866068fbb3b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
