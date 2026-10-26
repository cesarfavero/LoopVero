# `start/load`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/privacy-mode/extension.ts` · [Module README](../../../../../../modules/host/extensions/privacy-mode/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706636-706650](../../../../../../../reference/runtime/host-main.cjs#L706636-L706650) | `ArrowFunctionExpression` | yes | `{ auth: lookupAuth, signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706636-706650](../../../../../../../reference/runtime/host-main.cjs#L706636-L706650) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:706636

Calls written directly in this body: `client.getUserPrivacyMode`, `createSandCursorBackendClient`, `new GetUserPrivacyModeRequest`.

SHA-256 of the source span: `c0937cada53ea7afce9923d17262077322c6d1fd3fd02b65d51c7abf15cd793b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
