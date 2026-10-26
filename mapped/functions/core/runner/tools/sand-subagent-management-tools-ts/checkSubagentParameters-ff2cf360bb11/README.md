# `checkSubagentParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780901-780905](../../../../../../../reference/runtime/host-main.cjs#L780901-L780905) | `ArrowFunctionExpression` | não | `toolName` |
| [evaluation:581248-581252](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581248-L581252) | `ArrowFunctionExpression` | não | `toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780901-780905](../../../../../../../reference/runtime/host-main.cjs#L780901-L780905) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:780901 usa retorno implícito de arrow function.
| [evaluation:581248-581252](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581248-L581252) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581248 usa retorno implícito de arrow function.

### host:780901

Chamadas escritas diretamente neste corpo: `.describe`, `.optional`, `.trim`, `external_exports2.object`, `external_exports2.string`.

SHA-256 do trecho: `209acb4ffc037fdd10be8b2d872b5b72302c4fc312cc1cd8f480ba913f510774`.

### evaluation:581248

Chamadas escritas diretamente neste corpo: `.describe`, `.optional`, `.trim`, `external_exports3.object`, `external_exports3.string`.

SHA-256 do trecho: `961fbec8c68cd31c0aace90acd6407f25f58b9edb7fa327f7bef2965f2b4d7ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
