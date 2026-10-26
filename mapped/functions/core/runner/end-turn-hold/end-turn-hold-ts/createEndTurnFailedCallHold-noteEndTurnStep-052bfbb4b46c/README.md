# `createEndTurnFailedCallHold/noteEndTurnStep`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/end-turn-hold/end-turn-hold.ts` · [README do módulo](../../../../../../modules/core/runner/end-turn-hold/end-turn-hold-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590545-590557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590545-L590557) | `FunctionExpression` | não | `step, toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590545-590557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590545-L590557) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590545

Chamadas escritas diretamente neste corpo: `step.remindOnSettle`.

Alvos de atribuição ou incremento: `endTurnStep`.

SHA-256 do trecho: `79da6caf32fb3e211477818f5d3df1c8cfc04c617b8a3e559ed6795c0612b156`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
