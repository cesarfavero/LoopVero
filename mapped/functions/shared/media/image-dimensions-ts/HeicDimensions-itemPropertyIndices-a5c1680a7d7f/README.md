# `_HeicDimensions.itemPropertyIndices`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497367-497398](../../../../../../reference/runtime/host-main.cjs#L497367-L497398) | `method` | não | `view, ipma, itemId` |
| [evaluation:515065-515096](../../../../../../reference/runtime/sand-eval-runner.cjs#L515065-L515096) | `method` | não | `view, ipma, itemId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497367-497398](../../../../../../reference/runtime/host-main.cjs#L497367-L497398) | 8 | 2 | 0 | 6 | 0 | 0 |
| [evaluation:515065-515096](../../../../../../reference/runtime/sand-eval-runner.cjs#L515065-L515096) | 8 | 2 | 0 | 6 | 0 | 0 |

### host:497367

Chamadas escritas diretamente neste corpo: `indices.push`, `view.getUint16`, `view.getUint32`, `view.getUint8`.

Alvos de atribuição ou incremento: `association`, `entry`, `offset2`.

SHA-256 do trecho: `7bd5800382e9180914b066cb5f7c48b8c09a73171c5acadbdfc2a7cd2242e227`.

### evaluation:515065

Chamadas escritas diretamente neste corpo: `indices.push`, `view.getUint16`, `view.getUint32`, `view.getUint8`.

Alvos de atribuição ou incremento: `association`, `entry`, `offset2`.

SHA-256 do trecho: `7bd5800382e9180914b066cb5f7c48b8c09a73171c5acadbdfc2a7cd2242e227`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
