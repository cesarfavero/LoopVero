# `Walker.dataCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750199-750218](../../../../../../../../reference/runtime/host-main.cjs#L750199-L750218) | `method` | no | `spec, args, scope` |
| [evaluation:523050-523069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523050-L523069) | `method` | no | `spec, args, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750199-750218](../../../../../../../../reference/runtime/host-main.cjs#L750199-L750218) | 8 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:523050-523069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523050-L523069) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:750199

Calls written directly in this body: `arrayOf`, `isDataLike`, `isObjectKind`, `join120`, `this.dataOnly`, `this.plainArgs`.

SHA-256 of the source span: `fcdd21f57630d6ae16eaaccf2cb911ee30cf432cd1ea5a587d9f530ee1869938`.

### evaluation:523050

Calls written directly in this body: `arrayOf2`, `isDataLike`, `isObjectKind`, `join8`, `this.dataOnly`, `this.plainArgs`.

SHA-256 of the source span: `714a304a739d38eb3341d3b697f9cfedcd5a9de40193626b4dc4668e08043277`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
