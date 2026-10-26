# `executorSubagentDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/tasks/README.md).

**Módulo:** `core/sand-multitask.ts` · [README do módulo](../../../../modules/core/sand-multitask-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530233-530245](../../../../../reference/runtime/sand-eval-runner.cjs#L530233-L530245) | `ArrowFunctionExpression` | não | `toolName, { forked, canvasOffered }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530233-530245](../../../../../reference/runtime/sand-eval-runner.cjs#L530233-L530245) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:530233 usa retorno implícito de arrow function.

### evaluation:530233

Chamadas escritas diretamente neste corpo: `.join`, `backgroundSubagentLine`.

SHA-256 do trecho: `0cd13b0658a8f497ecd1fc5e16e62213ddff7047a19f6c649b399bf2069a1314`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
