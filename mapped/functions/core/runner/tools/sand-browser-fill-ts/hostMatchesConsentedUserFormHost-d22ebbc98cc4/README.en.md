# `hostMatchesConsentedUserFormHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727276-727287](../../../../../../../reference/runtime/host-main.cjs#L727276-L727287) | `FunctionDeclaration` | no | `host, consentedHost` |
| [evaluation:561782-561793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561782-L561793) | `FunctionDeclaration` | no | `host, consentedHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727276-727287](../../../../../../../reference/runtime/host-main.cjs#L727276-L727287) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:561782-561793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561782-L561793) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:727276

Calls written directly in this body: `consentedHost.toLowerCase`, `consentedRaw.replace`, `host.toLowerCase`, `isLoopbackUserFormHost`, `liveRaw.replace`.

SHA-256 of the source span: `c85c578bc9efd6b23ac2fd51abc183a1b2d4fff04688296c8390bb8cb7774b62`.

### evaluation:561782

Calls written directly in this body: `consentedHost.toLowerCase`, `consentedRaw.replace`, `host.toLowerCase`, `isLoopbackUserFormHost`, `liveRaw.replace`.

SHA-256 of the source span: `c1d49b1d6c05d75e2a63c706bc18d422a4a1b9cf1f9430be10a8549754c443e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
