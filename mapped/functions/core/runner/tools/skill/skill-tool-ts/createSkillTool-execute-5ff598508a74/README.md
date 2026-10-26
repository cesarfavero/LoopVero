# `createSkillTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566095-566095](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566095-L566095) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:566102-566102](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566102-L566102) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566095-566095](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566095-L566095) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:566095 usa retorno implícito de arrow function.
| [evaluation:566102-566102](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566102-L566102) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:566102 usa retorno implícito de arrow function.

### evaluation:566095

Chamadas escritas diretamente neste corpo: `loadSkill`.

SHA-256 do trecho: `b921fe321f8d361cbc9c4b4337cc086c3384a39650e5e653701792bd839b05d3`.

### evaluation:566102

Chamadas escritas diretamente neste corpo: `loadOrSearchSkill`.

SHA-256 do trecho: `7f816cf681d2a966a0efb607bcc77e9d340ab8c5d9274d0b5527e3b1f100b29e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
