# `SandSessionMaterialization.enqueueMint/chained`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721421-721421](../../../../../../../reference/runtime/host-main.cjs#L721421-L721421) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721421-721421](../../../../../../../reference/runtime/host-main.cjs#L721421-L721421) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:721421 uses an implicit arrow-function return.

### host:721421

Calls written directly in this body: `this.mintInFlight.run`.

SHA-256 of the source span: `79dd03b1371f69fe5ff5eb8cb03c6a18aea7fd86b16e4c071cb013570cb33905`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
