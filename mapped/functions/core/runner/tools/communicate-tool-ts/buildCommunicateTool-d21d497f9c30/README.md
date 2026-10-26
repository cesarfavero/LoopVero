# `buildCommunicateTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725125-725259](../../../../../../../reference/runtime/host-main.cjs#L725125-L725259) | `FunctionDeclaration` | não | `deps, spec, schemas` |
| [evaluation:480096-480230](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480096-L480230) | `FunctionDeclaration` | não | `deps, spec, schemas` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725125-725259](../../../../../../../reference/runtime/host-main.cjs#L725125-L725259) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480096-480230](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480096-L480230) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:725125

Chamadas escritas diretamente neste corpo: `createZodAgentTool`, `makeRender`, `observingArgsRejections`, `toolCallWrapper`, `withSafeParsedArgs`.

SHA-256 do trecho: `8cfb7017956016a1e6e839be27230a226abeeeb64a0bcf6caeb8d1631ea0ba5a`.

### evaluation:480096

Chamadas escritas diretamente neste corpo: `createZodAgentTool`, `makeRender`, `observingArgsRejections`, `toolCallWrapper`, `withSafeParsedArgs`.

SHA-256 do trecho: `e4e17068fd3bfaa480b64f43c5009c2703d0264f6dd5abeb53658563debd5cad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
