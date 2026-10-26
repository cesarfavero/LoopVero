# `searchEmailThreads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/search-email-threads-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765196-765215](../../../../../../../reference/runtime/host-main.cjs#L765196-L765215) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:558564-558583](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558564-L558583) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765196-765215](../../../../../../../reference/runtime/host-main.cjs#L765196-L765215) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:558564-558583](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558564-L558583) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:765196

Calls written directly in this body: `Math.min`, `deps.email.searchThreads`, `new SandToolInputError`, `optionalText`, `parseEmailTimestamp`, `renderEmailThreadSearch`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `16a10866ec5aa1e38d6e39ce2734b05f1fc9959efb221d3c385d0f8cbaebcf6f`.

### evaluation:558564

Calls written directly in this body: `Math.min`, `deps.email.searchThreads`, `new SandToolInputError`, `optionalText`, `parseEmailTimestamp`, `renderEmailThreadSearch`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `16a10866ec5aa1e38d6e39ce2734b05f1fc9959efb221d3c385d0f8cbaebcf6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
