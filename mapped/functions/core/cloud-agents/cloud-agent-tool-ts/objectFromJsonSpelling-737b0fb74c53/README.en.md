# `objectFromJsonSpelling`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770187-770197](../../../../../../reference/runtime/host-main.cjs#L770187-L770197) | `FunctionDeclaration` | no | `value` |
| [evaluation:567783-567793](../../../../../../reference/runtime/sand-eval-runner.cjs#L567783-L567793) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770187-770197](../../../../../../reference/runtime/host-main.cjs#L770187-L770197) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:567783-567793](../../../../../../reference/runtime/sand-eval-runner.cjs#L567783-L567793) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:770187

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `90fd44a7735924eff55272ba90215baa0ebe0386cf1a73346b3cc33ee44fe749`.

### evaluation:567783

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `00d35d2a770c739ca3eb1722154b57abcd90a1e351de322d8b18bc71d4537943`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
