# `getMainTranscriptEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/transcript.ts` · [README do módulo](../../../../../modules/shared/transcript/transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485210-485216](../../../../../../reference/runtime/host-main.cjs#L485210-L485216) | `FunctionDeclaration` | não | `entries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485210-485216](../../../../../../reference/runtime/host-main.cjs#L485210-L485216) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:485210

Chamadas escritas diretamente neste corpo: `chat.filter`, `chat.some`, `entries.map`, `getChatTranscriptEntries`, `new Map`.

SHA-256 do trecho: `6f8c5472392159d29bccc0803a77f9c4b180a16e04e6ae40054002cf4399e9f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
