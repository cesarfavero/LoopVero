# `offersRenderCardKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/render-card-kinds.ts` · [README do módulo](../../../../../../modules/core/runner/cards/render-card-kinds-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768659-768661](../../../../../../../reference/runtime/host-main.cjs#L768659-L768661) | `FunctionDeclaration` | não | `host, kind` |
| [evaluation:564173-564175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564173-L564175) | `FunctionDeclaration` | não | `host, kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768659-768661](../../../../../../../reference/runtime/host-main.cjs#L768659-L768661) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564173-564175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564173-L564175) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768659

Chamadas escritas diretamente neste corpo: `RENDER_CARD_KIND_GATES[computed]`, `cardsReachUser`.

SHA-256 do trecho: `e40765d7ee86335437f95693e639c7e54690f35d16fdebcb39bd9d3de274875e`.

### evaluation:564173

Chamadas escritas diretamente neste corpo: `RENDER_CARD_KIND_GATES[computed]`, `cardsReachUser`.

SHA-256 do trecho: `e40765d7ee86335437f95693e639c7e54690f35d16fdebcb39bd9d3de274875e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
