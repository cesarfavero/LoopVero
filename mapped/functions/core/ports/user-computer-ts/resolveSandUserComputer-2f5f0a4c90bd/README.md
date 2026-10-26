# `resolveSandUserComputer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/ports/user-computer.ts` · [README do módulo](../../../../../modules/core/ports/user-computer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742470-742497](../../../../../../reference/runtime/host-main.cjs#L742470-L742497) | `FunctionDeclaration` | não | `userComputers, machineId, scope` |
| [evaluation:479446-479473](../../../../../../reference/runtime/sand-eval-runner.cjs#L479446-L479473) | `FunctionDeclaration` | não | `userComputers, machineId, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742470-742497](../../../../../../reference/runtime/host-main.cjs#L742470-L742497) | 5 | 0 | 0 | 1 | 4 | 0 |
| [evaluation:479446-479473](../../../../../../reference/runtime/sand-eval-runner.cjs#L479446-L479473) | 5 | 0 | 0 | 1 | 4 | 0 |

### host:742470

Chamadas escritas diretamente neste corpo: `machines.filter`, `new SandUserComputerResolutionError`, `userComputers.list`, `userComputers.resolve`.

Alvos de atribuição ou incremento: `resolvedId`.

Alvos de lançamento explícito: `SandUserComputerResolutionError`.

SHA-256 do trecho: `c923ae8dc18a698c3f7d12cd9a88e26e667eac7ccb00e142970c97c8a519a81a`.

### evaluation:479446

Chamadas escritas diretamente neste corpo: `machines.filter`, `new SandUserComputerResolutionError`, `userComputers.list`, `userComputers.resolve`.

Alvos de atribuição ou incremento: `resolvedId`.

Alvos de lançamento explícito: `SandUserComputerResolutionError`.

SHA-256 do trecho: `c923ae8dc18a698c3f7d12cd9a88e26e667eac7ccb00e142970c97c8a519a81a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
