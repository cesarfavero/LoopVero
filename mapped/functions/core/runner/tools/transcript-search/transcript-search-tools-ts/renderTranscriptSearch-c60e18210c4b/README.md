# `renderTranscriptSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771356-771376](../../../../../../../../reference/runtime/host-main.cjs#L771356-L771376) | `FunctionDeclaration` | não | `args` |
| [evaluation:570590-570610](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570590-L570610) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771356-771376](../../../../../../../../reference/runtime/host-main.cjs#L771356-L771376) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:570590-570610](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570590-L570610) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:771356

Chamadas escritas diretamente neste corpo: `String`, `clip`, `lines2.join`, `lines2.push`.

Alvos de atribuição ou incremento: `budget`, `shown`.

SHA-256 do trecho: `8cae24729bfc7ea985b8002377a6470701a0389c77b7ae33e79beac1cc82ed9d`.

### evaluation:570590

Chamadas escritas diretamente neste corpo: `String`, `clip`, `lines2.join`, `lines2.push`.

Alvos de atribuição ou incremento: `budget`, `shown`.

SHA-256 do trecho: `8cae24729bfc7ea985b8002377a6470701a0389c77b7ae33e79beac1cc82ed9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
