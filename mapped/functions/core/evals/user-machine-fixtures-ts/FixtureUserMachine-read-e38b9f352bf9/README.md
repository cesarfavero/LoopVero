# `FixtureUserMachine.read`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596412-596435](../../../../../../reference/runtime/sand-eval-runner.cjs#L596412-L596435) | `method` | não | `path33, range2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596412-596435](../../../../../../reference/runtime/sand-eval-runner.cjs#L596412-L596435) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596412

Chamadas escritas diretamente neste corpo: `.decode`, `BigInt`, `contentLines`, `new ReadFileNotFound`, `new ReadResult`, `new ReadSuccess`, `new TextDecoder`, `sliceReadRange`, `this.assertReachable`, `this.files.get`, `this.normalizePath`.

SHA-256 do trecho: `aacadd8315896327a94df44c34099a0bd64813ba49458e90f0d9900cebf0617b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
