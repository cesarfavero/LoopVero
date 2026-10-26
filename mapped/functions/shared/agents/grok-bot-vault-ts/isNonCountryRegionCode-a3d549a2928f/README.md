# `isNonCountryRegionCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/grok-bot-vault.ts` · [README do módulo](../../../../../modules/shared/agents/grok-bot-vault-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724352-724354](../../../../../../reference/runtime/host-main.cjs#L724352-L724354) | `FunctionDeclaration` | não | `code` |
| [evaluation:549864-549866](../../../../../../reference/runtime/sand-eval-runner.cjs#L549864-L549866) | `FunctionDeclaration` | não | `code` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724352-724354](../../../../../../reference/runtime/host-main.cjs#L724352-L724354) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549864-549866](../../../../../../reference/runtime/sand-eval-runner.cjs#L549864-L549866) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724352

Chamadas escritas diretamente neste corpo: `NON_COUNTRY_REGION_CODES.has`.

SHA-256 do trecho: `dd03105f90a28bac004d21e79eaf516d99072bb91db08a863d4e2a6dc25947fc`.

### evaluation:549864

Chamadas escritas diretamente neste corpo: `NON_COUNTRY_REGION_CODES.has`.

SHA-256 do trecho: `dd03105f90a28bac004d21e79eaf516d99072bb91db08a863d4e2a6dc25947fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
