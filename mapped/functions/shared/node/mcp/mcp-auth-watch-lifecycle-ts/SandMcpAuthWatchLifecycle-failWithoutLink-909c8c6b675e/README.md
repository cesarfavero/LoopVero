# `SandMcpAuthWatchLifecycle.failWithoutLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685892-685898](../../../../../../../reference/runtime/host-main.cjs#L685892-L685898) | `method` | sim | `attempt, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685892-685898](../../../../../../../reference/runtime/host-main.cjs#L685892-L685898) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:685892

Chamadas escritas diretamente neste corpo: `this.clearPendingAuthWatchCancelled`, `this.deps.reload`.

SHA-256 do trecho: `726dafb8db02a165a4b142545aa78e4ff3c8cc2ddd2dec7a1af3a76ca3f42455`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
