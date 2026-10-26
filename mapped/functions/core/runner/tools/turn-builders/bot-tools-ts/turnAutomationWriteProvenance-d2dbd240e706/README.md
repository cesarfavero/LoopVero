# `turnAutomationWriteProvenance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/bot-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772085-772087](../../../../../../../../reference/runtime/host-main.cjs#L772085-L772087) | `FunctionDeclaration` | não | `host` |
| [evaluation:571318-571320](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571318-L571320) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772085-772087](../../../../../../../../reference/runtime/host-main.cjs#L772085-L772087) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571318-571320](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571318-L571320) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:772085

Chamadas escritas diretamente neste corpo: `host.activeTurnRequestSource`, `host.automationWriteProvenance`, `host.trustsAutomationWrites`, `sandAutomationWriteProvenance`.

SHA-256 do trecho: `17e47336daf7b0326f6556e1969cb37002d0f8b4d1fdd8ba464250b56447b66e`.

### evaluation:571318

Chamadas escritas diretamente neste corpo: `host.activeTurnRequestSource`, `host.automationWriteProvenance`, `host.trustsAutomationWrites`, `sandAutomationWriteProvenance`.

SHA-256 do trecho: `17e47336daf7b0326f6556e1969cb37002d0f8b4d1fdd8ba464250b56447b66e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
