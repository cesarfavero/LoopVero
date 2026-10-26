# `createRequestScmConnectTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-scm-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-scm-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776659-776683](../../../../../../../reference/runtime/host-main.cjs#L776659-L776683) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:576310-576334](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576310-L576334) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776659-776683](../../../../../../../reference/runtime/host-main.cjs#L776659-L776683) | 3 | 0 | 3 | 2 | 0 | 0 |
| [evaluation:576310-576334](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576310-L576334) | 3 | 0 | 3 | 2 | 0 | 0 |

### host:776659

Calls written directly in this body: `Date.now`, `JSON.stringify`, `String`, `armScmConnectWaits`, `cardOffered2.increment`, `d.emitCard`, `describeCardFollowUp`, `resolveCardTaskThread`, `scmConnectCardFromRequest`, `sentCards.add`, `sentCards.has`, `wakeLabel`.

SHA-256 of the source span: `e00190c8962ddf9e69308c55186b24b69759ccdec99299dc49d7cfc3523a996a`.

### evaluation:576310

Calls written directly in this body: `Date.now`, `JSON.stringify`, `String`, `armScmConnectWaits`, `cardOffered2.increment`, `d.emitCard`, `describeCardFollowUp`, `resolveCardTaskThread`, `scmConnectCardFromRequest`, `sentCards.add`, `sentCards.has`, `wakeLabel`.

SHA-256 of the source span: `e00190c8962ddf9e69308c55186b24b69759ccdec99299dc49d7cfc3523a996a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
