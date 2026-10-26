# `buildAttachedFilesNote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532443-532476](../../../../../../reference/runtime/sand-eval-runner.cjs#L532443-L532476) | `FunctionDeclaration` | não | `{   entries,   sizeByPath = /* @__PURE__ */ new Map(),   onAgentBox = false,   inAgentStore = /* @__PURE__ */ new Set(),   subagentToolName = "Task" }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532443-532476](../../../../../../reference/runtime/sand-eval-runner.cjs#L532443-L532476) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:532443

Chamadas escritas diretamente neste corpo: `.join`, `cleaned.flatMap`, `cleaned.map`, `entries.flatMap`, `storeAttachmentsWhere`.

SHA-256 do trecho: `6b16664e13d020c05b298c53b64ceb4bf304ad8856bd6a928758531e117da181`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
