# `toRedactedInteractionListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-listener.js` · [Module README](../../../../modules/agent-core/redacted-interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615540-615552](../../../../../reference/runtime/host-main.cjs#L615540-L615552) | `FunctionDeclaration` | no | `delegate, privacyMode` |
| [evaluation:284260-284272](../../../../../reference/runtime/sand-eval-runner.cjs#L284260-L284272) | `FunctionDeclaration` | no | `delegate, privacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615540-615552](../../../../../reference/runtime/host-main.cjs#L615540-L615552) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284260-284272](../../../../../reference/runtime/sand-eval-runner.cjs#L284260-L284272) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:615540

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e5a7ff9e0af64f69dfd3d726af6c454965c1eea39a6108a0050d39498f27c14f`.

### evaluation:284260

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e5a7ff9e0af64f69dfd3d726af6c454965c1eea39a6108a0050d39498f27c14f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
