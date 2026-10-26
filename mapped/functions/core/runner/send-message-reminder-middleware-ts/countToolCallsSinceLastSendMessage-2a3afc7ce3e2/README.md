# `countToolCallsSinceLastSendMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/send-message-reminder-middleware.ts` · [README do módulo](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483113-483129](../../../../../../reference/runtime/sand-eval-runner.cjs#L483113-L483129) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483113-483129](../../../../../../reference/runtime/sand-eval-runner.cjs#L483113-L483129) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:483113

Chamadas escritas diretamente neste corpo: `countNonSendMessageToolCalls`, `hasSendMessageCall`, `isAgentStatusReminderMessage`, `isSlackStatusReminderMessage`, `isTeamsStatusReminderMessage`.

Alvos de atribuição ou incremento: `count2`, `index`.

SHA-256 do trecho: `f37d23e0933b4fefd2b4115e99c9b32717550a2e238c296c51bd14dc88be1b03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
