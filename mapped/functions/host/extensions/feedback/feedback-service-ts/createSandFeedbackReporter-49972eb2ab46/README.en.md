# `createSandFeedbackReporter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/feedback/feedback-service.ts` · [Module README](../../../../../../modules/host/extensions/feedback/feedback-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553612-553625](../../../../../../../reference/runtime/host-main.cjs#L553612-L553625) | `FunctionDeclaration` | no | `deps, client = createSandCursorBackendClient(AiService, deps)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553612-553625](../../../../../../../reference/runtime/host-main.cjs#L553612-L553625) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:553612

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `41fcb869123735335daeda353b58d18f66633e2d017961b39e21685d823c26e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
