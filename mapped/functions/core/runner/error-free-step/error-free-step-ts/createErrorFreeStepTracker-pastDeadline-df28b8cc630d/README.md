# `createErrorFreeStepTracker/pastDeadline`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/error-free-step/error-free-step.ts` · [README do módulo](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589041-589043](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589041-L589043) | `FunctionDeclaration` | não | `turn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589041-589043](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589041-L589043) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:589041

Chamadas escritas diretamente neste corpo: `clock.monotonicNow`.

SHA-256 do trecho: `3f4b74e40754c83c8599ff97b897050de80fb5d97dd7f176d6a7f1912a99da01`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
