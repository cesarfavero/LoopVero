# `parseGatewayByteRange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-byte-range.ts` · [README do módulo](../../../../modules/host/gateway-byte-range-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:488887-488903](../../../../../reference/runtime/host-main.cjs#L488887-L488903) | `FunctionDeclaration` | não | `header, totalSize` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:488887-488903](../../../../../reference/runtime/host-main.cjs#L488887-L488903) | 8 | 0 | 0 | 7 | 0 | 0 |

### host:488887

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Number`, `SINGLE_BYTE_RANGE.exec`, `header.trim`.

SHA-256 do trecho: `cbeecf3af2d1dafa7e45ceff087ee5485e595da026b8f1fd2430ec696593c297`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
