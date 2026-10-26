# `buildTranscriptJsonl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-transcript-jsonl.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-transcript-jsonl-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509812-509815](../../../../../../reference/runtime/host-main.cjs#L509812-L509815) | `FunctionDeclaration` | não | `conversation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509812-509815](../../../../../../reference/runtime/host-main.cjs#L509812-L509815) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509812

Chamadas escritas diretamente neste corpo: `convertConversationMessagesToTrace`, `trace2.map`, `transcriptJsonlOf`.

SHA-256 do trecho: `9a842c6e1e18d6fa2fbbbff3ef839466fa98bc2520f86ddbf5f3590c80b9657d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
