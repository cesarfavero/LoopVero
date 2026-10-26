# `SandSubagentHostAdapter.runDetachedSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583111-583183](../../../../../../reference/runtime/sand-eval-runner.cjs#L583111-L583183) | `method` | sim | `ctx, agentId, args, forkedContext, detached` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583111-583183](../../../../../../reference/runtime/sand-eval-runner.cjs#L583111-L583183) | 12 | 0 | 2 | 4 | 0 | 1 |

### evaluation:583111

Chamadas escritas diretamente neste corpo: `.flatMap`, `.map`, `String`, `definedProvenance`, `deriveSandRequestLineage`, `detached.dispatch`, `isMediaReviewSubagentType`, `new Set`, `originatingFlowOf`, `recordDelegationDispatched`, `resolveSandSubagentModelId`, `this.dispatcher.getCombinedComputerUseDecision`, `this.executorProfileNames`, `this.reviewLaunchOrDeny`, `this.sessionEventSequence`, `this.subagentTask`.

Alvos de atribuição ou incremento: `handedOver`.

SHA-256 do trecho: `654c504db4af476865dfde19fdc72b8280ffec6ff948462a9e49dfe6a6f4acfb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
