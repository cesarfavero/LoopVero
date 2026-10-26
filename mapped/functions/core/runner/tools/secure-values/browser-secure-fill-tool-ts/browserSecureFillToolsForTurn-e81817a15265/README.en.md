# `browserSecureFillToolsForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767169-767180](../../../../../../../../reference/runtime/host-main.cjs#L767169-L767180) | `FunctionDeclaration` | no | `args` |
| [evaluation:562688-562699](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562688-L562699) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767169-767180](../../../../../../../../reference/runtime/host-main.cjs#L767169-L767180) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:562688-562699](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562688-L562699) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:767169

Calls written directly in this body: `createBrowserSecureFillTool`, `refusingSecureValues`.

SHA-256 of the source span: `fd6c60baf99b93ffd0c28abfc30031442c4e94af889da5c31f88e79fd6330adc`.

### evaluation:562688

Calls written directly in this body: `createBrowserSecureFillTool`, `refusingSecureValues`.

SHA-256 of the source span: `fd6c60baf99b93ffd0c28abfc30031442c4e94af889da5c31f88e79fd6330adc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
