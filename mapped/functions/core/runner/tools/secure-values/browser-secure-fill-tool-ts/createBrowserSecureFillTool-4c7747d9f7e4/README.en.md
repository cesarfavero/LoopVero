# `createBrowserSecureFillTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766819-767141](../../../../../../../../reference/runtime/host-main.cjs#L766819-L767141) | `FunctionDeclaration` | no | `deps` |
| [evaluation:562338-562660](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562338-L562660) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766819-767141](../../../../../../../../reference/runtime/host-main.cjs#L766819-L767141) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562338-562660](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562338-L562660) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:766819

Calls written directly in this body: `defineCommunicateTool`, `new Map`, `new Set`.

SHA-256 of the source span: `94239935b32fe8d2f239e819f0387a8a188fd146e9595cc082abf94b0b7c709f`.

### evaluation:562338

Calls written directly in this body: `defineCommunicateTool`, `new Map`, `new Set`.

SHA-256 of the source span: `94239935b32fe8d2f239e819f0387a8a188fd146e9595cc082abf94b0b7c709f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
