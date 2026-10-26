# `createDraftRateLimitRetry/wait`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733012-733012](../../../../../../../reference/runtime/host-main.cjs#L733012-L733012) | `ArrowFunctionExpression` | não | `{ attempt, minimumMs, signal }` |
| [evaluation:540534-540534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540534-L540534) | `ArrowFunctionExpression` | não | `{ attempt, minimumMs, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733012-733012](../../../../../../../reference/runtime/host-main.cjs#L733012-L733012) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:733012 usa retorno implícito de arrow function.
| [evaluation:540534-540534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540534-L540534) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:540534 usa retorno implícito de arrow function.

### host:733012

Chamadas escritas diretamente neste corpo: `policy.schedule`.

SHA-256 do trecho: `56e630fc09f1b248b85358fa04300b24b9e3d49f35bad2e0ab46f8de8e01d442`.

### evaluation:540534

Chamadas escritas diretamente neste corpo: `policy.schedule`.

SHA-256 do trecho: `56e630fc09f1b248b85358fa04300b24b9e3d49f35bad2e0ab46f8de8e01d442`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
