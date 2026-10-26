# `createServerTranscriptClient/requireAccess`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-client.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:712403-712409](../../../../../../../reference/runtime/host-main.cjs#L712403-L712409) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712403-712409](../../../../../../../reference/runtime/host-main.cjs#L712403-L712409) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:712403

Chamadas escritas diretamente neste corpo: `new ServerTranscriptTailDisabledError`, `resolveAccess`.

Alvos de lançamento explícito: `ServerTranscriptTailDisabledError`.

SHA-256 do trecho: `27a0ed477a2298a25648061945ea490952f025310180edab06b30b4a001941d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
