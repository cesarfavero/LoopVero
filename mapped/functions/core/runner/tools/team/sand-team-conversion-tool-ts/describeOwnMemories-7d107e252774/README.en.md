# `describeOwnMemories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781503-781517](../../../../../../../../reference/runtime/host-main.cjs#L781503-L781517) | `FunctionDeclaration` | no | `preview` |
| [evaluation:581850-581864](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581850-L581864) | `FunctionDeclaration` | no | `preview` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781503-781517](../../../../../../../../reference/runtime/host-main.cjs#L781503-L781517) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:581850-581864](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581850-L581864) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:781503

Calls written directly in this body: `.join`, `carried.map`.

SHA-256 of the source span: `4127a54b5f615bc01703f12ade16321c422ebb1882a4a85e8414ee29cea1587d`.

### evaluation:581850

Calls written directly in this body: `.join`, `carried.map`.

SHA-256 of the source span: `4127a54b5f615bc01703f12ade16321c422ebb1882a4a85e8414ee29cea1587d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
