# `createDocumentTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776466-776483](../../../../../../../../reference/runtime/host-main.cjs#L776466-L776483) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [host:776491-776510](../../../../../../../../reference/runtime/host-main.cjs#L776491-L776510) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [host:776518-776567](../../../../../../../../reference/runtime/host-main.cjs#L776518-L776567) | `ArrowFunctionExpression` | yes | `_ctx, _args, d` |
| [host:776575-776610](../../../../../../../../reference/runtime/host-main.cjs#L776575-L776610) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:576117-576134](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576117-L576134) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:576142-576161](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576142-L576161) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:576169-576218](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576169-L576218) | `ArrowFunctionExpression` | yes | `_ctx, _args, d` |
| [evaluation:576226-576261](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576226-L576261) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
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

Calls written directly in this body: `.join`, `DOCUMENT_ID_PATTERN.test`, `d.port.write`, `describeFailure`, `documentIdFromTitle`, `sourcePath`, `withTitleHeading`.

SHA-256 of the source span: `a93fa05a482acc08e6099eb0d55d0281f150b4e3dc28e0be159fab02d3157fe2`.

### host:776491

Calls written directly in this body: `DOCUMENT_ID_PATTERN.test`, `Promise.all`, `d.port.read`, `describeFailure`, `header.join`, `manifestPath2`, `parseManifest2`, `sourcePath`.

SHA-256 of the source span: `382b07cccfa0a72148fb14d3898b40ae6b5633a4848b87ea01bacc1ffe709df1`.

### host:776518

Calls written directly in this body: `Promise.all`, `d.port.list`, `describeFailure`, `documentIdOfEntry`, `ids.map`, `ids.push`, `lines2.join`, `lines2.push`, `rows.slice`, `rows.sort`, `shown.map`.

Assignment or increment targets: `pageToken`, `unread`.

SHA-256 of the source span: `145883bf5fcbf8dc431cd232119b0a202e69d8ea19d3e273675eecbc9b26340f`.

### host:776575

Calls written directly in this body: `.join`, `.toLowerCase`, `DOCUMENT_ID_PATTERN.test`, `args.name.trim`, `args.path.trim`, `d.port.writeAsset`, `d.readBoxFile`, `describeFailure`, `errorMessage`, `isBoxRootPath`, `resolveBoxWorkspacePath`.

Assignment or increment targets: `bytes`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b92934ae9acd9afed4dd018ae32f75db451c80df9d6414dfb37d1c508d88af96`.

### evaluation:576117

Calls written directly in this body: `.join`, `DOCUMENT_ID_PATTERN.test`, `d.port.write`, `describeFailure`, `documentIdFromTitle`, `sourcePath`, `withTitleHeading`.

SHA-256 of the source span: `a93fa05a482acc08e6099eb0d55d0281f150b4e3dc28e0be159fab02d3157fe2`.

### evaluation:576142

Calls written directly in this body: `DOCUMENT_ID_PATTERN.test`, `Promise.all`, `d.port.read`, `describeFailure`, `header.join`, `manifestPath`, `parseManifest`, `sourcePath`.

SHA-256 of the source span: `d0da588b06ee1b98273ffdb8373ff0bbc93e32d1be13cfd9870b3e43e0c34479`.

### evaluation:576169

Calls written directly in this body: `Promise.all`, `d.port.list`, `describeFailure`, `documentIdOfEntry`, `ids.map`, `ids.push`, `lines2.join`, `lines2.push`, `rows.slice`, `rows.sort`, `shown.map`.

Assignment or increment targets: `pageToken`, `unread`.

SHA-256 of the source span: `1bb57c4612a3e3b1d1dc80252a740d1208f89fad0bcb9a8ee40e94dbbc176bf0`.

### evaluation:576226

Calls written directly in this body: `.join`, `.toLowerCase`, `DOCUMENT_ID_PATTERN.test`, `args.name.trim`, `args.path.trim`, `d.port.writeAsset`, `d.readBoxFile`, `describeFailure`, `errorMessage2`, `isBoxRootPath`, `resolveBoxWorkspacePath`.

Assignment or increment targets: `bytes`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `afcd7b2c151289f0f126919c80ec387bc148516fcd85de29eddb71fb567fd1b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
