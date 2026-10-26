# `SandMcpAuthWatchLifecycle.noteAuthCallbackRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686045-686053](../../../../../../../reference/runtime/host-main.cjs#L686045-L686053) | `method` | não | `rejection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686045-686053](../../../../../../../reference/runtime/host-main.cjs#L686045-L686053) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:686045

Chamadas escritas diretamente neste corpo: `this.clearPendingAuthWatch`, `this.notifyWatchCancelled`, `this.pendingAuthWatches.values`, `this.reportWatchTimedOut`.

SHA-256 do trecho: `d4e1d77fb2d71561eae069f5362effb48732d294f594ea6670a1d2a287be7ee2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
