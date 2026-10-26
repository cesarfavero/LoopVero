# `getAccessTokenExpiryMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-token.ts` · [README do módulo](../../../../../modules/shared/node/cursor-token-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175740-175743](../../../../../../reference/runtime/host-main.cjs#L175740-L175743) | `FunctionDeclaration` | não | `token` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175740-175743](../../../../../../reference/runtime/host-main.cjs#L175740-L175743) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:175740

Chamadas escritas diretamente neste corpo: `parseJwtPayload`.

SHA-256 do trecho: `5390a04896312da9a9b9c8bf50325b5d1b49afde3610268a40dacae78e2b8eb9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
