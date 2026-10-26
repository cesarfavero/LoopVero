# `requestedTextProbeVerdict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512502-512518](../../../../../../reference/runtime/sand-eval-runner.cjs#L512502-L512518) | `FunctionDeclaration` | no | `target, reported2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512502-512518](../../../../../../reference/runtime/sand-eval-runner.cjs#L512502-L512518) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:512502

Calls written directly in this body: `target.candidates.find`.

SHA-256 of the source span: `b6813abaf106be1f7fabe3f5b4da587b333ffb013566ea218b37b0d63c96ec1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
