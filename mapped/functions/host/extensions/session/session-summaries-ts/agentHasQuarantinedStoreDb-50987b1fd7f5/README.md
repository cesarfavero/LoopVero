# `agentHasQuarantinedStoreDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `host/extensions/session/session-summaries.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722724-722732](../../../../../../../reference/runtime/host-main.cjs#L722724-L722732) | `FunctionDeclaration` | sim | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722724-722732](../../../../../../../reference/runtime/host-main.cjs#L722724-L722732) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:722724

Chamadas escritas diretamente neste corpo: `entries.some`, `reportFallbackUnlessAbsent`.

SHA-256 do trecho: `91035a8f4522193ccc045d8b8453abc5b07d4167078dfba1530135a37ca9df9d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
