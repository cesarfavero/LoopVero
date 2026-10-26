# `createTurnPerformanceObservation/messageDispatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547855-547858](../../../../../../reference/runtime/sand-eval-runner.cjs#L547855-L547858) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547855-547858](../../../../../../reference/runtime/sand-eval-runner.cjs#L547855-L547858) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547855

Chamadas escritas diretamente neste corpo: `clock.monotonicNow`.

Alvos de atribuição ou incremento: `lastMessage`.

SHA-256 do trecho: `feb28a41e8313db8abd3cba68c89fbca6a3738c4580d522d9d6704a505f4c60b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
