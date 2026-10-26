# `parseSandSpendInitiationEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/spend-initiation.ts` · [README do módulo](../../../../../modules/shared/transcript/spend-initiation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717326-717331](../../../../../../reference/runtime/host-main.cjs#L717326-L717331) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717326-717331](../../../../../../reference/runtime/host-main.cjs#L717326-L717331) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:717326

Chamadas escritas diretamente neste corpo: `entrySchema.safeParse`, `parseAgentId`, `parseJsonOrUndefined`.

SHA-256 do trecho: `c55636402b5a705880577ec893f5104753775fded9a8fb6e3b6ae145014023a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
