# `describeSandCloudAgentReviewImages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-cloud-agent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775724-775731](../../../../../../reference/runtime/host-main.cjs#L775724-L775731) | `FunctionDeclaration` | no | `urls, images` |
| [evaluation:575367-575374](../../../../../../reference/runtime/sand-eval-runner.cjs#L575367-L575374) | `FunctionDeclaration` | no | `urls, images` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775724-775731](../../../../../../reference/runtime/host-main.cjs#L775724-L775731) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575367-575374](../../../../../../reference/runtime/sand-eval-runner.cjs#L575367-L575374) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775724

Calls written directly in this body: `images.map`.

SHA-256 of the source span: `93aa20090384a8427e750956fdea04106c36511b3872a0fa4a1451c99c959922`.

### evaluation:575367

Calls written directly in this body: `images.map`.

SHA-256 of the source span: `427def590369a4827a24fc3e3880c92df4771b6d702ac7276c81bb4ec5a1a3bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
