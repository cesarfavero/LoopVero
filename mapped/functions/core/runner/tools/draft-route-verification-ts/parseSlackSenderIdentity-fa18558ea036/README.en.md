# `parseSlackSenderIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735171-735180](../../../../../../../reference/runtime/host-main.cjs#L735171-L735180) | `FunctionDeclaration` | no | `authedProfileText` |
| [evaluation:540745-540754](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540745-L540754) | `FunctionDeclaration` | no | `authedProfileText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735171-735180](../../../../../../../reference/runtime/host-main.cjs#L735171-L735180) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540745-540754](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540745-L540754) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:735171

Calls written directly in this body: `.toLowerCase`, `parseAuthedWorkspace`, `slackProfileField`, `slackProfileSelfNames`.

SHA-256 of the source span: `1d79f95a2b7dfe718194e09ad14b7ad5e4e6e0f7fe0bdcbc032a0050ac8a7826`.

### evaluation:540745

Calls written directly in this body: `.toLowerCase`, `parseAuthedWorkspace`, `slackProfileField`, `slackProfileSelfNames`.

SHA-256 of the source span: `1d79f95a2b7dfe718194e09ad14b7ad5e4e6e0f7fe0bdcbc032a0050ac8a7826`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
