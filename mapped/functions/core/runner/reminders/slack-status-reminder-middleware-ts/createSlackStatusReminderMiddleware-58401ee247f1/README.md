# `createSlackStatusReminderMiddleware`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/slack-status-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/slack-status-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:480568-480570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480568-L480570) | `FunctionDeclaration` | não | `slackStatus, reminders` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480568-480570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480568-L480570) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:480568

Chamadas escritas diretamente neste corpo: `createChannelStatusReminderMiddleware`.

SHA-256 do trecho: `52d6ebec64eaedcd0466f86173e3d9134e04a7cb00e8e97f3b3308d4464f47b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
