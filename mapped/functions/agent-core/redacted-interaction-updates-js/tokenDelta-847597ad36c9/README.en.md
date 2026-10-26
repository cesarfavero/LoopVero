# `tokenDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615695-615703](../../../../../reference/runtime/host-main.cjs#L615695-L615703) | `FunctionExpression` | no | `privacyMode, tokens` |
| [evaluation:284415-284423](../../../../../reference/runtime/sand-eval-runner.cjs#L284415-L284423) | `FunctionExpression` | no | `privacyMode, tokens` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615695-615703](../../../../../reference/runtime/host-main.cjs#L615695-L615703) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284415-284423](../../../../../reference/runtime/sand-eval-runner.cjs#L284415-L284423) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615695

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `206bd2c400db3ed1c0e35ee4d55c9c539ca5b881104efff23e0f9f6f5d48e14b`.

### evaluation:284415

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `206bd2c400db3ed1c0e35ee4d55c9c539ca5b881104efff23e0f9f6f5d48e14b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
