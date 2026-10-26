# `buildSandCloudAgentRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-cloud-agent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775821-775870](../../../../../../reference/runtime/host-main.cjs#L775821-L775870) | `FunctionDeclaration` | no | `args` |
| [evaluation:575464-575513](../../../../../../reference/runtime/sand-eval-runner.cjs#L575464-L575513) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775821-775870](../../../../../../reference/runtime/host-main.cjs#L775821-L775870) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575464-575513](../../../../../../reference/runtime/sand-eval-runner.cjs#L575464-L575513) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775821

Calls written directly in this body: `.map`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `target.images.map`.

SHA-256 of the source span: `1c92cf5834e3dd1f7cf7f831d046e02e961df46c449088f5e4e2a3f901a50007`.

### evaluation:575464

Calls written directly in this body: `.map`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `target.images.map`.

SHA-256 of the source span: `1c92cf5834e3dd1f7cf7f831d046e02e961df46c449088f5e4e2a3f901a50007`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
