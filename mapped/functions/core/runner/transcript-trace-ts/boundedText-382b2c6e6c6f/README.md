# `boundedText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765654-765656](../../../../../../reference/runtime/host-main.cjs#L765654-L765656) | `FunctionDeclaration` | não | `text3` |
| [evaluation:559019-559021](../../../../../../reference/runtime/sand-eval-runner.cjs#L559019-L559021) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765654-765656](../../../../../../reference/runtime/host-main.cjs#L765654-L765656) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559019-559021](../../../../../../reference/runtime/sand-eval-runner.cjs#L559019-L559021) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765654

Chamadas escritas diretamente neste corpo: `truncateMiddle`.

SHA-256 do trecho: `6550c269619f68edb5e1115489795b7a4855a181243038aa1ac36eee1aebb57f`.

### evaluation:559019

Chamadas escritas diretamente neste corpo: `truncateMiddle`.

SHA-256 do trecho: `6550c269619f68edb5e1115489795b7a4855a181243038aa1ac36eee1aebb57f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
