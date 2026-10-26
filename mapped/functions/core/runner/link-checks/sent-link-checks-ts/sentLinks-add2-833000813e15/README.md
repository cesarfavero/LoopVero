# `sentLinks/add2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583444-583448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583444-L583448) | `ArrowFunctionExpression` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583444-583448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583444-L583448) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583444

Chamadas escritas diretamente neste corpo: `byKey.has`, `byKey.set`, `linkKey2`.

SHA-256 do trecho: `9035eda119faa3d2d00ecca08ac6c92866fae8d7f5bb305d619e95d3f4718c27`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
