# `sliceReadRange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596274-596281](../../../../../../reference/runtime/sand-eval-runner.cjs#L596274-L596281) | `FunctionDeclaration` | não | `lines2, range2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596274-596281](../../../../../../reference/runtime/sand-eval-runner.cjs#L596274-L596281) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:596274

Chamadas escritas diretamente neste corpo: `.join`, `Math.max`, `lines2.slice`.

SHA-256 do trecho: `289f5d1fe7650c71f3c17b1ac1135baab0931b61ae7b1241a5566c8c94262039`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
