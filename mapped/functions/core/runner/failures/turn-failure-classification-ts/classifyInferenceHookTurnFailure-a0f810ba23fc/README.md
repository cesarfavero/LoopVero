# `classifyInferenceHookTurnFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/failures/turn-failure-classification.ts` · [README do módulo](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736160-736163](../../../../../../../reference/runtime/host-main.cjs#L736160-L736163) | `FunctionDeclaration` | não | `error64` |
| [evaluation:589660-589663](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589660-L589663) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736160-736163](../../../../../../../reference/runtime/host-main.cjs#L736160-L736163) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589660-589663](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589660-L589663) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:736160

Chamadas escritas diretamente neste corpo: `classifyExpectedTurnFailure`, `isSandInferenceHookFailure`.

SHA-256 do trecho: `84160b23bfdc7c28faaf3ad3d3db32c999ed4bb5a8bc18f5f211f93449e5f242`.

### evaluation:589660

Chamadas escritas diretamente neste corpo: `classifyExpectedTurnFailure`, `isSandInferenceHookFailure`.

SHA-256 do trecho: `57fd441801e26f4379f31b7bd486f3f56b959e3db93964dfbdd2ff4acdd8ea00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
