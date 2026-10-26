# `hasDeliveryToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-shape.ts` · [README do módulo](../../../../../modules/core/runner/turn-shape-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587171-587173](../../../../../../reference/runtime/sand-eval-runner.cjs#L587171-L587173) | `FunctionDeclaration` | não | `calls` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587171-587173](../../../../../../reference/runtime/sand-eval-runner.cjs#L587171-L587173) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587171

Chamadas escritas diretamente neste corpo: `calls.some`.

SHA-256 do trecho: `eb1459925237ebced553cde2d7523a9f84d8c2a87d02b435e4fd5f546b250103`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
