# `start/isEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/chrome-cookie-import/extension.ts` · [Module README](../../../../../../modules/host/extensions/chrome-cookie-import/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506749-506751](../../../../../../../reference/runtime/host-main.cjs#L506749-L506751) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506749-506751](../../../../../../../reference/runtime/host-main.cjs#L506749-L506751) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:506749 uses an implicit arrow-function return.

### host:506749

Calls written directly in this body: `context2.deps[computed].checkFeatureGate`.

SHA-256 of the source span: `98c805fca148fd21aa2e5cea500dfd9f0fc4fbe3d33112167a212b8ecdd5e503`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
