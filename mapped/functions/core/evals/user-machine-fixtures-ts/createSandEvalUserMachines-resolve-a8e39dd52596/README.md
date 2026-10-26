# `createSandEvalUserMachines/resolve`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596538-596541](../../../../../../reference/runtime/sand-eval-runner.cjs#L596538-L596541) | `ArrowFunctionExpression` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596538-596541](../../../../../../reference/runtime/sand-eval-runner.cjs#L596538-L596541) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596538

Chamadas escritas diretamente neste corpo: `.handle`, `[computed].handle`, `registered.get`, `registered.values`.

SHA-256 do trecho: `348bfd18683f918f7023790f46b29a6ca0751aca71827e0e4e86538513e9a229`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
