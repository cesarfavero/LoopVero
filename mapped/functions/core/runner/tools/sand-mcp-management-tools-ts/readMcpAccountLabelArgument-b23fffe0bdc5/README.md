# `readMcpAccountLabelArgument`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779893-779895](../../../../../../../reference/runtime/host-main.cjs#L779893-L779895) | `FunctionDeclaration` | não | `rawArgument` |
| [evaluation:580131-580133](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580131-L580133) | `FunctionDeclaration` | não | `rawArgument` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779893-779895](../../../../../../../reference/runtime/host-main.cjs#L779893-L779895) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580131-580133](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580131-L580133) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779893

Chamadas escritas diretamente neste corpo: `decodeMcpAccountLabelArgument`, `normalizeMcpAccountLabel`.

SHA-256 do trecho: `86742ad32ff230539b19cc4810a6db54f896458878ba58df2ddb7548867f5a68`.

### evaluation:580131

Chamadas escritas diretamente neste corpo: `decodeMcpAccountLabelArgument`, `normalizeMcpAccountLabel`.

SHA-256 do trecho: `86742ad32ff230539b19cc4810a6db54f896458878ba58df2ddb7548867f5a68`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
