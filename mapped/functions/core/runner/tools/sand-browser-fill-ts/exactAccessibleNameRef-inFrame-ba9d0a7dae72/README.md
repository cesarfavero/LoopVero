# `exactAccessibleNameRef/inFrame`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727079-727079](../../../../../../../reference/runtime/host-main.cjs#L727079-L727079) | `ArrowFunctionExpression` | não | `frameName` |
| [evaluation:561690-561690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561690-L561690) | `ArrowFunctionExpression` | não | `frameName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727079-727079](../../../../../../../reference/runtime/host-main.cjs#L727079-L727079) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:727079 usa retorno implícito de arrow function.
| [evaluation:561690-561690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561690-L561690) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:561690 usa retorno implícito de arrow function.

### host:727079

Chamadas escritas diretamente neste corpo: `frameName.startsWith`.

SHA-256 do trecho: `c63446e96d7d11227ff23c802e0e312a9b664a1b0d71e32460a2cfba09db0795`.

### evaluation:561690

Chamadas escritas diretamente neste corpo: `frameName.startsWith`.

SHA-256 do trecho: `c63446e96d7d11227ff23c802e0e312a9b664a1b0d71e32460a2cfba09db0795`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
