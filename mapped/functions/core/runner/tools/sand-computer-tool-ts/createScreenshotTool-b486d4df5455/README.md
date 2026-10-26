# `createScreenshotTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777417-777442](../../../../../../../reference/runtime/host-main.cjs#L777417-L777442) | `FunctionDeclaration` | não | `resourceAccessor, deps` |
| [evaluation:577062-577087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577062-L577087) | `FunctionDeclaration` | não | `resourceAccessor, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777417-777442](../../../../../../../reference/runtime/host-main.cjs#L777417-L777442) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577062-577087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577062-L577087) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777417

Chamadas escritas diretamente neste corpo: `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 do trecho: `178c205c94ca68d3f84ea04da4154c1b29c6ea4ece35cc349dcdfa3708c8917f`.

### evaluation:577062

Chamadas escritas diretamente neste corpo: `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 do trecho: `7a7d556c8af9b76a69b5fbfef16d58ac512f006f30e7eccd7e3f939ef2f20192`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
