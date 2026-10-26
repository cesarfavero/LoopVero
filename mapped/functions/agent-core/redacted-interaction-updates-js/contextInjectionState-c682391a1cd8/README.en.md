# `contextInjectionState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615732-615744](../../../../../reference/runtime/host-main.cjs#L615732-L615744) | `FunctionExpression` | no | `privacyMode, injectionId, state` |
| [evaluation:284452-284464](../../../../../reference/runtime/sand-eval-runner.cjs#L284452-L284464) | `FunctionExpression` | no | `privacyMode, injectionId, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615732-615744](../../../../../reference/runtime/host-main.cjs#L615732-L615744) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284452-284464](../../../../../reference/runtime/sand-eval-runner.cjs#L284452-L284464) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615732

Calls written directly in this body: `toRedactedContextInjectionStateValue`.

SHA-256 of the source span: `cffdf22b82e9cb12628b716795a85f279b4f29a58dbd4e44eceefbfe19025db3`.

### evaluation:284452

Calls written directly in this body: `toRedactedContextInjectionStateValue`.

SHA-256 of the source span: `cffdf22b82e9cb12628b716795a85f279b4f29a58dbd4e44eceefbfe19025db3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
