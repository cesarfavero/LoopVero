# `createConsentedHostBelt/filledOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727377-727379](../../../../../../../reference/runtime/host-main.cjs#L727377-L727379) | `FunctionExpression` | no | `(none)` |
| [evaluation:561883-561885](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561883-L561885) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727377-727379](../../../../../../../reference/runtime/host-main.cjs#L727377-L727379) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561883-561885](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561883-L561885) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:727377

Calls written directly in this body: `URL.parse`.

SHA-256 of the source span: `a5c691d7546510c8f5874e839b119fae9d04abb36032e1a55822484ec57cee4e`.

### evaluation:561883

Calls written directly in this body: `URL.parse`.

SHA-256 of the source span: `a5c691d7546510c8f5874e839b119fae9d04abb36032e1a55822484ec57cee4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
