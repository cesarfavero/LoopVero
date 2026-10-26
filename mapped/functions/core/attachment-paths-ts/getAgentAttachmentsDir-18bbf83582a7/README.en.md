# `getAgentAttachmentsDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/attachment-paths.ts` · [Module README](../../../../modules/core/attachment-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494814-494816](../../../../../reference/runtime/host-main.cjs#L494814-L494816) | `FunctionDeclaration` | no | `agentDir` |
| [evaluation:530334-530336](../../../../../reference/runtime/sand-eval-runner.cjs#L530334-L530336) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494814-494816](../../../../../reference/runtime/host-main.cjs#L494814-L494816) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530334-530336](../../../../../reference/runtime/sand-eval-runner.cjs#L530334-L530336) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494814

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `01d55508a3c9548a4c23097102781d6343d969eecc624962b9deae3f3432f06d`.

### evaluation:530334

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d9a3687876b3fd3a9952be54021b4fbfc3cc829c1921270960f3a604a3fdeb25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
