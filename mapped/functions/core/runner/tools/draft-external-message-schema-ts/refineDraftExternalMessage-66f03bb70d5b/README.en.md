# `refineDraftExternalMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755165-755203](../../../../../../../reference/runtime/host-main.cjs#L755165-L755203) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:539790-539828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539790-L539828) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755165-755203](../../../../../../../reference/runtime/host-main.cjs#L755165-L755203) | 14 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:539790-539828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539790-L539828) | 14 | 1 | 0 | 2 | 0 | 0 |

### host:755165

Calls written directly in this body: `ctx.addIssue`, `isFieldProvided2`, `refineEmailBodies`, `refineSlackBody`, `requireAddresses`, `requireField`.

SHA-256 of the source span: `b583cfb4a90a5b73a4d4242230af2ee12d4caa9c80873930228a722fb0b2fbc6`.

### evaluation:539790

Calls written directly in this body: `ctx.addIssue`, `isFieldProvided2`, `refineEmailBodies`, `refineSlackBody`, `requireAddresses`, `requireField`.

SHA-256 of the source span: `42db26d4d770e0202a405435c813011d98925e6704b3ec3b2cfad7523c521458`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
