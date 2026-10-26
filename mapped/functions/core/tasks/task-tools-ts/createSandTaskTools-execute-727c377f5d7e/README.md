# `createSandTaskTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tasks/README.md).

**Módulo:** `core/tasks/task-tools.ts` · [README do módulo](../../../../../modules/core/tasks/task-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739521-739526](../../../../../../reference/runtime/host-main.cjs#L739521-L739526) | `ArrowFunctionExpression` | sim | `_ctx, args, port` |
| [host:739534-739537](../../../../../../reference/runtime/host-main.cjs#L739534-L739537) | `ArrowFunctionExpression` | sim | `_ctx, args, port` |
| [host:739545-739562](../../../../../../reference/runtime/host-main.cjs#L739545-L739562) | `ArrowFunctionExpression` | sim | `_ctx, args, port` |
| [evaluation:538824-538829](../../../../../../reference/runtime/sand-eval-runner.cjs#L538824-L538829) | `ArrowFunctionExpression` | sim | `_ctx, args, port` |
| [evaluation:538837-538840](../../../../../../reference/runtime/sand-eval-runner.cjs#L538837-L538840) | `ArrowFunctionExpression` | sim | `_ctx, args, port` |
| [evaluation:538848-538865](../../../../../../reference/runtime/sand-eval-runner.cjs#L538848-L538865) | `ArrowFunctionExpression` | sim | `_ctx, args, port` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739521-739526](../../../../../../reference/runtime/host-main.cjs#L739521-L739526) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:739534-739537](../../../../../../reference/runtime/host-main.cjs#L739534-L739537) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:739545-739562](../../../../../../reference/runtime/host-main.cjs#L739545-L739562) | 4 | 0 | 3 | 3 | 1 | 0 |
| [evaluation:538824-538829](../../../../../../reference/runtime/sand-eval-runner.cjs#L538824-L538829) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:538837-538840](../../../../../../reference/runtime/sand-eval-runner.cjs#L538837-L538840) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:538848-538865](../../../../../../reference/runtime/sand-eval-runner.cjs#L538848-L538865) | 4 | 0 | 3 | 3 | 1 | 0 |

### host:739521

Chamadas escritas diretamente neste corpo: `.catch`, `describeRecord`, `port.create`.

SHA-256 do trecho: `aae058f5e268dfcf4a654cd83c84e516e4f4988362b5c587cfc6563f8d8408c0`.

### host:739534

Chamadas escritas diretamente neste corpo: `.catch`, `describeRecord`, `port.update`, `taskEditOf`.

SHA-256 do trecho: `2a6a46d00856a212933d7e4bb1d53c27c097d3d23c33d63f96b5b5f6fc1b9874`.

### host:739545

Chamadas escritas diretamente neste corpo: `.join`, `describeRecord`, `listed.map`, `new SandToolInputError`, `port.listOpen`, `port.listRecentlyDone`, `port.read`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `f6eb514900d78861926feb6e63f2ddc1183cd55d151a62593787131a8e7011bc`.

### evaluation:538824

Chamadas escritas diretamente neste corpo: `.catch`, `describeRecord`, `port.create`.

SHA-256 do trecho: `e87b391063e9109ecc424971e98bfa7e48b5595655af021482e532bf568f185b`.

### evaluation:538837

Chamadas escritas diretamente neste corpo: `.catch`, `describeRecord`, `port.update`, `taskEditOf`.

SHA-256 do trecho: `2fcd7d36b7d84dad75d364cc956a69cde21bdf8309b470af8240c498f88564a0`.

### evaluation:538848

Chamadas escritas diretamente neste corpo: `.join`, `describeRecord`, `listed.map`, `new SandToolInputError`, `port.listOpen`, `port.listRecentlyDone`, `port.read`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b7a2201103a317c60515a29de9aa68d5001ea54aaa0328fcf211cfe2fafc21e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
