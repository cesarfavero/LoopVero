# `contentParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765711-765725](../../../../../../reference/runtime/host-main.cjs#L765711-L765725) | `FunctionDeclaration` | não | `message` |
| [evaluation:559076-559090](../../../../../../reference/runtime/sand-eval-runner.cjs#L559076-L559090) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765711-765725](../../../../../../reference/runtime/host-main.cjs#L765711-L765725) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:559076-559090](../../../../../../reference/runtime/sand-eval-runner.cjs#L559076-L559090) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:765711

Chamadas escritas diretamente neste corpo: `boundedText`, `content.trim`, `messagePartSchema.safeParse`, `parts.push`, `tracePartOf`, `userTextOf`.

SHA-256 do trecho: `11a5e1f0285c448c586585d8bc33e4e81e23c9e97b406ea62f6cf4f42ad2f33e`.

### evaluation:559076

Chamadas escritas diretamente neste corpo: `boundedText`, `content.trim`, `messagePartSchema.safeParse`, `parts.push`, `tracePartOf`, `userTextOf`.

SHA-256 do trecho: `6b9ed31d4ba3352a27ffe5268430fceb2d354eccdd3e94778b7e1c53f7ddc6b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
