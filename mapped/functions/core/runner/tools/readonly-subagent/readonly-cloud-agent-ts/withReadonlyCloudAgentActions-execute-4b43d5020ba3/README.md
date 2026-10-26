# `withReadonlyCloudAgentActions/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-cloud-agent.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-cloud-agent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777804-777814](../../../../../../../../reference/runtime/host-main.cjs#L777804-L777814) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:577499-577509](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577499-L577509) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777804-777814](../../../../../../../../reference/runtime/host-main.cjs#L777804-L777814) | 0 | 1 | 1 | 1 | 0 | 0 |
| [evaluation:577499-577509](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577499-L577509) | 0 | 1 | 1 | 1 | 0 | 0 |

### host:777804

Chamadas escritas diretamente neste corpo: `calledAction`, `ctx.with`, `oneShot`, `refuseUnlessRead`, `tool.execute`.

Alvos de atribuição ou incremento: `rawArgs`.

SHA-256 do trecho: `be3ef094f5555aad2f4edf40d32ab74a98bcc7edbef9401474518661d77d595a`.

### evaluation:577499

Chamadas escritas diretamente neste corpo: `calledAction`, `ctx.with`, `oneShot2`, `refuseUnlessRead`, `tool.execute`.

Alvos de atribuição ou incremento: `rawArgs`.

SHA-256 do trecho: `2011bdff2346f13ae7754c2968e1a8c7a9e5d1f4e7e0543112e961ff90af034a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
