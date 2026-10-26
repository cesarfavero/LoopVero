# `toolCalls2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-shape.ts` · [README do módulo](../../../../../modules/core/runner/turn-shape-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587165-587170](../../../../../../reference/runtime/sand-eval-runner.cjs#L587165-L587170) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587165-587170](../../../../../../reference/runtime/sand-eval-runner.cjs#L587165-L587170) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587165

Chamadas escritas diretamente neste corpo: `message.content.filter`.

SHA-256 do trecho: `30a4e0431528f2964850fb9e5df35d98bbf31932800769557acc81203f1f14cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
