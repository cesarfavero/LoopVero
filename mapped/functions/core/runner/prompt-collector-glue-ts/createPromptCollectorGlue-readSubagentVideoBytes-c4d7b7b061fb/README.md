# `createPromptCollectorGlue/readSubagentVideoBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-collector-glue.ts` · [README do módulo](../../../../../modules/core/runner/prompt-collector-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533820-533834](../../../../../../reference/runtime/sand-eval-runner.cjs#L533820-L533834) | `FunctionDeclaration` | sim | `videoPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533820-533834](../../../../../../reference/runtime/sand-eval-runner.cjs#L533820-L533834) | 2 | 0 | 2 | 2 | 1 | 0 |

### evaluation:533820

Chamadas escritas diretamente neste corpo: `boxVideoReadFailureMessage`, `host.readVideoAttachmentBytes`, `host.resolveBoxId`, `new SandVideoAttachmentError`, `readBoxVideoAttachment`.

Alvos de lançamento explícito: `SandVideoAttachmentError`.

SHA-256 do trecho: `7bea023c25abb7059c346e4b4c1bcf709556f8b08a758ec401d0b5b0eea76ada`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
