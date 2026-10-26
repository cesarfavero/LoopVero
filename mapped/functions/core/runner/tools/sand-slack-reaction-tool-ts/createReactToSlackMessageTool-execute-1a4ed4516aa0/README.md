# `createReactToSlackMessageTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-slack-reaction-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-slack-reaction-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768214-768227](../../../../../../../reference/runtime/host-main.cjs#L768214-L768227) | `ArrowFunctionExpression` | sim | `_ctx, args, slack` |
| [evaluation:563730-563743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563730-L563743) | `ArrowFunctionExpression` | sim | `_ctx, args, slack` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768214-768227](../../../../../../../reference/runtime/host-main.cjs#L768214-L768227) | 2 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563730-563743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563730-L563743) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:768214

Chamadas escritas diretamente neste corpo: `args.channel.trim`, `args.emoji.trim`, `args.message_ts.trim`, `new SandToolInputError`, `normalizeSlackEmojiName`, `slack.react`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `d5f4b89fe16ada4ff91c505a2bc4dc0d61e8197a13f4e126093820d34c56e1f5`.

### evaluation:563730

Chamadas escritas diretamente neste corpo: `args.channel.trim`, `args.emoji.trim`, `args.message_ts.trim`, `new SandToolInputError`, `normalizeSlackEmojiName`, `slack.react`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `d5f4b89fe16ada4ff91c505a2bc4dc0d61e8197a13f4e126093820d34c56e1f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
