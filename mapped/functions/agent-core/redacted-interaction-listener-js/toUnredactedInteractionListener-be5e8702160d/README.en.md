# `toUnredactedInteractionListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-listener.js` · [Module README](../../../../modules/agent-core/redacted-interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615527-615539](../../../../../reference/runtime/host-main.cjs#L615527-L615539) | `FunctionDeclaration` | no | `delegate, privacyMode` |
| [evaluation:284247-284259](../../../../../reference/runtime/sand-eval-runner.cjs#L284247-L284259) | `FunctionDeclaration` | no | `delegate, privacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615527-615539](../../../../../reference/runtime/host-main.cjs#L615527-L615539) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284247-284259](../../../../../reference/runtime/sand-eval-runner.cjs#L284247-L284259) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:615527

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1606361cf2c4f49880cf592046b7502ea9cddc5131014bccf7e33d2f9d654a97`.

### evaluation:284247

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1606361cf2c4f49880cf592046b7502ea9cddc5131014bccf7e33d2f9d654a97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
