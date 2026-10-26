# `messageSubagentParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780906-780913](../../../../../../../reference/runtime/host-main.cjs#L780906-L780913) | `ArrowFunctionExpression` | não | `toolName` |
| [evaluation:581253-581260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581253-L581260) | `ArrowFunctionExpression` | não | `toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780906-780913](../../../../../../../reference/runtime/host-main.cjs#L780906-L780913) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:780906 usa retorno implícito de arrow function.
| [evaluation:581253-581260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581253-L581260) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581253 usa retorno implícito de arrow function.

### host:780906

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.trim`, `external_exports2.object`, `external_exports2.string`.

SHA-256 do trecho: `e9311cd8c9a029ff1ce8993c9f00fe9c0d8c89d87f7cb84f38a3b5dbc5361096`.

### evaluation:581253

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.trim`, `external_exports3.object`, `external_exports3.string`.

SHA-256 do trecho: `79b682bb2ad2fb331489f61534fab570d672859ef463c18402111bdd86215ed2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
