# `boundSandAutomationCompletion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/ports/automation-completions.ts` · [README do módulo](../../../../../modules/core/ports/automation-completions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716997-717014](../../../../../../reference/runtime/host-main.cjs#L716997-L717014) | `FunctionDeclaration` | não | `completion` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716997-717014](../../../../../../reference/runtime/host-main.cjs#L716997-L717014) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:716997

Chamadas escritas diretamente neste corpo: `attribution.slice`, `completion.attribution.trim`, `completion.id.startsWith`, `completion.text.trim`, `isSandAutomationHandoffId`, `isSandPeerInboxMessageId`, `truncateWithMarker`.

SHA-256 do trecho: `2ffab0bb78ade4a62576aaf34953debf38056ea362170a21c0ed3f909e34c06f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
