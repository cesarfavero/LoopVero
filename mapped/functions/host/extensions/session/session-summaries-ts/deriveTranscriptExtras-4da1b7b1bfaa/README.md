# `deriveTranscriptExtras`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `host/extensions/session/session-summaries.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722532-722541](../../../../../../../reference/runtime/host-main.cjs#L722532-L722541) | `FunctionDeclaration` | não | `db, agentId, firstLimit = PREVIEW_TAIL_FIRST_LIMIT` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722532-722541](../../../../../../../reference/runtime/host-main.cjs#L722532-L722541) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:722532

Chamadas escritas diretamente neste corpo: `db.getTranscriptEntries`, `db.getTranscriptTail`, `previewsSettledWithin`, `transcriptExtrasFrom`.

Alvos de atribuição ou incremento: `limit3`.

SHA-256 do trecho: `9fe360cecb94d63426dc4f9832798f0f0ca349c95f58ffc9ba3fb8ce8c0af1b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
