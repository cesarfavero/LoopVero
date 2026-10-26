# `build/show`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769447-769471](../../../../../../../../reference/runtime/host-main.cjs#L769447-L769471) | `ArrowFunctionExpression` | sim | `{ toolCallId, form }` |
| [evaluation:565094-565118](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565094-L565118) | `ArrowFunctionExpression` | sim | `{ toolCallId, form }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769447-769471](../../../../../../../../reference/runtime/host-main.cjs#L769447-L769471) | 4 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:565094-565118](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565094-L565118) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:769447

Chamadas escritas diretamente neste corpo: `Date.now`, `buildUserFormUnsupportedTurnResult`, `host.emitUpdate`, `host.getConversationId`, `shownUserFormOf`, `toolHandoff.stopOtherTools`, `turn.pauseThisRun`, `userForm.requestForm`.

SHA-256 do trecho: `a0568ba4bdea446ca62d5231fc9420f542b8f160034e96f565eca5e1dfb3e110`.

### evaluation:565094

Chamadas escritas diretamente neste corpo: `Date.now`, `buildUserFormUnsupportedTurnResult`, `host.emitUpdate`, `host.getConversationId`, `shownUserFormOf`, `toolHandoff.stopOtherTools`, `turn.pauseThisRun`, `userForm.requestForm`.

SHA-256 do trecho: `a0568ba4bdea446ca62d5231fc9420f542b8f160034e96f565eca5e1dfb3e110`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
