# `loadInitialTranscriptResiliently`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/host-initial-transcript-load.ts` · [README do módulo](../../../../modules/host/host-initial-transcript-load-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786284-786295](../../../../../reference/runtime/host-main.cjs#L786284-L786295) | `FunctionDeclaration` | sim | `transcript, reportHostLog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786284-786295](../../../../../reference/runtime/host-main.cjs#L786284-L786295) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:786284

Chamadas escritas diretamente neste corpo: `errorLogTag`, `isSqliteBusyError`, `reportHostLog`, `retrySqliteBusy`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `87d8cc7fd3335645fbccdb4b0b2a4e39043fc14bd73f918e770860159a2d9dfd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
