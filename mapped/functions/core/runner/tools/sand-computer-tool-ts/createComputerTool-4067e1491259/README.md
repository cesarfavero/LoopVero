# `createComputerTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777443-777528](../../../../../../../reference/runtime/host-main.cjs#L777443-L777528) | `FunctionDeclaration` | não | `resourceAccessor, deps` |
| [evaluation:577088-577173](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577088-L577173) | `FunctionDeclaration` | não | `resourceAccessor, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777443-777528](../../../../../../../reference/runtime/host-main.cjs#L777443-L777528) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577088-577173](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577088-L577173) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777443

Chamadas escritas diretamente neste corpo: `buildComputerParameters`, `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 do trecho: `8f039167792951b5b80731ec74a9e5cade2a3102c1625130142c4e77eb43af0b`.

### evaluation:577088

Chamadas escritas diretamente neste corpo: `buildComputerParameters`, `createZodAgentTool`, `new ComputerUseToolCall`, `observeComputerTool`, `withSafeParsedArgs`, `wrapToolCall`.

SHA-256 do trecho: `68459bc3cb0abca9c6469991283866a14a5f0d1738ecbdd03c834780f081ee6d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
