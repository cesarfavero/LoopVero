# `start/adoptServerAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714990-714990](../../../../../../../reference/runtime/host-main.cjs#L714990-L714990) | `ArrowFunctionExpression` | no | `wire` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714990-714990](../../../../../../../reference/runtime/host-main.cjs#L714990-L714990) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:714990 uses an implicit arrow-function return.

### host:714990

Calls written directly in this body: `context2.deps[computed].adoptServerAgent`.

SHA-256 of the source span: `e476020af8f7b2ff0458664dea71692dc4b1a54c73bb89b1a8f19e3b3cd59689`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
