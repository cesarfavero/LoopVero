# `build/sendToAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769159-769165](../../../../../../../../reference/runtime/host-main.cjs#L769159-L769165) | `ArrowFunctionExpression` | não | `toAgentId, text3, images, priority, options2` |
| [evaluation:564806-564812](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564806-L564812) | `ArrowFunctionExpression` | não | `toAgentId, text3, images, priority, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769159-769165](../../../../../../../../reference/runtime/host-main.cjs#L769159-L769165) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:769159 usa retorno implícito de arrow function.
| [evaluation:564806-564812](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564806-L564812) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:564806 usa retorno implícito de arrow function.

### host:769159

Chamadas escritas diretamente neste corpo: `sendToAgent`.

SHA-256 do trecho: `95a767145285ecfb3139980d657a50c17ff731310345e8f33cb7e6dfeca1f793`.

### evaluation:564806

Chamadas escritas diretamente neste corpo: `sendToAgent`.

SHA-256 do trecho: `95a767145285ecfb3139980d657a50c17ff731310345e8f33cb7e6dfeca1f793`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
