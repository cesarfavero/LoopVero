# `createVisualizeTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/visualize/visualize-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768570-768623](../../../../../../../../reference/runtime/host-main.cjs#L768570-L768623) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:564085-564138](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564085-L564138) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768570-768623](../../../../../../../../reference/runtime/host-main.cjs#L768570-L768623) | 17 | 0 | 3 | 3 | 6 | 0 |
| [evaluation:564085-564138](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564085-L564138) | 17 | 0 | 3 | 3 | 6 | 0 |

### host:768570

Chamadas escritas diretamente neste corpo: `Date.now`, `d.emit`, `d.pages`, `d.revisions`, `d.sendBlockReason`, `describeChannelAddressProblem`, `fragmentProblem`, `new SandToolInputError`, `new SandVisualizationUnavailableError`, `pages.save`, `readFragment`, `revisions.revise`, `visualIdOf`.

Alvos de lançamento explícito: `SandToolInputError`, `SandVisualizationUnavailableError`.

SHA-256 do trecho: `eed9dfb27090244fafafce9c7b4493d2edb04430f2752160bc252e614a36ac1b`.

### evaluation:564085

Chamadas escritas diretamente neste corpo: `Date.now`, `d.emit`, `d.pages`, `d.revisions`, `d.sendBlockReason`, `describeChannelAddressProblem`, `fragmentProblem`, `new SandToolInputError`, `new SandVisualizationUnavailableError`, `pages.save`, `readFragment`, `revisions.revise`, `visualIdOf`.

Alvos de lançamento explícito: `SandToolInputError`, `SandVisualizationUnavailableError`.

SHA-256 do trecho: `22256fb08ea7ea692d14add11f73c49708fa028f42db29bf7a8e95002734de9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
