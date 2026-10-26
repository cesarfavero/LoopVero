# `createRequestBoxHelpTool/execute/<callback>/endTurnOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/box-help-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725338-725342](../../../../../../../reference/runtime/host-main.cjs#L725338-L725342) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:560441-560445](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560441-L560445) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725338-725342](../../../../../../../reference/runtime/host-main.cjs#L725338-L725342) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560441-560445](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560441-L560445) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725338

Chamadas escritas diretamente neste corpo: `d.endTurn`.

Alvos de atribuição ou incremento: `turnEnded`.

SHA-256 do trecho: `99a7a3bf61e35ffd324b2ea473ed75d2a46d8e4efdced5c438989da569736acc`.

### evaluation:560441

Chamadas escritas diretamente neste corpo: `d.endTurn`.

Alvos de atribuição ou incremento: `turnEnded`.

SHA-256 do trecho: `99a7a3bf61e35ffd324b2ea473ed75d2a46d8e4efdced5c438989da569736acc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
