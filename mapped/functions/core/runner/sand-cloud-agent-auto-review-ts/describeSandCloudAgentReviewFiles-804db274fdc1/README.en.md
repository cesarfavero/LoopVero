# `describeSandCloudAgentReviewFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-cloud-agent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775732-775741](../../../../../../reference/runtime/host-main.cjs#L775732-L775741) | `FunctionDeclaration` | no | `files` |
| [evaluation:575375-575384](../../../../../../reference/runtime/sand-eval-runner.cjs#L575375-L575384) | `FunctionDeclaration` | no | `files` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775732-775741](../../../../../../reference/runtime/host-main.cjs#L775732-L775741) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575375-575384](../../../../../../reference/runtime/sand-eval-runner.cjs#L575375-L575384) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775732

Calls written directly in this body: `files.map`.

SHA-256 of the source span: `05745453521f2584a4e8c19c3f00f3586f4e70a4a820d89b001a330ab18433e8`.

### evaluation:575375

Calls written directly in this body: `files.map`.

SHA-256 of the source span: `f655760f4a03dd012b49df24e84fcd49f2429965e4248a58bb3f47ab69da6d17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
