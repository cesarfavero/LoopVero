# `createServerTranscriptTail/resolveBodies`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713226-713270](../../../../../../../reference/runtime/host-main.cjs#L713226-L713270) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713226-713270](../../../../../../../reference/runtime/host-main.cjs#L713226-L713270) | 12 | 3 | 2 | 1 | 2 | 0 |

### host:713226

Chamadas escritas diretamente neste corpo: `.flatMap`, `blobHashBySeq.set`, `blobHashBySeq.values`, `blobs.get`, `bodies.set`, `deps.client.readBlobs`, `deps.log`, `errorLogTag`, `failures2.find`, `fetchOmittedRows`, `fetched.get`, `fetched.values`, `new Map`, `new Set`, `omitted.push`.

Alvos de lançamento explícito: `failures2[computed]`, `gateOff`.

SHA-256 do trecho: `2e12dc5c1e3af87d1778437e13e65276b6b207ca19cf5c7c656ee07374324b7b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
