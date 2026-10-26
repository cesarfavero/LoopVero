# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-timezone/extension.ts` · [Module README](../../../../../../modules/host/extensions/box-timezone/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506491-506504](../../../../../../../reference/runtime/host-main.cjs#L506491-L506504) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506491-506504](../../../../../../../reference/runtime/host-main.cjs#L506491-L506504) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:506491

Calls written directly in this body: `context2.onStop`, `createBoxTimezoneApplier`, `createBoxTimezoneService`, `service.start`.

SHA-256 of the source span: `facf55c1aa231bef42ed88805d4fa9a3e853d2cdb5734b3cb3da310627276fa2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
