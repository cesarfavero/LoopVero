# `createSandEvalUserMachines/machineFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596509-596512](../../../../../../reference/runtime/sand-eval-runner.cjs#L596509-L596512) | `ArrowFunctionExpression` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596509-596512](../../../../../../reference/runtime/sand-eval-runner.cjs#L596509-L596512) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:596509

Chamadas escritas diretamente neste corpo: `boxMachineIds.has`, `replayMachines.get`.

SHA-256 do trecho: `ce34ec53a241e2066777ed9f1f26050f83aac614e08c9c5b94e871393224e39b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
