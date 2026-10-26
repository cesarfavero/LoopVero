# `createSearchEmailThreadsTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/search-email-threads-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765216-765225](../../../../../../../reference/runtime/host-main.cjs#L765216-L765225) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558584-558593](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558584-L558593) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765216-765225](../../../../../../../reference/runtime/host-main.cjs#L765216-L765225) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558584-558593](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558584-L558593) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765216

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `1a9aaf56860fe3dde8352501bd1d750317b4e35f5a39f12d094238b0920d6ef6`.

### evaluation:558584

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `1a9aaf56860fe3dde8352501bd1d750317b4e35f5a39f12d094238b0920d6ef6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
