# `SandInferenceCredentialRenewer.waitFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/credential-renewer.ts` · [Module README](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454313-454350](../../../../../../../reference/runtime/host-main.cjs#L454313-L454350) | `method` | yes | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454313-454350](../../../../../../../reference/runtime/host-main.cjs#L454313-L454350) | 5 | 0 | 2 | 3 | 0 | 1 |

### host:454313

Calls written directly in this body: `console.warn`, `errorLogTag`, `new Promise`, `this.options.retry.schedule`.

Assignment or increment targets: `this.interruptWait`.

SHA-256 of the source span: `751b285462ea1dc56d749300fffdf58ac778bbf515eeb5477c13b4828ec31cad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
