# `gateOnPlaywrightCurrentTab`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727458-727510](../../../../../../../reference/runtime/host-main.cjs#L727458-L727510) | `FunctionDeclaration` | yes | `ctx, runner, consentedHost, currentTab` |
| [evaluation:561913-561965](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561913-L561965) | `FunctionDeclaration` | yes | `ctx, runner, consentedHost, currentTab` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727458-727510](../../../../../../../reference/runtime/host-main.cjs#L727458-L727510) | 20 | 1 | 3 | 13 | 0 | 1 |
| [evaluation:561913-561965](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561913-L561965) | 20 | 1 | 3 | 13 | 0 | 1 |

### host:727458

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `exact.push`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `listedTab`, `preferredListedIndex`, `runner.run`, `sameDocument.push`, `urlWithoutFragment`.

Assignment or increment targets: `driverCurrentIndex`, `entries`.

SHA-256 of the source span: `c75d15eb46f514da9563517eb8f384fd3f693238ce5f9270b00db4626e0eecdb`.

### evaluation:561913

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `exact.push`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `listedTab`, `preferredListedIndex`, `runner.run`, `sameDocument.push`, `urlWithoutFragment`.

Assignment or increment targets: `driverCurrentIndex`, `entries`.

SHA-256 of the source span: `c75d15eb46f514da9563517eb8f384fd3f693238ce5f9270b00db4626e0eecdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
