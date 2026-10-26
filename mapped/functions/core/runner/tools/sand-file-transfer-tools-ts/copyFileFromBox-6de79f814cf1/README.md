# `copyFileFromBox`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777664-777689](../../../../../../../reference/runtime/host-main.cjs#L777664-L777689) | `FunctionDeclaration` | sim | `ctx, args, controller` |
| [evaluation:577359-577384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577359-L577384) | `FunctionDeclaration` | sim | `ctx, args, controller` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777664-777689](../../../../../../../reference/runtime/host-main.cjs#L777664-L777689) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:577359-577384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577359-L577384) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:777664

Chamadas escritas diretamente neste corpo: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path169.posix.basename`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 do trecho: `2347c511c859552cbb7eee11a122a8f27ed114806bf2eefb0625ab3ca0758f83`.

### evaluation:577359

Chamadas escritas diretamente neste corpo: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path40.posix.basename`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 do trecho: `7c9afb916afb4d0252749ad721bc955cd438f413edd4bbd199ac7f1fe1856d7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
