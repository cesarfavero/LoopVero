# `_HeicDimensions.selectPrimary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497399-497444](../../../../../../reference/runtime/host-main.cjs#L497399-L497444) | `method` | não | `view` |
| [evaluation:515097-515142](../../../../../../reference/runtime/sand-eval-runner.cjs#L515097-L515142) | `method` | não | `view` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497399-497444](../../../../../../reference/runtime/host-main.cjs#L497399-L497444) | 10 | 1 | 0 | 6 | 0 | 0 |
| [evaluation:515097-515142](../../../../../../reference/runtime/sand-eval-runner.cjs#L515097-L515142) | 10 | 1 | 0 | 6 | 0 | 0 |

### host:497399

Chamadas escritas diretamente neste corpo: `_HeicDimensions.boxes`, `_HeicDimensions.contents`, `_HeicDimensions.find`, `_HeicDimensions.itemPropertyIndices`, `_HeicDimensions.primaryItemId`, `fallback3`, `indexOfFourCharTag`, `mirrorAxisOf`, `view.getUint8`.

Alvos de atribuição ou incremento: `ispeBody`, `mirrorAxis`, `quarterTurns`.

SHA-256 do trecho: `601b93361cab2476d30e59fa7695726a0fe1e5e75f39614e6c3afe177a4e8629`.

### evaluation:515097

Chamadas escritas diretamente neste corpo: `_HeicDimensions.boxes`, `_HeicDimensions.contents`, `_HeicDimensions.find`, `_HeicDimensions.itemPropertyIndices`, `_HeicDimensions.primaryItemId`, `fallback2`, `indexOfFourCharTag`, `mirrorAxisOf`, `view.getUint8`.

Alvos de atribuição ou incremento: `ispeBody`, `mirrorAxis`, `quarterTurns`.

SHA-256 do trecho: `3690718d877356c3979d6b9230b846e7760583431d7048965707bc0ceb4b6580`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
