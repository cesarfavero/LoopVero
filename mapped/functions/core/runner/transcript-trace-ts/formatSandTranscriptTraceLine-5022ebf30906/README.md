# `formatSandTranscriptTraceLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765726-765737](../../../../../../reference/runtime/host-main.cjs#L765726-L765737) | `FunctionDeclaration` | não | `message, options2` |
| [evaluation:559091-559102](../../../../../../reference/runtime/sand-eval-runner.cjs#L559091-L559102) | `FunctionDeclaration` | não | `message, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765726-765737](../../../../../../reference/runtime/host-main.cjs#L765726-L765737) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559091-559102](../../../../../../reference/runtime/sand-eval-runner.cjs#L559091-L559102) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:765726

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `contentParts`, `parts.filter`, `promptMessageSchema.safeParse`.

SHA-256 do trecho: `017500385e757307b6d4e2fbe294a4c42a0b84a55e50057086a5028645ca0fd0`.

### evaluation:559091

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `contentParts`, `parts.filter`, `promptMessageSchema.safeParse`.

SHA-256 do trecho: `4145ac70b350ba4824b728932491aeff6a22e78cfb2f11228dcbda58d00e63d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
