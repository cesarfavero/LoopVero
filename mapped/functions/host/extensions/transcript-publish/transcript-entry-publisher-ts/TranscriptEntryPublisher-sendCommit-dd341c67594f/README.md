# `TranscriptEntryPublisher.sendCommit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784262-784287](../../../../../../../reference/runtime/host-main.cjs#L784262-L784287) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784262-784287](../../../../../../../reference/runtime/host-main.cjs#L784262-L784287) | 2 | 1 | 2 | 2 | 1 | 0 |

### host:784262

Chamadas escritas diretamente neste corpo: `.map`, `Math.max`, `deletes.filter`, `entries.filter`, `new Set`, `new TranscriptEntryCommitRejectedError`, `result.rejections.map`, `this.deps.commit`.

Alvos de atribuição ou incremento: `writerSeq`.

Alvos de lançamento explícito: `TranscriptEntryCommitRejectedError`.

SHA-256 do trecho: `c39744b8b86ab203f9eacbe2625d5412db2e996bce7797efdec5753c72e4f3f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
