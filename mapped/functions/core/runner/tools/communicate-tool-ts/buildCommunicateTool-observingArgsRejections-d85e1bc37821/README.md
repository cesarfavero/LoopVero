# `buildCommunicateTool/observingArgsRejections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725192-725225](../../../../../../../reference/runtime/host-main.cjs#L725192-L725225) | `FunctionDeclaration` | não | `{     onArgsRejected,     schemaVariant,     knownFields   }` |
| [evaluation:480163-480196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480163-L480196) | `FunctionDeclaration` | não | `{     onArgsRejected,     schemaVariant,     knownFields   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725192-725225](../../../../../../../reference/runtime/host-main.cjs#L725192-L725225) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480163-480196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480163-L480196) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725192

Chamadas escritas diretamente neste corpo: `argIssueFolder`.

SHA-256 do trecho: `acd51627feadd4bedd4d8326a8667be421fcf90aa9ae09a22cd6d55581125b59`.

### evaluation:480163

Chamadas escritas diretamente neste corpo: `argIssueFolder`.

SHA-256 do trecho: `4b53e145530613c53c233f3c36f3c98bd7db0fcb01d32bdde07ed08758e08f87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
