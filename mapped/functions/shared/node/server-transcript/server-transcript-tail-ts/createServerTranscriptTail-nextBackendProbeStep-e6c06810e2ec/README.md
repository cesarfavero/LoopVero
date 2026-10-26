# `createServerTranscriptTail/nextBackendProbeStep`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713918-713922](../../../../../../../reference/runtime/host-main.cjs#L713918-L713922) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713918-713922](../../../../../../../reference/runtime/host-main.cjs#L713918-L713922) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:713918

Chamadas escritas diretamente neste corpo: `clock.monotonicNow`, `elapsedMs`.

Alvos de atribuição ou incremento: `backendProbeStep`.

SHA-256 do trecho: `fec28aedae5f7f816c8426decd4f388b522e09e780ef01dcfc3d45d3de54a0ab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
