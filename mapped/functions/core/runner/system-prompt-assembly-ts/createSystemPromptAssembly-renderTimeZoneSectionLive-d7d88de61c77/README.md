# `createSystemPromptAssembly/renderTimeZoneSectionLive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553208-553213](../../../../../../reference/runtime/sand-eval-runner.cjs#L553208-L553213) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553208-553213](../../../../../../reference/runtime/sand-eval-runner.cjs#L553208-L553213) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553208

Chamadas escritas diretamente neste corpo: `deps.isBoxScopedSubagent`, `deps.requestContext.resolve`, `renderSandExecutorLeanTimeZone`, `renderTimeZoneSystemPrompt`.

SHA-256 do trecho: `5a119d20c052b9823e2344762e1f7d1c420c37be8b0f1605468ae6229940a1fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
