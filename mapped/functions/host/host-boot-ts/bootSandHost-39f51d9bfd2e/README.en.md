# `bootSandHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-boot.ts` · [Module README](../../../../modules/host/host-boot-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493977-493980](../../../../../reference/runtime/host-main.cjs#L493977-L493980) | `FunctionDeclaration` | yes | `runHostMain2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493977-493980](../../../../../reference/runtime/host-main.cjs#L493977-L493980) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:493977

Calls written directly in this body: `activateHostLocale`, `runHostMain2`.

SHA-256 of the source span: `4ed595757ad39810600d3718c7be3be475b9089c3026fda403fa1a868995f15a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
