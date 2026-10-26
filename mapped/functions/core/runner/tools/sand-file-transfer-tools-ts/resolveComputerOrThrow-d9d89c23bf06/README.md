# `resolveComputerOrThrow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777620-777631](../../../../../../../reference/runtime/host-main.cjs#L777620-L777631) | `FunctionDeclaration` | não | `controller, machineId` |
| [evaluation:577315-577326](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577315-L577326) | `FunctionDeclaration` | não | `controller, machineId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777620-777631](../../../../../../../reference/runtime/host-main.cjs#L777620-L777631) | 1 | 0 | 0 | 1 | 1 | 1 |
| [evaluation:577315-577326](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577315-L577326) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:777620

Chamadas escritas diretamente neste corpo: `String`, `controller.getComputerAgentId`, `new BoxTransferError`, `resolveSandUserComputer`.

Alvos de lançamento explícito: `BoxTransferError`.

SHA-256 do trecho: `5ebada0a9834a92235d1556404668a84bbdb484ee3d87ac213e3915597ba0a54`.

### evaluation:577315

Chamadas escritas diretamente neste corpo: `String`, `controller.getComputerAgentId`, `new BoxTransferError`, `resolveSandUserComputer`.

Alvos de lançamento explícito: `BoxTransferError`.

SHA-256 do trecho: `ddfa0e10f877a386c3b28bbfcfaab028da7deef72299cb1572da618b6c8badfc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
