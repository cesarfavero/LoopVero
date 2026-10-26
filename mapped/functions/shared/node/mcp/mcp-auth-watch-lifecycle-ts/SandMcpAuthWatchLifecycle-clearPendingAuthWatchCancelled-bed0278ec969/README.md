# `SandMcpAuthWatchLifecycle.clearPendingAuthWatchCancelled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685709-685725](../../../../../../../reference/runtime/host-main.cjs#L685709-L685725) | `method` | não | `serverId, accountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685709-685725](../../../../../../../reference/runtime/host-main.cjs#L685709-L685725) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:685709

Chamadas escritas diretamente neste corpo: `this.clearPendingAuthWatch`, `this.emit`, `this.handoffProgressOf`.

SHA-256 do trecho: `f46ab30ea6e4e15755cf17adf1ad01d8feb82f51ddb00360c4db14370919a296`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
