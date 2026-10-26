# `createTurnDynamicToolRegistry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:569368-569380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569368-L569380) | `FunctionDeclaration` | não | `decisions, {   compactConnectorCatalog,   keepsNativeToolsStatic = false }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569368-569380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569368-L569380) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:569368

Chamadas escritas diretamente neste corpo: `compactConnectorCatalog`, `new DynamicToolRegistry`.

SHA-256 do trecho: `6172d5daa096b8acfb73993365d8c9bbca6bba7839e6a971f7c2cde8e50c21c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
