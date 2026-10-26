# `stopSubagentParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780914-780923](../../../../../../../reference/runtime/host-main.cjs#L780914-L780923) | `ArrowFunctionExpression` | não | `toolName` |
| [evaluation:581261-581270](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581261-L581270) | `ArrowFunctionExpression` | não | `toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780914-780923](../../../../../../../reference/runtime/host-main.cjs#L780914-L780923) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:780914 usa retorno implícito de arrow function.
| [evaluation:581261-581270](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581261-L581270) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581261 usa retorno implícito de arrow function.

### host:780914

Chamadas escritas diretamente neste corpo: `.describe`, `.optional`, `.refine`, `.trim`, `external_exports2.boolean`, `external_exports2.object`, `external_exports2.string`.

SHA-256 do trecho: `3c1d5082934acbdd60cd50c794923faad82adfa169c379998c460015ee3c4acf`.

### evaluation:581261

Chamadas escritas diretamente neste corpo: `.describe`, `.optional`, `.refine`, `.trim`, `external_exports3.boolean`, `external_exports3.object`, `external_exports3.string`.

SHA-256 do trecho: `c7f0715dba35b8a2a818c7fd8ee7b6050f8caddd95287a60f64415ef2c0e1d23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
