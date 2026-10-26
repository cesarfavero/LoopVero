# `readBlobBodies`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714405-714417](../../../../../../../reference/runtime/host-main.cjs#L714405-L714417) | `FunctionDeclaration` | sim | `client, listed, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714405-714417](../../../../../../../reference/runtime/host-main.cjs#L714405-L714417) | 3 | 1 | 1 | 2 | 1 | 0 |

### host:714405

Chamadas escritas diretamente neste corpo: `.filter`, `client.readBlobs`, `hashes.add`, `new Map`, `new ServerTranscriptBlobReadError`, `new Set`.

Alvos de lançamento explícito: `ServerTranscriptBlobReadError`.

SHA-256 do trecho: `d6942c6febaf529459052024ac3334c9f311b0f0961091478b41e0a8242e01c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
