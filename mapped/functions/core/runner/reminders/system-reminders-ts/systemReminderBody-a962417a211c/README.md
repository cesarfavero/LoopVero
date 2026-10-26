# `systemReminderBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/system-reminders.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/system-reminders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:480332-480334](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480332-L480334) | `FunctionDeclaration` | não | `host, reminder` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480332-480334](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480332-L480334) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:480332

Chamadas escritas diretamente neste corpo: `allowsSystemReminder`.

SHA-256 do trecho: `363832e56c0d88d41274a034960c9bebc4c228658131be2ac520612d8523fc10`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
