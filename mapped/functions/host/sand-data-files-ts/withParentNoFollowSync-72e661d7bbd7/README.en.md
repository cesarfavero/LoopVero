# `withParentNoFollowSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453969-453984](../../../../../reference/runtime/host-main.cjs#L453969-L453984) | `FunctionDeclaration` | no | `path33, use` |
| [evaluation:627569-627584](../../../../../reference/runtime/sand-eval-runner.cjs#L627569-L627584) | `FunctionDeclaration` | no | `path33, use` |
| [state-worker:570-585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L570-L585) | `FunctionDeclaration` | no | `path, use` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453969-453984](../../../../../reference/runtime/host-main.cjs#L453969-L453984) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627569-627584](../../../../../reference/runtime/sand-eval-runner.cjs#L627569-L627584) | 0 | 1 | 0 | 1 | 0 | 0 |
| [state-worker:570-585](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L570-L585) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:453969

Calls written directly in this body: `entryOf2`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`, `use`.

Assignment or increment targets: `current2`, `fd`.

SHA-256 of the source span: `17c6432f6dfd9a3cc82df8327e4d14adb1ab69abbc5e5733178d02774ad49e20`.

### evaluation:627569

Calls written directly in this body: `entryOf`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow2`, `use`.

Assignment or increment targets: `current2`, `fd`.

SHA-256 of the source span: `fa5bd482060cd7500650b62f79074e856ea27988ca0de719623a6b4ea096b53e`.

### state-worker:570

Calls written directly in this body: `entryOf`, `openDirectoryRefusingLinks`, `sandDataNoFollowRoot`, `segmentsBelow`, `use`.

Assignment or increment targets: `current`, `fd`.

SHA-256 of the source span: `4f85d8f88bf08d25f76be6933cfa0324904b19797d1dc670c20808e3601d9964`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
