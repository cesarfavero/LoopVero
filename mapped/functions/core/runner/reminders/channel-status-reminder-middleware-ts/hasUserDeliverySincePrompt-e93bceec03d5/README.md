# `hasUserDeliverySincePrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:480462-480477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480462-L480477) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480462-480477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480462-L480477) | 4 | 1 | 0 | 2 | 0 | 0 |

### evaluation:480462

Chamadas escritas diretamente neste corpo: `isInjectedReminderMessage`, `message.content.some`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `8b8bc5e6470339fdd6cd5ea2b70fb526a581010c96c80bfea2367080d2212cc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
