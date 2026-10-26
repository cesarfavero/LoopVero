# `refineSlackBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755153-755164](../../../../../../../reference/runtime/host-main.cjs#L755153-L755164) | `FunctionDeclaration` | no | `body, ctx` |
| [evaluation:539778-539789](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539778-L539789) | `FunctionDeclaration` | no | `body, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755153-755164](../../../../../../../reference/runtime/host-main.cjs#L755153-L755164) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539778-539789](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539778-L539789) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755153

Calls written directly in this body: `.map`, `SLACK_DRAFT_SYNTAX_PROBLEMS.filter`, `ctx.addIssue`, `fixes.join`, `slackBodyProblems`.

SHA-256 of the source span: `628c2fa83d32d2a036d657673a64f2f872dff69c1fa6bfca1b3df682d850422c`.

### evaluation:539778

Calls written directly in this body: `.map`, `SLACK_DRAFT_SYNTAX_PROBLEMS.filter`, `ctx.addIssue`, `fixes.join`, `slackBodyProblems`.

SHA-256 of the source span: `7f486a437d1e4cff7ad098d8843633d9d2d2d304b8b94d73d5050a234f97203a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
