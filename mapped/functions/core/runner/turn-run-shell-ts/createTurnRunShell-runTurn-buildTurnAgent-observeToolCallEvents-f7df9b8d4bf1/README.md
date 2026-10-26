# `createTurnRunShell/runTurn/buildTurnAgent/observeToolCallEvents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:592226-592229](../../../../../../reference/runtime/sand-eval-runner.cjs#L592226-L592229) | `ArrowFunctionExpression` | não | `events` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592226-592229](../../../../../../reference/runtime/sand-eval-runner.cjs#L592226-L592229) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:592226

Chamadas escritas diretamente neste corpo: `toolFailureBreaker.observe`, `turnBudget.observeToolCallEvents`.

SHA-256 do trecho: `a298de69d30ed38176ef7c2b05511219c9bfaf763686e8218c31fd54ccb5284a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
