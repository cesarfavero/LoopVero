# `createErrorFreeStepTracker/emit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/error-free-step/error-free-step.ts` · [README do módulo](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589028-589034](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589028-L589034) | `FunctionDeclaration` | não | `turn, outcome, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589028-589034](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589028-L589034) | 0 | 0 | 0 | 0 | 0 | 1 |

### evaluation:589028

Chamadas escritas diretamente neste corpo: `errorFreeStep.increment`, `errorLogTag`, `logger104.warn`.

SHA-256 do trecho: `069c8b7dfc0b9d20dd36f97bb74c45009eb633da18cf4cf7e098c8024662c2bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
