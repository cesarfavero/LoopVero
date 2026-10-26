# `selectTabOnConsentedHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727322-727351](../../../../../../../reference/runtime/host-main.cjs#L727322-L727351) | `FunctionDeclaration` | yes | `ctx, runner, consentedHost` |
| [evaluation:561828-561857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561828-L561857) | `FunctionDeclaration` | yes | `ctx, runner, consentedHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727322-727351](../../../../../../../reference/runtime/host-main.cjs#L727322-L727351) | 9 | 1 | 2 | 5 | 0 | 1 |
| [evaluation:561828-561857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561828-L561857) | 9 | 1 | 2 | 5 | 0 | 1 |

### host:727322

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `runner.run`.

Assignment or increment targets: `driverDied`, `entries`.

SHA-256 of the source span: `0eff3553ebb846c5cd630ea23a0f5de39be269c6ecefd2a42e6e63b4ccb55a52`.

### evaluation:561828

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `runner.run`.

Assignment or increment targets: `driverDied`, `entries`.

SHA-256 of the source span: `0eff3553ebb846c5cd630ea23a0f5de39be269c6ecefd2a42e6e63b4ccb55a52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
