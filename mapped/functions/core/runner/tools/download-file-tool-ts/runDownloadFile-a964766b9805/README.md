# `runDownloadFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/download-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773868-773917](../../../../../../../reference/runtime/host-main.cjs#L773868-L773917) | `FunctionDeclaration` | sim | `args, deps` |
| [evaluation:573089-573138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573089-L573138) | `FunctionDeclaration` | sim | `args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773868-773917](../../../../../../../reference/runtime/host-main.cjs#L773868-L773917) | 9 | 0 | 4 | 5 | 1 | 1 |
| [evaluation:573089-573138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573089-L573138) | 9 | 0 | 4 | 5 | 1 | 1 |

### host:773868

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `deps.getAgentId`, `deps.listConnections`, `deps.prepareDownload`, `deps.reviewDownload`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeDownloadFileOutcome`, `failedFileTransferResult`, `invariant`, `normalizeDestinationPath`, `normalizeSource`, `prepared.download`, `record3`, `resolveConnectorConnectionName`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `11ac998fa0a47a5d62f1ed7feaea81000628a978542761067d841349dde221b3`.

### evaluation:573089

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `deps.getAgentId`, `deps.listConnections`, `deps.prepareDownload`, `deps.reviewDownload`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeDownloadFileOutcome`, `failedFileTransferResult`, `invariant`, `normalizeDestinationPath`, `normalizeSource`, `prepared.download`, `record4`, `resolveConnectorConnectionName`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `630a21ce170ea0a60aa436fea786e9c1ae0b3db2fc03938b7ac4e431ea0dbe4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
