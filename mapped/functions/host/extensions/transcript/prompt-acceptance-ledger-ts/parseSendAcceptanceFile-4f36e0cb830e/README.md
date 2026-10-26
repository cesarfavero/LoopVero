# `parseSendAcceptanceFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733209-733240](../../../../../../../reference/runtime/host-main.cjs#L733209-L733240) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733209-733240](../../../../../../../reference/runtime/host-main.cjs#L733209-L733240) | 5 | 1 | 0 | 6 | 0 | 1 |

### host:733209

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `coerceGaps`, `coerceRecord`, `records2.push`.

Alvos de atribuição ou incremento: `damaged`, `value`.

SHA-256 do trecho: `486073c82c0c70c8fb8cfca2507eb0d2a65c347b6d2239d75a03c978eb0c31f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
