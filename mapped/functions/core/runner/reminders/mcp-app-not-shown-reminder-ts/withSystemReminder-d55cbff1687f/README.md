# `withSystemReminder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/reminders/mcp-app-not-shown-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/mcp-app-not-shown-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585603-585608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585603-L585608) | `FunctionDeclaration` | não | `result, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585603-585608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585603-L585608) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585603

Chamadas escritas diretamente neste corpo: `new McpResult`, `new SystemReminder`, `result.result.value.clone`, `success2.systemReminders.push`.

SHA-256 do trecho: `18c7e4cba254793173eb85e23cfb83afc31cc435a449c9b41287c6f7a6bad9a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
