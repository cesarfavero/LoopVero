# `formatLinkItemPrice`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/link-item-price.ts` · [README do módulo](../../../../../modules/shared/transcript/link-item-price-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741053-741059](../../../../../../reference/runtime/host-main.cjs#L741053-L741059) | `FunctionDeclaration` | não | `price, locale` |
| [evaluation:482000-482006](../../../../../../reference/runtime/sand-eval-runner.cjs#L482000-L482006) | `FunctionDeclaration` | não | `price, locale` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741053-741059](../../../../../../reference/runtime/host-main.cjs#L741053-L741059) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:482000-482006](../../../../../../reference/runtime/sand-eval-runner.cjs#L482000-L482006) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:741053

Chamadas escritas diretamente neste corpo: `.format`, `ISO_4217_CODE.test`, `Number.isFinite`, `new Intl.NumberFormat`.

SHA-256 do trecho: `75aa2a8d1bcbdb2133ba0c84cf9a9799198248ea11a9534d285a5111c6cd7e0b`.

### evaluation:482000

Chamadas escritas diretamente neste corpo: `.format`, `ISO_4217_CODE.test`, `Number.isFinite`, `new Intl.NumberFormat`.

SHA-256 do trecho: `75aa2a8d1bcbdb2133ba0c84cf9a9799198248ea11a9534d285a5111c6cd7e0b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
