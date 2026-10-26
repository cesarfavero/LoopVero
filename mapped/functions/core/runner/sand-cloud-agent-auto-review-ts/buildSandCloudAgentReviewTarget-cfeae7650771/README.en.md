# `buildSandCloudAgentReviewTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-cloud-agent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775742-775820](../../../../../../reference/runtime/host-main.cjs#L775742-L775820) | `FunctionDeclaration` | no | `args, attachments = {}` |
| [evaluation:575385-575463](../../../../../../reference/runtime/sand-eval-runner.cjs#L575385-L575463) | `FunctionDeclaration` | no | `args, attachments = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775742-775820](../../../../../../reference/runtime/host-main.cjs#L775742-L775820) | 27 | 0 | 0 | 11 | 0 | 0 |
| [evaluation:575385-575463](../../../../../../reference/runtime/sand-eval-runner.cjs#L575385-L575463) | 27 | 0 | 0 | 11 | 0 | 0 |

### host:775742

Calls written directly in this body: `args.agent_id.trim`, `args.custom_mode.trim`, `args.prompt.trim`, `args.repo.trim`, `args.repo_name.trim`, `args.repo_url.trim`, `args.title.trim`, `isSandCloudAgentAutoReviewAction`, `normalizeCloudAgentSecretNames`, `normalizedPublishFolder`.

SHA-256 of the source span: `d67355d3155801b6b81bf12473b549a5925bfe43cc9a318dc039888fba8f76b8`.

### evaluation:575385

Calls written directly in this body: `args.agent_id.trim`, `args.custom_mode.trim`, `args.prompt.trim`, `args.repo.trim`, `args.repo_name.trim`, `args.repo_url.trim`, `args.title.trim`, `isSandCloudAgentAutoReviewAction`, `normalizeCloudAgentSecretNames`, `normalizedPublishFolder`.

SHA-256 of the source span: `d67355d3155801b6b81bf12473b549a5925bfe43cc9a318dc039888fba8f76b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
