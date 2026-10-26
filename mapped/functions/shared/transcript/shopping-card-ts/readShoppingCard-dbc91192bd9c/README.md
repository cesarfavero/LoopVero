# `readShoppingCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shopping-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shopping-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707696-707724](../../../../../../reference/runtime/host-main.cjs#L707696-L707724) | `FunctionDeclaration` | não | `value, options2 = {}` |
| [evaluation:481818-481846](../../../../../../reference/runtime/sand-eval-runner.cjs#L481818-L481846) | `FunctionDeclaration` | não | `value, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707696-707724](../../../../../../reference/runtime/host-main.cjs#L707696-L707724) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481818-481846](../../../../../../reference/runtime/sand-eval-runner.cjs#L481818-L481846) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:707696

Chamadas escritas diretamente neste corpo: `.flatMap`, `new CardReader`, `reader.compare`, `reader.count`, `reader.list`, `reader.record`.

SHA-256 do trecho: `5536642fa1a6dff657fb83ca6f80bc0ebeb4cf35c5f819857624d62a6e6cda93`.

### evaluation:481818

Chamadas escritas diretamente neste corpo: `.flatMap`, `new CardReader`, `reader.compare`, `reader.count`, `reader.list`, `reader.record`.

SHA-256 do trecho: `5536642fa1a6dff657fb83ca6f80bc0ebeb4cf35c5f819857624d62a6e6cda93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
