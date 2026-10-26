# `McpStillLoadingReminderMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/reminders/mcp-still-loading-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/mcp-still-loading-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586860-586879](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586860-L586879) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586860-586879](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586860-L586879) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586860

Chamadas escritas diretamente neste corpo: `.some`, `mcpStillLoadingReminderMessage`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `this.stillLoadingServerNames`.

SHA-256 do trecho: `e88c3aa4b76c00d033a9102645ec6131c51350f35e31164cca261b6c9b077065`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
