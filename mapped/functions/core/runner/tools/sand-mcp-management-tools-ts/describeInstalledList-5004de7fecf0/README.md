# `describeInstalledList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779768-779776](../../../../../../../reference/runtime/host-main.cjs#L779768-L779776) | `FunctionDeclaration` | não | `servers, signOutNote` |
| [evaluation:580006-580014](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580006-L580014) | `FunctionDeclaration` | não | `servers, signOutNote` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779768-779776](../../../../../../../reference/runtime/host-main.cjs#L779768-L779776) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580006-580014](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580006-L580014) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779768

Chamadas escritas diretamente neste corpo: `.join`, `servers.map`.

SHA-256 do trecho: `d381841e9004da58c71d081992df1dcadf089f7a1f1e2b96deeac6cf26db03b1`.

### evaluation:580006

Chamadas escritas diretamente neste corpo: `.join`, `servers.map`.

SHA-256 do trecho: `d381841e9004da58c71d081992df1dcadf089f7a1f1e2b96deeac6cf26db03b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
