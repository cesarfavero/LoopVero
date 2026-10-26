# `isWeekday`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `shared/auto-review/sand-auto-review-copy-types.ts` · [README do módulo](../../../../../modules/shared/auto-review/sand-auto-review-copy-types-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:694025-694027](../../../../../../reference/runtime/host-main.cjs#L694025-L694027) | `FunctionDeclaration` | não | `day` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694025-694027](../../../../../../reference/runtime/host-main.cjs#L694025-L694027) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694025

Chamadas escritas diretamente neste corpo: `MeetingRepeatValues.isOneOf`.

SHA-256 do trecho: `96c39bf9b1add96b96a867d8f5adfa70a11b9d18a48ad1ab143e4c4ff17cc16f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
