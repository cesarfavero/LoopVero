# `toRedactedContextInjectionStateValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615555-615595](../../../../../reference/runtime/host-main.cjs#L615555-L615595) | `FunctionDeclaration` | no | `privacyMode, state` |
| [evaluation:284275-284315](../../../../../reference/runtime/sand-eval-runner.cjs#L284275-L284315) | `FunctionDeclaration` | no | `privacyMode, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615555-615595](../../../../../reference/runtime/host-main.cjs#L615555-L615595) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:284275-284315](../../../../../reference/runtime/sand-eval-runner.cjs#L284275-L284315) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:615555

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `5cc99c985219a8c41500600d67140fc572c7ea8022f65ffccfeec1e81163e3a7`.

### evaluation:284275

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `5cc99c985219a8c41500600d67140fc572c7ea8022f65ffccfeec1e81163e3a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
