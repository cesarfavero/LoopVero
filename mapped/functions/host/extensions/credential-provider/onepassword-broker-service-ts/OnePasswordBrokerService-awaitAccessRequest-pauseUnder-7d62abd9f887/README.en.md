# `OnePasswordBrokerService.awaitAccessRequest/pauseUnder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550991-551008](../../../../../../../reference/runtime/host-main.cjs#L550991-L551008) | `ArrowFunctionExpression` | yes | `policy, attempt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550991-551008](../../../../../../../reference/runtime/host-main.cjs#L550991-L551008) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:550991

Calls written directly in this body: `errorLogTag`, `pause.dispose`, `policy.schedule`, `this.now`, `this.options.log`.

Assignment or increment targets: `pause`.

SHA-256 of the source span: `0ed7349f51a4dd7b3f1781da4d5c4cbc5c007f6d207ae75659b8d10b5313c438`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
