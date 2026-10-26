# `gateConsentedHostTab`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727444-727457](../../../../../../../reference/runtime/host-main.cjs#L727444-L727457) | `FunctionDeclaration` | yes | `ctx, runner, consentedHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727444-727457](../../../../../../../reference/runtime/host-main.cjs#L727444-L727457) | 5 | 0 | 2 | 5 | 0 | 0 |

### host:727444

Calls written directly in this body: `hostMatchesConsentedUserFormHost`, `livePageHostOf`, `runner.run`, `selectTabOnConsentedHost`.

SHA-256 of the source span: `7e48c117ba81e90b3a032f39f5a3168b9d209bd10f7b63a09dd895d6f4e57a74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
