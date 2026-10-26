# `createCarryOverTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-carry-over-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-carry-over-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535794-535794](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535794-L535794) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535794-535794](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535794-L535794) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:535794 usa retorno implícito de arrow function.

### evaluation:535794

Chamadas escritas diretamente neste corpo: `carryOverProposalOf`, `d.onProposal`.

SHA-256 do trecho: `c04cedd1df58f51930565deb3949dfa6d541d6d67eac7669d5184a1ad74254d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
