# `createUpdateChannelTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-channel-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-channel-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771280-771305](../../../../../../../reference/runtime/host-main.cjs#L771280-L771305) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |
| [evaluation:570514-570539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570514-L570539) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771280-771305](../../../../../../../reference/runtime/host-main.cjs#L771280-L771305) | 5 | 1 | 1 | 5 | 0 | 0 |
| [evaluation:570514-570539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570514-L570539) | 5 | 1 | 1 | 5 | 0 | 0 |

### host:771280

Calls written directly in this body: `.join`, `current2.map`, `m2.members`, `m2.setMembers`, `members2.map`, `new Set`, `next.includes`, `next.push`, `removals.has`.

SHA-256 of the source span: `cbde7552838730aa3fd2922e0c514ce3bbd2cf96ec1111ddedef6e6daf9efdc0`.

### evaluation:570514

Calls written directly in this body: `.join`, `current2.map`, `m2.members`, `m2.setMembers`, `members2.map`, `new Set`, `next.includes`, `next.push`, `removals.has`.

SHA-256 of the source span: `cbde7552838730aa3fd2922e0c514ce3bbd2cf96ec1111ddedef6e6daf9efdc0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
