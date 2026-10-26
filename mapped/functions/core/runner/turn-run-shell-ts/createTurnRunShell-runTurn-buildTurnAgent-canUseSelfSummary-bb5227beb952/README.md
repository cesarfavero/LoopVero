# `createTurnRunShell/runTurn/buildTurnAgent/canUseSelfSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:592182-592189](../../../../../../reference/runtime/sand-eval-runner.cjs#L592182-L592189) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592182-592189](../../../../../../reference/runtime/sand-eval-runner.cjs#L592182-L592189) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:592182

Chamadas escritas diretamente neste corpo: `sandSelfSummarySupported`, `turnSession.getModelId`, `turnSession.getResolvedModelId`.

SHA-256 do trecho: `aabdd12a66432d8755de9c88cf96770fccaf9e34e8fad1af9d1f8355ea93206f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
