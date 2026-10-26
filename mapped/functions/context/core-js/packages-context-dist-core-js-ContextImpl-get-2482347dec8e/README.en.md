# `../packages/context/dist/core.js/_ContextImpl.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225309-225317](../../../../../reference/runtime/host-main.cjs#L225309-L225317) | `method` | no | `key` |
| [evaluation:1797-1805](../../../../../reference/runtime/sand-eval-runner.cjs#L1797-L1805) | `method` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225309-225317](../../../../../reference/runtime/host-main.cjs#L225309-L225317) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:1797-1805](../../../../../reference/runtime/sand-eval-runner.cjs#L1797-L1805) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:225309

Calls written directly in this body: `this.parent.get`, `this.values.get`, `this.values.has`.

SHA-256 of the source span: `2bd5781fd173c65c07a9e6ddc9e4c396c320b7282346f8fb971dc36514bc9c52`.

### evaluation:1797

Calls written directly in this body: `this.parent.get`, `this.values.get`, `this.values.has`.

SHA-256 of the source span: `2bd5781fd173c65c07a9e6ddc9e4c396c320b7282346f8fb971dc36514bc9c52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
