# `fencedToolSet`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-spotlight-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-spotlight-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761908-761920](../../../../../../../reference/runtime/host-main.cjs#L761908-L761920) | `FunctionDeclaration` | não | `tools, dynamicToolRegistry` |
| [evaluation:554353-554365](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554353-L554365) | `FunctionDeclaration` | não | `tools, dynamicToolRegistry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761908-761920](../../../../../../../reference/runtime/host-main.cjs#L761908-L761920) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554353-554365](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554353-L554365) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:761908

Chamadas escritas diretamente neste corpo: `ToolSetHandle.fromTools`, `dynamicTools.map`, `partitionDynamicTools`, `staticTools.some`, `tools.map`.

SHA-256 do trecho: `56ce7e2c5e23217ba07b5c4b09a71faf407f2bbbb8d520ed387d723383fed687`.

### evaluation:554353

Chamadas escritas diretamente neste corpo: `ToolSetHandle.fromTools`, `dynamicTools.map`, `partitionDynamicTools`, `staticTools.some`, `tools.map`.

SHA-256 do trecho: `56ce7e2c5e23217ba07b5c4b09a71faf407f2bbbb8d520ed387d723383fed687`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
