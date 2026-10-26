# `isPlaceOpeningHours`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/render-cards.ts` · [README do módulo](../../../../../modules/shared/transcript/render-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707822-707824](../../../../../../reference/runtime/host-main.cjs#L707822-L707824) | `FunctionDeclaration` | não | `value` |
| [evaluation:564309-564311](../../../../../../reference/runtime/sand-eval-runner.cjs#L564309-L564311) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707822-707824](../../../../../../reference/runtime/host-main.cjs#L707822-L707824) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564309-564311](../../../../../../reference/runtime/sand-eval-runner.cjs#L564309-L564311) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707822

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isOptional`, `isUnknownRecord2`, `value.weekdayDescriptions.every`.

SHA-256 do trecho: `b926a6f27a125dcc97eba1f6d580bc0c8af02d342dc18e6b3bba5a09767dab8f`.

### evaluation:564309

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isOptional`, `isUnknownRecord2`, `value.weekdayDescriptions.every`.

SHA-256 do trecho: `b926a6f27a125dcc97eba1f6d580bc0c8af02d342dc18e6b3bba5a09767dab8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
