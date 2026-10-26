# `removePlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780080-780086](../../../../../../../reference/runtime/host-main.cjs#L780080-L780086) | `FunctionDeclaration` | sim | `uninstallPlugin, pluginId` |
| [evaluation:580325-580331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580325-L580331) | `FunctionDeclaration` | sim | `uninstallPlugin, pluginId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780080-780086](../../../../../../../reference/runtime/host-main.cjs#L780080-L780086) | 1 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:580325-580331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580325-L580331) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:780080

Chamadas escritas diretamente neste corpo: `uninstallPlugin`.

SHA-256 do trecho: `cf9e9a4521ebd4dd65ad156359d7fbec8ae867ef9b00c67763650670d2a2d22b`.

### evaluation:580325

Chamadas escritas diretamente neste corpo: `uninstallPlugin`.

SHA-256 do trecho: `cf9e9a4521ebd4dd65ad156359d7fbec8ae867ef9b00c67763650670d2a2d22b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
