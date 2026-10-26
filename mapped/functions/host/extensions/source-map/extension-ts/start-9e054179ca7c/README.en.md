# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/source-map/extension.ts` · [Module README](../../../../../../modules/host/extensions/source-map/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728830-728839](../../../../../../../reference/runtime/host-main.cjs#L728830-L728839) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728830-728839](../../../../../../../reference/runtime/host-main.cjs#L728830-L728839) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728830 uses an implicit arrow-function return.

### host:728830

Calls written directly in this body: `createSandDurableFileOwner`, `new SandSourceMap`.

SHA-256 of the source span: `a4fa61f97a7911891b7b611ab7845570f1831af32c619ef7824c037f864fcbdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
