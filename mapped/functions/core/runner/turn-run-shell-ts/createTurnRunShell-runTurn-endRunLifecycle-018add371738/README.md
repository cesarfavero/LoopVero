# `createTurnRunShell/runTurn/endRunLifecycle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591586-591594](../../../../../../reference/runtime/sand-eval-runner.cjs#L591586-L591594) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591586-591594](../../../../../../reference/runtime/sand-eval-runner.cjs#L591586-L591594) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591586

Chamadas escritas diretamente neste corpo: `Date.now`, `host.emitRunLifecycle`.

Alvos de atribuição ou incremento: `runLifecycleEnded`.

SHA-256 do trecho: `cdf9c5d70a8d4b93d702c4b49cc10a3caef87621b455fe909e1212dd49c6ddb0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
