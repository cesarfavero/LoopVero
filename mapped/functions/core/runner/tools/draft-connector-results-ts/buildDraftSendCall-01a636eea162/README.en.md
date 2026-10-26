# `buildDraftSendCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732958-732976](../../../../../../../reference/runtime/host-main.cjs#L732958-L732976) | `FunctionDeclaration` | no | `route, payload, verified` |
| [evaluation:540480-540498](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540480-L540498) | `FunctionDeclaration` | no | `route, payload, verified` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732958-732976](../../../../../../../reference/runtime/host-main.cjs#L732958-L732976) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540480-540498](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540480-L540498) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:732958

Calls written directly in this body: `buildEmailSendCall`, `inertDraftText`.

SHA-256 of the source span: `95f0433d6c669500d138e6a93eb428eaacf352f508cac8bc025f52581f78dc8e`.

### evaluation:540480

Calls written directly in this body: `buildEmailSendCall`, `inertDraftText`.

SHA-256 of the source span: `95f0433d6c669500d138e6a93eb428eaacf352f508cac8bc025f52581f78dc8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
