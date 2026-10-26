# `readSandDataFileSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453758-453761](../../../../../reference/runtime/host-main.cjs#L453758-L453761) | `FunctionDeclaration` | no | `path33` |
| [evaluation:627500-627503](../../../../../reference/runtime/sand-eval-runner.cjs#L627500-L627503) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453758-453761](../../../../../reference/runtime/host-main.cjs#L453758-L453761) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627500-627503](../../../../../reference/runtime/sand-eval-runner.cjs#L627500-L627503) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453758

Calls written directly in this body: `openNoFollowSync2`, `readOpenSandDataFile`, `sandDataNoFollowRoot`.

SHA-256 of the source span: `af543339e8bf100c0e832d45176731adeddd22ed5ffb0cdf50592446138f59b8`.

### evaluation:627500

Calls written directly in this body: `openNoFollowSync`, `readOpenSandDataFile`, `sandDataNoFollowRoot`.

SHA-256 of the source span: `e38df45ba537fb488668430a2b3540d811a3dfe9dfa1c69a24b305fdcf19b8a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
