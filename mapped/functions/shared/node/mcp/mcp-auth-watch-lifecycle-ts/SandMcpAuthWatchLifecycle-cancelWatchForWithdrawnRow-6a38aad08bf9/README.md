# `SandMcpAuthWatchLifecycle.cancelWatchForWithdrawnRow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686233-686240](../../../../../../../reference/runtime/host-main.cjs#L686233-L686240) | `method` | sim | `watch4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686233-686240](../../../../../../../reference/runtime/host-main.cjs#L686233-L686240) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:686233

Chamadas escritas diretamente neste corpo: `this.clearPendingAuthWatchCancelled`, `this.deps.reload`, `this.notifyWatchCancelled`.

SHA-256 do trecho: `b4b7faf9399521606463a7f232fa81d10219a521a445b698f8981b0f8d3701aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
