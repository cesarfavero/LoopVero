# `parsedInputSchemaJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486919-486928](../../../../../../../reference/runtime/host-main.cjs#L486919-L486928) | `FunctionDeclaration` | não | `json3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486919-486928](../../../../../../../reference/runtime/host-main.cjs#L486919-L486928) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:486919

Chamadas escritas diretamente neste corpo: `JSON.parse`.

Alvos de atribuição ou incremento: `schema3`.

SHA-256 do trecho: `ebe1368471c3ee1b35744e7de065e3e9d6b6e5b2ce1305ffb80c4de0fac57b0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
