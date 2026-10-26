# `unnamedServerIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-tool-call-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693402-693421](../../../../../../reference/runtime/host-main.cjs#L693402-L693421) | `FunctionDeclaration` | não | `server` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693402-693421](../../../../../../reference/runtime/host-main.cjs#L693402-L693421) | 7 | 0 | 0 | 7 | 0 | 1 |

### host:693402

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `.replace`, `MARKETPLACE_PLUGIN_ID.test`, `PACKAGE_LAUNCHERS.get`, `boundedLaunchToken`, `commandBasename`, `new URL`, `packageFromLauncherArgs`.

SHA-256 do trecho: `85b6358a8b39880fa42f6d7e8941bd6a3747702c5d9fcb99750095f6b6755498`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
