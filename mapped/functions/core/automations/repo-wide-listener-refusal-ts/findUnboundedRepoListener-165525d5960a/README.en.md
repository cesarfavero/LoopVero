# `findUnboundedRepoListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/repo-wide-listener-refusal.ts` · [Module README](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762012-762022](../../../../../../reference/runtime/host-main.cjs#L762012-L762022) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:554590-554600](../../../../../../reference/runtime/sand-eval-runner.cjs#L554590-L554600) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762012-762022](../../../../../../reference/runtime/host-main.cjs#L762012-L762022) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:554590-554600](../../../../../../reference/runtime/sand-eval-runner.cjs#L554590-L554600) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:762012

Calls written directly in this body: `events.filter`, `isBoundedListener`, `triggerListeners`.

SHA-256 of the source span: `b960b018b2a21263710b1fdbe8ecf5ea62ebd7bbded27907a3b6da8e3c21871c`.

### evaluation:554590

Calls written directly in this body: `events.filter`, `isBoundedListener`, `triggerListeners`.

SHA-256 of the source span: `64eda7a24e0b7d49b6f909b48703128f0804cca5c258e4e8124cf31e879c73ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
