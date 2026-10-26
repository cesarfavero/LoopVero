# `parseMeetingRepeat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `shared/auto-review/sand-auto-review-copy-types.ts` · [README do módulo](../../../../../modules/shared/auto-review/sand-auto-review-copy-types-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:694028-694049](../../../../../../reference/runtime/host-main.cjs#L694028-L694049) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694028-694049](../../../../../../reference/runtime/host-main.cjs#L694028-L694049) | 9 | 0 | 0 | 4 | 0 | 0 |

### host:694028

Chamadas escritas diretamente neste corpo: `Array.isArray`, `MEETING_REPEAT_TIME.test`, `MeetingRepeatValues.isOneOf`, `MeetingRepeatValues.isTimeZone`, `days.every`, `days.filter`, `isUnknownRecord2`, `isWeekday`, `wholeNumber`.

SHA-256 do trecho: `3370a664cc9555cfff00ef3cf25ae905f0f5ef3951c924b9d4635be951862325`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
