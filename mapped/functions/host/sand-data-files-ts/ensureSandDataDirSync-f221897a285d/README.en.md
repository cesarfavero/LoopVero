# `ensureSandDataDirSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453839-453862](../../../../../reference/runtime/host-main.cjs#L453839-L453862) | `FunctionDeclaration` | no | `target, mode` |
| [evaluation:627535-627558](../../../../../reference/runtime/sand-eval-runner.cjs#L627535-L627558) | `FunctionDeclaration` | no | `target, mode` |
| [state-worker:492-515](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L492-L515) | `FunctionDeclaration` | no | `target, mode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453839-453862](../../../../../reference/runtime/host-main.cjs#L453839-L453862) | 3 | 1 | 0 | 0 | 1 | 1 |
| [evaluation:627535-627558](../../../../../reference/runtime/sand-eval-runner.cjs#L627535-L627558) | 3 | 1 | 0 | 0 | 1 | 1 |
| [state-worker:492-515](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L492-L515) | 3 | 1 | 0 | 0 | 1 | 1 |

### host:453839

Calls written directly in this body: `entryOf2`, `findSystemErrno`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`.

Assignment or increment targets: `current2`, `fd`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `cfcd976e2dc4a2c253a6322a89dbe0da496d9231133c1f2433568e72039666e4`.

### evaluation:627535

Calls written directly in this body: `entryOf`, `findSystemErrno`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow2`.

Assignment or increment targets: `current2`, `fd`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `26fdb60aa31b8efe687729bd1e128392cf8cf4aa27d1fda3108c79e365a9c548`.

### state-worker:492

Calls written directly in this body: `entryOf`, `findSystemErrno`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`.

Assignment or increment targets: `current`, `fd`.

Explicit throw targets: `error`.

SHA-256 of the source span: `d8b1943cee08b21adf26263174b99d010dcbedcf35dbda3356a3715b715d0b0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
