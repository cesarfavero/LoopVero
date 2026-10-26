# `ForeverBoxService.recreate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680289-680306](../../../../../../../reference/runtime/host-main.cjs#L680289-L680306) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680289-680306](../../../../../../../reference/runtime/host-main.cjs#L680289-L680306) | 2 | 0 | 1 | 1 | 2 | 1 |

### host:680289

Calls written directly in this body: `new SandForeverBoxError`, `this.decorateStatus`, `this.requestRecreate`.

Assignment or increment targets: `result`.

Explicit throw targets: `SandForeverBoxError`.

SHA-256 of the source span: `2368ca74c28cfdb5101a8cbf6a7330d6a4a77c67bf78dd7bc8da56ec698feaaf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
