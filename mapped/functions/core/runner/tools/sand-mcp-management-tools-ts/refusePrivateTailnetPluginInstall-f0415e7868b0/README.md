# `refusePrivateTailnetPluginInstall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780094-780105](../../../../../../../reference/runtime/host-main.cjs#L780094-L780105) | `FunctionDeclaration` | sim | `uninstallPlugin, install` |
| [evaluation:580339-580350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580339-L580350) | `FunctionDeclaration` | sim | `uninstallPlugin, install` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780094-780105](../../../../../../../reference/runtime/host-main.cjs#L780094-L780105) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580339-580350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580339-L580350) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:780094

Chamadas escritas diretamente neste corpo: `privateTailnetPluginRefusedMessage`, `privateTailnetUrlsAdded`, `removePlugin`.

SHA-256 do trecho: `7ead5f6a00a98d70734c8b038c1d4d2666127d47c51e34f64c92dbeea338c383`.

### evaluation:580339

Chamadas escritas diretamente neste corpo: `privateTailnetPluginRefusedMessage`, `privateTailnetUrlsAdded`, `removePlugin`.

SHA-256 do trecho: `7ead5f6a00a98d70734c8b038c1d4d2666127d47c51e34f64c92dbeea338c383`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
