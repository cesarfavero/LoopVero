# `readSpoken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/virtual-mounts/transcripts.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/transcripts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766166-766184](../../../../../../reference/runtime/host-main.cjs#L766166-L766184) | `FunctionDeclaration` | sim | `source, window2` |
| [evaluation:559530-559548](../../../../../../reference/runtime/sand-eval-runner.cjs#L559530-L559548) | `FunctionDeclaration` | sim | `source, window2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766166-766184](../../../../../../reference/runtime/host-main.cjs#L766166-L766184) | 4 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:559530-559548](../../../../../../reference/runtime/sand-eval-runner.cjs#L559530-L559548) | 4 | 0 | 1 | 1 | 0 | 0 |

### host:766166

Chamadas escritas diretamente neste corpo: `clampSandTranscriptMessageLimit`, `page.messages.at`, `renderSandSpokenMessages`, `source.readMessages`.

SHA-256 do trecho: `300612dc7995b5c47dbd17774c93b32c4073356983a9971a1471fbbd19ebdf76`.

### evaluation:559530

Chamadas escritas diretamente neste corpo: `clampSandTranscriptMessageLimit`, `page.messages.at`, `renderSandSpokenMessages`, `source.readMessages`.

SHA-256 do trecho: `300612dc7995b5c47dbd17774c93b32c4073356983a9971a1471fbbd19ebdf76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
