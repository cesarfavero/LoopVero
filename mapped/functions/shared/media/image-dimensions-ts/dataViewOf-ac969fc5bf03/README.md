# `dataViewOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497278-497280](../../../../../../reference/runtime/host-main.cjs#L497278-L497280) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:514976-514978](../../../../../../reference/runtime/sand-eval-runner.cjs#L514976-L514978) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497278-497280](../../../../../../reference/runtime/host-main.cjs#L497278-L497280) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514976-514978](../../../../../../reference/runtime/sand-eval-runner.cjs#L514976-L514978) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497278

Chamadas escritas diretamente neste corpo: `new DataView`.

SHA-256 do trecho: `c10e171c160c0084e796797d9401890868ee65445bb1eae39425aedaa00350cd`.

### evaluation:514976

Chamadas escritas diretamente neste corpo: `new DataView`.

SHA-256 do trecho: `c10e171c160c0084e796797d9401890868ee65445bb1eae39425aedaa00350cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
