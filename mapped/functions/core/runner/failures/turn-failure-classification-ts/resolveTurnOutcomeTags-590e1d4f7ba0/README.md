# `resolveTurnOutcomeTags`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/failures/turn-failure-classification.ts` · [README do módulo](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589664-589674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589664-L589674) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589664-589674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589664-L589674) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:589664

Chamadas escritas diretamente neste corpo: `adjustTurnOutcomeForBotBlock`, `classifyExpectedTurnFailure`.

SHA-256 do trecho: `d3bec040f10990ec47a66306ca1e3acb563a580d4fb2baa4986df8e1d5586652`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
