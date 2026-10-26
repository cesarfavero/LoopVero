# `createMcpManagementTools/refusedRemoval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780230-780242](../../../../../../../reference/runtime/host-main.cjs#L780230-L780242) | `ArrowFunctionExpression` | não | `ctx, target` |
| [evaluation:580475-580487](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580475-L580487) | `ArrowFunctionExpression` | não | `ctx, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780230-780242](../../../../../../../reference/runtime/host-main.cjs#L780230-L780242) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580475-580487](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580475-L580487) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:780230

Chamadas escritas diretamente neste corpo: `describeRemovalRefusal`, `intent.enforced`, `removalGuardDecisions.increment`, `removalRefusal`.

SHA-256 do trecho: `8edc7d6522b0828d9cfd416be8244d3608cf95e3e770b7d774427a61910ed249`.

### evaluation:580475

Chamadas escritas diretamente neste corpo: `describeRemovalRefusal`, `intent.enforced`, `removalGuardDecisions.increment`, `removalRefusal`.

SHA-256 do trecho: `8edc7d6522b0828d9cfd416be8244d3608cf95e3e770b7d774427a61910ed249`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
