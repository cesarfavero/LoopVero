# `parseFillSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766674-766678](../../../../../../../../reference/runtime/host-main.cjs#L766674-L766678) | `FunctionDeclaration` | no | `raw` |
| [evaluation:562187-562191](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562187-L562191) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766674-766678](../../../../../../../../reference/runtime/host-main.cjs#L766674-L766678) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562187-562191](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562187-L562191) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766674

Calls written directly in this body: `URL.parse`, `parseSecureValueHttpsUrl`.

SHA-256 of the source span: `d5183dc6e8787dfcc42df47ea203e7851e9a68a87470bf25166c85aa18ec5880`.

### evaluation:562187

Calls written directly in this body: `URL.parse`, `parseSecureValueHttpsUrl`.

SHA-256 of the source span: `d5183dc6e8787dfcc42df47ea203e7851e9a68a87470bf25166c85aa18ec5880`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
