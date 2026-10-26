# `McpUnavailableReminderMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/reminders/mcp-unavailable-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/mcp-unavailable-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586898-586917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586898-L586917) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586898-586917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586898-L586917) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586898

Chamadas escritas diretamente neste corpo: `.some`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `this.isUnavailable`.

SHA-256 do trecho: `a01776d56d1b3e89451a1f734f1fd38971727626d5580ddccbcb7c70ed911e61`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
