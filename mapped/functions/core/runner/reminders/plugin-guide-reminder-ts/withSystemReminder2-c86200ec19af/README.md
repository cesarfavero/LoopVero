# `withSystemReminder2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/plugin-guide-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585720-585725](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585720-L585725) | `FunctionDeclaration` | não | `result, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585720-585725](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585720-L585725) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585720

Chamadas escritas diretamente neste corpo: `new McpResult`, `new SystemReminder`, `result.result.value.clone`, `success2.systemReminders.push`.

SHA-256 do trecho: `44d83191f59a3adaad7b18a7341dbf0033670b1ddb184778b0ca1b20fce3fb59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
