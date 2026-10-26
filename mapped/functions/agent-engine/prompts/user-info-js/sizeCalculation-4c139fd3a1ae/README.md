# `sizeCalculation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640625-640625](../../../../../../reference/runtime/host-main.cjs#L640625-L640625) | `ArrowFunctionExpression` | não | `_value, content` |
| [evaluation:431239-431239](../../../../../../reference/runtime/sand-eval-runner.cjs#L431239-L431239) | `ArrowFunctionExpression` | não | `_value, content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640625-640625](../../../../../../reference/runtime/host-main.cjs#L640625-L640625) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:640625 usa retorno implícito de arrow function.
| [evaluation:431239-431239](../../../../../../reference/runtime/sand-eval-runner.cjs#L431239-L431239) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:431239 usa retorno implícito de arrow function.

### host:640625

Chamadas escritas diretamente neste corpo: `Math.max`.

SHA-256 do trecho: `2b50de4c545828eb26ab58d40744ac0f9c825366d0e84d8c45211c6fa32535d1`.

### evaluation:431239

Chamadas escritas diretamente neste corpo: `Math.max`.

SHA-256 do trecho: `2b50de4c545828eb26ab58d40744ac0f9c825366d0e84d8c45211c6fa32535d1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
