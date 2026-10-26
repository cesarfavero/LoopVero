# `createReadTranscriptTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/sand-read-transcript-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766433-766456](../../../../../../../reference/runtime/host-main.cjs#L766433-L766456) | `ArrowFunctionExpression` | sim | `ctx, args, toolDeps` |
| [evaluation:559797-559820](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559797-L559820) | `ArrowFunctionExpression` | sim | `ctx, args, toolDeps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766433-766456](../../../../../../../reference/runtime/host-main.cjs#L766433-L766456) | 5 | 0 | 2 | 3 | 1 | 0 |
| [evaluation:559797-559820](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559797-L559820) | 5 | 0 | 2 | 3 | 1 | 0 |

### host:766433

Chamadas escritas diretamente neste corpo: `aroundArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `presentArguments`, `readWindow`, `renderAroundRead`, `renderRead`, `subagent.review`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.read`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `de76cecaa32b3b4acd23f094e8ce6acb237459882d9420e85d264ce0b62870e3`.

### evaluation:559797

Chamadas escritas diretamente neste corpo: `aroundArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `presentArguments`, `readWindow`, `renderAroundRead`, `renderRead`, `subagent.review`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.read`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `de76cecaa32b3b4acd23f094e8ce6acb237459882d9420e85d264ce0b62870e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
