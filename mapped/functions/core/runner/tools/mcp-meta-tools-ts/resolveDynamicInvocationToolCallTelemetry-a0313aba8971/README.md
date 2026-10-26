# `resolveDynamicInvocationToolCallTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554177-554196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554177-L554196) | `FunctionDeclaration` | não | `tool, rawArgs, driveTranslatorToolTags` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554177-554196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554177-L554196) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:554177

Chamadas escritas diretamente neste corpo: `boundedConnectorTag`, `boundedMcpToolName`, `isReservedDynamicToolsNamespace`, `parseDynamicInvocationArgs`, `resolveToolCallIdentity`.

SHA-256 do trecho: `254bbbcf4a5b0225950a504a9c41bc648c984bcc528e7f91150916db433df1f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
