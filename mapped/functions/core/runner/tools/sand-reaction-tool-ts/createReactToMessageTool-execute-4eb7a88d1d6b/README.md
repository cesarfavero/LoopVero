# `createReactToMessageTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-reaction-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-reaction-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765589-765604](../../../../../../../reference/runtime/host-main.cjs#L765589-L765604) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:558955-558970](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558955-L558970) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765589-765604](../../../../../../../reference/runtime/host-main.cjs#L765589-L765604) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558955-558970](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558955-L558970) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:765589

Chamadas escritas diretamente neste corpo: `args.emoji.trim`, `args.message_address.trim`, `ctx.get`, `d.completeTurnAfterReaction`, `d.getBlockReason`, `d.react`, `isMessageAddress`.

SHA-256 do trecho: `64142e77acbf4aec14d75accf42676e081030c97c6343cd60c2f2b0bdc883ae3`.

### evaluation:558955

Chamadas escritas diretamente neste corpo: `args.emoji.trim`, `args.message_address.trim`, `ctx.get`, `d.completeTurnAfterReaction`, `d.getBlockReason`, `d.react`, `isMessageAddress`.

SHA-256 do trecho: `64142e77acbf4aec14d75accf42676e081030c97c6343cd60c2f2b0bdc883ae3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
