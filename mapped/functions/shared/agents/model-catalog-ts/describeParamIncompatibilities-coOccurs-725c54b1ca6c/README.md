# `describeParamIncompatibilities/coOccurs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/model-catalog.ts` · [README do módulo](../../../../../modules/shared/agents/model-catalog-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567620-567623](../../../../../../reference/runtime/sand-eval-runner.cjs#L567620-L567623) | `ArrowFunctionExpression` | não | `a, b2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567620-567623](../../../../../../reference/runtime/sand-eval-runner.cjs#L567620-L567623) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:567620 usa retorno implícito de arrow function.

### evaluation:567620

Chamadas escritas diretamente neste corpo: `entry.variants.some`.

SHA-256 do trecho: `0e1b5381444799c67ecb03097725231c2e646af57c90a0b271773811d92ec096`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
