# `estimateStringTokenCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/token-estimate.js` · [Module README](../../../../modules/agent-core/token-estimate-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476404-476406](../../../../../reference/runtime/host-main.cjs#L476404-L476406) | `FunctionDeclaration` | no | `str3` |
| [evaluation:255711-255713](../../../../../reference/runtime/sand-eval-runner.cjs#L255711-L255713) | `FunctionDeclaration` | no | `str3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476404-476406](../../../../../reference/runtime/host-main.cjs#L476404-L476406) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255711-255713](../../../../../reference/runtime/sand-eval-runner.cjs#L255711-L255713) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476404

Calls written directly in this body: `Math.round`.

SHA-256 of the source span: `6d90beeb134ba77e21a958797b3bd8140b3f69559d725eb406a1e5e47982839c`.

### evaluation:255711

Calls written directly in this body: `Math.round`.

SHA-256 of the source span: `6d90beeb134ba77e21a958797b3bd8140b3f69559d725eb406a1e5e47982839c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
