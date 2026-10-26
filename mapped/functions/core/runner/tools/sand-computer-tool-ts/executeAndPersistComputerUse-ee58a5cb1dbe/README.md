# `executeAndPersistComputerUse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777286-777339](../../../../../../../reference/runtime/host-main.cjs#L777286-L777339) | `FunctionDeclaration` | sim | `ctx, resourceAccessor, deps, args` |
| [evaluation:576931-576984](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576931-L576984) | `FunctionDeclaration` | sim | `ctx, resourceAccessor, deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777286-777339](../../../../../../../reference/runtime/host-main.cjs#L777286-L777339) | 5 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:576931-576984](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576931-L576984) | 5 | 0 | 2 | 1 | 0 | 0 |

### host:777286

Chamadas escritas diretamente neste corpo: `args.clone`, `ctx.get`, `deps.fullResolutionScreenshots`, `observation.executorResult`, `resourceAccessor.get`, `sandComputerStageSpanName`, `takeFullResolutionScreenshot`, `traceComputerUseSpan`.

Alvos de atribuição ou incremento: `observation.stage`, `request5.fullResolutionScreenshot`.

SHA-256 do trecho: `001807ee68fcb6a3398f0ac19e25f6dc5670653c372b8a935672cf76e9b5c407`.

### evaluation:576931

Chamadas escritas diretamente neste corpo: `args.clone`, `ctx.get`, `deps.fullResolutionScreenshots`, `observation.executorResult`, `resourceAccessor.get`, `sandComputerStageSpanName`, `takeFullResolutionScreenshot`, `traceComputerUseSpan`.

Alvos de atribuição ou incremento: `observation.stage`, `request3.fullResolutionScreenshot`.

SHA-256 do trecho: `197333c6646a7925cef24c080219ec36422a971acc4bde2e031ac1deb7befa52`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
