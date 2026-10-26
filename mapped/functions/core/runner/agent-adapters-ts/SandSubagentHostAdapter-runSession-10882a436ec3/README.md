# `SandSubagentHostAdapter.runSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583017-583085](../../../../../../reference/runtime/sand-eval-runner.cjs#L583017-L583085) | `method` | sim | `ctx, agentId, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583017-583085](../../../../../../reference/runtime/sand-eval-runner.cjs#L583017-L583085) | 9 | 0 | 2 | 6 | 0 | 1 |

### evaluation:583017

Chamadas escritas diretamente neste corpo: `String`, `args.selectedContext.selectedImages.map`, `deriveSandRequestLineage`, `getSpan2`, `recordDelegationDispatched`, `this.dispatcher.connectorScopeForTurn`, `this.dispatcher.dispatch`, `this.dispatcher.isRunning`, `this.forkedContext`, `this.releaseSession`, `this.reviewLaunchOrDeny`, `this.runDetachedSession`, `this.sessionEventSequence`, `this.sessions.get`.

Alvos de atribuição ou incremento: `selectedImages`.

SHA-256 do trecho: `2f2888c5557854ca4e89998ed205903276e771033a15e89adeea6ff1bbfc10f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
