# `buildTranscriptJsonlInSlices`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-transcript-jsonl.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-transcript-jsonl-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509816-509830](../../../../../../reference/runtime/host-main.cjs#L509816-L509830) | `FunctionDeclaration` | sim | `conversation, slicer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509816-509830](../../../../../../reference/runtime/host-main.cjs#L509816-L509830) | 1 | 2 | 1 | 1 | 0 | 0 |

### host:509816

Chamadas escritas diretamente neste corpo: `convertConversationMessagesToTrace`, `lines2.push`, `slicer.shouldYield`, `slicer.yield`, `traceLine`, `transcriptJsonlOf`.

SHA-256 do trecho: `7962f61212fd51368271453fa6dfd013714821829862e0edc42f8ddb876f7b87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
