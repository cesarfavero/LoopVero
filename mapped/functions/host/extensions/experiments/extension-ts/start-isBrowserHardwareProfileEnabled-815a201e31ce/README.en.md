# `start/isBrowserHardwareProfileEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/experiments/extension.ts` · [Module README](../../../../../../modules/host/extensions/experiments/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553597-553597](../../../../../../../reference/runtime/host-main.cjs#L553597-L553597) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553597-553597](../../../../../../../reference/runtime/host-main.cjs#L553597-L553597) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:553597 uses an implicit arrow-function return.

### host:553597

Calls written directly in this body: `service.checkFeatureGate`.

SHA-256 of the source span: `d384ebfc696a056bcf7bc0cf99cf78c08cd80b3347651ed32211de8c617fd5fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
