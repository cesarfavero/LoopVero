# `Walker.assignTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750008-750027](../../../../../../../../reference/runtime/host-main.cjs#L750008-L750027) | `method` | no | `target, scope, kind, numeric3` |
| [evaluation:522859-522878](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522859-L522878) | `method` | no | `target, scope, kind, numeric3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750008-750027](../../../../../../../../reference/runtime/host-main.cjs#L750008-L750027) | 10 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:522859-522878](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522859-L522878) | 10 | 0 | 0 | 3 | 0 | 0 |

### host:750008

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `fail2`, `isDataLike`, `scope.lookup`, `staticName`, `this.dataOnly`, `this.expr`.

SHA-256 of the source span: `a7901ea45606887fdea1c48dbc149507a3db1e731b76c59536e5808ebdac5329`.

### evaluation:522859

Calls written directly in this body: `DENIED_PROPERTY_NAMES.has`, `fail`, `isDataLike`, `scope.lookup`, `staticName`, `this.dataOnly`, `this.expr`.

SHA-256 of the source span: `51048372033e49cacedab465635c8fdef437d59c460e78d23aee8a81d6424e06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
