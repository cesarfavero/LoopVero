# `FixtureUserMachine.assertReachable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596353-596355](../../../../../../reference/runtime/sand-eval-runner.cjs#L596353-L596355) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596353-596355](../../../../../../reference/runtime/sand-eval-runner.cjs#L596353-L596355) | 1 | 0 | 0 | 0 | 1 | 0 |

### evaluation:596353

Chamadas escritas diretamente neste corpo: `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `03f81284792e97c6712b86ee212edc987153057c9e0e6d8dbf8fe574f4896ea3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
