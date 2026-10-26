# `createDocumentTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/documents/document-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776466-776483](../../../../../../../../reference/runtime/host-main.cjs#L776466-L776483) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [host:776491-776510](../../../../../../../../reference/runtime/host-main.cjs#L776491-L776510) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [host:776518-776567](../../../../../../../../reference/runtime/host-main.cjs#L776518-L776567) | `ArrowFunctionExpression` | sim | `_ctx, _args, d` |
| [host:776575-776610](../../../../../../../../reference/runtime/host-main.cjs#L776575-L776610) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:576117-576134](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576117-L576134) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:576142-576161](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576142-L576161) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:576169-576218](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576169-L576218) | `ArrowFunctionExpression` | sim | `_ctx, _args, d` |
| [evaluation:576226-576261](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576226-L576261) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776466-776483](../../../../../../../../reference/runtime/host-main.cjs#L776466-L776483) | 4 | 0 | 1 | 3 | 0 | 0 |
| [host:776491-776510](../../../../../../../../reference/runtime/host-main.cjs#L776491-L776510) | 6 | 0 | 1 | 3 | 0 | 0 |
| [host:776518-776567](../../../../../../../../reference/runtime/host-main.cjs#L776518-L776567) | 10 | 2 | 2 | 3 | 0 | 0 |
| [host:776575-776610](../../../../../../../../reference/runtime/host-main.cjs#L776575-L776610) | 6 | 0 | 2 | 7 | 1 | 1 |
| [evaluation:576117-576134](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576117-L576134) | 4 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:576142-576161](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576142-L576161) | 6 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:576169-576218](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576169-L576218) | 10 | 2 | 2 | 3 | 0 | 0 |
| [evaluation:576226-576261](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576226-L576261) | 6 | 0 | 2 | 7 | 1 | 1 |

### host:776466

Chamadas escritas diretamente neste corpo: `.join`, `DOCUMENT_ID_PATTERN.test`, `d.port.write`, `describeFailure`, `documentIdFromTitle`, `sourcePath`, `withTitleHeading`.

SHA-256 do trecho: `a93fa05a482acc08e6099eb0d55d0281f150b4e3dc28e0be159fab02d3157fe2`.

### host:776491

Chamadas escritas diretamente neste corpo: `DOCUMENT_ID_PATTERN.test`, `Promise.all`, `d.port.read`, `describeFailure`, `header.join`, `manifestPath2`, `parseManifest2`, `sourcePath`.

SHA-256 do trecho: `382b07cccfa0a72148fb14d3898b40ae6b5633a4848b87ea01bacc1ffe709df1`.

### host:776518

Chamadas escritas diretamente neste corpo: `Promise.all`, `d.port.list`, `describeFailure`, `documentIdOfEntry`, `ids.map`, `ids.push`, `lines2.join`, `lines2.push`, `rows.slice`, `rows.sort`, `shown.map`.

Alvos de atribuição ou incremento: `pageToken`, `unread`.

SHA-256 do trecho: `145883bf5fcbf8dc431cd232119b0a202e69d8ea19d3e273675eecbc9b26340f`.

### host:776575

Chamadas escritas diretamente neste corpo: `.join`, `.toLowerCase`, `DOCUMENT_ID_PATTERN.test`, `args.name.trim`, `args.path.trim`, `d.port.writeAsset`, `d.readBoxFile`, `describeFailure`, `errorMessage`, `isBoxRootPath`, `resolveBoxWorkspacePath`.

Alvos de atribuição ou incremento: `bytes`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `b92934ae9acd9afed4dd018ae32f75db451c80df9d6414dfb37d1c508d88af96`.

### evaluation:576117

Chamadas escritas diretamente neste corpo: `.join`, `DOCUMENT_ID_PATTERN.test`, `d.port.write`, `describeFailure`, `documentIdFromTitle`, `sourcePath`, `withTitleHeading`.

SHA-256 do trecho: `a93fa05a482acc08e6099eb0d55d0281f150b4e3dc28e0be159fab02d3157fe2`.

### evaluation:576142

Chamadas escritas diretamente neste corpo: `DOCUMENT_ID_PATTERN.test`, `Promise.all`, `d.port.read`, `describeFailure`, `header.join`, `manifestPath`, `parseManifest`, `sourcePath`.

SHA-256 do trecho: `d0da588b06ee1b98273ffdb8373ff0bbc93e32d1be13cfd9870b3e43e0c34479`.

### evaluation:576169

Chamadas escritas diretamente neste corpo: `Promise.all`, `d.port.list`, `describeFailure`, `documentIdOfEntry`, `ids.map`, `ids.push`, `lines2.join`, `lines2.push`, `rows.slice`, `rows.sort`, `shown.map`.

Alvos de atribuição ou incremento: `pageToken`, `unread`.

SHA-256 do trecho: `1bb57c4612a3e3b1d1dc80252a740d1208f89fad0bcb9a8ee40e94dbbc176bf0`.

### evaluation:576226

Chamadas escritas diretamente neste corpo: `.join`, `.toLowerCase`, `DOCUMENT_ID_PATTERN.test`, `args.name.trim`, `args.path.trim`, `d.port.writeAsset`, `d.readBoxFile`, `describeFailure`, `errorMessage2`, `isBoxRootPath`, `resolveBoxWorkspacePath`.

Alvos de atribuição ou incremento: `bytes`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `afcd7b2c151289f0f126919c80ec387bc148516fcd85de29eddb71fb567fd1b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
