# `botTemplateShareRefusalReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-bot-share-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771095-771113](../../../../../../../reference/runtime/host-main.cjs#L771095-L771113) | `FunctionDeclaration` | não | `error64` |
| [evaluation:570329-570347](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570329-L570347) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771095-771113](../../../../../../../reference/runtime/host-main.cjs#L771095-L771113) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:570329-570347](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570329-L570347) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:771095

Chamadas escritas diretamente neste corpo: `PUBLIC_SHARING_DISABLED_MARKERS.some`, `String`, `error64.metadata.get`, `message.includes`.

SHA-256 do trecho: `da51eacf7a383cdde09da0ea8ec160dffe5f6f7051edee30df7c8a4a04cb2b1c`.

### evaluation:570329

Chamadas escritas diretamente neste corpo: `PUBLIC_SHARING_DISABLED_MARKERS.some`, `String`, `error63.metadata.get`, `message.includes`.

SHA-256 do trecho: `37073bf3601b8551c6b5974b23fc5f41cfcdc040d2385353546e2b5a0d96019c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
