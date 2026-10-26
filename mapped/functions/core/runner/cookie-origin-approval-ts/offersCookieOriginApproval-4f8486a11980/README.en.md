# `offersCookieOriginApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775075-775077](../../../../../../reference/runtime/host-main.cjs#L775075-L775077) | `FunctionDeclaration` | no | `host` |
| [evaluation:574722-574724](../../../../../../reference/runtime/sand-eval-runner.cjs#L574722-L574724) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775075-775077](../../../../../../reference/runtime/host-main.cjs#L775075-L775077) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574722-574724](../../../../../../reference/runtime/sand-eval-runner.cjs#L574722-L574724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775075

Calls written directly in this body: `host.gates.agentPromptedCookieSync`, `offersShellUserComputer`.

SHA-256 of the source span: `e241465e72fd529439b6dfa3a023f5dea5159a4e878dd3a668e069abbabc660f`.

### evaluation:574722

Calls written directly in this body: `host.gates.agentPromptedCookieSync`, `offersShellUserComputer`.

SHA-256 of the source span: `e241465e72fd529439b6dfa3a023f5dea5159a4e878dd3a668e069abbabc660f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
