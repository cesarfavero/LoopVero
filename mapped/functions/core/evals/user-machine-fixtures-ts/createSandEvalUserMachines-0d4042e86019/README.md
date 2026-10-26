# `createSandEvalUserMachines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596463-596552](../../../../../../reference/runtime/sand-eval-runner.cjs#L596463-L596552) | `FunctionDeclaration` | não | `config2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596463-596552](../../../../../../reference/runtime/sand-eval-runner.cjs#L596463-L596552) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:596463

Chamadas escritas diretamente neste corpo: `boxMachineIds.add`, `new FixtureUserMachine`, `new Map`, `new Set`, `registered.set`, `replayMachines.set`, `sandEvalUserMachineFixtureConfigSchema.parse`.

SHA-256 do trecho: `a402cf79471364885e67c38d867c0130ff5d3f6c1deeda8f29a39525cafad74b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
