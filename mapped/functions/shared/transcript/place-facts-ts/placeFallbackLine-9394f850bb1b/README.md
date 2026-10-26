# `placeFallbackLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/place-facts.ts` · [README do módulo](../../../../../modules/shared/transcript/place-facts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768757-768766](../../../../../../reference/runtime/host-main.cjs#L768757-L768766) | `FunctionDeclaration` | não | `place` |
| [evaluation:564268-564277](../../../../../../reference/runtime/sand-eval-runner.cjs#L564268-L564277) | `FunctionDeclaration` | não | `place` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768757-768766](../../../../../../reference/runtime/host-main.cjs#L768757-L768766) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564268-564277](../../../../../../reference/runtime/sand-eval-runner.cjs#L564268-L564277) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:768757

Chamadas escritas diretamente neste corpo: `.filter`, `parts.join`, `placeNamePart`, `placePriceText`, `placeStreetOf`, `ratingPart`, `singleLine2`.

SHA-256 do trecho: `7ad86b8eed8ebcae999d4c86fdb2090a9965c9b6deed9408a43aaa72a4b0075a`.

### evaluation:564268

Chamadas escritas diretamente neste corpo: `.filter`, `parts.join`, `placeNamePart`, `placePriceText`, `placeStreetOf`, `ratingPart`, `singleLine2`.

SHA-256 do trecho: `7ad86b8eed8ebcae999d4c86fdb2090a9965c9b6deed9408a43aaa72a4b0075a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
