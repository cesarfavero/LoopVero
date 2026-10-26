# `signalOfBwrapExitCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700250-700253](../../../../../../reference/runtime/host-main.cjs#L700250-L700253) | `FunctionDeclaration` | no | `exitCode` |
| [evaluation:514031-514034](../../../../../../reference/runtime/sand-eval-runner.cjs#L514031-L514034) | `FunctionDeclaration` | no | `exitCode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700250-700253](../../../../../../reference/runtime/host-main.cjs#L700250-L700253) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:514031-514034](../../../../../../reference/runtime/sand-eval-runner.cjs#L514031-L514034) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:700250

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `605b3b95aec5abcb7742ecfcbd418ad4f40f20fdef58ed21f8e87e276ce834a9`.

### evaluation:514031

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `605b3b95aec5abcb7742ecfcbd418ad4f40f20fdef58ed21f8e87e276ce834a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
