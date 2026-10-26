# `runUploadFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/upload-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774705-774770](../../../../../../../reference/runtime/host-main.cjs#L774705-L774770) | `FunctionDeclaration` | sim | `args, deps` |
| [evaluation:574308-574373](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574308-L574373) | `FunctionDeclaration` | sim | `args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774705-774770](../../../../../../../reference/runtime/host-main.cjs#L774705-L774770) | 11 | 0 | 4 | 5 | 1 | 2 |
| [evaluation:574308-574373](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574308-L574373) | 11 | 0 | 4 | 5 | 1 | 2 |

### host:774705

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `checkFolderTargets`, `deps.getAgentId`, `deps.listConnections`, `deps.onUploaded`, `deps.reviewUpload`, `deps.stage`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeUploadFileOutcome`, `errorLogTag`, `failedFileTransferResult`, `invariant`, `normalizeDestination`, `normalizeSourcePath`, `process.stderr.write`, `record3`, `resolveConnectorConnectionName`, `staged.upload`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0c4223e96df4a8f376c8162f4c003927651e6149a8a7786c5c36470a7bd63d21`.

### evaluation:574308

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `checkFolderTargets`, `deps.getAgentId`, `deps.listConnections`, `deps.onUploaded`, `deps.reviewUpload`, `deps.stage`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeUploadFileOutcome`, `errorLogTag`, `failedFileTransferResult`, `invariant`, `normalizeDestination`, `normalizeSourcePath`, `process.stderr.write`, `record4`, `resolveConnectorConnectionName`, `staged.upload`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `ac1698c135e10959f2364633e9765deaa5c14052e82b8658dce242f3d54ffafe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
