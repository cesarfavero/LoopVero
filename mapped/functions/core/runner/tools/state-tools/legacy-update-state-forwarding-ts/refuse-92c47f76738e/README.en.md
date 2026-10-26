# `refuse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555722-555728](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555722-L555728) | `FunctionDeclaration` | no | `ctx, legacyName, target, reason, problem` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555722-555728](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555722-L555728) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555722

Calls written directly in this body: `legacyUpdateStateForwarded.refused`, `new ShimCall`, `new ToolCallArgParseError`, `shims.flush`, `shims.report`.

SHA-256 of the source span: `f35f5e795963b79b0cf27f1c7edbb885da8603bfb252820d799cc85ef856a722`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
