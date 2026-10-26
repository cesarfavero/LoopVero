# `sandTranscriptToolInputs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/evals/turn-transcript.ts` · [README do módulo](../../../../../modules/core/evals/turn-transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628394-628402](../../../../../../reference/runtime/sand-eval-runner.cjs#L628394-L628402) | `FunctionDeclaration` | não | `transcripts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628394-628402](../../../../../../reference/runtime/sand-eval-runner.cjs#L628394-L628402) | 1 | 2 | 0 | 1 | 0 | 0 |

### evaluation:628394

Chamadas escritas diretamente neste corpo: `inputs.has`, `inputs.set`, `new Map`, `toolCallParts`, `transcripts.subagents.map`.

SHA-256 do trecho: `afeb8bf7135387b3a3205bbe95e643ea8a61c95c2cdc949bbdf438249fbc7919`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
