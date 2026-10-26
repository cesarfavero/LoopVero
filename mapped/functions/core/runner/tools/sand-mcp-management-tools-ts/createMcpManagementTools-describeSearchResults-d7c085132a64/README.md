# `createMcpManagementTools/describeSearchResults`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780204-780214](../../../../../../../reference/runtime/host-main.cjs#L780204-L780214) | `ArrowFunctionExpression` | sim | `query2, plugins, deps` |
| [evaluation:580449-580459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580449-L580459) | `ArrowFunctionExpression` | sim | `query2, plugins, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780204-780214](../../../../../../../reference/runtime/host-main.cjs#L780204-L780214) | 5 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580449-580459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580449-L580459) | 5 | 0 | 1 | 2 | 0 | 0 |

### host:780204

Chamadas escritas diretamente neste corpo: `.join`, `copy.searchEmptyWithQuery`, `plugins.map`, `plugins.some`, `readMcpInstalledListing`.

SHA-256 do trecho: `54daaa2fcf99cff23677ea004a903688b5eb474e8e4a8ee24d98819606d0d014`.

### evaluation:580449

Chamadas escritas diretamente neste corpo: `.join`, `copy.searchEmptyWithQuery`, `plugins.map`, `plugins.some`, `readMcpInstalledListing`.

SHA-256 do trecho: `54daaa2fcf99cff23677ea004a903688b5eb474e8e4a8ee24d98819606d0d014`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
