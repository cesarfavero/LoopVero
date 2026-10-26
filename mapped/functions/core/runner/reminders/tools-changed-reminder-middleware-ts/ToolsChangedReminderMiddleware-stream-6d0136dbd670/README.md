# `ToolsChangedReminderMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/reminders/tools-changed-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/tools-changed-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586964-586985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586964-L586985) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586964-586985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586964-L586985) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586964

Chamadas escritas diretamente neste corpo: `.some`, `subagentTypesOffered`, `systemReminder`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `tools.map`, `toolsChangedReminderBody`.

Alvos de atribuição ou incremento: `this.checked`.

SHA-256 do trecho: `772d159f7da835ea50e5ed11dfcccdb7689b826cc849abd5c1e5ef0239d24a78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
