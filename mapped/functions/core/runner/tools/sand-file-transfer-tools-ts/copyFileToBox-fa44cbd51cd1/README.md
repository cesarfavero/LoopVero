# `copyFileToBox`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-file-transfer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777637-777663](../../../../../../../reference/runtime/host-main.cjs#L777637-L777663) | `FunctionDeclaration` | sim | `ctx, args, controller` |
| [evaluation:577332-577358](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577332-L577358) | `FunctionDeclaration` | sim | `ctx, args, controller` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777637-777663](../../../../../../../reference/runtime/host-main.cjs#L777637-L777663) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:577332-577358](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577332-L577358) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:777637

Chamadas escritas diretamente neste corpo: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path169.posix.basename`, `import_node_path169.posix.join`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 do trecho: `b83395aa7af1501514255139cd2d68c6e48797610f5defe9536b5135d361834e`.

### evaluation:577332

Chamadas escritas diretamente neste corpo: `assertBoxReady`, `auditedBoxTransfer`, `controller.getBoxId`, `controller.getComputerAgentId`, `formatBytes3`, `import_node_path40.posix.basename`, `import_node_path40.posix.join`, `resolveBoxWorkspacePath`, `resolveComputerOrThrow`.

SHA-256 do trecho: `f65fe47704037c1c8d6144da0bb4769d54868fd57e2970ef7d6e7d247893a44b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
