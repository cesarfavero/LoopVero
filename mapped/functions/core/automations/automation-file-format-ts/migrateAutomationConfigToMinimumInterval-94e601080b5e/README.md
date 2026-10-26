# `migrateAutomationConfigToMinimumInterval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716681-716700](../../../../../../reference/runtime/host-main.cjs#L716681-L716700) | `FunctionDeclaration` | não | `config2, minimumIntervalMs` |
| [evaluation:627395-627414](../../../../../../reference/runtime/sand-eval-runner.cjs#L627395-L627414) | `FunctionDeclaration` | não | `config2, minimumIntervalMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716681-716700](../../../../../../reference/runtime/host-main.cjs#L716681-L716700) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627395-627414](../../../../../../reference/runtime/sand-eval-runner.cjs#L627395-L627414) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:716681

Chamadas escritas diretamente neste corpo: `.map`, `config2.pendingNotices.includes`, `triggerFromList`, `triggerList`.

SHA-256 do trecho: `4766e8d4c0bcf41deb3d35fd3bd17739445754d81b3673df5be56ed75d015343`.

### evaluation:627395

Chamadas escritas diretamente neste corpo: `.map`, `config2.pendingNotices.includes`, `triggerFromList`, `triggerList`.

SHA-256 do trecho: `5a6538ffd76b29fc550b38697ff8a339bde1e0aa653613dcde8b057bbaab8350`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
